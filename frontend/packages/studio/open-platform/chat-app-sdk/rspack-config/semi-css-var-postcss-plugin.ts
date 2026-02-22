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

/**
 * PostCSS 插件：爲 Semi 組件類名和 CSS 變量添加前綴
 * 解決 coze-design 裏 hardcode 的 .semi-xxx 類名與 prefixCls 不匹配導致樣式失效問題
 * 兼容多類名、嵌套、僞類、組合選擇器等複雜情況
 *
 * 注意：本插件應在 coze-design 的樣式被引入後生效，確保所有 .semi-xxx 都能被正確加前綴
 *
 * 已添加調試代碼，可通過環境變量 DEBUG_SEMI_CSS_VAR_PLUGIN 控制輸出
 */

import type { PluginCreator } from 'postcss';

export const PREFIX_CLASS = 'coze-chat-sdk-semi';
const CSS_VAR_PREFIX = `${PREFIX_CLASS}-`;
const SEMI_CLASS_PREFIX = 'semi-';
const CUSTOM_CLASS_PREFIX = `${PREFIX_CLASS}-`;

// 處理選擇器，將 .semi-xxx 替換爲 .coze-chat-sdk-semi-xxx
function processSelector(selector: string): string {
  // 只處理 .semi-xxx（不管前面有無其它類名、僞類、組合等）
  // 例如：.semi-button、.semi-button-primary:hover、.foo .semi-button.bar
  // 注意：不要重複加前綴
  // 兼容 :is(.semi-button), :not(.semi-button), .semi-button:hover, .semi-button.foo
  // 兼容多個選擇器用逗號分隔的情況
  const replaced = selector.replace(
    /\.semi-([a-zA-Z0-9_-]+)/g,
    (match, className) => {
      // 已經有前綴的不處理
      if (match.includes(`.${CUSTOM_CLASS_PREFIX}`)) {
        return match;
      }
      return `.${CUSTOM_CLASS_PREFIX}${className}`;
    },
  );
  return replaced;
}

const semiCssVarPrefixPlugin: PluginCreator<void> = () => ({
  postcssPlugin: 'semi-css-var-prefix',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Rule(rule) {
    // 只要選擇器裏有 .semi-，就處理
    if (rule.selector && rule.selector.includes(`.${SEMI_CLASS_PREFIX}`)) {
      rule.selector = processSelector(rule.selector);
    }
  },
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Declaration(decl) {
    // 處理 CSS 變量定義
    if (decl.prop && decl.prop.startsWith('--semi-')) {
      decl.prop = decl.prop.replace(/^--semi-/, `--${CSS_VAR_PREFIX}`);
    }

    // 處理 CSS 變量引用
    if (decl.value && decl.value.includes('var(--semi-')) {
      decl.value = decl.value.replace(
        /var\(--semi-([a-zA-Z0-9_-]+)\)/g,
        `var(--${CSS_VAR_PREFIX}$1)`,
      );
    }

    // 處理 rgba(var(--semi-xxx), ...)
    if (decl.value && decl.value.includes('rgba(var(--semi-')) {
      decl.value = decl.value.replace(
        /rgba\(var\(--semi-([a-zA-Z0-9_-]+)\)/g,
        `rgba(var(--${CSS_VAR_PREFIX}$1)`,
      );
    }
  },
});

semiCssVarPrefixPlugin.postcss = true;

export default semiCssVarPrefixPlugin;
