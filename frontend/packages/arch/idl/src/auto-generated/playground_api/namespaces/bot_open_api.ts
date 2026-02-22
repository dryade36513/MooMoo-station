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

import * as bot_common from './bot_common';

export type Int64 = string | number;

export enum SearchStrategy {
  /** 語義搜索 */
  SemanticSearch = 0,
  /** 混合搜索 */
  HybridSearch = 1,
  /** 全文搜索 */
  FullTextSearch = 20,
}

export interface ApiInfo {
  /** api id */
  api_id?: string;
  /** api名稱 */
  name?: string;
  /** api描述 */
  description?: string;
}

export interface BackgroundImageDetail {
  origin_image_url?: string;
  image_url?: string;
  theme_color?: string;
  /** 漸變位置 */
  gradient_position?: GradientPosition;
  /** 裁剪畫布位置 */
  canvas_position?: CanvasPosition;
}

export interface BackgroundImageInfo {
  /** web端背景圖 */
  web_background_image?: BackgroundImageDetail;
  /** 移動端背景圖 */
  mobile_background_image?: BackgroundImageDetail;
}

export interface BotConfig {
  character_name?: string;
  propmt?: string;
}

export interface BotInfo {
  /** bot id */
  bot_id?: string;
  /** bot名稱 */
  name?: string;
  /** bot描述 */
  description?: string;
  /** bot圖像url */
  icon_url?: string;
  /** 創建時間 */
  create_time?: Int64;
  /** 更新時間 */
  update_time?: Int64;
  /** 版本 */
  version?: string;
  /** prompt 信息 */
  prompt_info?: PromptInfo;
  /** 開場白 */
  onboarding_info?: OnboardingInfoV2;
  /** bot 類型，single agent or multi agent */
  bot_mode?: bot_common.BotMode;
  /** 選擇的語音信息 */
  voice_data_list?: Array<VoiceData>;
  /** 模型信息 */
  model_info?: ModelInfo;
  /** 插件信息列表 */
  plugin_info_list?: Array<PluginInfo>;
  /** 知識庫信息 */
  knowledge?: CommonKnowledge;
  /** workflow信息列表 */
  workflow_info_list?: Array<WorkflowInfo>;
  /** 快捷指令信息列表 */
  shortcut_commands?: Array<ShortcutCommandInfo>;
  /** 音色配置 */
  voice_info_list?: Array<Voice>;
  /** 默認用戶輸入類型 */
  default_user_input_type?: string;
  /** 用戶問題建議 */
  suggest_reply_info?: SuggestReplyInfo;
  /** 背景圖片 */
  background_image_info?: BackgroundImageInfo;
  /** 變量列表 */
  variables?: Array<Variable>;
  /** owner_id */
  owner_user_id?: string;
  folder_id?: string;
  /** tts配置 */
  media_config?: MediaConfig;
}

export interface BotOnboardingReq {
  source?: string;
  bot_id?: string;
}

export interface BotOnboardingResp {
  code: number;
  msg: string;
  onboarding?: Onboarding;
  user_id?: string;
  sender_info?: SenderInfo;
}

export interface CanvasPosition {
  width?: number;
  height?: number;
  left?: number;
  top?: number;
}

export interface ChatMessage {
  role?: string;
  type?: string;
  content?: string;
  content_type?: string;
  message_id?: string;
  reply_id?: string;
  section_id?: string;
  extra_info?: Record<string, string>;
  /** 正常、打斷狀態 拉消息列表時使用，chat運行時沒有這個字段 */
  status?: string;
  /** 打斷位置 */
  broken_pos?: number;
  meta_data?: MetaData;
  name?: string;
  /** 思考內容 */
  reasoning_content?: string;
}

export interface ChatV1Req {
  bot_id: string;
  conversation_id?: string;
  bot_version?: string;
  user: string;
  query: string;
  chat_history?: Array<ChatMessage>;
  extra?: Record<string, string>;
  stream?: boolean;
  custom_variables?: Record<string, string>;
  /** 前端本地的message_id 在extra_info 裏面透傳返回 */
  local_message_id?: string;
  content_type?: string;
}

export interface ChatV1Resp {
  messages: Array<ChatMessage>;
  conversation_id: string;
  code?: Int64;
  msg?: string;
}

export interface ChatV1StreamResp {
  message: ChatMessage;
  is_finish?: boolean;
  index: Int64;
  conversation_id: string;
  seq_id?: Int64;
}

/** stream:false */
export interface ChatV2NoneStreamResp {
  messages?: Array<ChatMessage>;
  conversation_id?: string;
  code: Int64;
  msg: string;
}

export interface ChatV2Req {
  bot_id: string;
  conversation_id?: string;
  bot_version?: string;
  user: string;
  query: string;
  chat_history?: Array<ChatMessage>;
  stream?: boolean;
  custom_variables?: Record<string, string>;
  extra?: Record<string, string>;
  local_message_id?: string;
  meta_data?: MetaData;
  content_type?: string;
  tools?: Array<Tool>;
  /** 模型id，暫時不暴露，內部使用. */
  model_id?: string;
  /** 當前輪對話的 bot_name */
  bot_name?: string;
  /** 透傳參數到 plugin/workflow 等下游 */
  extra_params?: Record<string, string>;
}

/** stream:true */
export interface ChatV2StreamResp {
  event: string;
  message?: ChatMessage;
  is_finish?: boolean;
  index?: Int64;
  conversation_id?: string;
  error_information?: ErrorInformation;
  seq_id?: Int64;
}

export interface ChatV3Request {
  bot_id: string;
  conversation_id?: string;
  user_id: string;
  stream?: boolean;
  additional_messages?: Array<EnterMessage>;
  custom_variables?: Record<string, string>;
  auto_save_history?: boolean;
  meta_data?: Record<string, string>;
  tools?: Array<Tool>;
  custom_config?: CustomConfig;
  /** 透傳參數到 plugin/workflow 等下游 */
  extra_params?: Record<string, string>;
  /** 手動指定渠道 id 聊天。目前僅支持 websdk(=999) */
  connector_id?: string;
  /** 指定快捷指令 */
  shortcut_command?: ShortcutCommandDetail;
  /** key=參數名 value=值 傳遞給 workflows parameters 參數 */
  parameters?: string;
  enable_card?: boolean;
  /** 發佈狀態：published_online / unpublished_draft。默認 published_online；不傳等同 published_online */
  publish_status?: string;
  /** 指定 bot 版本；不傳取最新版本；publish_status=unpublished_draft 時此參數無效 */
  bot_version?: string;
}

/** no stream */
export interface ChatV3Response {
  data?: bot_common.ChatV3ChatDetail;
  code: number;
  msg: string;
}

export interface CommonKnowledge {
  /** 知識庫信息 */
  knowledge_infos?: Array<KnowledgeInfo>;
}

export interface CreateDraftBotData {
  bot_id: string;
}

export interface CreateDraftBotRequest {
  space_id: string;
  name: string;
  description?: string;
  /** 頭像文件id */
  icon_file_id?: string;
  prompt_info?: PromptInfo;
  plugin_id_list?: PluginIdList;
  onboarding_info?: OnboardingInfo;
  voice_ids?: Array<string>;
  workflow_id_list?: WorkflowIdList;
  model_info_config?: ModelInfoConfig;
  suggest_reply_info?: SuggestReplyInfo;
}

export interface CreateDraftBotResponse {
  code: number;
  msg: string;
  data: CreateDraftBotData;
}

export interface CustomConfig {
  model_config?: ModelConfig;
  bot_config?: BotConfig;
}

export interface EnterMessage {
  /** user / assistant */
  role?: string;
  /** 如果是非 text，需要解析 JSON */
  content?: string;
  meta_data?: Record<string, string>;
  /** text, card, object_string */
  content_type?: string;
  /** function_call, tool_output, knowledge, answer, follow_up, verbose, (普通請求可以不填)
用戶輸入時可用：function_call，tool_output
不支持用戶輸入使用：follow_up，knowledge，verbose，answer */
  type?: string;
  name?: string;
}

export interface ErrorInformation {
  err_code?: number;
  err_msg?: string;
}

export interface ExchangeTokenInfo {
  is_exchanged?: boolean;
}

export interface File {
  url: string;
  /** 後綴名. 參考platform */
  suffix_type: string;
  file_name?: string;
}

export interface FileData {
  url: string;
  uri: string;
}

export interface GetBotInfoReq {
  /** botId */
  bot_id: string;
  /** 渠道id，外部使用時傳 */
  connector_id: string;
  /** bot版本，不傳則獲取最新版本 */
  version?: string;
}

export interface GetBotInfoResp {
  code: Int64;
  msg: string;
  bot_info?: BotInfo;
}

/** -------個人開發者開放接口-------
 req */
export interface GetBotOnlineInfoReq {
  /** botId */
  bot_id: string;
  /** 先保留，不暴露且不使用該字段 */
  connector_id?: string;
  /** bot版本，不傳則獲取最新版本 */
  version?: string;
}

/** resp */
export interface GetBotOnlineInfoResp {
  code: number;
  msg: string;
  data: BotInfo;
}

export interface GetSpacePublishedBotsListReq {
  /** botId */
  space_id: string;
  /** 先保留，不透傳且不使用該字段 */
  connector_id?: string;
  /** 空間下 bots 分頁查詢參數 */
  page_index?: number;
  page_size?: number;
}

export interface GetSpacePublishedBotsListResp {
  code: number;
  msg: string;
  data: SpacePublishedBotsInfo;
}

export interface GetVoiceListReq {}

export interface GetVoiceListResp {
  code: Int64;
  msg: string;
  /** 支持的語音信息 */
  voice_data_list?: Array<VoiceData>;
}

export interface GradientPosition {
  left?: number;
  right?: number;
}

export interface Image {
  url: string;
  name?: string;
}

export interface Knowledge {
  /** 更新知識庫列表 全量覆蓋更新 */
  dataset_ids?: Array<string>;
  /** 自動調用 or 按需調用 */
  auto_call?: boolean;
  /** 搜索策略 */
  search_strategy?: SearchStrategy;
}

export interface KnowledgeInfo {
  /** 知識庫id */
  id?: string;
  /** 知識庫名稱 */
  name?: string;
}

export interface MediaConfig {
  /** 是否關閉語音通話，true:關閉 false:開啓  默認爲false */
  is_voice_call_closed?: boolean;
}

export interface MetaData {
  img?: Array<Image>;
  file?: Array<File>;
}

export interface ModelConfig {
  model_id?: string;
}

export interface ModelInfo {
  /** 模型id */
  model_id?: string;
  /** 模型名稱 */
  model_name?: string;
  /** 生成隨機性 沒配置不返回 */
  temperature?: number;
  /** top p 沒配置不返回 */
  top_p?: number;
  /** 頻率懲罰 沒配置不返回 */
  frequency_penalty?: number;
  /** 存在懲罰 沒配置不返回 */
  presence_penalty?: number;
  /** 生成時，採樣候選集的大小 沒配置不返回 */
  top_k?: number;
  /** 攜帶上下文輪數 */
  context_round?: number;
  /** 最大回復長度 */
  max_tokens?: number;
  /** 輸出格式 text、markdown、json */
  response_format?: string;
  /** 緩存配置 */
  cache_type?: string;
  /** sp拼接當前時間 */
  sp_current_time?: boolean;
  /** sp拼接防泄露指令 */
  sp_anti_leak?: boolean;
  /** 模型個性化配置參數 */
  parameters?: Record<string, string>;
}

export interface ModelInfoConfig {
  /** 模型id */
  model_id: string;
  /** 生成隨機性 */
  temperature?: number;
  /** top p */
  top_p?: number;
  /** 頻率懲罰 */
  frequency_penalty?: number;
  /** 存在懲罰 */
  presence_penalty?: number;
  /** 生成時，採樣候選集的大小 */
  top_k?: number;
  /** 攜帶上下文輪數 */
  context_round?: number;
  /** 最大回復長度 */
  max_tokens?: number;
  /** 輸出格式 text、markdown、json */
  response_format?: string;
  /** 緩存配置 */
  cache_type?: string;
  /** sp拼接當前時間 */
  sp_current_time?: boolean;
  /** sp拼接防泄露指令 */
  sp_anti_leak?: boolean;
  /** 模型個性化配置參數 */
  parameters?: Record<string, string>;
}

export interface OauthAuthorizationCodeReq {
  code?: string;
  state?: string;
}

export interface OauthAuthorizationCodeResp {}

export interface OauthCallbackReq {
  /** tw僅使用 */
  oauth_token?: string;
  oauth_token_secret?: string;
  oauth_callback_confirmed?: boolean;
  /** 儲存自定義json結構 */
  state?: string;
  /** tw僅使用 */
  oauth_verifier?: string;
}

export interface OauthCallbackResp {}

export interface OauthExchangeTokenReq {
  code?: string;
  state?: string;
}

export interface OauthExchangeTokenResp {
  code?: number;
  msg?: string;
  data?: ExchangeTokenInfo;
}

export interface Onboarding {
  prologue: string;
  suggested_questions: Array<string>;
}

export interface OnboardingInfo {
  /** 開場白 */
  prologue?: string;
  /** 建議問題 */
  suggested_questions?: Array<string>;
}

export interface OnboardingInfoV2 {
  /** 對應 Coze Opening Dialog
開場白 */
  prologue?: string;
  /** 建議問題 */
  suggested_questions?: Array<string>;
  /** 開場白模型 */
  onboarding_mode?: bot_common.OnboardingMode;
  /** LLM生成，用戶自定義 Prompt */
  customized_onboarding_prompt?: string;
  /** 開場白預設問題展示方式 默認0 隨機展示 */
  suggested_questions_show_mode?: bot_common.SuggestedQuestionsShowMode;
}

export interface PluginIdInfo {
  plugin_id: string;
  api_id?: string;
}

export interface PluginIdList {
  id_list?: Array<PluginIdInfo>;
}

export interface PluginInfo {
  /** 插件id */
  plugin_id?: string;
  /** 插件名稱 */
  name?: string;
  /** 插件描述 */
  description?: string;
  /** 插件圖片url */
  icon_url?: string;
  /** 插件包含的api列表 */
  api_info_list?: Array<ApiInfo>;
}

export interface PrefixPromptInfo {
  /** 前綴提示詞 */
  prefix_prompt?: string;
  /** 不支持前綴提示詞部分 */
  dynamic_prompt?: string;
}

/** bot管理 */
export interface PromptInfo {
  /** 文本prompt */
  prompt?: string;
  /** 提示詞模式 */
  prompt_mode?: string;
  /** 前綴提示詞模式下的prompt內容 */
  prefix_prompt_info?: PrefixPromptInfo;
}

export interface PublishDraftBotData {
  bot_id?: string;
  version?: string;
}

export interface PublishDraftBotRequest {
  bot_id: string;
  connector_ids: Array<string>;
  connectors?: Record<string, Record<string, string>>;
}

export interface PublishDraftBotResponse {
  code: number;
  msg: string;
  data?: PublishDraftBotData;
}

export interface SenderInfo {
  nick_name: string;
  icon_url: string;
}

export interface ShortcutCommandComponent {
  /** panel參數
參數名字 */
  name?: string;
  /** 參數描述 */
  description?: string;
  /** 輸入類型 text、select、file */
  type?: string;
  /** 請求工具時，參數的key 對應tool的參數名稱，沒有則爲不返回 */
  tool_parameter?: string;
  /** type爲select時的可選項列表 or type爲file時，支持哪些類型 image、doc、table、audio、video、zip、code、txt、ppt */
  options?: Array<string>;
  /** 默認值 沒配置時不返回 */
  default_value?: string;
  /** 是否隱藏不展示 線上bot tool類型的快捷指令不返回hide=true的component */
  is_hide?: boolean;
}

export interface ShortcutCommandDetail {
  command_id: string;
  /** key=參數名 value=值  object_string object 數組序列化之後的 JSON String */
  parameters?: Record<string, string>;
}

export interface ShortcutCommandInfo {
  /** 快捷指令id */
  id?: string;
  /** 快捷指令按鈕名稱 */
  name?: string;
  /** 快捷指令 */
  command?: string;
  /** 快捷指令描述 */
  description?: string;
  /** 指令query模版 */
  query_template?: string;
  /** 快捷指令icon */
  icon_url?: string;
  /** 組件列表（參數列表） */
  components?: Array<ShortcutCommandComponent>;
  /** tool信息 */
  tool?: ShortcutCommandToolInfo;
  /** multi的指令時，該指令由哪個節點執行 沒配置不返回 */
  agent_id?: string;
  /** chatsdk 使用 */
  send_type?: string;
  /** chatsdk 使用，表單的schema */
  card_schema?: string;
}

export interface ShortcutCommandToolInfo {
  name?: string;
  /** tool類型 workflow plugin */
  type?: string;
  plugin_id?: string;
  plugin_api_name?: string;
  workflow_id?: string;
  params?: Array<ShortcutToolParam>;
}

export interface ShortcutToolParam {
  name?: string;
  is_required?: boolean;
  description?: string;
  type?: string;
  default_value?: string;
  /** 是否是panel參數 */
  is_refer_component?: boolean;
}

export interface SpacePublishedBots {
  bot_id?: string;
  bot_name?: string;
  description?: string;
  icon_url?: string;
  publish_time?: string;
}

export interface SpacePublishedBotsInfo {
  space_bots?: Array<SpacePublishedBots>;
  total?: number;
}

/** v3 -- submit_tool_outputs */
export interface SubmitToolOutputsRequest {
  conversation_id: string;
  chat_id: string;
  stream?: boolean;
  tool_outputs: Array<ToolOutput>;
  connector_id?: string;
}

export interface SuggestReplyInfo {
  /** 回覆模式 */
  reply_mode?: string;
  /** custom 模式下的自定義 prompt */
  customized_prompt?: string;
}

/** 對齊 platform，傳遞 tools */
export interface Tool {
  plugin_id?: Int64;
  parameters?: string;
  api_name?: string;
}

/** 續聊時提交的執行結果 */
export interface ToolOutput {
  tool_call_id: string;
  output: string;
}

export interface UpdateDraftBotRequest {
  bot_id: string;
  name?: string;
  description?: string;
  icon_file_id?: string;
  prompt_info?: PromptInfo;
  plugin_id_list?: PluginIdList;
  onboarding_info?: OnboardingInfo;
  voice_ids?: Array<string>;
  knowledge?: Knowledge;
  workflow_id_list?: WorkflowIdList;
  model_info_config?: ModelInfoConfig;
  suggest_reply_info?: SuggestReplyInfo;
}

export interface UpdateDraftBotResponse {
  code: number;
  msg: string;
}

export interface UploadData {}

export interface UploadReq {
  source?: string;
  bot_id?: string;
}

export interface UploadResp {
  code: number;
  msg: string;
  file_data?: FileData;
}

export interface Variable {
  /** 變量名 */
  keyword?: string;
  /** 默認值 */
  default_value?: string;
  /** 變量類型 */
  variable_type?: string;
  /** 變量來源 */
  channel?: string;
  /** 變量描述 */
  description?: string;
  /** 是否啓用 */
  enable?: boolean;
  /** 變量默認支持在Prompt中訪問，取消勾選後將不支持在Prompt中訪問（僅能在Workflow中訪問 */
  prompt_enable?: boolean;
}

export interface Voice {
  /** 唯一id */
  voice_id?: string;
  /** 音色語種code */
  language_code?: string;
}

export interface VoiceData {
  /** 唯一id */
  id?: string;
  /** 音色語種code */
  language_code?: string;
  /** 音色語種名稱 */
  language_name?: string;
  /** 音色名稱 */
  name?: string;
  /** 音色 style_id */
  style_id?: string;
  /** 預覽文本內容 */
  preview_text?: string;
  /** 預覽音色內容 */
  preview_audio?: string;
}

export interface WorkflowIdInfo {
  id: string;
}

export interface WorkflowIdList {
  ids?: Array<WorkflowIdInfo>;
}

export interface WorkflowInfo {
  /** workflow_id */
  id?: string;
  /** workflow名稱 */
  name?: string;
  /** workflow描述 */
  description?: string;
  /** workflow圖片url */
  icon_url?: string;
}
/* eslint-enable */
