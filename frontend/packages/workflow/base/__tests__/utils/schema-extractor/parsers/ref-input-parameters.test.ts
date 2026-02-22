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

import { describe, it, expect } from 'vitest';

import { refInputParametersParser } from '../../../../src/utils/schema-extractor/parsers/ref-input-parameters';

// Mock isWorkflowImageTypeURL
vi.mock('../../../../src/utils/schema-extractor/utils', () => ({
  isWorkflowImageTypeURL: (url: string) =>
    typeof url === 'string' && url.startsWith('https://example.com/'),
}));

describe('ref-input-parameters-parser', () => {
  it('應該處理空輸入', () => {
    const result = refInputParametersParser([]);
    expect(result).toEqual([]);
  });

  it('應該正確解析單個引用參數', () => {
    const references = [
      {
        param1: {
          type: 'string',
          value: {
            content: 'test value',
          },
        },
      },
    ];

    const result = refInputParametersParser(references);
    expect(result).toEqual([
      {
        name: 'param1',
        value: 'test value',
        isImage: false,
      },
    ]);
  });

  it('應該正確解析多個引用參數', () => {
    const references = [
      {
        param1: {
          type: 'string',
          value: {
            content: 'value1',
          },
        },
        param2: {
          type: 'string',
          value: {
            content: 'value2',
          },
        },
      },
    ];

    const result = refInputParametersParser(references);
    expect(result).toEqual([
      {
        name: 'param1',
        value: 'value1',
        isImage: false,
      },
      {
        name: 'param2',
        value: 'value2',
        isImage: false,
      },
    ]);
  });

  it('應該正確解析多個引用對象', () => {
    const references = [
      {
        param1: {
          type: 'string',
          value: {
            content: 'value1',
          },
        },
      },
      {
        param2: {
          type: 'string',
          value: {
            content: 'value2',
          },
        },
      },
    ];

    const result = refInputParametersParser(references);
    expect(result).toEqual([
      {
        name: 'param1',
        value: 'value1',
        isImage: false,
      },
      {
        name: 'param2',
        value: 'value2',
        isImage: false,
      },
    ]);
  });

  it('應該正確識別圖片 URL', () => {
    const references = [
      {
        image: {
          type: 'string',
          value: {
            content: 'https://example.com/test.png',
          },
        },
      },
    ];

    const result = refInputParametersParser(references);
    expect(result).toEqual([
      {
        name: 'image',
        value: 'https://example.com/test.png',
        isImage: true,
      },
    ]);
  });

  it('應該忽略非字符串類型的參數', () => {
    const references = [
      {
        param1: {
          type: 'number',
          value: {
            content: '123',
          },
        },
        param2: {
          type: 'string',
          value: {
            content: 'valid',
          },
        },
      },
    ];

    const result = refInputParametersParser(references);
    expect(result).toEqual([
      {
        name: 'param2',
        value: 'valid',
        isImage: false,
      },
    ]);
  });

  it('應該忽略無效的參數結構', () => {
    const references = [
      {
        param1: 'invalid',
        param2: {
          type: 'string',
          value: {
            content: 'valid',
          },
        },
        param3: null,
        param4: undefined,
        param5: {
          type: 'string',
          value: {}, // Empty value object
        },
      },
    ];

    const result = refInputParametersParser(references);
    expect(result).toEqual([
      {
        name: 'param2',
        value: 'valid',
        isImage: false,
      },
      {
        name: 'param5',
        value: undefined,
        isImage: false,
      },
    ]);
  });
});
