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

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { I18n } from '@coze-arch/i18n';
import { UIToast } from '@coze-arch/bot-semi';

import { hasBraces, verifyBracesAndToast } from '../../src/utils/submit';

// Analog UIToast and I18n
vi.mock('@coze-arch/bot-semi', () => ({
  UIToast: {
    warning: vi.fn(),
  },
}));

vi.mock('@coze-arch/i18n', () => ({
  I18n: {
    t: vi.fn(key => {
      if (key === 'bot_prompt_bracket_error') {
        return '模板變量錯誤提示';
      }
      return key;
    }),
  },
}));

describe('submit utils', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  describe('hasBraces', () => {
    it('當字符串包含 {{}} 時應該返回 true', () => {
      expect(hasBraces('這是一個包含 {{變量}} 的字符串')).toBe(true);
      expect(hasBraces('{{變量}}')).toBe(true);
      expect(hasBraces('前綴{{變量}}後綴')).toBe(true);
    });

    it('當字符串不包含 {{}} 時應該返回 false', () => {
      expect(hasBraces('這是一個普通字符串')).toBe(false);
      expect(hasBraces('這是一個包含 { 單括號 } 的字符串')).toBe(false);
      expect(hasBraces('')).toBe(false);
    });
  });

  describe('verifyBracesAndToast', () => {
    it('當 isAll=true 且字符串包含 {{}} 時，應該顯示 toast 並返回 false', () => {
      const result = verifyBracesAndToast('包含 {{變量}} 的字符串', true);

      expect(result).toBe(false);
      expect(UIToast.warning).toHaveBeenCalledTimes(1);
      expect(UIToast.warning).toHaveBeenCalledWith({
        showClose: false,
        content: '模板變量錯誤提示',
      });
      expect(I18n.t).toHaveBeenCalledWith('bot_prompt_bracket_error');
    });

    it('當 isAll=true 但字符串不包含 {{}} 時，應該返回 true 且不顯示 toast', () => {
      const result = verifyBracesAndToast('普通字符串', true);

      expect(result).toBe(true);
      expect(UIToast.warning).not.toHaveBeenCalled();
    });

    it('當 isAll=false 時，無論字符串是否包含 {{}}，都應該返回 true 且不顯示 toast', () => {
      const result1 = verifyBracesAndToast('包含 {{變量}} 的字符串', false);
      const result2 = verifyBracesAndToast('普通字符串', false);

      expect(result1).toBe(true);
      expect(result2).toBe(true);
      expect(UIToast.warning).not.toHaveBeenCalled();
    });

    it('默認 isAll 爲 false', () => {
      const result = verifyBracesAndToast('包含 {{變量}} 的字符串');

      expect(result).toBe(true);
      expect(UIToast.warning).not.toHaveBeenCalled();
    });
  });
});
