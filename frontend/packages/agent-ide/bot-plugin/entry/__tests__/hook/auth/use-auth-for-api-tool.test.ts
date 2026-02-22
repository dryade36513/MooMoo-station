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

import { describe, expect, it, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react-hooks';
import { OAuthStatus } from '@coze-arch/bot-api/plugin_develop';

import { useAuthForApiTool } from '@/hooks/auth/use-auth-for-api-tool';

vi.mock('@coze-arch/logger', () => ({
  logger: {
    error: vi.fn(),
  },
  createLoggerWith: vi.fn(),
}));

vi.mock('@coze-studio/bot-plugin-store', () => ({
  usePluginStore: vi.fn().mockReturnValue({
    pluginInfo: {
      plugin_id: 'plugin_id',
      canEdit: !0,
    },
  }),
}));

vi.mock('@coze-arch/bot-api', () => ({
  PluginDevelopApi: {
    RevokeAuthToken: vi
      .fn()
      .mockRejectedValueOnce(new Error('mockRejectedValue'))
      .mockResolvedValue(0),
    GetOAuthStatus: vi
      .fn()
      .mockResolvedValueOnce({
        is_oauth: !0,
        status: OAuthStatus.Authorized,
        content: 'content',
      })
      .mockResolvedValueOnce({
        is_oauth: !0,
        status: OAuthStatus.Unauthorized,
        content: 'content',
      })
      .mockResolvedValueOnce({
        is_oauth: !!0,
      })
      .mockResolvedValueOnce({
        is_oauth: !0,
        status: OAuthStatus.Unauthorized,
        content: 'content',
      }),
  },
}));

vi.stubGlobal('open', vi.fn());

describe('useAuthForApiTool', () => {
  it('useAuthForApiTool (三方服務 & 已授權 => 取消授權失敗 => 取消授權成功) is pass', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useAuthForApiTool());

    await waitForNextUpdate();

    expect(result.current.needAuth).toBe(!0);

    expect(result.current.isHasAuth).toBe(!0);

    try {
      await act(async () => await result.current.doCancelOauth());
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }

    expect(result.current.isHasAuth).toBe(!0);

    await act(async () => await result.current.doCancelOauth());

    expect(result.current.isHasAuth).toBe(!!0);
  });

  it('useAuthForApiTool (非三方服務 & 無需授權) is pass', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useAuthForApiTool());

    await waitForNextUpdate();

    expect(result.current.needAuth).toBe(!!0);

    expect(result.current.isHasAuth).toBe(!!0);
  });

  it('useAuthForApiTool (三方服務 & 未授權 => 去授權) is pass', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useAuthForApiTool());

    await waitForNextUpdate();

    expect(result.current.needAuth).toBe(!0);

    expect(result.current.isHasAuth).toBe(!!0);

    act(() => result.current.doOauth());
  });
});
