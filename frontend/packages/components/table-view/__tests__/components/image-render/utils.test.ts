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

import {
  getBase64,
  getUint8Array,
  getFileExtension,
  isValidSize,
} from '../../../src/components/renders/image-render/utils';

// Simulate CustomError
vi.mock('@coze-arch/bot-error', () => ({
  CustomError: class CustomError extends Error {
    constructor(event: string, message: string) {
      super(message);
      this.name = 'CustomError';
    }
  },
}));

describe('getFileExtension', () => {
  test('應該正確提取文件擴展名', () => {
    expect(getFileExtension('image.jpg')).toBe('jpg');
    expect(getFileExtension('document.pdf')).toBe('pdf');
    expect(getFileExtension('archive.tar.gz')).toBe('gz');
    expect(getFileExtension('file.with.multiple.dots.txt')).toBe('txt');
  });

  test('對於沒有擴展名的文件應返回整個文件名', () => {
    expect(getFileExtension('filename')).toBe('filename');
  });
});

describe('isValidSize', () => {
  test('文件大小小於限制時應返回true', () => {
    // 20MB limit
    const validSize = 10 * 1024 * 1024; // 10MB
    expect(isValidSize(validSize)).toBe(true);
  });

  test('文件大小等於限制時應返回false', () => {
    const limitSize = 20 * 1024 * 1024; // 20MB
    expect(isValidSize(limitSize)).toBe(false);
  });

  test('文件大小大於限制時應返回false', () => {
    const invalidSize = 30 * 1024 * 1024; // 30MB
    expect(isValidSize(invalidSize)).toBe(false);
  });
});

describe('getBase64', () => {
  test('應該正確轉換文件爲base64字符串', async () => {
    // Create a simulated blob object
    const mockBlob = new Blob(['test content'], { type: 'text/plain' });

    // Analog FileReader
    const mockFileReader = {
      readAsDataURL: vi.fn(),
      onload: null as any,
      onerror: null as any,
      onabort: null as any,
    };

    // Save the original FileReader
    const originalFileReader = global.FileReader;

    // Mock FileReader constructor
    global.FileReader = vi.fn(() => mockFileReader) as any;

    // Call getBase64
    const promise = getBase64(mockBlob);

    // Trigger onload event
    mockFileReader.onload({
      target: {
        result: 'data:text/plain;base64,dGVzdCBjb250ZW50',
      },
    } as any);

    // validation result
    const result = await promise;
    expect(result).toBe('dGVzdCBjb250ZW50');
    expect(mockFileReader.readAsDataURL).toHaveBeenCalledWith(mockBlob);

    // Restore the original FileReader
    global.FileReader = originalFileReader;
  });

  test('當FileReader.onload返回非字符串結果時應拒絕Promise', async () => {
    // Create a simulated blob object
    const mockBlob = new Blob(['test content'], { type: 'text/plain' });

    // Analog FileReader
    const mockFileReader = {
      readAsDataURL: vi.fn(),
      onload: null as any,
      onerror: null as any,
      onabort: null as any,
    };

    // Save the original FileReader
    const originalFileReader = global.FileReader;

    // Mock FileReader constructor
    global.FileReader = vi.fn(() => mockFileReader) as any;

    // Call getBase64
    const promise = getBase64(mockBlob);

    // Fires the onload event, but returns a non-string result
    mockFileReader.onload({
      target: {
        result: null,
      },
    } as any);

    // Verification Promise Rejected
    await expect(promise).rejects.toThrow('file read invalid');

    // Restore the original FileReader
    global.FileReader = originalFileReader;
  });

  test('當FileReader.onerror觸發時應拒絕Promise', async () => {
    // Create a simulated blob object
    const mockBlob = new Blob(['test content'], { type: 'text/plain' });

    // Analog FileReader
    const mockFileReader = {
      readAsDataURL: vi.fn(),
      onload: null as any,
      onerror: null as any,
      onabort: null as any,
    };

    // Save the original FileReader
    const originalFileReader = global.FileReader;

    // Mock FileReader constructor
    global.FileReader = vi.fn(() => mockFileReader) as any;

    // Call getBase64
    const promise = getBase64(mockBlob);

    // Trigger the onerror event
    mockFileReader.onerror();

    // Verification Promise Rejected
    await expect(promise).rejects.toThrow('file read fail');

    // Restore the original FileReader
    global.FileReader = originalFileReader;
  });

  test('當FileReader.onabort觸發時應拒絕Promise', async () => {
    // Create a simulated blob object
    const mockBlob = new Blob(['test content'], { type: 'text/plain' });

    // Analog FileReader
    const mockFileReader = {
      readAsDataURL: vi.fn(),
      onload: null as any,
      onerror: null as any,
      onabort: null as any,
    };

    // Save the original FileReader
    const originalFileReader = global.FileReader;

    // Mock FileReader constructor
    global.FileReader = vi.fn(() => mockFileReader) as any;

    // Call getBase64
    const promise = getBase64(mockBlob);

    // Trigger onabort event
    mockFileReader.onabort();

    // Verification Promise Rejected
    await expect(promise).rejects.toThrow('file read abort');

    // Restore the original FileReader
    global.FileReader = originalFileReader;
  });
});

describe('getUint8Array', () => {
  test('應該正確轉換文件爲Uint8Array', async () => {
    // Create a simulated blob object
    const mockBlob = new Blob(['test content'], { type: 'text/plain' });

    // Create a simulated ArrayBuffer
    const mockArrayBuffer = new ArrayBuffer(12); // Length of'test content '
    const uint8Array = new Uint8Array(mockArrayBuffer);
    for (let i = 0; i < 12; i++) {
      uint8Array[i] = 'test content'.charCodeAt(i);
    }

    // Analog FileReader
    const mockFileReader = {
      readAsArrayBuffer: vi.fn(),
      onload: null as any,
    };

    // Save the original FileReader
    const originalFileReader = global.FileReader;

    // Mock FileReader constructor
    global.FileReader = vi.fn(() => mockFileReader) as any;

    // Call getUint8Array
    const promise = getUint8Array(mockBlob);

    // Trigger onload event
    mockFileReader.onload({
      target: {
        result: mockArrayBuffer,
      },
    } as any);

    // validation result
    const result = await promise;
    expect(result).toBeInstanceOf(Uint8Array);
    expect(result.length).toBe(12);
    expect(mockFileReader.readAsArrayBuffer).toHaveBeenCalledWith(mockBlob);

    // Restore the original FileReader
    global.FileReader = originalFileReader;
  });

  test('當FileReader.onload返回無效結果時應拒絕Promise', async () => {
    // Create a simulated blob object
    const mockBlob = new Blob(['test content'], { type: 'text/plain' });

    // Analog FileReader
    const mockFileReader = {
      readAsArrayBuffer: vi.fn(),
      onload: null as any,
    };

    // Save the original FileReader
    const originalFileReader = global.FileReader;

    // Mock FileReader constructor
    global.FileReader = vi.fn(() => mockFileReader) as any;

    // Call getUint8Array
    const promise = getUint8Array(mockBlob);

    // The onload event is fired, but an invalid result is returned
    mockFileReader.onload({
      target: {
        result: null,
      },
    } as any);

    // Verification Promise Rejected
    await expect(promise).rejects.toThrow('file read invalid');

    // Restore the original FileReader
    global.FileReader = originalFileReader;
  });
});
