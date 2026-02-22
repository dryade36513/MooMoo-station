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
import { renderHook, act } from '@testing-library/react-hooks';
import { SpaceRoleType } from '@coze-arch/idl/developer_api';

// simulated global variable
vi.stubGlobal('IS_DEV_MODE', true);

describe('Space Auth Store', () => {
  beforeEach(() => {
    // Reset the module cache to ensure that each test uses a new store instance
    vi.resetModules();
  });

  describe('setRoles', () => {
    it('應該正確設置空間角色', async () => {
      // Dynamically import the store module to ensure that each test gets a new instance
      const { useSpaceAuthStore } = await vi.importActual(
        '../../src/space/store',
      );
      const { result } = renderHook(() => useSpaceAuthStore());

      const roles = [SpaceRoleType.Owner, SpaceRoleType.Admin];
      await act(() => {
        result.current.setRoles('space1', roles);
      });

      expect(result.current.roles.space1).toEqual(roles);
    });

    it('應該能夠爲多個空間設置不同的角色', async () => {
      const { useSpaceAuthStore } = await vi.importActual(
        '../../src/space/store',
      );
      const { result } = renderHook(() => useSpaceAuthStore());

      const roles1 = [SpaceRoleType.Owner];
      const roles2 = [SpaceRoleType.Member];

      await act(() => {
        result.current.setRoles('space1', roles1);
        result.current.setRoles('space2', roles2);
      });

      expect(result.current.roles.space1).toEqual(roles1);
      expect(result.current.roles.space2).toEqual(roles2);
    });

    it('應該能夠更新已存在空間的角色', async () => {
      const { useSpaceAuthStore } = await vi.importActual(
        '../../src/space/store',
      );
      const { result } = renderHook(() => useSpaceAuthStore());

      const initialRoles = [SpaceRoleType.Owner];
      const updatedRoles = [SpaceRoleType.Admin];

      await act(() => {
        result.current.setRoles('space1', initialRoles);
      });
      expect(result.current.roles.space1).toEqual(initialRoles);

      await act(() => {
        result.current.setRoles('space1', updatedRoles);
      });
      expect(result.current.roles.space1).toEqual(updatedRoles);
    });
  });

  describe('setIsReady', () => {
    it('應該正確設置空間數據準備狀態', async () => {
      const { useSpaceAuthStore } = await vi.importActual(
        '../../src/space/store',
      );
      const { result } = renderHook(() => useSpaceAuthStore());

      await act(() => {
        result.current.setIsReady('space1', true);
      });

      expect(result.current.isReady.space1).toBe(true);
    });

    it('應該能夠爲多個空間設置不同的準備狀態', async () => {
      const { useSpaceAuthStore } = await vi.importActual(
        '../../src/space/store',
      );
      const { result } = renderHook(() => useSpaceAuthStore());

      await act(() => {
        result.current.setIsReady('space1', true);
        result.current.setIsReady('space2', false);
      });

      expect(result.current.isReady.space1).toBe(true);
      expect(result.current.isReady.space2).toBe(false);
    });

    it('應該能夠更新已存在空間的準備狀態', async () => {
      const { useSpaceAuthStore } = await vi.importActual(
        '../../src/space/store',
      );
      const { result } = renderHook(() => useSpaceAuthStore());

      await act(() => {
        result.current.setIsReady('space1', false);
      });
      expect(result.current.isReady.space1).toBe(false);

      await act(() => {
        result.current.setIsReady('space1', true);
      });
      expect(result.current.isReady.space1).toBe(true);
    });
  });

  describe('destory', () => {
    it('應該正確清除空間數據', async () => {
      const { useSpaceAuthStore } = await vi.importActual(
        '../../src/space/store',
      );
      const { result } = renderHook(() => useSpaceAuthStore());
      const roles = [SpaceRoleType.Owner];

      // Set initial data
      await act(() => {
        result.current.setRoles('space1', roles);
        result.current.setIsReady('space1', true);
      });

      // Verify that the data is set
      expect(result.current.roles.space1).toEqual(roles);
      expect(result.current.isReady.space1).toBe(true);

      // Destroy data
      await act(() => {
        result.current.destory('space1');
      });

      // Verify that the data has been cleared
      expect(result.current.roles.space1).toEqual([]);
      expect(result.current.isReady.space1).toBeUndefined();
    });

    it('應該只清除指定空間的數據', async () => {
      const { useSpaceAuthStore } = await vi.importActual(
        '../../src/space/store',
      );
      const { result } = renderHook(() => useSpaceAuthStore());

      // Set data for two spaces
      await act(() => {
        result.current.setRoles('space1', [SpaceRoleType.Owner]);
        result.current.setIsReady('space1', true);
        result.current.setRoles('space2', [SpaceRoleType.Member]);
        result.current.setIsReady('space2', true);
      });

      // Only destroy space1 data
      await act(() => {
        result.current.destory('space1');
      });

      // Verify that Space1's data has been cleared
      expect(result.current.roles.space1).toEqual([]);
      expect(result.current.isReady.space1).toBeUndefined();

      // Verify that Space2's data remains unchanged
      expect(result.current.roles.space2).toEqual([SpaceRoleType.Member]);
      expect(result.current.isReady.space2).toBe(true);
    });
  });

  describe('初始狀態', () => {
    it('應該有正確的初始狀態', async () => {
      const { useSpaceAuthStore } = await vi.importActual(
        '../../src/space/store',
      );
      const { result } = renderHook(() => useSpaceAuthStore());

      // Reset store to ensure testing environment is clean
      await act(() => {
        Object.keys(result.current.roles).forEach(spaceId => {
          result.current.destory(spaceId);
        });
      });

      // Verify the initial state
      expect(result.current.roles).toEqual({});
      expect(result.current.isReady).toEqual({});
    });
  });
});
