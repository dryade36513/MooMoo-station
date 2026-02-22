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

import { RemoteWebWorker, register } from '../src/index';

// Get the simulation function
const mockCreateObjectURL = vi.mocked(URL.createObjectURL);

describe('RemoteWebWorker', () => {
  beforeEach(() => {
    // Clear simulated call record
    vi.clearAllMocks();
  });

  describe('constructor', () => {
    it('應該直接使用本地 URL', () => {
      const localUrl = 'worker.js';
      const options = { type: 'module' };

      new RemoteWebWorker(localUrl, options);

      expect(mockCreateObjectURL).not.toHaveBeenCalled();
    });

    it('應該直接使用同源的遠程 URL', () => {
      const sameOriginUrl = 'https://example.com/worker.js';
      const options = { type: 'module' };

      new RemoteWebWorker(sameOriginUrl, options);

      expect(mockCreateObjectURL).not.toHaveBeenCalled();
    });

    it('應該直接使用 blob URL', () => {
      const blobUrl = 'blob:https://example.com/worker.js';
      const options = { type: 'module' };

      new RemoteWebWorker(blobUrl, options);

      expect(mockCreateObjectURL).not.toHaveBeenCalled();
    });

    it('應該爲跨域 URL 創建 Blob 並使用 URL.createObjectURL', () => {
      const crossOriginUrl = 'https://other-domain.com/worker.js';
      const options = { type: 'module' };

      new RemoteWebWorker(crossOriginUrl, options);

      expect(mockCreateObjectURL).toHaveBeenCalledTimes(1);

      // Verify the content of the created blob
      const blobArg = mockCreateObjectURL.mock.calls[0][0];
      expect(blobArg).toBeInstanceOf(Blob);
      // Since the content of the blob cannot be accessed directly, we can only verify that it was created
    });

    it('應該處理非字符串 URL', () => {
      const nonStringUrl = {
        toString: () => 'https://other-domain.com/worker.js',
      };
      const options = { type: 'module' };

      new RemoteWebWorker(nonStringUrl as any, options);

      expect(mockCreateObjectURL).toHaveBeenCalledTimes(1);
    });
  });
});

describe('register', () => {
  it('應該將全局 Worker 替換爲 RemoteWebWorker', () => {
    // Create a simulated global object
    const mockGlobal = {
      worker() {
        /* empty function */
      },
    };

    // Rename the worker property to Worker to test the register function
    Object.defineProperty(mockGlobal, 'Worker', {
      get() {
        return this.worker;
      },
      set(value) {
        this.worker = value;
      },
      enumerable: true,
      configurable: true,
    });

    register(mockGlobal as any);

    expect(mockGlobal.worker).toBe(RemoteWebWorker);
  });

  it('當全局對象未定義時不應該拋出錯誤', () => {
    expect(() => register(undefined as any)).not.toThrow();
  });
});
