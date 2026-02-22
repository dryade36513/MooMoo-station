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

import { BlockInput } from '../../src/types/block-input-dto';
import { ViewVariableType } from '../../src/types';

describe('block-input-dto', () => {
  describe('create', () => {
    it('應該能夠創建基本的 BlockInput', () => {
      const input = BlockInput.create('testName', 'testValue');
      expect(input).toEqual({
        name: 'testName',
        input: {
          type: 'string',
          value: {
            type: 'literal',
            content: 'testValue',
            rawMeta: {
              type: ViewVariableType.String,
            },
          },
        },
      });
    });

    it('應該能夠創建指定類型的 BlockInput', () => {
      const input = BlockInput.create('testName', '42', 'integer');
      expect(input).toEqual({
        name: 'testName',
        input: {
          type: 'integer',
          value: {
            type: 'literal',
            content: '42',
            rawMeta: {
              type: ViewVariableType.Integer,
            },
          },
        },
      });
    });

    it('應該在沒有提供值時使用空字符串', () => {
      const input = BlockInput.create('testName');
      expect(input.input.value.content).toBe('');
    });
  });

  describe('createString', () => {
    it('應該創建字符串類型的 BlockInput', () => {
      const input = BlockInput.createString('testName', 'testValue');
      expect(input).toEqual({
        name: 'testName',
        input: {
          type: 'string',
          value: {
            type: 'literal',
            content: 'testValue',
            rawMeta: {
              type: ViewVariableType.String,
            },
          },
        },
      });
    });
  });

  describe('createInteger', () => {
    it('應該創建整數類型的 BlockInput', () => {
      const input = BlockInput.createInteger('testName', '42');
      expect(input).toEqual({
        name: 'testName',
        input: {
          type: 'integer',
          value: {
            type: 'literal',
            content: '42',
            rawMeta: {
              type: ViewVariableType.Integer,
            },
          },
        },
      });
    });
  });

  describe('createFloat', () => {
    it('應該創建浮點數類型的 BlockInput', () => {
      const input = BlockInput.createFloat('testName', '3.14');
      expect(input).toEqual({
        name: 'testName',
        input: {
          type: 'float',
          value: {
            type: 'literal',
            content: '3.14',
            rawMeta: {
              type: ViewVariableType.Number,
            },
          },
        },
      });
    });
  });

  describe('createArray', () => {
    it('應該創建數組類型的 BlockInput', () => {
      const schema = { type: 'string' };
      const input = BlockInput.createArray('testName', ['a', 'b', 'c'], schema);
      expect(input).toEqual({
        name: 'testName',
        input: {
          type: 'list',
          schema: { type: 'string' },
          value: {
            type: 'literal',
            content: ['a', 'b', 'c'],
          },
        },
      });
    });

    it('應該支持不同類型的數組元素', () => {
      const schema = { type: 'number' };
      const input = BlockInput.createArray('testName', [1, 2, 3], schema);
      expect(input.input.value.content).toEqual([1, 2, 3]);
    });
  });

  describe('createBoolean', () => {
    it('應該創建布爾類型的 BlockInput', () => {
      const input = BlockInput.createBoolean('testName', true);
      expect(input).toEqual({
        name: 'testName',
        input: {
          type: 'boolean',
          value: {
            type: 'literal',
            content: true,
            rawMeta: {
              type: ViewVariableType.Boolean,
            },
          },
        },
      });
    });

    it('應該正確處理 false 值', () => {
      const input = BlockInput.createBoolean('testName', false);
      expect(input.input.value.content).toBe(false);
    });
  });

  describe('toLiteral', () => {
    it('應該提取 BlockInput 的內容值', () => {
      const input = BlockInput.createString('testName', 'testValue');
      const value = BlockInput.toLiteral<string>(input);
      expect(value).toBe('testValue');
    });

    it('應該能夠提取不同類型的值', () => {
      const boolInput = BlockInput.createBoolean('testName', true);
      const boolValue = BlockInput.toLiteral<boolean>(boolInput);
      expect(boolValue).toBe(true);

      const arrayInput = BlockInput.createArray('testName', [1, 2, 3], {
        type: 'number',
      });
      const arrayValue = BlockInput.toLiteral<number[]>(arrayInput);
      expect(arrayValue).toEqual([1, 2, 3]);
    });
  });

  describe('isBlockInput', () => {
    it('應該正確識別有效的 BlockInput', () => {
      const input = BlockInput.createString('testName', 'testValue');
      expect(BlockInput.isBlockInput(input)).toBe(true);
    });

    it('應該正確識別無效的 BlockInput', () => {
      expect(BlockInput.isBlockInput(null)).toBe(false);
      expect(BlockInput.isBlockInput(undefined)).toBe(false);
      expect(BlockInput.isBlockInput({})).toBe(false);
      expect(
        BlockInput.isBlockInput({
          name: 'test',
          input: { value: { content: undefined } },
        }),
      ).toBe(true);
      expect(
        BlockInput.isBlockInput({
          input: { value: { content: 'test' } },
        }),
      ).toBe(false);
    });

    it('應該正確識別所有類型的有效 BlockInput', () => {
      const stringInput = BlockInput.createString('test', 'value');
      const integerInput = BlockInput.createInteger('test', '42');
      const floatInput = BlockInput.createFloat('test', '3.14');
      const booleanInput = BlockInput.createBoolean('test', true);
      const arrayInput = BlockInput.createArray('test', [1, 2, 3], {
        type: 'number',
      });

      expect(BlockInput.isBlockInput(stringInput)).toBe(true);
      expect(BlockInput.isBlockInput(integerInput)).toBe(true);
      expect(BlockInput.isBlockInput(floatInput)).toBe(true);
      expect(BlockInput.isBlockInput(booleanInput)).toBe(true);
      expect(BlockInput.isBlockInput(arrayInput)).toBe(true);
    });
  });
});
