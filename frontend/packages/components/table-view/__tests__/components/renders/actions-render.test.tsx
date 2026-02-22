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
import { ActionsRender } from '../../../src/components/renders/actions-render';

// Use the callback function form of vi.mock to avoid linter errors
vi.mock('@coze-arch/coze-design/icons', () => ({
  IconCozEdit: () => <div data-testid="edit-icon" />,
  IconCozTrashCan: () => <div data-testid="delete-icon" />,
}));

vi.mock('@coze-arch/i18n', () => ({
  I18n: {
    t: (key: string) => key,
  },
}));

vi.mock('@coze-arch/coze-design', () => ({
  Button: ({ children, onClick, icon, ...props }: any) => (
    <button data-testid="button" onClick={onClick} icon={icon} {...props}>
      {children}
    </button>
  ),
}));

describe('ActionsRender', () => {
  test('應該正確渲染編輯和刪除按鈕', () => {
    const mockRecord = { tableViewKey: 'key-123', name: 'Test' };
    const mockIndex = 0;

    render(<ActionsRender record={mockRecord} index={mockIndex} />);

    // Verify button is rendered
    const buttons = screen.getAllByTestId('button');
    expect(buttons).toHaveLength(2); // Edit and delete buttons
  });

  test('應該在點擊編輯按鈕時調用onEdit回調', () => {
    const mockRecord = { tableViewKey: 'key-123', name: 'Test' };
    const mockIndex = 0;
    const mockOnEdit = vi.fn();

    render(
      <ActionsRender
        record={mockRecord}
        index={mockIndex}
        editProps={{ disabled: false, onEdit: mockOnEdit }}
      />,
    );

    // Click the Edit button
    const buttons = screen.getAllByTestId('button');
    fireEvent.click(buttons[0]); // The first button is the edit button

    // Verify edit callback is invoked
    expect(mockOnEdit).toHaveBeenCalledWith(mockRecord, mockIndex);
  });

  test('應該在點擊刪除按鈕時調用onDelete回調', () => {
    const mockRecord = { tableViewKey: 'key-123', name: 'Test' };
    const mockIndex = 0;
    const mockOnDelete = vi.fn();

    render(
      <ActionsRender
        record={mockRecord}
        index={mockIndex}
        deleteProps={{ disabled: false, onDelete: mockOnDelete }}
      />,
    );

    // Click the Delete button.
    const buttons = screen.getAllByTestId('button');
    fireEvent.click(buttons[1]); // The second button is the delete button.

    // Verify that the delete callback is invoked
    expect(mockOnDelete).toHaveBeenCalledWith(mockIndex);
  });

  test('當editDisabled爲true時不應該渲染編輯按鈕', () => {
    const mockRecord = { tableViewKey: 'key-123', name: 'Test' };
    const mockIndex = 0;

    render(
      <ActionsRender
        record={mockRecord}
        index={mockIndex}
        editProps={{ disabled: true }}
      />,
    );

    // Verify that there is only one button (delete button)
    const buttons = screen.getAllByTestId('button');
    expect(buttons).toHaveLength(1);
  });

  test('當deleteDisabled爲true時不應該渲染刪除按鈕', () => {
    const mockRecord = { tableViewKey: 'key-123', name: 'Test' };
    const mockIndex = 0;

    render(
      <ActionsRender
        record={mockRecord}
        index={mockIndex}
        deleteProps={{ disabled: true }}
      />,
    );

    // Verify that there is only one button (edit button)
    const buttons = screen.getAllByTestId('button');
    expect(buttons).toHaveLength(1);
  });
});
