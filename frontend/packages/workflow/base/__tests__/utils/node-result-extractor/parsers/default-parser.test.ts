/*
 * Copyright 2025 coze-dev Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { describe, it, expect, vi } from 'vitest';

import { defaultParser } from '../../../../src/utils/node-result-extractor/parsers';
import { StandardNodeType } from '../../../../src/types';
import type { WorkflowJSON } from '../../../../src/types';
import { TerminatePlanType } from '../../../../src/api';
import type { NodeResult } from '../../../../src/api';

// Mock @coze-arch/bot-utils
vi.mock('@coze-arch/bot-utils', () => ({
  typeSafeJSONParse: (str: string) => {
    try {
      const result = JSON.parse(str);
      // If it is batch data, make sure to return an array type
      if (str === 'invalid json') {
        return str;
      }
      // If it is batch data, make sure to return an array type
      if (str.includes('batch')) {
        return Array.isArray(result) ? result : [];
      }
      return result;
    } catch {
      // If it is batch data, return an empty array
      if (str.includes('batch')) {
        return [];
      }
      return str;
    }
  },
}));

// Mock parseImagesFromOutputData
vi.mock('../../../../src/utils/output-image-parser', () => ({
  parseImagesFromOutputData: vi.fn(({ outputData }) => {
    if (typeof outputData === 'string' && outputData.includes('image')) {
      return ['https://example.com/image.png'];
    }
    if (typeof outputData === 'object' && outputData !== null) {
      const str = JSON.stringify(outputData);
      if (str.includes('image')) {
        return ['https://example.com/image.png'];
      }
    }
    return [];
  }),
}));

vi.mock('../../../../src/api', () => ({
  TerminatePlanType: {
    USESETTING: 2,
  },
}));

describe('default-parser', () => {
  const createMockNodeResult = (
    nodeId: string,
    overrides: Partial<NodeResult> = {},
  ): NodeResult => ({
    nodeId,
    isBatch: false,
    input: 'test input',
    output: 'test output',
    raw_output: 'test raw output',
    extra: '{}',
    items: '[]',
    ...overrides,
  });

  const createMockWorkflowSchema = (
    nodeId: string,
    nodeType = StandardNodeType.LLM,
  ): WorkflowJSON => ({
    nodes: [
      {
        id: nodeId,
        type: nodeType,
        data: {},
      },
    ],
    edges: [],
  });

  describe('非批處理節點', () => {
    it('應該正確解析 LLM 節點結果', () => {
      const nodeResult = createMockNodeResult('1');
      const workflowSchema = createMockWorkflowSchema(
        '1',
        StandardNodeType.LLM,
      );
      const result = defaultParser(nodeResult, workflowSchema);

      expect(result.nodeId).toBe('1');
      expect(result.nodeType).toBe(StandardNodeType.LLM);
      expect(result.isBatch).toBe(false);
      expect(result.caseResult).toHaveLength(1);
      expect(result.caseResult?.[0].dataList).toHaveLength(3); // Input, original output, final output
    });

    it('應該正確解析 Code 節點結果', () => {
      const nodeResult = createMockNodeResult('1');
      const workflowSchema = createMockWorkflowSchema(
        '1',
        StandardNodeType.Code,
      );
      const result = defaultParser(nodeResult, workflowSchema);

      expect(result.nodeType).toBe(StandardNodeType.Code);
      expect(result.caseResult?.[0].dataList).toHaveLength(3); // Input, original output, final output
    });

    it('應該正確解析 Start 節點結果', () => {
      const nodeResult = createMockNodeResult('1');
      const workflowSchema = createMockWorkflowSchema(
        '1',
        StandardNodeType.Start,
      );
      const result = defaultParser(nodeResult, workflowSchema);

      expect(result.nodeType).toBe(StandardNodeType.Start);
      expect(result.caseResult?.[0].dataList).toHaveLength(1); // input only
    });

    it('應該正確解析 End 節點結果', () => {
      const nodeResult = createMockNodeResult('1', {
        extra: JSON.stringify({
          response_extra: {
            terminal_plan: TerminatePlanType.USESETTING,
          },
        }),
        output: JSON.stringify({ content: 'test content' }),
        raw_output: JSON.stringify({ content: 'test raw content' }),
      });
      const workflowSchema = createMockWorkflowSchema(
        '1',
        StandardNodeType.End,
      );
      const result = defaultParser(nodeResult, workflowSchema);

      expect(result.nodeType).toBe(StandardNodeType.End);
      expect(result.caseResult?.[0].dataList).toHaveLength(2); // Output variables, answer content
    });

    it('應該正確解析 Message 節點結果', () => {
      const nodeResult = createMockNodeResult('1');
      const workflowSchema = createMockWorkflowSchema(
        '1',
        StandardNodeType.Output,
      );
      const result = defaultParser(nodeResult, workflowSchema);

      expect(result.nodeType).toBe(StandardNodeType.Output);
      expect(result.caseResult?.[0].dataList).toHaveLength(2); // Output variables, answer content
    });

    it('應該正確解析包含圖片的輸出', () => {
      const nodeResult = createMockNodeResult('1', {
        output: JSON.stringify({ content: 'test output with image' }),
      });
      const workflowSchema = createMockWorkflowSchema('1');
      const result = defaultParser(nodeResult, workflowSchema);

      expect(result.caseResult?.[0].imgList).toEqual([
        'https://example.com/image.png',
      ]);
    });
  });

  describe('批處理節點', () => {
    it('應該正確解析批處理節點結果', () => {
      const nodeResult = createMockNodeResult('1', {
        isBatch: true,
        batch: JSON.stringify([
          createMockNodeResult('1'),
          createMockNodeResult('1'),
        ]),
      });
      const workflowSchema = createMockWorkflowSchema('1');
      const result = defaultParser(nodeResult, workflowSchema);

      expect(result.isBatch).toBe(true);
      expect(result.caseResult).toHaveLength(2);
      expect(result.caseResult?.[0].dataList).toBeDefined();
      expect(result.caseResult?.[1].dataList).toBeDefined();
    });

    it('應該正確處理空的批處理結果', () => {
      const nodeResult = createMockNodeResult('1', {
        isBatch: true,
        batch: '[]',
      });
      const workflowSchema = createMockWorkflowSchema('1');
      const result = defaultParser(nodeResult, workflowSchema);

      expect(result.isBatch).toBe(true);
      expect(result.caseResult).toEqual([]);
    });

    it('應該正確處理無效的批處理 JSON', () => {
      const nodeResult = createMockNodeResult('1', {
        isBatch: true,
        batch: 'invalid batch json',
      });
      const workflowSchema = createMockWorkflowSchema('1');
      const result = defaultParser(nodeResult, workflowSchema);

      expect(result.isBatch).toBe(true);
      expect(result.caseResult).toEqual([]);
    });

    it('應該正確處理批處理中的 null 或 undefined 結果', () => {
      const nodeResult = createMockNodeResult('1', {
        isBatch: true,
        batch: JSON.stringify([null, createMockNodeResult('1'), undefined]),
      });
      const workflowSchema = createMockWorkflowSchema('1');
      const result = defaultParser(nodeResult, workflowSchema);

      expect(result.isBatch).toBe(true);
      expect(result.caseResult).toHaveLength(1);
    });
  });

  describe('特殊情況處理', () => {
    it('應該正確處理無效的 JSON 輸入', () => {
      const nodeResult = createMockNodeResult('1', {
        input: 'invalid json',
        output: 'invalid json',
        raw_output: 'invalid json',
      });
      const workflowSchema = createMockWorkflowSchema('1');
      const result = defaultParser(nodeResult, workflowSchema);

      expect(
        result.caseResult?.[0].dataList?.some(
          item => item.data === 'invalid json',
        ),
      ).toBe(true);
    });

    it('應該正確處理 Text 節點的原始輸出', () => {
      const nodeResult = createMockNodeResult('1', {
        raw_output: '{"key": "value"}', // Even valid JSON strings should remain intact
      });
      const workflowSchema = createMockWorkflowSchema(
        '1',
        StandardNodeType.Text,
      );
      const result = defaultParser(nodeResult, workflowSchema);

      const rawOutput = result.caseResult?.[0].dataList?.find(
        item => item.title === '原始輸出',
      );
      expect(rawOutput?.data).toBe('{"key": "value"}');
    });

    it('應該正確處理不存在的節點類型', () => {
      const nodeResult = createMockNodeResult('1');
      const workflowSchema = createMockWorkflowSchema('2'); // Different node IDs
      const result = defaultParser(nodeResult, workflowSchema);

      expect(result.nodeType).toBeUndefined();
      expect(result.caseResult).toBeDefined();
    });
  });
});
