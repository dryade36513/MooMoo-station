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

import React from 'react';

import { describe, expect, test, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom';
import { EditHeaderRender } from '../../../src/components/renders/edit-header-render';

// simulated dependency
vi.mock('@coze-arch/bot-semi', () => {
  const uiButton = ({ children, onClick, ...props }: any) => (
    <button data-testid="button" onClick={onClick} {...props}>
      {children}
    </button>
  );

  const uiInput = ({
    value,
    onChange,
    onBlur,
    readonly,
    suffix,
    ...props
  }: any) => (
    <div>
      <input
        data-testid="input"
        value={value}
        onChange={e => onChange && onChange(e.target.value)}
        onBlur={() => onBlur && onBlur(value)}
        readOnly={readonly}
        {...props}
      />
      {suffix}
    </div>
  );

  const tooltip = ({ content, children }: any) => (
    <div data-testid="tooltip" data-content={content}>
      {children}
    </div>
  );

  return {
    UIButton: uiButton,
    UIInput: uiInput,
    Tooltip: tooltip,
  };
});

vi.mock('@coze-arch/bot-icons', () => {
  const iconDeleteOutline = () => <div data-testid="delete-icon" />;
  const iconToastError = () => <div data-testid="error-icon" />;

  return {
    IconDeleteOutline: iconDeleteOutline,
    IconToastError: iconToastError,
  };
});

describe('EditHeaderRender', () => {
  test('應該正確渲染預覽模式', () => {
    const mockOnBlur = vi.fn();

    render(
      <EditHeaderRender value="測試標題" onBlur={mockOnBlur} validator={{}} />,
    );

    // Verify that the preview mode displays the correct value
    const previewElement = screen.getByText('測試標題');
    expect(previewElement).toBeInTheDocument();
  });

  test('應該在點擊預覽文本時切換到編輯模式', () => {
    const mockOnBlur = vi.fn();

    render(
      <EditHeaderRender value="測試標題" onBlur={mockOnBlur} validator={{}} />,
    );

    // Click to preview text
    const previewElement = screen.getByText('測試標題');
    fireEvent.click(previewElement);

    // Verify text box appears
    const inputElement = screen.getByTestId('input');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue('測試標題');
  });

  test('應該在失焦時調用 onBlur 回調', () => {
    const mockOnBlur = vi.fn();
    const mockEditPropsOnBlur = vi.fn();

    // rendering component
    render(
      <EditHeaderRender
        value="測試標題"
        onBlur={mockOnBlur}
        validator={{}}
        editProps={{
          onBlur: mockEditPropsOnBlur,
        }}
      />,
    );

    // Click on the preview text to enter edit mode
    const previewElement = screen.getByText('測試標題');
    fireEvent.click(previewElement);

    // Get text box
    const inputElement = screen.getByTestId('input');

    // The blur event is triggered, causing the onBlurFn function inside the component to be called
    fireEvent.blur(inputElement);

    // Verify that editProps.onBlur is called and the correct parameters are passed
    expect(mockEditPropsOnBlur).toHaveBeenCalledWith('測試標題');
  });

  test('應該在編輯時更新輸入值', () => {
    const mockOnBlur = vi.fn();
    const mockOnChange = vi.fn();

    render(
      <EditHeaderRender
        value="測試標題"
        onBlur={mockOnBlur}
        validator={{}}
        editProps={{
          onChange: mockOnChange,
        }}
      />,
    );

    // Click on the preview text to enter edit mode
    const previewElement = screen.getByText('測試標題');
    fireEvent.click(previewElement);

    // Get the text box and modify the value
    const inputElement = screen.getByTestId('input');
    fireEvent.change(inputElement, { target: { value: '新標題' } });

    // Verify that the onChange callback is invoked
    expect(mockOnChange).toHaveBeenCalledWith('新標題');
  });

  test('應該在點擊刪除按鈕時調用 onDelete 回調', () => {
    const mockOnBlur = vi.fn();
    const mockOnDelete = vi.fn();

    render(
      <EditHeaderRender
        value="測試標題"
        onBlur={mockOnBlur}
        validator={{}}
        deleteProps={{
          disabled: false,
          onDelete: mockOnDelete,
        }}
      />,
    );

    // Click the Delete button.
    const deleteButton = screen.getByTestId('button');
    fireEvent.click(deleteButton);

    // Verify that the onDelete callback is invoked
    expect(mockOnDelete).toHaveBeenCalledWith('測試標題');
  });

  test('應該在禁用狀態下渲染刪除按鈕', () => {
    const mockOnBlur = vi.fn();
    const mockOnDelete = vi.fn();

    render(
      <EditHeaderRender
        value="測試標題"
        onBlur={mockOnBlur}
        validator={{}}
        deleteProps={{
          disabled: true,
          onDelete: mockOnDelete,
        }}
      />,
    );

    // Verify that the delete button is disabled
    const deleteButton = screen.getByTestId('button');
    expect(deleteButton).toHaveAttribute('disabled');

    // Clicking the delete button should not invoke a callback
    fireEvent.click(deleteButton);
    expect(mockOnDelete).not.toHaveBeenCalled();
  });

  test('應該在非可編輯狀態下不顯示刪除按鈕', () => {
    const mockOnBlur = vi.fn();

    render(
      <EditHeaderRender
        value="測試標題"
        onBlur={mockOnBlur}
        validator={{}}
        editable={false}
      />,
    );

    // Verify that the delete button does not exist
    expect(screen.queryByTestId('button')).not.toBeInTheDocument();
  });

  test('應該在驗證失敗時顯示錯誤提示', () => {
    const mockOnBlur = vi.fn();
    const mockValidator = {
      validate: vi.fn().mockReturnValue(true),
      errorMsg: '輸入不合法',
    };

    render(
      <EditHeaderRender
        value="測試標題"
        onBlur={mockOnBlur}
        validator={mockValidator}
      />,
    );

    // Click on the preview text to enter edit mode
    const previewElement = screen.getByText('測試標題');
    fireEvent.click(previewElement);

    // Since in our simulation implementation, error icons and hints are passed through the suffix attribute
    // So we need to check if tooltip and error-icon exist in the document
    expect(screen.getByTestId('error-icon')).toBeInTheDocument();
    expect(screen.getByTestId('tooltip')).toHaveAttribute(
      'data-content',
      '輸入不合法',
    );
  });
});
