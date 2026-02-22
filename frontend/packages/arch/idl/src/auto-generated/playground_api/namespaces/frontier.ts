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

/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

export type Int64 = string | number;

/** Bot 編輯頁消息二級分類 */
export enum EditorMessageType {
  /** 上行消息 1 開頭 */
  EditHeartbeat = 10001,
  EditLockPreempt = 10002,
  EditLockRelease = 10003,
  EditWindowBind = 10004,
  /** 下行消息 2 開頭 */
  EditLockHolder = 20001,
  EditLockLoss = 20002,
  NewCommit = 20003,
}

/** 業務枚舉（消息的一級分類） */
export enum FrontierMessageBiz {
  /** Bot 編輯頁 */
  Editor = 1,
  /** 插件 */
  Plugin = 2,
  /** 調試區task */
  DebugTask = 3,
  /** 消息通知 */
  MessageNotify = 4,
  /** Bot 編輯圖片生成 */
  EditorPic = 5,
}

export interface CozeChatMessage {
  role?: string;
  type?: string;
  content?: string;
  content_type?: string;
  message_id?: string;
  reply_id?: string;
  section_id?: string;
  extra_info?: CozeChatMessageExtraInfo;
  /** 正常、打斷狀態 拉消息列表時使用，chat運行時沒有這個字段 */
  status?: string;
  /** 打斷位置 */
  broken_pos?: number;
  sender_id?: string;
}

export interface CozeChatMessageExtraInfo {
  local_message_id?: string;
  input_tokens?: string;
  output_tokens?: string;
  token?: string;
  /** "success" or "fail" */
  plugin_status?: string;
  time_cost?: string;
  workflow_tokens?: string;
  bot_state?: string;
  plugin_request?: string;
  tool_name?: string;
  plugin?: string;
  mock_hit_info?: string;
  log_id?: string;
}

/** DebugTask 消息 */
export interface DebugTaskMessage {
  /** 二級消息類型 */
  message_type: string;
  /** 消息內容（JSON 格式的字符串) */
  payload: string;
}

export interface DebugTaskPayload {
  bot_id?: string;
  task_id?: string;
  conversation_id?: string;
  message_list?: Array<CozeChatMessage>;
}

/** Bot 編輯頁消息 */
export interface EditorMessage {
  /** 二級消息類型 */
  message_type: EditorMessageType;
  /** 消息內容（JSON 格式的字符串） */
  payload: string;
  /** 追溯問題相關字段（可選）
generated id */
  message_id?: Int64;
  /** unix timestamp in second */
  send_at?: Int64;
}

/** DebugTask 消息 */
export interface MessageNotifyMessage {
  /** 二級消息類型 */
  message_type: string;
  /** coze場景，home/store/debug */
  scene: string;
  /** 消息內容（JSON 格式的字符串) */
  payload: string;
}

export interface MessageNotifyPayload {
  bot_id?: string;
  conversation_id?: string;
  read_message_index?: Int64;
  end_message_index?: Int64;
  /** 取值爲inhouse或者release。home場景會話區分inhouse和release，需要額外參數方便在非home頁面中判斷是home哪個環境的message */
  custom_version?: string;
}
/* eslint-enable */
