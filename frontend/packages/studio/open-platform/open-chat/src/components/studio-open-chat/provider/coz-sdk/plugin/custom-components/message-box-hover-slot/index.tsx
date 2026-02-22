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

import { useMemo, useRef } from 'react';

import cls from 'classnames';
import { useSize } from 'ahooks';
import { useMessageBoxContext } from '@coze-common/chat-area';
import {
  ActionBarHoverContainer,
  CopyTextMessage,
  QuoteMessage,
} from '@coze-common/chat-answer-action';

import { useChatAppProps } from '@/components/studio-open-chat/store';

import { useCurMessageInfo } from '../../hooks/use-cur-message-info';
import { DeleteMessage } from '../../components/delete-message';
import { useMessageHoverInfo } from './use-message-hover-info';

// 如果message不是最後一個message group的最後一條answer消息，那麼在hover時展示answer actions
export const UIKitMessageBoxHoverSlot: React.FC = () => {
  const { meta } = useMessageBoxContext();
  const { message } = useMessageBoxContext();
  const { readonly } = useChatAppProps();

  const isLastGroupMessage =
    meta.isGroupLastMessage &&
    meta.isFromLatestGroup &&
    message?.type === 'answer';

  if (isLastGroupMessage || readonly) {
    /*
     * 以下情況不展示footer：
     *  非最後一個message
     *  非回答message
     *  進行中的message
     */
    return null;
  }
  return <UIKitMessageBoxHoverSlotContent />;
};

const UIKitMessageBoxHoverSlotContent = () => {
  const popoverContainerRef = useRef<HTMLDivElement>(null);
  const actionBarRef = useRef<HTMLDivElement>(null);
  const { message } = useMessageBoxContext();
  const { showHoverText, isMultiMessage } = useMessageHoverInfo();
  const { isShowDelete, isNeedQuote } = useCurMessageInfo();
  const isShowHoverContainer = isShowDelete || !!showHoverText;

  const isShowQuote =
    message.type === 'answer' && !!showHoverText && isNeedQuote;
  const { width: actionBarSize } = useSize(actionBarRef) || {};
  const actionBarLeft = useMemo(() => {
    let containerSize = actionBarRef.current?.closest(
      '.coze-chat-hover-message-wrapper',
    )?.clientWidth;

    if (containerSize && isMultiMessage) {
      containerSize += 44;
      return actionBarSize && containerSize && actionBarSize > containerSize
        ? actionBarSize - containerSize
        : 0;
    }
    return 0;
  }, [actionBarSize]);
  if (!isShowHoverContainer) {
    return null;
  }

  console.log('actionBarSize:', {
    actionBarSize,
    actionBarLeft,
  });
  const wrapperClass = 'flex justify-center items-center';
  // 如果message不是最後一個message group 的消息，那麼在hover時展示answer actions
  return (
    <>
      <div
        className={cls(
          'w-full flex',
          isMultiMessage ? 'justify-start' : 'justify-end',
        )}
        style={{}}
      >
        <ActionBarHoverContainer
          style={{
            width: 'fit-content',
            zIndex: 2,
            position: 'relative',
            left: actionBarLeft,
          }}
          ref={actionBarRef}
        >
          {showHoverText ? (
            <CopyTextMessage
              wrapperClass={wrapperClass}
              isUseExternalContent={true}
              externalContent={showHoverText}
              isMustGroupLastAnswerMessage={false}
            />
          ) : null}
          {isShowDelete ? <DeleteMessage /> : null}
          {isShowQuote ? <QuoteMessage /> : null}
        </ActionBarHoverContainer>
      </div>
      {/** 多popover嵌套，會導致定位不準確，因此用一個空白的站位來定位popover */}

      <div
        ref={popoverContainerRef}
        style={{ width: 0, height: 0, position: 'relative' }}
      />
    </>
  );
};
