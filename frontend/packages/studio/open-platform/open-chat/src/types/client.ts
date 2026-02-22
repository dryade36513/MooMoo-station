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

import { type ReactNode } from 'react';

import { type OpenApiSource } from '@/types/open';
import type { Language } from '@/types/i18n';

import { type OpenUserInfo } from './user';
export enum Layout {
  PC = 'pc',
  MOBILE = 'mobile',
}

export interface FeedbackTag {
  label: string;
  isNeedDetail?: boolean;
}

export interface FeedbackConfig {
  isNeedFeedback?: boolean; // 默認是false
  feedbackPanel?: {
    title?: string;
    placeholder?: string;
    tags?: FeedbackTag[];
  };
}
interface BaseUiProps {
  icon?: string; // 助手的圖標url，用於小助手按鈕顯示，以及頁面logo顯示
  layout?: Layout;
  lang?: Language;
  zIndex?: number;
}
export interface HeaderConfig {
  isShow?: boolean; //是否顯示header， 默認是true
  isNeedClose?: boolean; //是否需要關閉按鈕， 默認是true
  extra?: ReactNode | false; // 用於站位的，默認無
}

export interface ConversationsConfig {
  isNeed?: boolean; // 默認值 false
}
interface ChatBotUiProps {
  title?: string;
  uploadable?: boolean;
  isNeedClearContext?: boolean; // 是否需要清除上下文，默認 爲true
  isNeedClearMessage?: boolean; //是否需要刪除消息，默認是true
  isNeedAddNewConversation?: boolean; // 是否需要添加會話按鈕
  isNeedAudio?: boolean; // 是否需要音色。默認是true
  isNeedFunctionCallMessage?: boolean; //默認是true
  isNeedQuote?: boolean; // 默認是 false
  isNeedConversationAdd?: boolean; // 是否需要會話添加，同時有會話列表的功能，默認是 false
  feedback?: FeedbackConfig; //
  // 僅影響chat框的外部框架，不影響內部顯示的屬性
  width?: number;
  el?: HTMLElement;
  onHide?: () => void; // 當chat聊天框隱藏時，觸發該事件
  onShow?: () => void; // 當chat聊天框顯示時，觸發該事件
  onBeforeShow?: () => Promise<boolean> | boolean; // 顯示聊天框前調用，如果用戶返回了 false，則不顯示聊天框
  onBeforeHide?: () => Promise<boolean> | boolean; // 隱藏聊天框前調用，如果用戶返回了 false，則不隱藏聊天框
}
export enum ChatType {
  BOT = 'bot',
  APP = 'app',
}
export interface AppInfo {
  appId: string;
  workflowId: string;
  conversationName?: string;
  parameters?: Record<string, unknown>;
  version?: string;
}
export interface BotInfo {
  botId?: string;
  parameters?: Record<string, unknown>;
}
//
export interface FooterConfig {
  isShow?: boolean; //是否顯示
  expressionText?: string; // 例如 由{{name}}提供。
  linkvars?: Record<
    string,
    {
      text: string;
      link: string;
    }
  >;
}
export interface CozeChatConfig {
  type?: ChatType; // 默認是bot
  bot_id?: string;
  appInfo?: AppInfo;
  botInfo?: BotInfo;
  source: OpenApiSource;
  extra?: {
    webChat: Record<string, string>;
  };
  auth?: AuthProps;
  ui?: {
    base?: Pick<BaseUiProps, 'icon' | 'lang' | 'layout'>;
    chatBot?: Pick<
      ChatBotUiProps,
      | 'title'
      | 'uploadable'
      | 'isNeedClearContext'
      | 'isNeedClearMessage'
      | 'isNeedAddNewConversation'
      | 'isNeedAudio'
      | 'isNeedFunctionCallMessage'
      | 'isNeedQuote'
      | 'feedback'
    >;
    footer?: FooterConfig;
    header?: HeaderConfig;
    conversations?: ConversationsConfig;
  };
  // open SDk生成的，不能外部傳入
  conversation_id: string;
}

interface ChatComponentProps {
  layout: Layout;
  lang: Language;
  title: string;
  icon: string;
  zIndex: number;
  uploadable: boolean;
  width: number;
}

/** @deprecated 後續會棄用 */
export type ComponentProps = Partial<ChatComponentProps>;

/** 鑑權相關類型 */
export enum AuthType {
  UNAUTH = 'unauth', // 無需鑑權
  TOKEN = 'token', // 通過函數獲取token
}

export interface AuthProps {
  type?: AuthType;
  /*
   * type == refresh_token, 用戶需傳入token、refreshToken參數
   */
  token?: string; // 用戶可主動傳入token
  /*
   * type == TOKEN_BY_FUNC, token過期或者無token時，會觸發該事件，需要用戶傳入新的token
   */
  onRefreshToken?: (token?: string) => Promise<string> | string;
  connectorId?: string;
}

export interface UiProps {
  base?: BaseUiProps;
  asstBtn?: {
    isNeed?: boolean; // 默認值是true
  };
  chatBot?: ChatBotUiProps;
  footer?: FooterConfig;
  header?: HeaderConfig;
  conversations?: ConversationsConfig;
}

export enum IframeMessageEvent {
  GET_IFRAME_PARAMS = 'GET_IFRAME_PARAMS',
  GET_NEW_TOKEN = 'GET_NEW_TOKEN',
  THEME_CHANGE = 'THEME_CHANGE',
}

// 雙方通信傳遞的數據結構
export interface IframeParams {
  // 通信標識
  // iframe回傳父頁面 的事件前綴 => 用於父級頁面的 多實例 區分 message 來源
  chatClientId: string;
  chatConfig: CozeChatConfig;
  userInfo?: OpenUserInfo;
}

export enum WebSdkError {
  // 超時
  TIMEOUT = -1,
  // 未知錯誤
  UNKNOWN = -2,
  // 禁止操作
  FORBIDDEN = -3,

  // 未知錯誤
  SUCCESS = 0,

  // 鑑權失敗
  AUTH_FAILED = 100001,
  // token拉取失敗
  AUTH_TOKEN_GET_FAILED = 100002,
}
