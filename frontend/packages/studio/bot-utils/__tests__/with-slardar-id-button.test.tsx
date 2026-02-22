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

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom';
import copy from 'copy-to-clipboard';
import { getSlardarInstance } from '@coze-arch/logger';
import { I18n } from '@coze-arch/i18n';
import { Toast } from '@coze-arch/coze-design';

import { withSlardarIdButton } from '../src/with-slardar-id-button';

const mockSlardarInstance = {
  config: vi.fn(() => ({ sessionId: 'test-session-id' })),
};

vi.mock('@coze-arch/logger', () => ({
  getSlardarInstance: vi.fn(() => mockSlardarInstance),
}));

// simulated dependency
vi.mock('copy-to-clipboard', () => ({
  default: vi.fn(),
}));

vi.mock('@coze-arch/coze-design', () => ({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Button: ({ children, onClick, className, size, color }: any) => (
    <button
      onClick={onClick}
      className={className}
      data-size={size}
      data-color={color}
      data-testid="button"
    >
      {children}
    </button>
  ),
  Toast: {
    success: vi.fn(),
  },
}));

vi.mock('@coze-arch/i18n', () => ({
  I18n: {
    t: vi.fn(key => {
      if (key === 'copy_session_id') {
        return '複製會話ID';
      }
      if (key === 'error_id_copy_success') {
        return '複製成功';
      }
      return key;
    }),
  },
}));

describe('withSlardarIdButton', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('應該正確渲染傳入的節點和按鈕', () => {
    const testNode = <div data-testid="test-node">測試節點</div>;

    render(withSlardarIdButton(testNode));

    expect(screen.getByTestId('test-node')).toBeInTheDocument();
    expect(screen.getByTestId('test-node')).toHaveTextContent('測試節點');
    expect(screen.getByTestId('button')).toBeInTheDocument();
    expect(screen.getByTestId('button')).toHaveTextContent('複製會話ID');
  });

  it('按鈕應該有正確的屬性', () => {
    render(withSlardarIdButton(<div>測試</div>));

    const button = screen.getByTestId('button');
    expect(button).toHaveAttribute('data-size', 'small');
    expect(button).toHaveAttribute('data-color', 'primary');
    expect(button).toHaveAttribute('class', 'ml-[8px]');
  });

  it('點擊按鈕時應該複製會話ID並顯示成功提示', () => {
    render(withSlardarIdButton(<div>測試</div>));

    const button = screen.getByTestId('button');
    fireEvent.click(button);

    // Verify that slardar.config is called
    expect(getSlardarInstance).toHaveBeenCalled();
    expect(mockSlardarInstance.config).toHaveBeenCalled();

    // Verify that copy is called and that the parameters are correct
    expect(copy).toHaveBeenCalledWith('test-session-id');

    // Verify that Toast.success is called and the parameters are correct
    expect(Toast.success).toHaveBeenCalledWith('複製成功');
  });

  it('當 sessionId 爲空時應該複製空字符串', () => {
    // Emulate sessionId to undefined
    vi.mocked(mockSlardarInstance.config).mockReturnValueOnce({
      sessionId: undefined,
    });

    render(withSlardarIdButton(<div>測試</div>));

    const button = screen.getByTestId('button');
    fireEvent.click(button);

    expect(copy).toHaveBeenCalledWith('');
  });

  it('應該使用正確的 i18n 鍵獲取文本', () => {
    render(withSlardarIdButton(<div>測試</div>));

    fireEvent.click(screen.getByTestId('button'));

    expect(I18n.t).toHaveBeenCalledWith('copy_session_id');
    expect(I18n.t).toHaveBeenCalledWith('error_id_copy_success');
  });
});
