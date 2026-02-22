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

import { concatTestId } from '../../src/utils/concat-test-id';

describe('concat-test-id', () => {
  it('應該正確連接多個測試 ID', () => {
    const result = concatTestId('a', 'b', 'c');
    expect(result).toBe('a.b.c');
  });

  it('應該過濾掉空字符串', () => {
    const result = concatTestId('a', '', 'c');
    expect(result).toBe('a.c');
  });

  it('應該過濾掉 undefined 和 null', () => {
    const result = concatTestId('a', undefined as any, 'c', null as any);
    expect(result).toBe('a.c');
  });

  it('應該在只有一個有效 ID 時正確返回', () => {
    const result = concatTestId('a');
    expect(result).toBe('a');
  });

  it('應該在所有 ID 都無效時返回空字符串', () => {
    const result = concatTestId('', undefined as any, null as any);
    expect(result).toBe('');
  });

  it('應該在沒有參數時返回空字符串', () => {
    const result = concatTestId();
    expect(result).toBe('');
  });

  it('應該正確處理包含點號的 ID', () => {
    const result = concatTestId('a.x', 'b', 'c.y');
    expect(result).toBe('a.x.b.c.y');
  });

  it('應該正確處理數字 ID', () => {
    const result = concatTestId('1', '2', '3');
    expect(result).toBe('1.2.3');
  });
});
