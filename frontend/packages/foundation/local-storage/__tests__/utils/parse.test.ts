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

import { paseLocalStorageValue, filterCacheData } from '../../src/utils/parse';
import { type LocalStorageCacheData } from '../../src/types';

describe('解析工具函數', () => {
  describe('paseLocalStorageValue', () => {
    it('應該返回空對象當輸入爲 null', () => {
      expect(paseLocalStorageValue(null)).toEqual({});
    });

    it('應該返回空對象當輸入不是有效的 JSON', () => {
      expect(paseLocalStorageValue('invalid json')).toEqual({});
    });

    it('應該返回空對象當輸入的 JSON 不符合緩存數據格式', () => {
      expect(paseLocalStorageValue('{"invalid": "data"}')).toEqual({
        invalid: 'data',
      });
    });

    it('應該正確解析永久緩存數據', () => {
      const data = {
        permanent: {
          'workspace-spaceId': 'test-space-id',
        },
      };
      expect(paseLocalStorageValue(JSON.stringify(data))).toEqual(data);
    });

    it('應該正確解析用戶相關緩存數據', () => {
      const data = {
        userRelated: {
          'user-1': {
            'workspace-spaceId': 'test-space-id',
          },
        },
      };
      expect(paseLocalStorageValue(JSON.stringify(data))).toEqual(data);
    });

    it('應該正確解析同時包含永久和用戶相關的緩存數據', () => {
      const data = {
        permanent: {
          'workspace-spaceId': 'test-space-id',
        },
        userRelated: {
          'user-1': {
            'workspace-subMenu': 'test-menu',
          },
        },
      };
      expect(paseLocalStorageValue(JSON.stringify(data))).toEqual(data);
    });

    it('應該返回空對象當永久緩存數據格式無效', () => {
      const data = {
        permanent: {
          key: 123, // Should be string.
        },
      };
      expect(paseLocalStorageValue(JSON.stringify(data))).toEqual({});
    });

    it('應該返回空對象當用戶相關緩存數據格式無效', () => {
      const data = {
        userRelated: {
          'user-1': {
            key: 123, // Should be string.
          },
        },
      };
      expect(paseLocalStorageValue(JSON.stringify(data))).toEqual({});
    });
  });

  describe('filterCacheData', () => {
    it('應該過濾掉永久緩存中的無效鍵', () => {
      const data: LocalStorageCacheData = {
        permanent: {
          'workspace-spaceId': 'valid-value',
          'invalid-key': 'invalid-value',
        },
      };

      const filtered = filterCacheData(data);
      expect(filtered.permanent?.['workspace-spaceId']).toBe('valid-value');
      expect(filtered.permanent?.['invalid-key']).toBeUndefined();
    });

    it('應該過濾掉用戶相關緩存中的無效鍵', () => {
      const data: LocalStorageCacheData = {
        userRelated: {
          'user-1': {
            'workspace-spaceId': 'valid-value',
            'invalid-key': 'invalid-value',
          },
        },
      };

      const filtered = filterCacheData(data);
      expect(filtered.userRelated?.['user-1']?.['workspace-spaceId']).toBe(
        'valid-value',
      );
      expect(filtered.userRelated?.['user-1']?.['invalid-key']).toBeUndefined();
    });

    it('應該保持用戶 ID 不變', () => {
      const data: LocalStorageCacheData = {
        userRelated: {
          'user-1': {
            'workspace-spaceId': 'value-1',
          },
          'user-2': {
            'workspace-spaceId': 'value-2',
          },
        },
      };

      const filtered = filterCacheData(data);
      expect(Object.keys(filtered.userRelated || {})).toEqual([
        'user-1',
        'user-2',
      ]);
    });
  });
});
