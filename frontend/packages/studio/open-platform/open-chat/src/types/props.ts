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

import type { CSSProperties, FC, ReactNode } from 'react';

import { type InputNativeCallbacks } from '@coze-common/chat-uikit-shared';
import { type RequestManagerOptions } from '@coze-common/chat-core';
import {
  type MixInitResponse,
  type ChatAreaEventCallback,
} from '@coze-common/chat-area';
import { type CozeAPI } from '@coze/api';

import { type SDKInitError } from '@/util/error';
import { type OpenBotInfo, type OpenUserInfo } from '@/types/user';
import { type CozeChatConfig, type Layout } from '@/types/client';
import { type InitErrorFallback } from '@/components/error-fallback';

export { type CozeChatConfig };
export interface ConversationInfo {
  conversationId: string;
  sectionId: string;
}

export enum EInputMode {
  Text = 'text',
  Voice = 'voice',
  VoiceCall = 'call',
}

export interface DebugProps {
  cozeApiRequestHeader?: Record<string, string>;
}

export interface OpenRequestInit {
  prologue: string;
  onboardingSuggestions: Array<{
    id: string;
    content: string;
  }>;
  botInfo: OpenBotInfo;
  backgroundInfo?: MixInitResponse['backgroundInfo'];
  conversationId?: string; // 自定義生成的conversationId
  sectionId?: string; // sectionId
  defaultInputMode?: EInputMode;
  isCustomBackground?: boolean;
  /**
   * @description 在會話列表中，根據選中的會話初始化的時候需要複寫 openRequestInit 這個方法，但是 webSDK 又不需要 botInfo 信息
   */
  isBuilderChat?: boolean;
}
export interface AutoBilling {
  entityType: 'bot' | 'workflow';
  entityId: string;
}
export interface StudioChatProviderProps {
  className?: string;
  spaceId?: string;
  userInfo?: OpenUserInfo;
  chatConfig: CozeChatConfig;
  layout?: Layout;
  openRequestInit?:
    | OpenRequestInit
    | {
        (cozeApi?: CozeAPI): Promise<OpenRequestInit> | OpenRequestInit;
      };
  requestManagerOptions?: RequestManagerOptions; // 僅僅 coze-sdk可用
  onImageClick?: ChatAreaEventCallback['onImageClick'];
  onMessageLinkClick?: ChatAreaEventCallback['onMessageLinkClick'];
  /**
   * 對話區加載 成功/失敗 事件
   */
  onInitStateChange?: (
    status: 'initSuccess' | 'initFail',
    errorInfo?: SDKInitError,
  ) => void;
  /**
   * 允許自定義
   * 初始化接口(onboarding)報錯
   * or
   * chatArea 初始化錯誤
   * 的 fallback 組件
   */
  initErrorFallbackFC?: FC<InitErrorFallback>;

  /**
   * 生效條件: userInfo.nickname && !openRequestInit
   * replace(prologue, '{{user_name}}', userInfo.nickname)
   */
  enableReplacePrologueNicknameWithVar?: boolean;
  onThemeChange?: (theme: 'bg-theme' | 'light') => void;
  onDefaultHistoryClear?: () => void;
  defaultHistoryMessage?: MixInitResponse['messageList'];
  debug?: DebugProps;
  isCustomBackground?: boolean;
  isNeedVoiceCall?: boolean;
  readonly?: boolean;
}

export interface StudioChatAreaProps {
  className?: string;
  coreAreaClassName?: string;
  showInputArea?: boolean;
  inputPlaceholder?: string;
  isDisabled?: boolean;
  inputNativeCallbacks?: InputNativeCallbacks;
  messageGroupListClassName?: string;
  isShowClearContextDivider?: boolean;
  renderChatInputTopSlot?: () => React.ReactNode;
  headerNode?: React.ReactNode;
  messageMaxWidth?: string;
  isMiniScreen?: boolean;
  enableMultimodalUpload?: boolean;
}

export interface WebSdkChatProps {
  // 聊天容器相關配置
  title: string; // 標題
  style?: CSSProperties; // 容器的style樣式
  className?: string; // 容器的class類
  icon?: string; // 左上角的Icon
  headerExtra?: ReactNode; // 右側的位置
  layout?: Layout; // 佈局
  useInIframe?: boolean; //是否在Iframe中，對樣式有影響
  chatConfig: CozeChatConfig;
  userInfo?: OpenUserInfo;
  onImageClick?: ChatAreaEventCallback['onImageClick'];
  onThemeChange?: (theme: 'bg-theme' | 'light') => void;
}
