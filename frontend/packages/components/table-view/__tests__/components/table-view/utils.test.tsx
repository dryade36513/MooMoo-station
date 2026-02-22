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

import { describe, expect, test, vi } from 'vitest';

import { EditMenuItem } from '../../../src/components/types';
import {
  resizeFn,
  getRowKey,
  getRowOpConfig,
} from '../../../src/components/table-view/utils';

describe('utils', () => {
  describe('resizeFn', () => {
    test('應該處理固定列', () => {
      const column = {
        fixed: 'left',
        key: 'name',
        width: 200,
      };

      const result = resizeFn(column);

      expect(result).toEqual({
        ...column,
        resizable: false,
        width: 38, // FIXED_COLUMN_WIDTH
      });
    });

    test('應該處理選擇列', () => {
      const column = {
        key: 'column-selection',
        width: 200,
      };

      const result = resizeFn(column);

      expect(result).toEqual({
        ...column,
        resizable: false,
        width: 38, // FIXED_COLUMN_WIDTH
      });
    });

    test('應該處理寬度小於最小寬度的列', () => {
      const column = {
        key: 'name',
        width: 50,
      };

      const result = resizeFn(column);

      expect(result).toEqual({
        ...column,
        width: 100, // MIN_COLUMN_WIDTH
      });
    });

    test('應該保持寬度大於最小寬度的列不變', () => {
      const column = {
        key: 'name',
        width: 150,
      };

      const result = resizeFn(column);

      expect(result).toEqual({
        ...column,
        width: 150,
      });
    });
  });

  describe('getRowKey', () => {
    test('應該返回記錄的 tableViewKey', () => {
      const record = {
        tableViewKey: 'key-123',
        name: 'Test',
      };

      const result = getRowKey(record);

      expect(result).toBe('key-123');
    });

    test('當記錄沒有 tableViewKey 時應該返回空字符串', () => {
      const record = {
        name: 'Test',
      };

      const result = getRowKey(record);

      expect(result).toBe('');
    });

    test('當記錄爲 undefined 時應該返回空字符串', () => {
      const result = getRowKey(undefined);

      expect(result).toBe('');
    });
  });

  describe('getRowOpConfig', () => {
    test('應該返回正確的編輯菜單配置', () => {
      const record = { tableViewKey: 'key-123', name: 'Test' };
      const indexs = ['key-123'];
      const onEdit = vi.fn();
      const onDelete = vi.fn();

      const result = getRowOpConfig({
        selected: { record, indexs },
        onEdit,
        onDelete,
      });

      // Verify that the returned configuration object contains the correct menu items
      expect(result).toHaveProperty(EditMenuItem.EDIT);
      expect(result).toHaveProperty(EditMenuItem.DELETE);
      expect(result).toHaveProperty(EditMenuItem.DELETEALL);

      // Verify edit menu item
      expect(result[EditMenuItem.EDIT].text).toBe('knowledge_tableview_01');
      expect(result[EditMenuItem.EDIT].icon).toBeDefined();

      // Verify deletion of menu items
      expect(result[EditMenuItem.DELETE].text).toBe('knowledge_tableview_02');
      expect(result[EditMenuItem.DELETE].icon).toBeDefined();

      // Verify bulk deletion of menu items
      expect(result[EditMenuItem.DELETEALL].text).toBe(
        'knowledge_tableview_02',
      );
      expect(result[EditMenuItem.DELETEALL].icon).toBeDefined();

      // Test click edit menu item
      result[EditMenuItem.EDIT].onClick();
      expect(onEdit).toHaveBeenCalledWith(record, indexs[0]);

      // Test Click Delete Menu Item
      result[EditMenuItem.DELETE].onClick();
      expect(onDelete).toHaveBeenCalledWith(indexs);

      // Test click to delete menu items in bulk
      result[EditMenuItem.DELETEALL].onClick();
      expect(onDelete).toHaveBeenCalledWith(indexs);
    });

    test('當沒有提供回調函數時不應該拋出錯誤', () => {
      const record = { tableViewKey: 'key-123', name: 'Test' };
      const indexs = ['key-123'];

      const result = getRowOpConfig({
        selected: { record, indexs },
      });

      // Verify that the returned configuration object contains the correct menu items
      expect(result).toHaveProperty(EditMenuItem.EDIT);
      expect(result).toHaveProperty(EditMenuItem.DELETE);
      expect(result).toHaveProperty(EditMenuItem.DELETEALL);

      // Tests that clicking on the edit menu item should not throw an error
      expect(() => result[EditMenuItem.EDIT].onClick()).not.toThrow();

      // Test that clicking on the delete menu item should not throw an error
      expect(() => result[EditMenuItem.DELETE].onClick()).not.toThrow();

      // Test clicking to delete menu items in bulk should not throw an error
      expect(() => result[EditMenuItem.DELETEALL].onClick()).not.toThrow();
    });
  });
});
