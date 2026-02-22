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

import { describe, it, expect, beforeEach, vi } from 'vitest';

import { localStorageService } from '../../src/core';

const LOCAL_STORAGE_KEY = '__coz_biz_cache__';

describe('LocalStorageService', () => {
  beforeEach(() => {
    // Clear localStorage
    localStorage.clear();
    // Reset userId
    localStorageService.setUserId(undefined);
  });

  describe('永久存儲', () => {
    const permanentKey = 'workflow-toolbar-role-onboarding-hidden';

    it('應該能正確設置和獲取永久存儲的值', () => {
      const value = 'test-value';

      localStorageService.setValue(permanentKey, value);
      expect(localStorageService.getValue(permanentKey)).toBe(value);
    });

    it('應該能正確刪除永久存儲的值', () => {
      localStorageService.setValue(permanentKey, 'test-value');
      localStorageService.setValue(permanentKey, undefined);
      expect(localStorageService.getValue(permanentKey)).toBeUndefined();
    });

    it('應該將數據持久化到 localStorage', async () => {
      const value = 'test-value';

      localStorageService.setValue(permanentKey, value);

      // Waiting for throttle
      await new Promise(resolve => setTimeout(resolve, 400));

      const storedData = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_KEY) || '{}',
      );
      expect(storedData.permanent?.[permanentKey]).toBe(value);
    });
  });

  describe('用戶相關存儲', () => {
    const userId = 'test-user-id';
    const userBindKey = 'coachmark';

    beforeEach(() => {
      localStorageService.setUserId(userId);
    });

    it('應該能正確設置和獲取用戶相關的值', () => {
      const value = 'test-value';

      localStorageService.setValue(userBindKey, value);
      expect(localStorageService.getValue(userBindKey)).toBe(value);
    });

    it('在沒有設置 userId 時不應該設置用戶相關的值', () => {
      vi.stubGlobal('IS_DEV_MODE', false);
      localStorageService.setUserId(undefined);

      localStorageService.setValue(userBindKey, 'test-value');
      expect(localStorageService.getValue(userBindKey)).toBeUndefined();
    });

    it('切換用戶時應該能訪問對應用戶的數據', () => {
      const value1 = 'user1-value';
      const value2 = 'user2-value';
      const userId2 = 'test-user-id-2';

      // The first user's data
      localStorageService.setValue(userBindKey, value1);

      // Switch to the second user
      localStorageService.setUserId(userId2);
      localStorageService.setValue(userBindKey, value2);
      expect(localStorageService.getValue(userBindKey)).toBe(value2);

      // Switch back to the first user
      localStorageService.setUserId(userId);
      expect(localStorageService.getValue(userBindKey)).toBe(value1);
    });
  });

  describe('事件監聽', () => {
    const permanentKey = 'workflow-toolbar-role-onboarding-hidden';

    it('值變化時應該觸發 change 事件', async () => {
      const value = 'test-value';
      const changeHandler = vi.fn();

      localStorageService.on('change', changeHandler);
      localStorageService.setValue(permanentKey, value);

      // Wait for the event to fire
      await new Promise(resolve => setTimeout(resolve, 0));

      expect(changeHandler).toHaveBeenCalled();

      localStorageService.off('change', changeHandler);
    });

    it('設置 userId 時應該觸發 setUserId 事件', () => {
      const userId = 'test-user-id';
      const setUserIdHandler = vi.fn();

      localStorageService.on('setUserId', setUserIdHandler);
      localStorageService.setUserId(userId);

      expect(setUserIdHandler).toHaveBeenCalledWith(userId);

      localStorageService.off('setUserId', setUserIdHandler);
    });
  });

  describe('異步獲取值', () => {
    const permanentKey = 'workflow-toolbar-role-onboarding-hidden';

    it('對於非用戶綁定的值應該直接返回', async () => {
      const value = 'test-value';

      localStorageService.setValue(permanentKey, value);
      const result = await localStorageService.getValueSync(permanentKey);
      expect(result).toBe(value);
    }, 10000);

    it('對於用戶綁定的值，應該等待 userId 設置後再返回', async () => {
      const userId = 'test-user-id';
      const value = 'test-value';

      // Set the value first
      localStorageService.setUserId(userId);
      localStorageService.setValue('coachmark', value);
      localStorageService.setUserId(undefined);

      // Get value asynchronously
      const valuePromise = localStorageService.getValueSync('coachmark');

      // Set userId
      setTimeout(() => {
        localStorageService.setUserId(userId);
      }, 0);

      const result = await valuePromise;
      expect(result).toBe(value);
    });
  });
});
