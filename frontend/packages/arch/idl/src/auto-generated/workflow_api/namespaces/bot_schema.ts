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

export enum AgentBacktrackMode {
  Current = 1,
  Previous = 2,
  Start = 3,
  MostSuitable = 4,
}

export enum AgentRecognitionMode {
  FunctionCall = 1,
  Independent = 2,
}

export enum AgentSessionType {
  /** 下次對話默認從上一次回覆的agent開始 */
  Flow = 1,
  /** 所有對話都從開始節點開始 */
  Host = 2,
}

export enum AgentType {
  StartAgent = 0,
  LLMAgent = 1,
  TaskAgent = 2,
  GlobalAgent = 3,
  BotAgent = 4,
}

export enum BotMode {
  SingleAgent = 0,
  MultiAgent = 1,
}

export enum BotSource {
  Doubao = 0,
  Coze = 1,
}

export enum ContextMode {
  Chat = 0,
  FunctionCall1 = 1,
  FunctionCall2 = 2,
  FunctionCall3 = 3,
}

export enum FieldItemType {
  /** 文本 String */
  Text = 1,
  /** 數字 Integer */
  Number = 2,
  /** 時間 Time */
  Date = 3,
  /** float Number */
  Float = 4,
  /** bool Boolean */
  Boolean = 5,
}

export enum FileboxInfoMode {
  /** 關閉文件盒子 */
  Off = 0,
  /** 打開文件盒子 */
  On = 1,
}

export enum IndependentRecognitionModelType {
  /** 小模型 */
  SLM = 0,
  /** 大模型 */
  LLM = 1,
}

export enum IndependentTiming {
  /** 判斷用戶輸入（前置） */
  Pre = 1,
  /** 判斷節點輸出（後置） */
  Post = 2,
  /** 前置模式和後置模式支持同時選擇 */
  PreAndPost = 3,
}

export enum KnowledgeSearchMode {
  /** 語義搜索 */
  SemanticSearch = 0,
  /** 混合搜索 */
  HybirdSearch = 1,
  /** 全文搜索 */
  FullTextSearch = 20,
}

export enum ResponseFormat {
  Text = 0,
  Markdown = 1,
  JSON = 2,
}

export enum SuggestReplyMode {
  System = 0,
  Custom = 1,
  Disable = 2,
  OriBot = 3,
}

export enum TimeCapsuleMode {
  /** 關閉長期記憶 */
  Off = 0,
  /** 開啓長期記憶 */
  On = 1,
}

export enum VersionType {
  /** 線上版本 */
  Online = 0,
  /** 預發版本 */
  Pre = 1,
}

export interface Ability {
  /** 功能開關 */
  switch_conf?: SwitchConf;
  /** 插件 */
  plugin_list?: Array<PluginAPI>;
  /** 工作流 */
  workflow_list?: Array<WorkflowAPI>;
  /** 知識庫 */
  knowledge_list?: Array<Knowledge>;
  /** 變量 */
  variable_list?: Array<Variable>;
  /** 數據庫 */
  database_list?: Array<Database>;
  /** 長期記憶 */
  time_capsule?: TimeCapsule;
  /** 文件盒子 */
  file_box?: FileBox;
  /** 觸發器 */
  trigger?: Trigger;
  /** 小程序 */
  applet?: Applet;
  /** 問題建議 */
  suggest?: Suggest;
  ext?: Ext;
}

export interface Agent {
  /** agent基礎信息 */
  agent_basic?: AgentBasic;
  /** hook配置 */
  hook_info?: HookInfo;
  /** 模型信息 */
  model?: Model;
  /** 發送給LLM的請求的靜態信息和提示詞 */
  prompt_info?: PromptInfo;
  /** agent各項功能配置 */
  ability?: Ability;
  /** 跳轉配置 */
  jump_config?: AgentJumpConfig;
}

export interface AgentBasic {
  /** agent id */
  agent_id?: string;
  /** agent名稱 */
  name?: string;
  /** agent頭像uri */
  icon_uri?: string;
  /** agent類型 */
  agent_type?: AgentType;
  /** agent爲子bot時的bot id */
  reference_bot_id?: Int64;
  /** agent爲子bot時的bot version */
  reference_bot_version?: string;
  /** 是否是root agent */
  is_root_agent?: boolean;
}

export interface AgentIntent {
  /** 跳轉條件 */
  intent?: string;
  /** 要跳轉的agent id */
  next_agent_id?: string;
}

export interface AgentJumpConfig {
  backtrack?: AgentBacktrackMode;
  recognition?: AgentRecognitionMode;
  agent_intent?: Array<AgentIntent>;
  /** agent適用場景 */
  description?: string;
  /** 新一輪會話發給哪個節點 */
  session_type?: AgentSessionType;
  independent_conf?: IndependentModeConfig;
}

export interface Applet {
  /** 是否綁定小程序 */
  binding_mp?: boolean;
}

export interface Database {
  /** 表id */
  table_id?: string;
  /** 表名稱 */
  table_name?: string;
  /** 表描述 */
  table_desc?: string;
  /** 表字段信息 */
  field_list?: Array<FieldItem>;
  /** 是否支持在Prompt中調用 默認支持 */
  prompt_disabled?: boolean;
}

export interface Ext {
  /** 卡片列表 */
  card_id?: Array<string>;
}

export interface FieldItem {
  /** 字段名稱 */
  name?: string;
  /** 字段描述 */
  desc?: string;
  /** 字段類型 */
  type?: FieldItemType;
  /** 是否必填 */
  must_required?: boolean;
  /** 字段Id 新增爲0 */
  id?: string;
  /** 字段類型 str */
  type_str?: string;
}

export interface FileBox {
  /** 文件盒子包含的子api列表 */
  sub_api_list?: Array<PluginAPI>;
  mode?: FileboxInfoMode;
}

export interface HookInfo {
  /** pre agent跳轉hook */
  pre_agent_jump_hook?: Array<HookItem>;
  /** post agent跳轉hook */
  post_agent_jump_hook?: Array<HookItem>;
  /** 流程hook */
  flow_hook?: Array<HookItem>;
  /** 原子能力hook */
  atomic_hook?: Array<HookItem>;
  /** 模型調用hook */
  llm_call_hook?: Array<HookItem>;
  /** 對話結果hook */
  res_parsing_hook?: Array<HookItem>;
  /** suggesion hook */
  suggestion_hook?: Array<HookItem>;
}

export interface HookItem {
  uri?: string;
  filter_rules?: Array<string>;
  strong_dep?: boolean;
  timeout_ms?: Int64;
}

export interface IndependentModeConfig {
  /** 判斷時機 */
  judge_timing?: IndependentTiming;
  model_type?: IndependentRecognitionModelType;
  history_round?: number;
  model_id?: string;
  prompt?: string;
}

export interface Knowledge {
  /** 知識庫id */
  id?: string;
  /** 知識庫名稱 */
  name?: string;
  /** 召回數量 */
  top_k?: number;
  /** 召回的最小相似度閾值 */
  min_score?: number;
  /** 是否自動召回 */
  auto?: boolean;
  /** 搜索策略 */
  search_mode?: KnowledgeSearchMode;
  /** 是否展示來源 */
  show_source?: boolean;
}

export interface Model {
  /** 模型id */
  model_id?: string;
  /** 溫度 */
  temperature?: number;
  /** 採樣數量 */
  top_k?: number;
  /** 採樣概率閾值 */
  top_p?: number;
  /** 頻率懲罰 */
  frequency_penalty?: number;
  /** 存在懲罰 */
  presence_penalty?: number;
  /** 模型最大回復長度 */
  max_tokens?: number;
  /** 回覆格式 */
  response_format?: ResponseFormat;
  /** 兼容邏輯，歷史邏輯爲false，新加入傳true */
  use_optional_param?: boolean;
  /** 非通用字段，通過json傳入，透傳給模型 */
  flex_config?: string;
}

export interface PluginAPI {
  /** 插件id */
  plugin_id?: string;
  /** api id */
  api_id?: string;
  /** api名稱 */
  api_name?: string;
}

export interface PromptInfo {
  /** bot人設與回覆邏輯 */
  bot_persona?: string;
  /** bot模板名稱 */
  template_name?: string;
  /** 允許上下文傳輸的類型 */
  context_mode?: ContextMode;
  /** 保留的歷史對話最大輪次 */
  history_round?: number;
}

export interface Suggest {
  /** suggest生成模式 */
  reply_mode?: SuggestReplyMode;
  /** 自定義生成時的prompt */
  customized_prompt?: string;
  /** 自定義生成時對應的task名稱 */
  task_name?: string;
}

export interface SwitchConf {
  /** 是否開啓插件功能 */
  enable_plugin?: boolean;
  /** 是否開啓工作流 */
  enable_workflow?: boolean;
  /** 是否開啓知識庫 */
  enable_knowledge?: boolean;
  /** 是否使用變量 */
  enable_variable?: boolean;
  /** 是否使用數據庫 */
  enable_database?: boolean;
  /** 是否使用長期記憶 */
  enable_time_capsule?: boolean;
  /** 是否使用文件盒子 */
  enable_file_box?: boolean;
  /** 是否使用觸發器 */
  enable_trigger?: boolean;
  /** 是否使用小程序插件 */
  enable_applet?: boolean;
  /** 是否開啓 suggest */
  enable_suggest?: boolean;
}

export interface TimeCapsule {
  mode?: TimeCapsuleMode;
}

export interface Trigger {
  /** 是否允許bot在與用戶對話時創建任務 */
  allow_user_task?: boolean;
  /** 是否有預設任務 */
  enable_preset_task?: boolean;
}

export interface Variable {
  /** 變量key */
  key?: string;
  /** 變量描述 */
  description?: string;
  /** 變量默認值 */
  default_value?: string;
  /** 是否系統值系統值 */
  is_system?: boolean;
  /** 是否支持在Prompt中調用 默認支持 */
  prompt_disabled?: boolean;
}

export interface WorkflowAPI {
  /** workflow id */
  workflow_id?: string;
  /** 插件id */
  plugin_id?: string;
  /** api id */
  api_id?: string;
}
/* eslint-enable */
