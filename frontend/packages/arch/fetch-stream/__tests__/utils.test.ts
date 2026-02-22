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

import {
  onStart,
  validateChunk,
  isFetchStreamErrorInfo,
  getStreamingErrorInfo,
  getFetchErrorInfo,
  isAbortError,
} from '../src/utils';
import { FetchStreamErrorCode } from '../src/type';

describe('utils', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('onStart', () => {
    it('應該調用 inputOnStart 函數', async () => {
      const inputOnStart = vi.fn().mockResolvedValue(undefined);
      const mockResponse = {
        ok: true,
        body: new ReadableStream(),
        status: 200,
      } as Response;

      await onStart(mockResponse, inputOnStart);

      expect(inputOnStart).toHaveBeenCalledWith(mockResponse);
    });

    it('當 response.ok 爲 false 時應該拋出錯誤', async () => {
      const mockResponse = {
        ok: false,
        body: new ReadableStream(),
        status: 500,
      } as Response;

      await expect(onStart(mockResponse, undefined)).rejects.toThrow(
        'Invalid Response, ResponseStatus: 500',
      );
    });

    it('當 response.body 爲 null 時應該拋出錯誤', async () => {
      const mockResponse = {
        ok: true,
        body: null,
        status: 200,
      } as Response;

      await expect(onStart(mockResponse, undefined)).rejects.toThrow(
        'Invalid Response, ResponseStatus: 200',
      );
    });

    it('當 inputOnStart 拋出錯誤時應該傳播錯誤', async () => {
      const inputOnStart = vi.fn().mockRejectedValue(new Error('Custom error'));
      const mockResponse = {
        ok: true,
        body: new ReadableStream(),
        status: 200,
      } as Response;

      await expect(onStart(mockResponse, inputOnStart)).rejects.toThrow(
        'Custom error',
      );
    });
  });

  describe('validateChunk', () => {
    it('應該成功驗證正常的文本塊', () => {
      expect(() => validateChunk('normal text')).not.toThrow();
    });

    it('應該成功驗證包含 code: 0 的 JSON', () => {
      const chunk = JSON.stringify({ code: 0, msg: 'success' });
      expect(() => validateChunk(chunk)).not.toThrow();
    });

    it('應該拋出包含非零 code 的 JSON 對象', () => {
      const errorObj = { code: 400, msg: 'Bad Request' };
      const chunk = JSON.stringify(errorObj);

      expect(() => validateChunk(chunk)).toThrow();
    });

    it('應該成功處理無效的 JSON', () => {
      expect(() => validateChunk('invalid json {')).not.toThrow();
    });

    it('應該成功處理非對象的 JSON', () => {
      expect(() => validateChunk('"string"')).not.toThrow();
      expect(() => validateChunk('123')).not.toThrow();
      expect(() => validateChunk('true')).not.toThrow();
    });

    it('應該成功處理沒有 code 字段的對象', () => {
      const chunk = JSON.stringify({ msg: 'no code field' });
      expect(() => validateChunk(chunk)).not.toThrow();
    });
  });

  describe('isFetchStreamErrorInfo', () => {
    it('應該識別有效的 FetchStreamErrorInfo', () => {
      const errorInfo = { code: 400, msg: 'Error message' };
      expect(isFetchStreamErrorInfo(errorInfo)).toBe(true);
    });

    it('應該拒絕缺少 code 字段的對象', () => {
      const obj = { msg: 'Error message' };
      expect(isFetchStreamErrorInfo(obj)).toBe(false);
    });

    it('應該拒絕缺少 msg 字段的對象', () => {
      const obj = { code: 400 };
      expect(isFetchStreamErrorInfo(obj)).toBe(false);
    });

    it('應該拒絕非對象值', () => {
      expect(isFetchStreamErrorInfo(null)).toBe(false);
      expect(isFetchStreamErrorInfo(undefined)).toBe(false);
      expect(isFetchStreamErrorInfo('string')).toBe(false);
      expect(isFetchStreamErrorInfo(123)).toBe(false);
    });
  });

  describe('getStreamingErrorInfo', () => {
    it('應該從 Error 對象中提取消息', () => {
      const error = new Error('Test error message');
      const result = getStreamingErrorInfo(error);

      expect(result).toEqual({
        msg: 'Test error message',
        code: FetchStreamErrorCode.HttpChunkStreamingException,
        error,
      });
    });

    it('應該從 FetchStreamErrorInfo 對象中提取信息', () => {
      const errorInfo = { code: 400, msg: 'Custom error' };
      const result = getStreamingErrorInfo(errorInfo);

      expect(result).toEqual({
        msg: 'Custom error',
        code: 400,
        error: errorInfo,
      });
    });

    it('應該處理未知錯誤類型', () => {
      const error = 'string error';
      const result = getStreamingErrorInfo(error);

      expect(result).toEqual({
        msg: 'An exception occurred during the process of dealing with HTTP chunked streaming response.',
        code: FetchStreamErrorCode.HttpChunkStreamingException,
        error,
      });
    });
  });

  describe('getFetchErrorInfo', () => {
    it('應該從 Error 對象中提取消息', () => {
      const error = new Error('Fetch failed');
      const result = getFetchErrorInfo(error);

      expect(result).toEqual({
        msg: 'Fetch failed',
        code: FetchStreamErrorCode.FetchException,
        error,
      });
    });

    it('應該處理非 Error 對象', () => {
      const error = 'fetch error';
      const result = getFetchErrorInfo(error);

      expect(result).toEqual({
        msg: 'An exception occurred during the fetch',
        code: FetchStreamErrorCode.FetchException,
        error,
      });
    });
  });

  describe('isAbortError', () => {
    it('應該識別 AbortError', () => {
      const abortError = new DOMException(
        'The operation was aborted',
        'AbortError',
      );
      expect(isAbortError(abortError)).toBe(true);
    });

    it('應該拒絕其他 DOMException', () => {
      const otherError = new DOMException('Other error', 'OtherError');
      expect(isAbortError(otherError)).toBe(false);
    });

    it('應該拒絕普通 Error', () => {
      const error = new Error('Normal error');
      expect(isAbortError(error)).toBe(false);
    });

    it('應該拒絕非錯誤對象', () => {
      expect(isAbortError('string')).toBe(false);
      expect(isAbortError(null)).toBe(false);
      expect(isAbortError(undefined)).toBe(false);
    });
  });
});
