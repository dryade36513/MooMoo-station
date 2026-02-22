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

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook } from '@testing-library/react';

import { useNodeTestId } from '../../src/hooks/use-node-test-id';

const mockUseCurrentEntity = vi.fn();

vi.mock('@flowgram-adapter/free-layout-editor', () => ({
  useCurrentEntity: () => mockUseCurrentEntity(),
}));

// Mock @coze-arch/bot-error
class MockCustomError extends Error {
  code: string;
  constructor(message: string, code: string) {
    super(message);
    this.name = 'CustomError';
    this.code = code;
  }
}

vi.mock('@coze-arch/bot-error', () => ({
  CustomError: vi
    .fn()
    .mockImplementation(
      () =>
        new MockCustomError(
          'useNodeTestId must be called in a workflow node',
          '',
        ),
    ),
}));

// Mock utils
const mockConcatTestId = vi.fn();
vi.mock('../../src/utils', () => ({
  concatTestId: (...args: string[]) => mockConcatTestId(...args),
}));

describe('useNodeTestId', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Set the default behavior of concatTestId
    mockConcatTestId.mockImplementation((...args: string[]) => args.join('.'));
  });

  it('應該在沒有當前節點時拋出錯誤', () => {
    mockUseCurrentEntity.mockReturnValue(null);

    expect(() => {
      renderHook(() => useNodeTestId());
    }).toThrow(
      new MockCustomError(
        'useNodeTestId must be called in a workflow node',
        '',
      ),
    );
  });

  it('應該在節點沒有 id 時拋出錯誤', () => {
    mockUseCurrentEntity.mockReturnValue({});

    expect(() => {
      renderHook(() => useNodeTestId());
    }).toThrow(
      new MockCustomError(
        'useNodeTestId must be called in a workflow node',
        '',
      ),
    );
  });

  it('應該返回正確的節點測試 ID', () => {
    mockUseCurrentEntity.mockReturnValue({ id: '123' });
    mockConcatTestId.mockReturnValueOnce('playground.node.123');

    const { result } = renderHook(() => useNodeTestId());

    expect(result.current.getNodeTestId()).toBe('playground.node.123');
    expect(mockConcatTestId).toHaveBeenCalledWith('playground.node', '123');
  });

  it('應該返回正確的節點設置器 ID', () => {
    mockUseCurrentEntity.mockReturnValue({ id: '123' });
    mockConcatTestId
      .mockReturnValueOnce('playground.node.123') // For getNodeTestId
      .mockReturnValueOnce('playground.node.123.llm'); // For getNodeSetterId

    const { result } = renderHook(() => useNodeTestId());

    expect(result.current.getNodeSetterId('llm')).toBe(
      'playground.node.123.llm',
    );
    expect(mockConcatTestId).toHaveBeenCalledTimes(2);
    expect(mockConcatTestId).toHaveBeenNthCalledWith(
      1,
      'playground.node',
      '123',
    );
    expect(mockConcatTestId).toHaveBeenNthCalledWith(
      2,
      'playground.node.123',
      'llm',
    );
  });

  it('應該正確連接測試 ID', () => {
    mockUseCurrentEntity.mockReturnValue({ id: '123' });
    mockConcatTestId
      .mockReturnValueOnce('a.b')
      .mockReturnValueOnce('a.b.c')
      .mockReturnValueOnce('a.b.c');

    const { result } = renderHook(() => useNodeTestId());

    expect(result.current.concatTestId('a', 'b')).toBe('a.b');
    expect(mockConcatTestId).toHaveBeenCalledWith('a', 'b');

    expect(result.current.concatTestId('a.b', 'c')).toBe('a.b.c');
    expect(mockConcatTestId).toHaveBeenCalledWith('a.b', 'c');

    expect(result.current.concatTestId('a', 'b', 'c')).toBe('a.b.c');
    expect(mockConcatTestId).toHaveBeenCalledWith('a', 'b', 'c');
  });

  it('應該在多個組件中返回不同的節點測試 ID', () => {
    // The first component
    mockUseCurrentEntity.mockReturnValue({ id: '123' });
    mockConcatTestId.mockReturnValueOnce('playground.node.123');

    const { result: result1 } = renderHook(() => useNodeTestId());
    expect(result1.current.getNodeTestId()).toBe('playground.node.123');
    expect(mockConcatTestId).toHaveBeenCalledWith('playground.node', '123');

    // The second component
    mockUseCurrentEntity.mockReturnValue({ id: '456' });
    mockConcatTestId.mockReturnValueOnce('playground.node.456');

    const { result: result2 } = renderHook(() => useNodeTestId());
    expect(result2.current.getNodeTestId()).toBe('playground.node.456');
    expect(mockConcatTestId).toHaveBeenCalledWith('playground.node', '456');
  });

  it('應該在多個組件中返回不同的節點設置器 ID', () => {
    // The first component
    mockUseCurrentEntity.mockReturnValue({ id: '123' });
    mockConcatTestId
      .mockReturnValueOnce('playground.node.123') // For getNodeTestId
      .mockReturnValueOnce('playground.node.123.llm'); // For getNodeSetterId

    const { result: result1 } = renderHook(() => useNodeTestId());
    expect(result1.current.getNodeSetterId('llm')).toBe(
      'playground.node.123.llm',
    );
    expect(mockConcatTestId).toHaveBeenNthCalledWith(
      1,
      'playground.node',
      '123',
    );
    expect(mockConcatTestId).toHaveBeenNthCalledWith(
      2,
      'playground.node.123',
      'llm',
    );

    // The second component
    mockUseCurrentEntity.mockReturnValue({ id: '456' });
    mockConcatTestId
      .mockReturnValueOnce('playground.node.456') // For getNodeTestId
      .mockReturnValueOnce('playground.node.456.llm'); // For getNodeSetterId

    const { result: result2 } = renderHook(() => useNodeTestId());
    expect(result2.current.getNodeSetterId('llm')).toBe(
      'playground.node.456.llm',
    );
    expect(mockConcatTestId).toHaveBeenNthCalledWith(
      3,
      'playground.node',
      '456',
    );
    expect(mockConcatTestId).toHaveBeenNthCalledWith(
      4,
      'playground.node.456',
      'llm',
    );
  });
});
