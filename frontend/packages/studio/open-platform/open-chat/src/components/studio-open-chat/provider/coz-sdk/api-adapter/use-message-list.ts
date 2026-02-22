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

import { useCallback, useMemo } from 'react';

import { type SceneConfig } from '@coze-common/chat-core';
import { type MixInitResponse } from '@coze-common/chat-area';

import { useChatCozeSdk } from '../context';
import { useChatAppProps } from '../../../store';
import { messageConverterToCoze } from './message';

type ChatMessageList = MixInitResponse['messageList'];
export const useMessageList = (): SceneConfig => {
  const getMessageListByPairs = useGetMessageListByPairs();
  const { chatConfig } = useChatAppProps();
  const { bot_id: botId } = chatConfig || {};
  const { refMessageListLeft } = useChatCozeSdk();
  return useMemo(() => {
    const onAfterResponse = [
      response => {
        const { data } = response;
        const conversationId = response.config?.params?.conversation_id;
        const lastMessageList =
          (refMessageListLeft?.current?.[conversationId] as ChatMessageList) ||
          [];
        const lastAnswerChatId =
          lastMessageList[lastMessageList.length - 1]?.reply_id;
        if (lastAnswerChatId) {
          if (
            data.data?.[0].type === 'question' &&
            !data.message_list?.[0].chatId
          ) {
            data.data[0].chat_id = lastAnswerChatId;
          }
        }
        const dataForCoze = messageConverterToCoze.convertMessageListResponse(
          data,
          botId,
        );

        return {
          ...response,
          data: {
            ...dataForCoze,
            message_list: getMessageListByPairs(
              conversationId,
              dataForCoze.message_list,
            ),
          },
        };
      },
    ];
    return {
      url: '/v1/conversation/message/list',
      hooks: {
        onBeforeRequest: [
          requestConfig => {
            const conversationId = requestConfig.data.conversation_id;
            const data = {
              after_id: requestConfig.data.cursor,
              limit: requestConfig.data.count,
            };

            return {
              ...requestConfig,
              data,
              params: {
                conversation_id: conversationId,
              },
            };
          },
        ],
        onErrorResponse: onAfterResponse,
        onAfterResponse,
      },
    };
  }, [botId]);
};

// 接口返回的數據，並能保證 問題、回答 成對返回，因此需要將多返回的 回答 保存下來，等下次請求數據中的第一條數據是同一個 對話的時候，拼接上去。
export const useGetMessageListByPairs = () => {
  const { refMessageListLeft } = useChatCozeSdk();
  return useCallback(
    (conversationId: string, messageList: ChatMessageList = []) => {
      const messageListLeft: ChatMessageList = []; // 需要留下來的
      const messageListResponse: ChatMessageList = []; // 需要返回給前端的
      for (let i = 0; i < messageList.length; i++) {
        if (messageList[i].type !== 'question') {
          messageListLeft.push(messageList[i]);
        } else {
          messageListResponse.push(...messageListLeft);
          messageListLeft.splice(0, messageListLeft.length);
          messageListResponse.push(messageList[i]);
        }
      }
      const lastMessageList =
        (refMessageListLeft?.current?.[conversationId] as ChatMessageList) ||
        [];
      // 將上次遺留的數據，拼接上去
      if (lastMessageList.length) {
        if (lastMessageList[0]?.reply_id === messageListResponse[0]?.reply_id) {
          messageListResponse.unshift(...lastMessageList);
        }
      }

      // 重置本次遺留的數據
      if (refMessageListLeft?.current) {
        refMessageListLeft.current[conversationId] = messageListLeft;
      }
      return messageListResponse;
    },
    [],
  );
};
