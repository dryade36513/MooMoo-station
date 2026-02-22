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

import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react-hooks';

import { ProjectRoleType } from '../../src/project/constants';

vi.stubGlobal('IS_DEV_MODE', true);

describe('Project Auth Store', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();
  });

  describe('setRoles', () => {
    it('應該正確設置項目角色', async () => {
      const { useProjectAuthStore } = await vi.importActual(
        '../../src/project/store',
      );
      const { result } = renderHook(() => useProjectAuthStore());
      const projectId = 'test-project-1';
      const roles = [ProjectRoleType.Owner];

      await act(() => {
        result.current.setRoles(projectId, roles);
      });

      expect(result.current.roles[projectId]).toEqual(roles);
    });

    it('應該能夠更新已存在的項目角色', async () => {
      const { useProjectAuthStore } = await vi.importActual(
        '../../src/project/store',
      );
      const { result } = renderHook(() => useProjectAuthStore());
      const projectId = 'test-project-1';
      const initialRoles = [ProjectRoleType.Owner];
      const updatedRoles = [ProjectRoleType.Editor];

      await act(() => {
        result.current.setRoles(projectId, initialRoles);
      });
      expect(result.current.roles[projectId]).toEqual(initialRoles);

      await act(() => {
        result.current.setRoles(projectId, updatedRoles);
      });
      expect(result.current.roles[projectId]).toEqual(updatedRoles);
    });

    it('應該能夠同時管理多個項目的角色', async () => {
      const { useProjectAuthStore } = await vi.importActual(
        '../../src/project/store',
      );
      const { result } = renderHook(() => useProjectAuthStore());
      const projectId1 = 'test-project-1';
      const projectId2 = 'test-project-2';
      const roles1 = [ProjectRoleType.Owner];
      const roles2 = [ProjectRoleType.Editor];

      await act(() => {
        result.current.setRoles(projectId1, roles1);
        result.current.setRoles(projectId2, roles2);
      });

      expect(result.current.roles[projectId1]).toEqual(roles1);
      expect(result.current.roles[projectId2]).toEqual(roles2);
    });
  });

  describe('setIsReady', () => {
    it('應該正確設置項目準備狀態', async () => {
      const { useProjectAuthStore } = await vi.importActual(
        '../../src/project/store',
      );
      const { result } = renderHook(() => useProjectAuthStore());
      const projectId = 'test-project-1';

      await act(() => {
        result.current.setIsReady(projectId, true);
      });

      expect(result.current.isReady[projectId]).toBe(true);
    });

    it('應該能夠更新已存在的項目準備狀態', async () => {
      const { useProjectAuthStore } = await vi.importActual(
        '../../src/project/store',
      );
      const { result } = renderHook(() => useProjectAuthStore());
      const projectId = 'test-project-1';

      await act(() => {
        result.current.setIsReady(projectId, true);
      });
      expect(result.current.isReady[projectId]).toBe(true);

      await act(() => {
        result.current.setIsReady(projectId, false);
      });
      expect(result.current.isReady[projectId]).toBe(false);
    });

    it('應該能夠同時管理多個項目的準備狀態', async () => {
      const { useProjectAuthStore } = await vi.importActual(
        '../../src/project/store',
      );
      const { result } = renderHook(() => useProjectAuthStore());
      const projectId1 = 'test-project-1';
      const projectId2 = 'test-project-2';

      await act(() => {
        result.current.setIsReady(projectId1, true);
        result.current.setIsReady(projectId2, false);
      });

      expect(result.current.isReady[projectId1]).toBe(true);
      expect(result.current.isReady[projectId2]).toBe(false);
    });
  });

  describe('destory', () => {
    it('應該正確清除項目數據', async () => {
      const { useProjectAuthStore } = await vi.importActual(
        '../../src/project/store',
      );
      const { result } = renderHook(() => useProjectAuthStore());
      const projectId = 'test-project-1';
      const roles = [ProjectRoleType.Owner];

      // Set initial data
      await act(() => {
        result.current.setRoles(projectId, roles);
        result.current.setIsReady(projectId, true);
      });

      // Verify that the data is set
      expect(result.current.roles[projectId]).toEqual(roles);
      expect(result.current.isReady[projectId]).toBe(true);

      // Destroy data
      result.current.destory(projectId);

      // Verify that the data has been cleared
      expect(result.current.roles[projectId]).toEqual([]);
      expect(result.current.isReady[projectId]).toBe(false);
    });

    it('應該只清除指定項目的數據，不影響其他項目', async () => {
      const { useProjectAuthStore } = await vi.importActual(
        '../../src/project/store',
      );
      const { result } = renderHook(() => useProjectAuthStore());
      const projectId1 = 'test-project-1';
      const projectId2 = 'test-project-2';
      const roles1 = [ProjectRoleType.Owner];
      const roles2 = [ProjectRoleType.Editor];

      // Set initial data
      result.current.setRoles(projectId1, roles1);
      result.current.setRoles(projectId2, roles2);
      result.current.setIsReady(projectId1, true);
      result.current.setIsReady(projectId2, true);

      // Destruction of data for item 1
      result.current.destory(projectId1);

      // Verify that the data for item 1 has been cleared and that the data for item 2 remains unchanged
      expect(result.current.roles[projectId1]).toEqual([]);
      expect(result.current.isReady[projectId1]).toBe(false);
      expect(result.current.roles[projectId2]).toEqual(roles2);
      expect(result.current.isReady[projectId2]).toBe(true);
    });
  });
});
