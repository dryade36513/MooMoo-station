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

import { describe, expect, it } from 'vitest';

import { getFileInfo } from '../src/util';
import { FileTypeEnum } from '../src/const';

// Create a simulated File object
function createMockFile(name: string, type: string): File {
  return {
    name,
    type,
    size: 1024,
    lastModified: Date.now(),
    slice: () => new Blob(),
    arrayBuffer: () => Promise.resolve(new ArrayBuffer(0)),
    stream: () => new ReadableStream(),
    text: () => Promise.resolve(''),
  } as File;
}

describe('getFileInfo', () => {
  it('應該根據文件類型識別圖片文件', () => {
    const file = createMockFile('test.jpg', 'image/jpeg');
    const fileInfo = getFileInfo(file);

    expect(fileInfo).not.toBeNull();
    expect(fileInfo?.fileType).toBe(FileTypeEnum.IMAGE);
  });

  it('應該根據文件類型識別音頻文件', () => {
    const file = createMockFile('test.mp3', 'audio/mpeg');
    const fileInfo = getFileInfo(file);

    expect(fileInfo).not.toBeNull();
    expect(fileInfo?.fileType).toBe(FileTypeEnum.AUDIO);
  });

  it('應該根據文件類型識別視頻文件', () => {
    const file = createMockFile('test.mp4', 'video/mp4');
    const fileInfo = getFileInfo(file);

    expect(fileInfo).not.toBeNull();
    expect(fileInfo?.fileType).toBe(FileTypeEnum.VIDEO);
  });

  it('應該根據文件擴展名識別 PDF 文件', () => {
    const file = createMockFile('document.pdf', 'application/pdf');
    const fileInfo = getFileInfo(file);

    expect(fileInfo).not.toBeNull();
    expect(fileInfo?.fileType).toBe(FileTypeEnum.PDF);
  });

  it('應該根據文件擴展名識別 DOCX 文件', () => {
    const file = createMockFile(
      'document.docx',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    );
    const fileInfo = getFileInfo(file);

    expect(fileInfo).not.toBeNull();
    expect(fileInfo?.fileType).toBe(FileTypeEnum.DOCX);
  });

  it('應該根據文件擴展名識別 EXCEL 文件', () => {
    const file = createMockFile(
      'spreadsheet.xlsx',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    const fileInfo = getFileInfo(file);

    expect(fileInfo).not.toBeNull();
    expect(fileInfo?.fileType).toBe(FileTypeEnum.EXCEL);
  });

  it('應該根據文件擴展名識別 CSV 文件', () => {
    const file = createMockFile('data.csv', 'text/csv');
    const fileInfo = getFileInfo(file);

    expect(fileInfo).not.toBeNull();
    expect(fileInfo?.fileType).toBe(FileTypeEnum.CSV);
  });

  it('應該根據文件擴展名識別壓縮文件', () => {
    const file = createMockFile('archive.zip', 'application/zip');
    const fileInfo = getFileInfo(file);

    expect(fileInfo).not.toBeNull();
    expect(fileInfo?.fileType).toBe(FileTypeEnum.ARCHIVE);
  });

  it('應該根據文件擴展名識別代碼文件', () => {
    const file = createMockFile('script.js', 'text/javascript');
    const fileInfo = getFileInfo(file);

    expect(fileInfo).not.toBeNull();
    expect(fileInfo?.fileType).toBe(FileTypeEnum.CODE);
  });

  it('應該根據文件擴展名識別文本文件', () => {
    const file = createMockFile('notes.txt', 'text/plain');
    const fileInfo = getFileInfo(file);

    expect(fileInfo).not.toBeNull();
    expect(fileInfo?.fileType).toBe(FileTypeEnum.TXT);
  });

  it('應該根據文件擴展名識別 PPT 文件', () => {
    const file = createMockFile(
      'presentation.pptx',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    );
    const fileInfo = getFileInfo(file);

    expect(fileInfo).not.toBeNull();
    expect(fileInfo?.fileType).toBe(FileTypeEnum.PPT);
  });

  it('應該對未知文件類型返回默認類型', () => {
    const file = createMockFile('unknown.xyz', 'application/octet-stream');
    const fileInfo = getFileInfo(file);

    expect(fileInfo).not.toBeNull();
    expect(fileInfo?.fileType).toBe(FileTypeEnum.DEFAULT_UNKNOWN);
  });

  it('當文件類型和擴展名不匹配時，應該優先使用文件類型判斷', () => {
    // The file name is .txt, but the MIME type is image
    const file = createMockFile('image.txt', 'image/jpeg');
    const fileInfo = getFileInfo(file);

    expect(fileInfo).not.toBeNull();
    expect(fileInfo?.fileType).toBe(FileTypeEnum.IMAGE);
  });

  it('當文件沒有 MIME 類型時，應該使用擴展名判斷', () => {
    const file = createMockFile('document.docx', '');
    const fileInfo = getFileInfo(file);

    expect(fileInfo).not.toBeNull();
    expect(fileInfo?.fileType).toBe(FileTypeEnum.DOCX);
  });
});
