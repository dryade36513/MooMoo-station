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

/* eslint-disable @typescript-eslint/no-explicit-any */
import { RecallSlices } from '../src';

export function DemoRecallSlices() {
  const mockLLMOutputs = [
    {
      meta: {
        dataset: {
          id: 111,
          type: '文檔',
          name: '筆記軟件評測',
        },
        document: {
          id: 222,
          source: '本地',
          name: 'Flomo',
        },
        link: {
          title:
            '[Research for Operations] KK Search Comprehensive User Mental Research Report',
          // cp-disable-next-line
          url: 'https://flomoapp.com/',
          uniq_key: '文檔_筆記軟件評測_本地_Flomo',
        },
        title:
          '[Research for Operations] KK Search Comprehensive User Mental Research Report',
        score: 0.7,
      },
      content:
        'Flomo：特色是「便捷記錄閃念筆記」，可以通過微信服務號、iOS快捷指令和API輸入筆記，用於捕捉一閃即逝的想法。還可以不斷地在閱讀、消費信息的過程中記錄，這是一個解釋的過程.',
    },
    {
      meta: {
        dataset: {
          id: 111,
          type: '文檔',
          name: '筆記軟件評測',
        },
        document: {
          id: 222,
          source: '本地',
          name: 'Flomo',
        },
        link: {
          title:
            '[Research for Operations] KK Search Comprehensive User Mental Research Report',
          // cp-disable-next-line
          url: 'https://flomoapp.com/',
          uniq_key: '文檔_筆記軟件評測_本地_Flomo',
        },
        title:
          '[Research for Operations] KK Search Comprehensive User Mental Research Report',
        score: 0.7,
      },
      content:
        'Flomo：特色是「便捷記錄閃念筆記」，可以通過微信服務號、iOS快捷指令和API輸入筆記，用於捕捉一閃即逝的想法。還可以不斷地在閱讀、消費信息的過程中記錄，這是一個解釋的過程，也是一個向大腦“寫入”的過程,特色是「便捷記錄閃念筆記」，可以通過微信服務號、iOS快捷指令和API輸入筆記，用於捕捉一閃即逝的想法。還可以不斷地在閱讀、消費信息的過程中記錄，這是一個解釋的過程，也是一個向大腦“寫入”的過程,特色是「便捷記錄閃念筆記」，可以通過微信服務號、iOS快捷指令和API輸入筆記，用於捕捉一閃即逝的想法。還可以不斷地在閱讀、消費信息的過程中記錄，這是一個解釋的過程，也是一個向大腦“寫入”的過程.',
    },
  ];
  return <RecallSlices llmOutputs={mockLLMOutputs as unknown as any} />;
}
