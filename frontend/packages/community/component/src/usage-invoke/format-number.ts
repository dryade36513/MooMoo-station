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

// 將數字轉換成百分數, 向上取整
export const formatNumber = (num?: number): string => {
  if (num === undefined || num === null) {
    return '-';
  }

  let formatted = '';
  if (num >= 10000) {
    formatted = (num / 10000).toFixed(1);
    // 如果小數點後一位是0，則移除小數點和0
    if (formatted.endsWith('.0')) {
      formatted = formatted.slice(0, -2);
    }
    // 添加w並返回結果
    formatted = `${formatted}w`;
  } else {
    formatted = num.toString();
  }

  return formatted;
};
