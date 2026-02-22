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

import { useEffect } from 'react';

import {
  AuthType,
  ChatType,
  Language,
  Layout,
} from '@coze-studio/open-chat/types';

import { WebChatClient } from '@/client';

export const TestClientDemo = () => {
  useEffect(() => {
    new WebChatClient({
      config: {
        type: ChatType.BOT,
        appInfo: {
          appId: process.env.CHAT_APP_CHATFLOW_COZE_APP_ID || '',
          workflowId: process.env.CHAT_APP_CHATFLOW_COZE_WORKFLOW_ID || '',
        },

        botInfo: {
          botId: process.env.CHAT_APP_INDEX_COZE_BOT_ID || '',
          parameters: {
            botId: process.env.CHAT_APP_INDEX_COZE_BOT_ID || '',
            botName: '歷史學教授',
          },
        },
      },

      auth: {
        type: AuthType.TOKEN,
        token: process.env.CHAT_APP_COZE_TOKEN || '',
        onRefreshToken: () => process.env.CHAT_APP_COZE_TOKEN || '',
      },
      componentProps: {
        title: '歷史學教授',
        lang: Language.ZH_CN,
        layout: Layout.PC,
      },
      extra: {
        webChat: {
          test: '123123',
        },
      },
      ui: {
        asstBtn: {
          isNeed: true,
        },
        chatBot: {
          title: '歷史學教授33',
          uploadable: true,
          isNeedAudio: true,
          isNeedFunctionCallMessage: true,
          isNeedQuote: true,
          feedback: {
            isNeedFeedback: true,
            feedbackPanel: {
              title:
                '起來不是一個有明確意義的旅遊相關問題哦。你可以告訴我關於旅遊的具體問題，比如想去的旅遊目的地、旅遊預算、旅遊方',
              tags: [
                {
                  label: '信息不正確',
                },
                {
                  label: '涉及敏感信息',
                  isNeedDetail: true,
                },
              ],
            },
          },
        },
        header: {
          isShow: true,
          isNeedClose: true,
        },
        footer: {
          isShow: true,
          expressionText: ' 由{{name}}提sdd供',
          linkvars: {
            name: {
              text: 'Coze',
              link: 'https://www.coze.com',
            },
          },
        },
        conversations: {
          isNeed: true,
        },
        base: {
          layout: Layout.PC,
          lang: Language.ZH_CN,
        },
      },
      userInfo: {
        id: '12334',
        url: process.env.CHAT_APP_COZE_BOT_USER_URL || '',
        nickname: '3qweqweq4we',
      },
    });
  }, []);
  return <div></div>;
};
