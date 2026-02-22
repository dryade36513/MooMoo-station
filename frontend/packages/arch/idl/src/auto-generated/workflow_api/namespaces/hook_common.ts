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

import * as copilot_common from './copilot_common';
import * as bot_schema from './bot_schema';

export type Int64 = string | number;

/** 返回基礎類型的操作。基礎類型包括：string、int、double、bool... */
export enum BasicTypeOP {
  /** 無操作，保持當前BotEngine的狀態 */
  None = 0,
  /** 替換 */
  Replace = 1,
  /** 刪除 */
  Delete = 2,
}

/** /////////////////////// 返回協議基礎類型 ///////////////////////////////////
 對於返回需要修改字段的協議的設計範式:
 1. 返回要修改的基礎類型字段，使用相應的基礎類型OP定義字段
 struct Result {
     1: optional Int64OP  bot_id // 修改的bot_id
     2: optional Int32OP  bot_version // 修改的bot_version
 }

 2. 返回要修改複合類型字段，使用CompositeTypeOP構造一個OP結構體
 struct PluginListOP {
     1: CompositeTypeOP  op // 操作類型
     2: optional list<PluginAPI> plugin_list // 插件
 }

 struct PluginAPI {
    1: required i64 plugin_id // 插件id
    2: required string api_name // api名稱
}
 
 struct Result {
     1: optional Int64OP  bot_id // 修改的bot_id
     2: optional Int32OP  bot_version // 修改的bot_version
     3: optional PluginListOP plugin_list // 修改的插件列表
 }
 
 3. 如果後續協議版本演進過程中，要修改的複合類型嵌套的類型，例如往嵌套的struct類型增加字段，
   爲了向前兼容性，增加的字段需要使用OP定義的類型。以上面PluginAPI舉例
 struct PluginAPI {
    1: required i64 plugin_id // 插件id
    2: required string api_name // api名稱
    3: optional StrOP  api_desc // api描述
}
 返回複合類型的操作。複合類型包括：list、map、set、struct... */
export enum CompositeTypeOP {
  /** 無操作，保持當前BotEngine的狀態 */
  None = 0,
  /** 替換。如果是複合類型，例如list、map，則會使用返回的把BotEngine集合整體替換掉 */
  ReplaceAll = 1,
  /** 往集合增加或者替換元素, 只對複合類型有效，例如list、map，會把返回的集合和原來BotEngine的集合合併 */
  Merge = 2,
}

export enum ExecuteMode {
  Unknown = 0,
  TestRun = 1,
  Run = 2,
}

export interface BizInfo {
  message_id?: Int64;
  conversation_id?: Int64;
  section_id?: Int64;
  conversation_type?: copilot_common.ConversationType;
}

export interface BotContext {
  bot_id: Int64;
  /** single 下爲 bot_id */
  agent_id?: Int64;
  bot_version?: Int64;
  connector_id?: Int64;
  connector_uid?: string;
  /** chat 場景的擴展字段 */
  scene_context?: Record<string, string>;
  /** 用戶 query */
  message?: Message;
  /** 歷史消息 */
  chat_context?: Array<Message>;
  /** ab 參數 */
  ab_bot_engine?: string;
  /** 10: optional string ab_gpt_engine // gpt engine ab 參數，暫時不要
完整 ab 參數，非常大，按需開啓 */
  ab_param?: string;
  /** bot scheam */
  agent_schema?: bot_schema.Agent;
  /** 前序 hook 寫入，透傳給各個下游 */
  context_ext?: Record<string, string>;
  /** 工具鑑權信息 */
  auth_info?: copilot_common.ToolsAuthInfo;
  /** 打斷-恢復信號 */
  resume_info?: copilot_common.ResumeInfo;
}

export interface FunctionCall {
  name?: string;
  arguments?: string;
}

export interface Message {
  /** 取值：system/user/assistant/tool/placeholder */
  role: string;
  content?: string;
  /** 部分模型支持 name, function消息 name 即爲 tool 名稱 */
  name?: string;
  /** 調用過程，僅存在於 assistant 消息 */
  tool_calls?: Array<ToolCall>;
  /** 調用 id，與 tool_calls 中的 id 對應 */
  tool_call_id?: string;
  function_call?: FunctionCall;
  /** 地理位置信息，端上授權纔會傳遞 */
  location?: copilot_common.LocationInfo;
  /** 上傳的文件 */
  files?: Array<copilot_common.FileInfo>;
  /** 上傳的圖片 */
  images?: Array<copilot_common.ImageInfo>;
  /** 業務信息 */
  biz_info?: BizInfo;
  ext?: Record<string, string>;
  /** 唯一 id */
  unique_id?: string;
}

export interface ToolCall {
  id?: string;
  type?: string;
  function?: FunctionCall;
  unique_id?: string;
}
/* eslint-enable */
