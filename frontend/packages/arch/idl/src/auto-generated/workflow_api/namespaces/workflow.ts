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

import * as base from './base';

export type Int64 = string | number;

/** 針對File類型參數的細分類型 */
export enum AssistParameterType {
  DEFAULT = 1,
  IMAGE = 2,
  DOC = 3,
  CODE = 4,
  PPT = 5,
  TXT = 6,
  EXCEL = 7,
  AUDIO = 8,
  ZIP = 9,
  VIDEO = 10,
  SVG = 11,
  Voice = 12,
}

export enum AsyncSubWorkflowStatus {
  Waiting = 1,
  Running = 2,
  Success = 3,
  Fail = 4,
  Cancel = 5,
}

export enum AuthAction {
  Create = 1,
  Delete = 2,
  Save = 3,
  Submit = 4,
  Publish = 5,
  Merge = 6,
  Diff = 7,
  Revert = 8,
  Read = 9,
  ListHistory = 10,
  ListCollaborator = 11,
  SpaceAdmin = 12,
  SpaceOperator = 13,
  ListPluginPrice = 14,
  CheckTestCaseDuplicate = 15,
  GetTestCaseSchema = 16,
  /** 畫布的讀取權限 */
  ReadCanvasInfo = 17,
}

export enum AuthType {
  Pass = 1,
  UnPass = 2,
}

export enum BasicNodeType {
  PluginAPI = 1,
  /** 基礎節點模版 */
  NodeTemplate = 2,
}

export enum BindBizType {
  Agent = 1,
  Scene = 2,
  /** 抖音分身 */
  DouYinBot = 3,
}

export enum BindStageType {
  Default = 0,
  Draft = 1,
  Commit = 2,
  Publish = 3,
}

export enum BrushDataType {
  /** 刷新所有數據 */
  All = 1,
  /** 按工作流ID刷新 */
  WorkflowId = 2,
  /** 按空間ID刷新 */
  SpaceId = 3,
  /** 按ID範圍刷新，需要有自增的主鍵 */
  IdRange = 4,
}

export enum BusinessType {
  /** 付費商品的經營類型
自營 */
  SelfOperated = 1,
  /** 社區（與三方開發者合作） */
  Community = 2,
}

export enum Caller {
  Canvas = 1,
  UIBuilder = 2,
}

export enum CheckType {
  /** 返回的流程列表中，如果流程是對話流 或 流程入參爲BOT_USER_INPUT，CheckResult的is_pass是true */
  WebSDKPublish = 1,
  /** 返回的流程列表中，如果流程是對話流 或 流程入參爲BOT_USER_INPUT，CheckResult的is_pass是true */
  SocialPublish = 2,
  /** 返回的流程列表中，返回的流程列表中，如果流程是對話流 或 流程入參爲BOT_USER_INPUT，CheckResult的is_pass是true；但是如果流程是對話流 或 流程入參爲BOT_USER_INPUT但是流程中的節點包含多會話節點，那麼CheckResult的is_pass是false */
  BotAgent = 3,
  /** 返回的流程列表中，如果流程是對話流 或 流程入參爲BOT_USER_INPUT，CheckResult的is_pass是true */
  BotSocialPublish = 4,
  /** 返回的流程列表中，返回的流程列表中，如果流程是對話流 或 流程入參爲BOT_USER_INPUT，CheckResult的is_pass是true；但是如果流程是對話流 或 流程入參爲BOT_USER_INPUT但是流程中的節點包含多會話節點，那麼CheckResult的is_pass是false */
  BotWebSDKPublish = 5,
  /** 返回的流程列表中，如果流程爲工作流且含有的節點包含會話管理類節點 或 問答節點 或 輸入節點 或 端插件節點，則CheckResult的is_pass是false；如果流程是對話流，CheckResult的is_pass是false； */
  MCPPublish = 6,
}

export enum CollaboratorMode {
  /** 關閉多人協作模式 */
  Close = 0,
  /** 開啓多人協作模式 */
  Open = 1,
}

export enum CollaboratorOperationType {
  Add = 1,
  Remove = 2,
}

export enum CollaboratorType {
  /** 獲取有協作者mode=0的workflow數據 */
  GetHasCollaborator = 0,
  /** 獲取無協作者mode=1的workflow數據 */
  GetNoCollaborator = 1,
  /** 更新有協作者mode=0的workflow數據 */
  UpdateHasCollaborator = 2,
  /** 更新無協作者mode=1的workflow數據 */
  UpdateNoCollaborator = 3,
}

export enum ConditionType {
  Equal = 1,
  NotEqual = 2,
  LengthGt = 3,
  LengthGtEqual = 4,
  LengthLt = 5,
  LengthLtEqual = 6,
  Contains = 7,
  NotContains = 8,
  Null = 9,
  NotNull = 10,
  True = 11,
  False = 12,
  Gt = 13,
  GtEqual = 14,
  Lt = 15,
  LtEqual = 16,
}

export enum ContentType {
  Unknown = 0,
  Text = 1,
  Card = 3,
  Verbose = 4,
  Interrupt = 5,
}

export enum CreateEnv {
  Draft = 1,
  Release = 2,
}

export enum CreateMethod {
  ManualCreate = 1,
  NodeCreate = 2,
}

export enum DatasetType {
  Coze = 0,
  Volcano = 1,
}

/** 默認入參的設置來源 */
export enum DefaultParamSource {
  /** 默認用戶輸入 */
  Input = 0,
  /** 引用變量 */
  Variable = 1,
}

export enum DeleteAction {
  /** Blockwise的解綁 */
  BlockwiseUnbind = 1,
  /** Blockwise的刪除 */
  BlockwiseDelete = 2,
}

export enum DeleteStatus {
  SUCCESS = 0,
  FAIL = 1,
}

export enum DeleteType {
  /** 可以刪除：無workflow商品/商品下架/第一次上架且審覈失敗 */
  CanDelete = 0,
  /** 刪除後審覈失敗：workflow商品第一次上架並處於審覈中 */
  RejectProductDraft = 1,
  /** 需要商品先下架：workflow商品已上架 */
  UnListProduct = 2,
}

export enum DiffTypeMeta {
  /** 草稿和最新提交版本都沒有做修改 */
  NoChanges = 1,
  /** 草稿做了修改 */
  ChangesByDraft = 2,
  /** 最新做了修改 */
  ChangesByLatest = 3,
  /** 草稿和最新提交都做了修改 */
  Conflict = 4,
}

export enum EventType {
  LocalPlugin = 1,
  Question = 2,
  RequireInfos = 3,
  SceneChat = 4,
  InputNode = 5,
  WorkflowLocalPlugin = 6,
  WorkflowOauthPlugin = 7,
}

export enum ExeternalRunMode {
  Sync = 0,
  Stream = 1,
}

export enum FieldType {
  Object = 1,
  String = 2,
  Integer = 3,
  Bool = 4,
  Array = 5,
  Number = 6,
}

export enum IfConditionRelation {
  And = 1,
  Or = 2,
}

export enum ImageflowTabType {
  /** 默認值，基礎節點 */
  BasicNode = 0,
  /** ToolMarket = 1 // 工具市場，後續擴展 */
  All = 10,
}

export enum InputMode {
  /** 打字輸入 */
  text = 1,
  /** 語音輸入 */
  audio = 2,
}

export enum InputType {
  String = 1,
  Integer = 2,
  Boolean = 3,
  Number = 4,
  Array = 5,
  Object = 6,
}

export enum InputValidateErrType {
  CsvErr = 1,
  ElementErr = 2,
}

/** 這個枚舉需要與plugin的PluginInterruptType對齊 */
export enum InterruptType {
  LocalPlugin = 1,
  Question = 2,
  RequireInfos = 3,
  SceneChat = 4,
  Input = 5,
  OauthPlugin = 7,
}

export enum JobOrderBy {
  CreateTime = 0,
  UpdateTime = 1,
}

export enum JobStatus {
  Wait = 0,
  Running = 1,
  Success = 2,
  Fail = 3,
  Cancel = 4,
}

export enum JobType {
  JobCommon = 0,
  JobPro = 1,
}

export enum NodeExeStatus {
  Waiting = 1,
  Running = 2,
  Success = 3,
  Fail = 4,
}

export enum NodeHistoryScene {
  Default = 0,
  TestRunInput = 1,
}

export enum NodePanelSearchType {
  /** 搜索所有類型 */
  All = 0,
  /** 搜索資源庫中的workflow */
  ResourceWorkflow = 1,
  /** 搜索project中的workflow */
  ProjectWorkflow = 2,
  /** 搜索收藏的插件 */
  FavoritePlugin = 3,
  /** 搜索資源庫中的插件 */
  ResourcePlugin = 4,
  /** 搜索project中的插件 */
  ProjectPlugin = 5,
  /** 搜索插件商店中的插件 */
  StorePlugin = 6,
}

export enum NodeTemplateLinkLimit {
  Both = 1,
  JustRight = 2,
  JustLeft = 3,
}

export enum NodeTemplateStatus {
  Valide = 1,
  Invalide = 2,
}

/** 節點模版類型，與NodeType基本保持一致，copy一份是因爲新增了一個Imageflow類型，避免影響原來NodeType的業務語意 */
export enum NodeTemplateType {
  Start = 1,
  End = 2,
  LLM = 3,
  Api = 4,
  Code = 5,
  Dataset = 6,
  If = 8,
  SubWorkflow = 9,
  Variable = 11,
  Database = 12,
  Message = 13,
  Imageflow = 14,
  Text = 15,
  ImageGenerate = 16,
  ImageReference = 17,
  Question = 18,
  Break = 19,
  LoopSetVariable = 20,
  Loop = 21,
  Intent = 22,
  DrawingBoard = 23,
  SceneVariable = 24,
  SceneChat = 25,
  DatasetWrite = 27,
  Batch = 28,
  Continue = 29,
  Input = 30,
  AssignVariable = 40,
  DatabaseUpdate = 42,
  DatabasesELECT = 43,
  DatabaseDelete = 44,
  Http = 45,
  DatabaseInsert = 46,
  ConversationUpdate = 51,
  ConversationDelete = 52,
  ConversationList = 53,
  ConversationHistoryList = 54,
  MessageCreate = 55,
  MessageUpdate = 56,
  MessageDelete = 57,
  ToJSON = 58,
  FromJSON = 59,
  DatasetDelete = 60,
  Audio2Text = 61,
  Text2Audio = 62,
  VideoAudioExtractor = 63,
  VideoFrameExtractor = 64,
  VideoGeneration = 65,
  LTMWrite = 66,
  LTMRead = 67,
}

/** 節點結構 */
export enum NodeType {
  Start = 1,
  End = 2,
  LLM = 3,
  Api = 4,
  Code = 5,
  Dataset = 6,
  If = 8,
  SubWorkflow = 9,
  Variable = 11,
  Database = 12,
  Message = 13,
  Text = 15,
  ImageGenerate = 16,
  ImageReference = 17,
  Question = 18,
  Break = 19,
  LoopSetVariable = 20,
  Loop = 21,
  Intent = 22,
  DrawingBoard = 23,
  SceneVariable = 24,
  SceneChat = 25,
  DatasetWrite = 27,
  Batch = 28,
  Continue = 29,
  Input = 30,
  AssignVariable = 40,
  DatabaseUpdate = 42,
  DatabasesELECT = 43,
  DatabaseDelete = 44,
  Http = 45,
  DatabaseInsert = 46,
  ConversationUpdate = 51,
  ConversationDelete = 52,
  ConversationList = 53,
  ConversationHistoryList = 54,
  MessageCreate = 55,
  MessageUpdate = 56,
  MessageDelete = 57,
  ToJSON = 58,
  FromJSON = 59,
  DatasetDelete = 60,
  Audio2Text = 61,
  Text2Audio = 62,
  VideoAudioExtractor = 63,
  VideoFrameExtractor = 64,
  VideoGeneration = 65,
  LTMWrite = 66,
  LTMRead = 67,
}

export enum OAuthStatus {
  Authorized = 1,
  Unauthorized = 2,
}

export enum OperateType {
  DraftOperate = 0,
  SubmitOperate = 1,
  PublishOperate = 2,
  PubPPEOperate = 3,
  SubmitPublishPPEOperate = 4,
}

export enum OrderBy {
  CreateTime = 0,
  UpdateTime = 1,
  PublishTime = 2,
  Hot = 3,
  Id = 4,
}

export enum OrderByType {
  Asc = 1,
  Desc = 2,
}

export enum ParameterLocation {
  Path = 1,
  Query = 2,
  Body = 3,
  Header = 4,
}

export enum ParameterType {
  String = 1,
  Integer = 2,
  Number = 3,
  Object = 4,
  Array = 5,
  Bool = 6,
}

export enum ParamRequirementType {
  CanNotDelete = 1,
  CanNotChangeName = 2,
  CanChange = 3,
  CanNotChangeAnything = 4,
}

export enum PermissionType {
  /** 不能查看詳情 */
  NoDetail = 1,
  /** 可以查看詳情 */
  Detail = 2,
  /** 可以查看和操作 */
  Operate = 3,
}

export enum PersistenceModel {
  DB = 1,
  VCS = 2,
  External = 3,
}

export enum PluginFrom {
  Default = 0,
  FromSaas = 1,
}

export enum PluginParamTypeFormat {
  ImageUrl = 1,
}

export enum PluginType {
  PLUGIN = 1,
  APP = 2,
  FUNC = 3,
  WORKFLOW = 4,
  IMAGEFLOW = 5,
  LOCAL = 6,
}

export enum PrincipalType {
  User = 1,
  Service = 2,
}

/** workflow 商品審覈草稿狀態 */
export enum ProductDraftStatus {
  /** 默認 */
  Default = 0,
  /** 審覈中 */
  Pending = 1,
  /** 審覈通過 */
  Approved = 2,
  /** 審覈不通過 */
  Rejected = 3,
  /** 已廢棄 */
  Abandoned = 4,
}

export enum ProductPaidType {
  Free = 0,
  Paid = 1,
}

export enum ReqSource {
  /** 默認 */
  Default = 0,
  /** 商店服務 */
  Product = 1,
}

export enum ResourceType {
  Account = 1,
  Workspace = 2,
  App = 3,
  Bot = 4,
  Plugin = 5,
  Workflow = 6,
  Knowledge = 7,
  PersonalAccessToken = 8,
  Connector = 9,
  Card = 10,
  CardTemplate = 11,
  Conversation = 12,
  File = 13,
  ServicePrincipal = 14,
  Enterprise = 15,
}

export enum SchemaType {
  /** 廢棄 */
  DAG = 0,
  FDL = 1,
  /** 廢棄 */
  BlockWise = 2,
}

export enum SendVoiceMode {
  /** 文本消息 */
  text = 1,
  /** 發送爲語音 */
  audio = 2,
}

export enum SuggestReplyInfoMode {
  /** 關閉 */
  Disable = 0,
  /** 系統 */
  System = 1,
  /** 自定義 */
  Custom = 2,
}

export enum SupportBatch {
  /** 1:不支持 */
  NOT_SUPPORT = 1,
  /** 2:支持 */
  SUPPORT = 2,
}

export enum Tag {
  All = 1,
  Hot = 2,
  Information = 3,
  Music = 4,
  Picture = 5,
  UtilityTool = 6,
  Life = 7,
  Traval = 8,
  Network = 9,
  System = 10,
  Movie = 11,
  Office = 12,
  Shopping = 13,
  Education = 14,
  Health = 15,
  Social = 16,
  Entertainment = 17,
  Finance = 18,
  Hidden = 100,
}

export enum TaskOrderBy {
  CreateTime = 0,
  UpdateTime = 1,
}

export enum TaskStatus {
  Wait = 0,
  Running = 1,
  Success = 2,
  Fail = 3,
  Cancel = 4,
}

export enum TerminatePlanType {
  USELLM = 1,
  USESETTING = 2,
}

export enum UserBehaviorType {
  /** 打開協作者 */
  OpenCollaborators = 1,
  /** 添加協作者 */
  AddCollaborators = 2,
}

export enum UserLevel {
  Free = 0,
  PremiumLite = 10,
  Premium = 15,
  PremiumPlus = 20,
  V1ProInstance = 100,
  ProPersonal = 110,
  Team = 120,
  Enterprise = 130,
}

export enum ValidateErrorType {
  BotValidateNodeErr = 1,
  BotValidatePathErr = 2,
  BotConcurrentPathErr = 3,
}

export enum VCSCanvasType {
  Draft = 1,
  Submit = 2,
  Publish = 3,
}

export enum VersionType {
  Unknown = 0,
  WorkflowVersion = 1,
  CommitIDVersion = 2,
}

export enum VolcanoDatasetStatus {
  DatasetValid = 0,
  DatasetInvalid = 1,
}

/** 流程提交的狀態，1不可提交 2可提交  3已提交 4廢棄 */
export enum WorkFlowDevStatus {
  /** 不可提交（流程未提交且最新的版本未test run成功） */
  CanNotSubmit = 1,
  /** 未提交且可提交 （流程未提交但最新的版本已經test run成功） */
  CanSubmit = 2,
  /** 已提交 */
  HadSubmit = 3,
  /** 刪除 */
  Deleted = 4,
}

export enum WorkflowExecuteMode {
  TestRun = 1,
  Run = 2,
  NodeDebug = 3,
}

export enum WorkflowExeHistoryStatus {
  NoHistory = 1,
  HasHistory = 2,
}

export enum WorkflowExeStatus {
  Running = 1,
  Success = 2,
  Fail = 3,
  Cancel = 4,
}

export enum WorkFlowListStatus {
  UnPublished = 1,
  HadPublished = 2,
}

/** WorkflowMode 用來區分 Workflow 和 chatflow */
export enum WorkflowMode {
  Workflow = 0,
  Imageflow = 1,
  SceneFlow = 2,
  ChatFlow = 3,
  /** 僅在查詢時使用 */
  All = 100,
}

export enum WorkflowRunMode {
  Sync = 0,
  Stream = 1,
  Async = 2,
}

export enum WorkflowSnapshotStatus {
  Canvas = 0,
  Published = 1,
}

/** 流程發佈的狀態，1不可發佈 2可發佈  3已發佈 4刪除 5下架 */
export enum WorkFlowStatus {
  /** 不可發佈 （流程未發佈且最新的提交版本未test run成功） */
  CanNotPublish = 1,
  /** 未發佈且可發佈 （流程未發佈但最新的提交版本已經test run成功） */
  CanPublish = 2,
  /** 已發佈 */
  HadPublished = 3,
  /** 刪除 */
  Deleted = 4,
  /** 下架 */
  Unlisted = 5,
}

export enum WorkflowStorageType {
  /** 資源庫中 */
  Library = 1,
  /** 在某個project內的 */
  Project = 2,
}

export enum WorkFlowType {
  /** 用戶自定義 */
  User = 0,
  /** 官方模板 */
  GuanFang = 1,
}

/** flow_mode */
export enum WorkflowUpdateEventType {
  UpdateUser = 1,
  UpdateSpace = 2,
}

export enum WorkflowVCSScriptType {
  Multiple = 1,
  Gray = 2,
  Space = 3,
}

export enum WorkflowVersionScriptType {
  Multiple = 1,
  All = 2,
}

export interface APIDetail {
  /** api的id */
  id?: string;
  name?: string;
  description?: string;
  parameters?: Array<APIParameter>;
  plugin_id?: string;
}

export interface ApiDetailData {
  /** 插件的唯一標識。 */
  pluginID?: string;
  /** API 的名稱。 */
  apiName?: string;
  /** API 的輸入參數定義，通常是 JSON 字符串格式，描述輸入參數的結構、類型等元信息。 */
  inputs?: unknown;
  /** API 的輸出參數定義，通常是 JSON 字符串格式，描述輸出結果的結構和類型。 */
  outputs?: unknown;
  /** API 的圖標 URL。 */
  icon?: string;
  /** API 的顯示名稱和Label */
  name?: string;
  desc?: string;
  /** 插件的狀態，默認：0，已上架/已發佈：1，已下架：2，審覈中：3。 */
  pluginProductStatus?: Int64;
  pluginProductUnlistType?: Int64;
  /** API 所屬的空間 ID。 */
  spaceID?: string;
  debug_example?: DebugExample;
  updateTime?: Int64;
  projectID?: string;
  version?: string;
  pluginType?: PluginType;
  latest_version?: string;
  latest_version_name?: string;
  version_name?: string;
  /** 只需要關心值爲3的場景，如果auth=3，表示Oauth插件 */
  auth?: number;
  /** 0:所有渠道；1:素材；2:商店 */
  channel_id?: Int64;
  commercial_setting?: CommercialSetting;
  /** 插件來源 */
  plugin_from?: PluginFrom;
}

export interface APIParam {
  plugin_id?: string;
  api_id?: string;
  plugin_version?: string;
  plugin_name?: string;
  api_name?: string;
  out_doc_link?: string;
  tips?: string;
}

export interface APIParameter {
  /** for前端，無實際意義 */
  id?: string;
  name?: string;
  desc?: string;
  type?: ParameterType;
  sub_type?: ParameterType;
  location?: ParameterLocation;
  is_required?: boolean;
  sub_parameters?: Array<APIParameter>;
  global_default?: string;
  global_disable?: boolean;
  local_default?: string;
  local_disable?: boolean;
  format?: string;
  title?: string;
  enum_list?: Array<string>;
  value?: string;
  enum_var_names?: Array<string>;
  minimum?: number;
  maximum?: number;
  exclusive_minimum?: boolean;
  exclusive_maximum?: boolean;
  biz_extend?: string;
  /** 默認入參的設置來源 */
  default_param_source?: DefaultParamSource;
  /** 引用variable的key */
  variable_ref?: string;
  assist_type?: AssistParameterType;
}

export interface APIStruct {
  Name?: string;
  Type?: FieldType;
  Children?: Array<APIStruct>;
}

export interface AsyncConf {
  switch_status?: boolean;
  message?: string;
}

export interface AsyncSubWorkflowResult {
  workflow_id?: string;
  nodeId?: string;
  executeId?: string;
  status?: AsyncSubWorkflowStatus;
  create_time?: Int64;
  update_time?: Int64;
  operator_id?: string;
  error_code?: string;
  error_msg?: string;
  extra?: string;
  parent_execute_id?: string;
}

export interface AudioConfig {
  /** key爲語言 "zh", "en" "ja" "es" "id" "pt" */
  voice_config_map?: Record<string, VoiceConfig>;
  /** 文本轉語音開關 */
  is_text_to_voice_enable?: boolean;
  /** 智能體消息形式 */
  agent_message_type?: InputMode;
}

export interface AvatarConfig {
  image_uri?: string;
  image_url?: string;
}

export interface BackgroundImageDetail {
  /** 原始圖片 */
  origin_image_uri?: string;
  origin_image_url?: string;
  /** 實際使用圖片 */
  image_uri?: string;
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

export interface Batch {
  /** batch開關是否打開 */
  is_batch?: boolean;
  /** 只處理數組[0,take_count)範圍的輸入 */
  take_count?: Int64;
  /** 需要Batch的輸入 */
  input_param?: Parameter;
}

export interface BatchDeleteProjectConversationRequest {
  project_id: string;
  space_id: string;
  /** 全部刪除時，傳 list 的全部 uniqueid */
  unique_id_list: Array<string>;
  /** 當前是否調試態 */
  draft_mode: boolean;
  /** 非調試態傳遞當前渠道 id */
  connector_id: string;
  Base?: base.Base;
}

export interface BatchDeleteProjectConversationResponse {
  Success?: boolean;
  BaseResp: base.BaseResp;
}

export interface BatchDeleteWorkflowRequest {
  workflow_id_list: Array<string>;
  space_id: string;
  action?: DeleteAction;
  Base?: base.Base;
}

export interface BatchDeleteWorkflowResponse {
  data: DeleteWorkflowData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface BatchGetWkProcessIORequest {
  /** 傳入的所有workflow_id要求是屬於同一個space_id */
  workflow_params?: Array<GetWkProcessIOParam>;
  Base?: base.Base;
}

export interface BatchGetWkProcessIOResponse {
  in_out_data?: Array<WkProcessIOData>;
  code?: Int64;
  msg?: string;
  BaseResp?: base.BaseResp;
}

export interface BotTemplateCopyWorkFlowData {
  WorkflowID?: Int64;
  SpaceID?: Int64;
  UserID?: Int64;
  PluginID?: Int64;
  WorkflowMode?: WorkflowMode;
}

export interface CallbackContent {
  /** 若ErrorCode非0非空，則Output爲空 */
  Output?: string;
  /** 業務自定義數據 */
  Extra?: string;
  /** deprecated，僅部分存量接入業務需要使用 */
  ErrorCode?: string;
  /** deprecated，僅部分存量接入業務需要使用 */
  ErrorMsg?: string;
}

export interface CancelJobRequest {
  job_id?: string;
  Base?: base.Base;
}

export interface CancelJobResponse {
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface CancelTaskRequest {
  task_id?: Array<string>;
  job_id?: string;
  Base?: base.Base;
}

export interface CancelTaskResponse {
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface CancelWorkFlowRequest {
  execute_id: string;
  space_id: string;
  workflow_id?: string;
  async_subflow?: boolean;
  Base?: base.Base;
}

export interface CancelWorkFlowResponse {
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface CanvasData {
  /** 流程核心數據 */
  workflow?: Workflow;
  /** 版本相關數據（草稿版本、提交版本、發佈版本） */
  vcs_data?: VCSCanvasData;
  /** 發佈狀態相關數據 */
  db_data?: DBCanvasData;
  /** 操作者信息 */
  operation_info?: OperationInfo;
  /** 當前一定返回nil */
  external_flow_info?: string;
  /** 是否綁定了Agent */
  is_bind_agent?: boolean;
  bind_biz_id?: string;
  bind_biz_type?: number;
  /** 發佈workflow的版本號 */
  workflow_version?: string;
}

export interface CanvasPosition {
  width?: number;
  height?: number;
  left?: number;
  top?: number;
}

export interface CategoriedImageflowBasicNodes {
  nodes: Array<ImageflowBasicNode>;
  /** 分組信息 */
  category_i18n_key: string;
}

export interface ChatFlowRole {
  id?: string;
  workflow_id?: string;
  /** 渠道ID */
  connector_id?: string;
  /** 角色頭像 */
  avatar?: AvatarConfig;
  /** 角色描述 */
  description?: string;
  /** 開場白 */
  onboarding_info?: OnboardingInfo;
  /** 角色名稱 */
  name?: string;
  /** 用戶問題建議 */
  suggest_reply_info?: SuggestReplyInfo;
  /** 背景圖 */
  background_image_info?: BackgroundImageInfo;
  /** 語音配置：音色、電話等 */
  audio_config?: AudioConfig;
  /** 用戶輸入方式 */
  user_input_config?: UserInputConfig;
  /** 項目版本 */
  project_version?: string;
}

export interface ChatFlowRunRequest {
  /** required 待執行的對話流 ID，此對話流應已發佈 */
  workflow_id?: string;
  /** required 設置對話流輸入參數中的自定義參數 (map[String]any) */
  parameters?: string;
  /** 用於指定一些額外的字段，例如經緯度、用戶ID等 */
  ext?: Record<string, string>;
  /** 需要關聯的智能體 ID */
  bot_id?: string;
  /** 執行模式，默認爲正式運行，試運行需要傳入"DEBUG" */
  execute_mode?: string;
  /** DEPRECATED 版本號，可能是workflow版本或者project版本 */
  version?: string;
  /** 渠道ID，比如ui builder、template、商店等 */
  connector_id?: string;
  /** 需要關聯的扣子應用 ID */
  app_id?: string;
  /** 對話流對應的會話 ID */
  conversation_id?: string;
  /** required 對話中用戶問題和歷史消息 */
  additional_messages?: Array<EnterMessage>;
  /** 項目ID，爲了兼容ui builder */
  project_id?: string;
  /** 建議回覆信息 */
  suggest_reply_info?: SuggestReplyInfo;
  /** 項目版本，只有運行工作流爲project內工作流時可以傳值，不傳默認使用最新版本 */
  app_version?: string;
  /** 資源庫工作流版本，只有運行工作流爲資源庫內工作流時可以傳值，不傳默認使用最新版本 */
  workflow_version?: string;
}

export interface ChatFlowRunResponse {
  /** required 當前流式返回的數據包事件 */
  event?: string;
  /** required 消息內容 (Chat Object 或 Message Object 的 JSON 序列化字符串) */
  data?: string;
}

export interface CheckDevVCSCommitIdRequest {
  /** 工作流id列表 */
  wf_id_list?: Array<Int64>;
  Base?: base.Base;
}

export interface CheckDevVCSCommitIdResponse {
  /** 修復數據的sql */
  update_sql_list?: Array<string>;
  /** 正確的工作流列表 */
  right_wf_list?: Array<Int64>;
  /** 錯誤的工作流列表 */
  wrong_wf_list?: Array<Int64>;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface CheckLatestSubmitVersionRequest {
  space_id: string;
  workflow_id: string;
  Base?: base.Base;
}

export interface CheckLatestSubmitVersionResponse {
  data: LatestSubmitData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface CheckResult {
  /** 校驗類型 */
  type?: CheckType;
  /** 是否通過 */
  is_pass?: boolean;
  /** 不通過原因 */
  reason?: string;
}

export interface CloseCollaboratorRequest {
  workflow_id: string;
  space_id: string;
  Base?: base.Base;
}

export interface CloseCollaboratorResponse {
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface CodeParam {
  code_snippet?: string;
}

export interface CollaboratorInfo {
  id?: string;
  name?: string;
  avatar_url?: string;
  user_name?: string;
}

export interface CommercialSetting {
  commercial_type?: ProductPaidType;
  /** 經營類型 */
  business_type?: BusinessType;
  /** 用戶維度的信息
是否已開通 */
  has_activate?: boolean;
}

export interface CompensationData {
  workflow?: Workflow;
  /** 提交的 commit_id。其作用是唯一標識一個流程的單個提交版本（每個 commit_id 僅對應且僅能對應一個流程的一次提交版本）。 */
  submit_commit_id?: string;
  draft_commit_id?: string;
}

export interface ConnectorInfo {
  id?: string;
  name?: string;
  icon?: string;
}

export interface ConversationData {
  id?: string;
  created_at?: Int64;
  meta_data?: Record<string, string>;
  creator_d?: string;
  connector_id?: string;
  last_section_id?: string;
}

export interface CopyWkTemplateApiRequest {
  /** 拷貝模板的所有父子workflow或者單個workflow集合 */
  workflow_ids: Array<string>;
  /** 拷貝的目標空間 */
  target_space_id: string;
  Base?: base.Base;
}

export interface CopyWkTemplateApiResponse {
  /** 模板ID：拷貝副本的數據 */
  data: Record<Int64, WkPluginBasicData>;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface CopyWorkflowData {
  workflow_id: string;
  schema_type: SchemaType;
}

export interface CopyWorkflowRequest {
  workflow_id: string;
  space_id: string;
  Base?: base.Base;
}

export interface CopyWorkflowResponse {
  data: CopyWorkflowData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface CopyWorkflowV2Data {
  workflow_id: string;
  schema_type: SchemaType;
}

export interface CopyWorkflowV2Request {
  workflow_id: string;
  space_id: string;
  Base?: base.Base;
}

export interface CopyWorkflowV2Response {
  code?: Int64;
  msg?: string;
  data?: CopyWorkflowV2Data;
  BaseResp: base.BaseResp;
}

export interface CozeProCopyWorkFlowData {
  WorkflowID?: Int64;
  SpaceID?: Int64;
  UserID?: Int64;
  PluginID?: Int64;
  WorkflowMode?: WorkflowMode;
}

export interface CreateChatFlowRoleRequest {
  chat_flow_role?: ChatFlowRole;
  Base?: base.Base;
}

export interface CreateChatFlowRoleResponse {
  /** 數據庫中ID */
  ID?: string;
  BaseResp: base.BaseResp;
}

export interface CreateJobRequest {
  workflow_id?: string;
  workflow_version?: string;
  project_version?: string;
  url?: string;
  job_type?: JobType;
  space_id?: string;
  bind_project_id?: string;
  bind_bot_id?: string;
  job_name?: string;
  Base?: base.Base;
}

export interface CreateJobResponse {
  job_id?: string;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface CreateProjectConversationDefRequest {
  project_id: string;
  conversation_name: string;
  space_id: string;
  Base?: base.Base;
}

export interface CreateProjectConversationDefResponse {
  unique_id?: string;
  space_id: string;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface CreateWorkflowData {
  /** 流程的id，用來標識唯一的流程 */
  workflow_id?: string;
  /** 流程名 */
  name?: string;
  url?: string;
  status?: WorkFlowStatus;
  type?: SchemaType;
  node_list?: Array<Node>;
  /** 當前一定返回nil */
  external_flow_info?: string;
  /** 創建workflow時默認會提交一次，返回submit commit id */
  submit_commit_id?: string;
}

export interface CreateWorkflowRequest {
  /** 流程名，不可爲空，只能英文字母開頭，名稱內只能包含英文字母、數字、下劃線，長度必須在1-100之間 */
  name: string;
  /** 流程描述，不可爲空，長度必須在1-600之間。 */
  desc: string;
  /** 流程圖標uri，不可爲空 */
  icon_uri: string;
  /** 空間id，不可爲空，用於標識工作流所屬的空間。 */
  space_id: string;
  /** workflow or chatflow，默認值爲workflow */
  flow_mode?: WorkflowMode;
  /** 如果不提供則默認爲FDL。用於指定工作流的模式類型。目前也只支持傳FDL。 */
  schema_type?: SchemaType;
  /** 綁定業務id，非必要不填寫。 */
  bind_biz_id?: string;
  /** 綁定業務類型，非必要不填寫。參考BindBizType結構體，值爲3時代表抖音分身 */
  bind_biz_type?: number;
  /** 應用id，填寫時代表流程是project下的流程，需要跟隨project發佈 */
  project_id?: string;
  /** 是否創建會話，僅當flow_mode=chatflow時生效 */
  create_conversation?: boolean;
  Base?: base.Base;
}

export interface CreateWorkflowResponse {
  data: CreateWorkflowData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface CreateWorkflowV2Data {
  workflow_id?: string;
  name?: string;
  url?: string;
  status?: WorkFlowStatus;
  type?: SchemaType;
  node_list?: Array<Node>;
}

export interface CreateWorkflowV2Request {
  name: string;
  desc: string;
  icon_uri: string;
  space_id: string;
  /** workflow or imageflow，默認值爲workflow */
  flow_mode?: WorkflowMode;
  bind_biz_id?: string;
  bind_biz_type?: number;
  Base?: base.Base;
}

export interface CreateWorkflowV2Response {
  data: CreateWorkflowV2Data;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface Creator {
  id?: string;
  name?: string;
  avatar_url?: string;
  /** 是否是自己創建的 */
  self?: boolean;
}

export interface DataCompensationRequest {
  space_id: string;
  workflow_id?: string;
  Base?: base.Base;
}

export interface DataCompensationResponse {
  data: CompensationData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface DatasetDetail {
  id?: string;
  icon_url?: string;
  name?: string;
  format_type?: Int64;
  /** 0=coze知識庫 1=火山知識庫 */
  dataset_type?: DatasetType;
  /** 火山側知識服務詳情頁 */
  volcano_service_link?: string;
  /** 火山側知識庫詳情頁, */
  volcano_detail_link?: string;
  /** 火山知識庫狀態 是否已失效 */
  status?: VolcanoDatasetStatus;
}

export interface DatasetFCItem {
  dataset_id?: string;
  is_draft?: boolean;
  volcano_dataset_service_id?: string;
}

export interface DatasetParam {
  dataset_list?: Array<string>;
}

export interface DBCanvasData {
  status?: WorkFlowStatus;
}

export interface DebugExample {
  req_example?: string;
  resp_example?: string;
}

export interface DeleteChatFlowRoleRequest {
  WorkflowID?: string;
  ConnectorID?: string;
  /** 數據庫中ID */
  ID?: string;
  Base?: base.Base;
}

export interface DeleteChatFlowRoleResponse {
  BaseResp: base.BaseResp;
}

export interface DeleteEnvRequest {
  workflow_id: string;
  space_id: string;
  env: string;
  Base?: base.Base;
}

export interface DeleteEnvResponse {
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface DeleteProjectConversationDefRequest {
  project_id: string;
  unique_id: string;
  /** 替換表，每個 wf 草稿分別替換成哪個, 未替換的情況下 success =false，replace 會返回待替換列表，key傳workflow_id，value傳要替換成的conversation的unique_id，replace傳空需要傳輸check_only */
  replace?: Record<string, string>;
  /** 是否僅進行檢查，如果爲true，不實際執行刪除操作。主要用於查詢當前綁定會話的流程都有哪些。 */
  check_only?: boolean;
  space_id: string;
  Base?: base.Base;
}

export interface DeleteProjectConversationDefResponse {
  success?: boolean;
  /** 如果未傳遞 replacemap, 會失敗，返回需要替換的 wf */
  need_replace?: Array<Workflow>;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface DeleteWorkflowData {
  status?: DeleteStatus;
}

export interface DeleteWorkflowRequest {
  workflow_id: string;
  space_id: string;
  action?: DeleteAction;
  Base?: base.Base;
}

export interface DeleteWorkflowResponse {
  data: DeleteWorkflowData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface DeleteWorkflowV2Data {
  status?: DeleteStatus;
}

export interface DeleteWorkflowV2Request {
  workflow_id: string;
  Base?: base.Base;
}

export interface DeleteWorkflowV2Response {
  data: DeleteWorkflowV2Data;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface Dependency {
  start_id?: string;
  sub_workflow_ids?: Array<string>;
  plugin_ids?: Array<string>;
  tools_id_map?: Record<string, Array<string>>;
  knowledge_list?: Array<KnowledgeInfo>;
  model_ids?: Array<string>;
  variable_names?: Array<string>;
  table_list?: Array<TableInfo>;
  voice_ids?: Array<string>;
  workflow_version?: Array<WorkflowVersionInfo>;
  plugin_version?: Array<PluginVersionInfo>;
}

export interface DependencyTree {
  /** 當前工作流的id */
  root_id?: string;
  /** 發佈workflow的版本號 */
  version?: string;
  node_list?: Array<DependencyTreeNode>;
  edge_list?: Array<DependencyTreeEdge>;
}

export interface DependencyTreeEdge {
  from?: string;
  from_version?: string;
  from_commit_id?: string;
  to?: string;
  to_version?: string;
}

export interface DependencyTreeNode {
  name?: string;
  id?: string;
  icon?: string;
  is_product?: boolean;
  is_root?: boolean;
  is_library?: boolean;
  with_version?: boolean;
  workflow_version?: string;
  dependency?: Dependency;
  commit_id?: string;
  fdl_commit_id?: string;
  flowlang_release_id?: string;
  is_chatflow?: boolean;
}

export interface DependencyTreeRequest {
  /** 流程存儲的位置（資源庫 或 project內） */
  type: WorkflowStorageType;
  /** 當type爲Library時，此參數必填 */
  library_info?: LibraryWorkflowInfo;
  /** 當type爲Project時，此參數必填 */
  project_info?: ProjectWorkflowInfo;
  Base?: base.Base;
}

export interface DependencyTreeResponse {
  data?: DependencyTree;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface DiffContent {
  name_dif?: DiffContentMeta;
  describe_dif?: DiffContentMeta;
  icon_url_dif?: DiffContentMeta;
  schema_dif?: DiffContentMeta;
}

export interface DiffContentMeta {
  /** 修改前的內容 */
  before?: string;
  /** 前一個commitid */
  before_commit_id?: string;
  /** 修改後的內容 */
  after?: string;
  /** 後一個commitid */
  after_commit_id?: string;
  /** 當before ！= modify的時候 爲ture ，否則爲false ，當modify == false前端展示 diff 爲 "-" */
  modify?: boolean;
}

export interface DiffType {
  name_type?: DiffTypeMeta;
  describe_type?: DiffTypeMeta;
  icon_url_type?: DiffTypeMeta;
  schema_type?: DiffTypeMeta;
}

export interface EncapsulateWorkflowData {
  /** 當不是隻校驗時，返回創建後的流程的id */
  workflow_id?: string;
  name?: string;
  url?: string;
  status?: WorkFlowStatus;
  type?: SchemaType;
  publish_data?: PublishWorkflowData;
  validate_data?: Array<ValidateErrorData>;
}

export interface EncapsulateWorkflowRequest {
  /** 創建workflow需要的參數
流程名 */
  name: string;
  /** 流程描述 */
  desc: string;
  /** 流程圖標 */
  icon_uri: string;
  space_id: string;
  /** workflow or chatflow，默認值爲workflow */
  flow_mode?: WorkflowMode;
  schema_type?: SchemaType;
  bind_biz_id?: string;
  bind_biz_type?: number;
  /** 當需要在project中校驗或創建流程時，需要傳project的id */
  project_id?: string;
  /** 是否創建會話。僅在 chatflow 場景下，“是否創建會話” 設置生效。當此設置爲 true 時，系統將創建會話；設置爲 false 或留空時，則不創建會話。在其他流程場景中，無論該設置爲何值，均不會對會話創建產生影響 。 */
  create_conversation?: boolean;
  /** required,創建時直接填入的schema */
  schema?: string;
  /** 用於schema校驗 */
  bind_bot_id?: string;
  /** 只校驗。當值爲true時只校驗，不創建workflow；當不傳這個參數或值爲false時，如果不是project中，會對schema進行校驗、創建workflow保存併發布；如果是在project中，則會對schema進行校驗並創建workflow保存。 */
  only_validate?: boolean;
  Base?: base.Base;
}

export interface EncapsulateWorkflowResponse {
  data: EncapsulateWorkflowData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface EnterMessage {
  role: string;
  /** 內容 */
  content?: string;
  meta_data?: Record<string, string>;
  /** text/card/object_string */
  content_type?: string;
  type?: string;
}

export interface EnvData {
  env?: string;
  desc?: string;
  commit_id?: string;
  source_commit_id?: string;
  create_time?: Int64;
  update_time?: Int64;
  user?: UserInfo;
}

export interface Environment {
  lang?: string;
  latitude?: string;
  longitude?: string;
  bot_id?: string;
  conversation_id?: string;
  evaluate_request_tag?: string;
  mp_app_id?: string;
  execute_mod?: Int64;
  agent_id?: string;
  ref_bot_id?: string;
  auth_info?: string;
  user_extra?: string;
}

export interface EnvListData {
  env_list: Array<EnvData>;
  cursor?: string;
  has_more: boolean;
}

export interface ExternalDeleteEnvData {
  workflow_id: Int64;
  env: string;
}

export interface ExternalWorkflowPublishData {
  workflow_id: Int64;
  /** 使用哪個版本發佈 */
  commit_id?: string;
  sub_workflow_list?: Array<Int64>;
  extra?: string;
  compile_commit_id?: string;
  /** 發佈態的commit_id */
  publish_commit_id?: string;
  run_model?: ExeternalRunMode;
}

export interface FCDatasetSetting {
  dataset_id?: string;
}

export interface FCPluginSetting {
  plugin_id?: string;
  api_id?: string;
  api_name?: string;
  request_params?: Array<APIParameter>;
  response_params?: Array<APIParameter>;
  response_style?: ResponseStyle;
  /** 本期暫時不支持 */
  async_conf?: AsyncConf;
  is_draft?: boolean;
  plugin_version?: string;
  /** 插件來源 目前只有開源版本用 */
  plugin_from?: PluginFrom;
}

export interface FCWorkflowSetting {
  workflow_id?: string;
  plugin_id?: string;
  request_params?: Array<APIParameter>;
  response_params?: Array<APIParameter>;
  response_style?: ResponseStyle;
  /** 本期暫時不支持 */
  async_conf?: AsyncConf;
  is_draft?: boolean;
  workflow_version?: string;
}

export interface GetApiDetailRequest {
  /** 插件的唯一標識符。用於指定要查詢哪個插件下的 API 詳情。 */
  pluginID?: string;
  /** API 的名稱。用於在指定插件下查找特定的 API。 */
  apiName?: string;
  /** 空間 ID。用於限定 API 查詢的範圍，API 可能屬於某個特定的空間。 */
  space_id?: string;
  /** API 的唯一標識符。用於更精確地定位 API。 */
  api_id?: string;
  project_id?: string;
  plugin_version?: string;
  plugin_from?: PluginFrom;
  Base?: base.Base;
}

export interface GetApiDetailResponse {
  code?: Int64;
  msg?: string;
  data?: ApiDetailData;
  BaseResp: base.BaseResp;
}

export interface GetBotsIDETokenRequest {
  space_id?: string;
  can_write?: boolean;
  Base?: base.Base;
}

export interface GetBotsIDETokenResponse {
  /** 提供給BizIDE側的鑑權信息 */
  data: IDETokenData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetCanvasInfoRequest {
  /** 空間id，不可爲空或0，用於標識工作流所屬的空間。 */
  space_id: string;
  /** required，流程id，不可爲空或0，用於唯一標識一個工作流。 */
  workflow_id?: string;
  Base?: base.Base;
}

export interface GetCanvasInfoResponse {
  /** 流程核心數據 */
  data: CanvasData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetChatFlowRoleRequest {
  workflow_id?: string;
  /** 渠道ID */
  connector_id?: string;
  /** 是否是調試模式，當字段爲true時，會忽略connector_id的值；當字段爲false時，會根據connector_id去查詢對應渠道版本 */
  is_debug?: boolean;
  /** 4: optional string AppID (api.query = "app_id") */
  ext?: Record<string, string>;
  Base?: base.Base;
}

export interface GetChatFlowRoleResponse {
  role?: ChatFlowRole;
  BaseResp: base.BaseResp;
}

export interface GetCodeMigrateGrayRequest {
  space_id: string;
  Base?: base.Base;
}

export interface GetCodeMigrateGrayResponse {
  /** 是否灰度 */
  gray: boolean;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetConflictFromContentData {
  /** 前端需要消費submit_diff.after_commit_id用來作爲merge的 source_submit_id */
  submit_diff?: DiffContent;
  draft_diff?: DiffContent;
  diff_type?: DiffType;
}

export interface GetConflictFromContentRequest {
  space_id: string;
  workflow_id: string;
  Base?: base.Base;
}

export interface GetConflictFromContentResponse {
  data: GetConflictFromContentData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetDeleteStrategyRequest {
  workflow_id: string;
  space_id: string;
  Base?: base.Base;
}

export interface GetDeleteStrategyResponse {
  data: DeleteType;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetEnvListRequest {
  workflow_id: string;
  space_id: string;
  /** default = 10 */
  limit?: number;
  /** 多次分頁的時候需要傳入 */
  cursor?: string;
  Base?: base.Base;
}

export interface GetEnvListResponse {
  data: EnvListData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetExampleWorkFlowListRequest {
  /** 分頁功能，指定希望獲取的結果列表的頁碼。 */
  page?: number;
  /** 分頁功能，指定每頁返回的條目數量, 必須大於0，小於等於100 */
  size?: number;
  /** 根據工作流的名稱來篩選示例工作流列表。 */
  name?: string;
  /** 根據工作流的模式（例如：標準工作流、對話流等）篩選示例工作流列表。 */
  flow_mode?: WorkflowMode;
  /** Bot的 Workflow as Agent模式會使用，只會使用BotAgent = 3的場景 */
  checker?: Array<CheckType>;
  Base?: base.Base;
}

export interface GetExampleWorkFlowListResponse {
  data: WorkFlowListData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetExecuteHistoryListRequest {
  workflow_id?: string;
  execute_id?: string;
  execute_mode?: WorkflowExecuteMode;
  log_id?: string;
  start_time?: Int64;
  end_time?: Int64;
  page?: number;
  page_size?: number;
  Base?: base.Base;
}

export interface GetExecuteHistoryListResponse {
  data?: Array<OPExecuteHistory>;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetFlowlangGrayRequest {
  space_id: string;
  Base?: base.Base;
}

export interface GetFlowlangGrayResponse {
  /** 是否灰度 */
  gray: boolean;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetHistorySchemaData {
  name?: string;
  describe?: string;
  url?: string;
  schema?: string;
  flow_mode?: WorkflowMode;
  bind_biz_id?: string;
  bind_biz_type?: BindBizType;
  workflow_id?: string;
  commit_id?: string;
  workflow_version?: string;
  project_version?: string;
  project_id?: Int64;
  execute_id?: string;
  sub_execute_id?: string;
  log_id?: string;
}

export interface GetHistorySchemaRequest {
  space_id: string;
  workflow_id: string;
  /** 多次分頁的時候需要傳入 */
  commit_id: string;
  type: OperateType;
  env?: string;
  workflow_version?: string;
  project_version?: string;
  project_id?: string;
  execute_id?: string;
  sub_execute_id?: string;
  log_id?: string;
  Base?: base.Base;
}

export interface GetHistorySchemaResponse {
  data: GetHistorySchemaData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetImageflowBasicNodeListRequest {
  /** 側邊欄的tab類型，默認值爲基礎節點 */
  tab_type?: ImageflowTabType;
  Base?: base.Base;
}

export interface GetImageflowBasicNodeListResponse {
  data: ImageflowBasicNodeListData;
  code: Int64;
  msg: string;
  baseResp: base.BaseResp;
}

export interface GetJobInputConfigRequest {
  space_id?: string;
  professional_user?: boolean;
  Base?: base.Base;
}

export interface GetJobInputConfigResponse {
  max_input_size?: number;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetJobListRequest {
  /** required, 分頁頁碼，一般爲1，如果爲nil或小於等於0則返回錯誤。用於指定頁碼，從1開始。 */
  page?: number;
  /** required, 分頁大小，一般爲10，如果爲nil或不在1-100之間則返回錯誤。用於指定每頁大小。 */
  size?: number;
  /** 根據流程id列表查詢對應的流程 */
  job_ids?: Array<string>;
  /** required，空間id，用於標識工作流所屬的空間 */
  space_id?: string;
  /** 根據流程是否已發佈篩選流程 */
  status?: Array<JobStatus>;
  order_by?: JobOrderBy;
  /** 根據接口請求人是否爲流程創建人篩選流程 */
  login_user_create?: boolean;
  Base?: base.Base;
}

export interface GetJobListResponse {
  data?: Array<JobInfo>;
  total?: number;
  has_more?: boolean;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetListableWorkflowsRequest {
  space_id_list: Array<string>;
  page: number;
  size: number;
  /** 新增，workflow or imageflow, 默認爲workflow */
  flow_mode?: WorkflowMode;
  Base?: base.Base;
}

export interface GetListableWorkflowsResponse {
  data: ListableWorkflows;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetLLMNodeFCSettingDetailRequest {
  workflow_id: string;
  space_id: string;
  /** llm節點使用的插件類型技能列表 */
  plugin_list?: Array<PluginFCItem>;
  /** llm節點使用的工作流類型技能列表 */
  workflow_list?: Array<WorkflowFCItem>;
  /** llm節點使用的知識庫類型技能列表 */
  dataset_list?: Array<DatasetFCItem>;
  Base?: base.Base;
}

export interface GetLLMNodeFCSettingDetailResponse {
  /** pluginid -> value */
  plugin_detail_map?: Record<string, PluginDetail>;
  /** apiid -> value */
  plugin_api_detail_map?: Record<string, APIDetail>;
  /** workflowid-> value */
  workflow_detail_map?: Record<string, WorkflowDetail>;
  /** datasetid -> value */
  dataset_detail_map?: Record<string, DatasetDetail>;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetLLMNodeFCSettingsMergedRequest {
  workflow_id: string;
  space_id: string;
  plugin_fc_setting?: FCPluginSetting;
  workflow_fc_setting?: FCWorkflowSetting;
  dataset_fc_setting?: FCDatasetSetting;
  Base?: base.Base;
}

export interface GetLLMNodeFCSettingsMergedResponse {
  plugin_fc_setting?: FCPluginSetting;
  worflow_fc_setting?: FCWorkflowSetting;
  dataset_fc_setting?: FCDatasetSetting;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetNodeAsyncExecuteHistoryRequest {
  space_id: string;
  parent_workflow_id: string;
  /** 節點id */
  parent_node_id: string;
  workflow_id: string;
  status?: AsyncSubWorkflowStatus;
  Base?: base.Base;
}

export interface GetNodeAsyncExecuteHistoryResponse {
  code?: Int64;
  msg?: string;
  data?: Array<AsyncSubWorkflowResult>;
  BaseResp?: base.BaseResp;
}

export interface GetNodeExecuteHistoryRequest {
  workflow_id: string;
  space_id: string;
  execute_id: string;
  /** 節點id */
  node_id: string;
  /** 是否批次節點 */
  is_batch?: boolean;
  /** 執行批次 */
  batch_index?: number;
  node_type: string;
  node_history_scene?: NodeHistoryScene;
  Base?: base.Base;
}

export interface GetNodeExecuteHistoryResponse {
  code?: Int64;
  msg?: string;
  data?: NodeResult;
  BaseResp?: base.BaseResp;
}

export interface GetNodeFieldConfigRequest {
  nodeType?: string;
  fieldNames?: Array<string>;
  Base?: base.Base;
}

export interface GetNodeFieldConfigResponse {
  /** 對應節點的配置，如果爲空返回 ""，前端可以根據實際場景來解析配置 */
  config?: Record<string, string>;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetPluginAuthStatusRequest {
  workflow_id?: string;
  plugin_id?: string;
  space_id?: string;
  Base?: base.Base;
}

export interface GetPluginAuthStatusResponse {
  /** 單獨授權 */
  auth_info?: PluginAuthStatus;
  /** 共享授權 */
  shared_auth_info?: PluginAuthStatus;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetReleasedWorkflowsRequest {
  page?: number;
  size?: number;
  type?: WorkFlowType;
  name?: string;
  workflow_ids?: Array<string>;
  tags?: Tag;
  space_id?: string;
  order_by?: OrderBy;
  login_user_create?: boolean;
  /** workflow or imageflow, 默認爲workflow */
  flow_mode?: WorkflowMode;
  /** 過濾條件，支持workflow_id和workflow_version */
  workflow_filter_list?: Array<WorkflowFilter>;
  Base?: base.Base;
}

export interface GetReleasedWorkflowsResponse {
  data: ReleasedWorkflowData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetStoreTestRunHistoryRequest {
  source_workflow_id?: string;
  execute_id?: string;
  Base?: base.Base;
}

export interface GetStoreTestRunHistoryResponse {
  data?: GetWorkFlowProcessData;
  code?: Int64;
  msg?: string;
  BaseResp?: base.BaseResp;
}

export interface GetTaskListData {
  job_info?: JobInfo;
  task_infos?: Array<TaskInfo>;
  total?: number;
  has_more?: boolean;
}

export interface GetTaskListRequest {
  /** required, 分頁頁碼，一般爲1，如果爲nil或小於等於0則返回錯誤。用於指定頁碼，從1開始。 */
  page?: number;
  /** required, 分頁大小，一般爲10，如果爲nil或不在1-100之間則返回錯誤。用於指定每頁大小。 */
  size?: number;
  job_id: string;
  /** 根據流程id列表查詢對應的流程 */
  task_ids?: Array<string>;
  /** required，空間id，用於標識工作流所屬的空間 */
  space_id?: string;
  /** 根據流程是否已發佈篩選流程 */
  status?: Array<TaskStatus>;
  order_by?: TaskOrderBy;
  /** 根據接口請求人是否爲流程創建人篩選流程 */
  login_user_create?: boolean;
  Base?: base.Base;
}

export interface GetTaskListResponse {
  data?: GetTaskListData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetUploadAuthTokenData {
  service_id?: string;
  upload_path_prefix?: string;
  auth?: UploadAuthTokenInfo;
  upload_host?: string;
}

export interface GetUploadAuthTokenRequest {
  /** 上傳場景，可選值："imageflow" ,"fileUpload" */
  scene?: string;
  Base?: base.Base;
}

export interface GetUploadAuthTokenResponse {
  data?: GetUploadAuthTokenData;
  code: Int64;
  msg: string;
  BaseResp?: base.BaseResp;
}

export interface GetWkProcessIOParam {
  workflow_id: string;
  execute_id?: string;
  /** 指定拉取該commit_id的最近一次執行歷史 */
  commit_id?: string;
}

export interface GetWorkflowDetailInfoRequest {
  /** 過濾條件，支持workflow_id和workflow_version */
  workflow_filter_list?: Array<WorkflowFilter>;
  /** 空間ID，用於篩選該空間內的工作流。 */
  space_id?: string;
  Base?: base.Base;
}

export interface GetWorkflowDetailInfoResponse {
  data: Array<WorkflowDetailInfoData>;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetWorkflowDetailRequest {
  workflow_ids?: Array<string>;
  space_id?: string;
  Base?: base.Base;
}

export interface GetWorkflowDetailResponse {
  data: Array<WorkflowDetailData>;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetWorkflowGrayFeatureRequest {
  /** 空間id */
  space_id?: string;
  Base?: base.Base;
}

export interface GetWorkflowGrayFeatureResponse {
  /** 灰度feature結果 */
  data?: Array<WorkflowGrayFeatureItem>;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetWorkflowIDByExecuteInfoRequest {
  execute_id?: string;
  sub_execute_id?: string;
  log_id?: string;
  Base?: base.Base;
}

export interface GetWorkflowIDByExecuteInfoResponse {
  workflow_id?: string;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetWorkFlowListRequest {
  /** required, 分頁頁碼，一般爲1，如果爲nil或小於等於0則返回錯誤。用於指定頁碼，從1開始。 */
  page?: number;
  /** required, 分頁大小，一般爲10，如果爲nil或不在1-100之間則返回錯誤。用於指定每頁大小。 */
  size?: number;
  /** 根據流程id列表查詢對應的流程 */
  workflow_ids?: Array<string>;
  /** 可忽略 */
  type?: WorkFlowType;
  /** 用於過濾特定名稱的工作流 */
  name?: string;
  /** 可忽略 */
  tags?: Tag;
  /** required，空間id，用於標識工作流所屬的空間 */
  space_id?: string;
  /** 根據流程是否已發佈篩選流程 */
  status?: WorkFlowListStatus;
  order_by?: OrderBy;
  /** 根據接口請求人是否爲流程創建人篩選流程 */
  login_user_create?: boolean;
  /** workflow or chatflow, 默認爲workflow。根據流程類型篩選流程 */
  flow_mode?: WorkflowMode;
  /** 新增字段，用於篩選schema_type */
  schema_type_list?: Array<SchemaType>;
  /** 用於過濾特定project的工作流。 */
  project_id?: string;
  /** 用於Bot的 Workflow as Agent模式選擇流程 或 project發佈過濾，此列表中的每個 CheckType 元素可指定特定規則，決定了返回的流程是否通過檢查。 */
  checker?: Array<CheckType>;
  bind_biz_id?: string;
  bind_biz_type?: BindBizType;
  project_version?: string;
  Base?: base.Base;
}

export interface GetWorkFlowListResponse {
  data: WorkFlowListData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetWorkflowMessageNodesData {
  id?: string;
  plugin_id?: string;
  name?: string;
  message_nodes?: Array<NodeInfo>;
}

export interface GetWorkflowMessageNodesRequest {
  /** 空間id */
  space_id?: string;
  plugin_id?: string;
  Base?: base.Base;
}

export interface GetWorkflowMessageNodesResponse {
  /** 返回碼 */
  code?: Int64;
  /** 返回信息 */
  msg?: string;
  /** 結果 */
  data?: GetWorkflowMessageNodesData;
  BaseResp?: base.BaseResp;
}

export interface GetWorkFlowProcessData {
  workFlowId?: string;
  executeId?: string;
  /** 工作流實例的當前執行狀態 */
  executeStatus?: WorkflowExeStatus;
  /** 執行中各個節點的結果/狀態列表。 */
  nodeResults?: Array<NodeResult>;
  /** 執行進度 */
  rate?: string;
  /** 現節點試運行狀態 1：沒有試運行 2：試運行過 */
  exeHistoryStatus?: WorkflowExeHistoryStatus;
  /** workflow試運行耗時 */
  workflowExeCost?: string;
  /** 消耗 */
  tokenAndCost?: TokenAndCost;
  /** 失敗原因 */
  reason?: string;
  /** 最後一個節點的ID */
  lastNodeID?: string;
  /** 本次查詢的日誌id */
  logID?: string;
  /** 只返回中斷中的 event */
  nodeEvents?: Array<NodeEvent>;
  /** 工作流所屬的project id，工作流屬於資源庫時爲空 */
  projectId?: string;
}

export interface GetWorkflowProcessRequest {
  /** 流程id，不爲空字符串，用於唯一標識一個工作流。 */
  workflow_id: string;
  /** 空間id，不爲空字符串，用於標識工作流所屬的空間。 */
  space_id: string;
  /** 用於唯一標識一個工作流執行實例。 */
  execute_id?: string;
  /** 用於唯一標識一個子工作流執行實例。 */
  sub_execute_id?: string;
  /** 用於指定是否需要異步獲取執行過程，是否返回所有的batch節點內容；如果單個節點的數據量如果過大，也需要異步拉取 */
  need_async?: boolean;
  /** 未傳execute_id時，可通過log_id取到execute_id */
  log_id?: string;
  /** 工作流中特定節點的id，檢索該節點的運行情況 */
  node_id?: string;
  Base?: base.Base;
}

export interface GetWorkflowProcessResponse {
  code?: Int64;
  msg?: string;
  data?: GetWorkFlowProcessData;
  BaseResp: base.BaseResp;
}

export interface GetWorkflowReferencesRequest {
  workflow_id: string;
  space_id: string;
  Base?: base.Base;
}

export interface GetWorkflowReferencesResponse {
  data: WorkflowReferencesData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetWorkflowRunHistoryRequest {
  /** required 異步運行的工作流 ID。 */
  workflow_id: string;
  /** required 工作流執行 ID。調用接口執行工作流，如果選擇異步執行工作流，響應信息中會返回 execute_id。 */
  execute_id?: string;
}

export interface GetWorkflowRunHistoryResponse {
  /** 調用狀態碼。0 表示調用成功。其他值表示調用失敗。 */
  code?: Int64;
  /** 狀態信息。API 調用失敗時可通過此字段查看詳細錯誤信息。 */
  msg?: string;
  /** 異步工作流的執行結果。每次只能查詢一個異步事件的執行結果，所以此數組只有一個對象。 */
  data?: Array<WorkflowExecuteHistory>;
}

export interface GradientPosition {
  left?: number;
  right?: number;
}

export interface IDETokenData {
  /** 提供給BizIDE側的臨時token */
  token: string;
  /** token過期時間 */
  expired_at: Int64;
}

export interface IfBranch {
  /** 該分支的條件 */
  if_conditions?: Array<IfCondition>;
  /** 該分支各條件的關係 */
  if_condition_relation?: IfConditionRelation;
  /** 該分支對應的下一個節點 */
  next_node_id?: Array<string>;
}

export interface IfCondition {
  first_parameter: Parameter;
  condition: ConditionType;
  second_parameter: Parameter;
}

export interface IfParam {
  if_branch?: IfBranch;
  else_branch?: IfBranch;
}

export interface ImageflowBasicNode {
  /** 1: PluginAPI, 2: NodeTemplate */
  node_type: BasicNodeType;
  /** 返回的實際plugin api信息 */
  plugin_api?: ImageflowPluginAPINode;
  /** 基礎節點模版，選擇器、消息節點等 */
  node_template?: NodeTemplate;
}

export interface ImageflowBasicNodeListData {
  /** 基礎節點列表 */
  categoried_nodes?: Array<CategoriedImageflowBasicNodes>;
}

export interface ImageflowPluginAPINode {
  plugin_id: string;
  plugin_name: string;
  api_id: string;
  api_name: string;
  api_title: string;
  api_desc: string;
  api_icon: string;
}

export interface InputCsvError {
  error_msg?: string;
}

export interface InputElementError {
  row_index?: number;
  col_index?: number;
  error_msg?: string;
  path?: string;
  value?: string;
}

export interface InputValidateError {
  err_type?: InputValidateErrType;
  element_err?: InputElementError;
  csv_err?: InputCsvError;
}

export interface Interrupt {
  event_id?: string;
  type?: InterruptType;
  data?: string;
}

export interface JobInfo {
  job_id?: string;
  space_id?: string;
  workflow_id?: string;
  workflow_version?: string;
  project_version?: string;
  status?: JobStatus;
  failed_count?: number;
  create_time?: Int64;
  update_time?: Int64;
  input_token?: Int64;
  output_token?: Int64;
  job_name?: string;
  /** 隊列排隊標識 */
  tags?: string;
  /** workflow創作者信息 */
  creator?: Creator;
  workflow_name?: string;
  workflow_url?: string;
  input_url?: string;
  job_type?: JobType;
}

export interface JobInputTemplateDownloadRequest {
  workflow_id?: string;
  workflow_version?: string;
  project_version?: string;
  space_id?: string;
  Base?: base.Base;
}

export interface JobInputTemplateDownloadResponse {
  url?: string;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface JobOutDownloadRequest {
  job_id?: string;
  space_id?: string;
  Base?: base.Base;
}

export interface JobOutDownloadResponse {
  url?: string;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface KnowledgeInfo {
  id?: string;
  name?: string;
  icon?: string;
  project_id?: string;
  is_product?: boolean;
  is_library?: boolean;
}

export interface LatestSubmitData {
  /** 當前草稿如果落後最新版本，則爲true 否則爲false */
  need_merge?: boolean;
  /** 當前空間最新提交commit_id，其實就是最新的submit_commit_id */
  latest_submit_version?: string;
  /** 當前最新版本的提交人，用於前端展示 */
  latest_submit_author?: string;
}

export interface LayOut {
  x?: number;
  y?: number;
}

export interface LibraryWorkflowInfo {
  workflow_id?: string;
  space_id?: string;
  /** 是否查詢草稿版本的資源依賴樹，true表示是查詢草稿版本，false表示分析發佈版本的資源依賴樹 */
  draft?: boolean;
  /** 發佈workflow的版本號，若 draft 爲 true，則該字段無效。若未傳遞該字段值或其值爲 0，則獲取最新已發佈版本；當前版本可通過 GetCanvasInfo 接口獲取。 */
  workflow_version?: string;
}

export interface ListableWorkflows {
  workflows?: Array<WkPluginBasicData>;
  has_more?: boolean;
}

export interface ListCollaboratorsRequest {
  workflow_id: string;
  space_id: string;
  Base?: base.Base;
}

export interface ListCollaboratorsResponse {
  data: Array<ResourceCollaboratorData>;
  need_data_compensation: boolean;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface ListProjectConversationRequest {
  project_id: string;
  /** 0=在project 創建（靜態會話），1=通過 wf 節點創建（動態會話） */
  create_method?: CreateMethod;
  /** 0=wf 節點試運行創建的 1=wf 節點發布後運行的 */
  create_env?: CreateEnv;
  /** 分頁偏移，不傳從第一條開始 */
  cursor?: string;
  /** 一次拉取數量 */
  limit?: Int64;
  space_id: string;
  /** conversationName 模糊搜索 */
  nameLike?: string;
  /** create_env=1 時傳遞，傳對應的渠道 id，當前默認 1024（openapi） */
  connector_id?: string;
  /** project版本 */
  project_version?: string;
  Base?: base.Base;
}

export interface ListProjectConversationResponse {
  data?: Array<ProjectConversation>;
  /** 遊標，爲空表示沒有下一頁了, 翻頁時帶上這個字段 */
  cursor?: string;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface ListPublishWorkflowRequest {
  space_id: string;
  /** 篩選項 */
  owner_id?: string;
  /** 搜索項：智能體or作者name */
  name?: string;
  order_last_publish_time?: OrderByType;
  order_total_token?: OrderByType;
  size: Int64;
  cursor_id?: string;
  workflow_ids?: Array<string>;
}

export interface ListPublishWorkflowResponse {
  data?: PublishWorkflowListData;
  code?: Int64;
  msg?: string;
}

export interface LLMParam {
  model_type?: number;
  temperature?: number;
  prompt?: string;
  model_name?: string;
}

export interface MergeWorkflowData {
  name?: string;
  url?: string;
  status?: WorkFlowDevStatus;
}

export interface MergeWorkflowRequest {
  workflow_id: string;
  schema?: string;
  space_id?: string;
  name?: string;
  desc?: string;
  icon_uri?: string;
  submit_commit_id: string;
  Base?: base.Base;
}

export interface MergeWorkflowResponse {
  data: MergeWorkflowData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface MGetVersionHistoryRequest {
  space_id: string;
  /** key:workflow id, value : version list,like ["v0.0.1","v0.0.2"],最大支持200個 */
  workflow_id_version_map: Record<string, Array<string>>;
  Base?: base.Base;
}

export interface MGetVersionHistoryResponse {
  data: MGetWorkflowVersionData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface MGetWorkflowVersionData {
  version_list: Array<VersionMetaInfo>;
}

export interface MoveWorkflowInfo {
  WorkflowId?: Int64;
  SpaceId?: Int64;
  Name?: string;
  Desc?: string;
  Url?: string;
  CreatorId?: Int64;
  PluginIds?: Array<Int64>;
  DataSetIds?: Array<Int64>;
  SubWorkflowIds?: Array<Int64>;
  Root?: boolean;
  IconUri?: string;
  ToolIds?: Array<Int64>;
  ModelIds?: Array<Int64>;
  DatabaseIDs?: Array<Int64>;
}

export interface MultiCollaborationConfigItem {
  workflow_count?: number;
  collaborators_count?: number;
}

export interface Node {
  workflow_id?: string;
  /** 節點id */
  node_id?: string;
  /** 更改node名稱 */
  node_name?: string;
  /** 節點類型 */
  node_type?: NodeType;
  /** 節點的核心參數 */
  node_param?: NodeParam;
  /** Node的位置 */
  lay_out?: LayOut;
  /** Node的描述，說明鏈接 */
  desc?: NodeDesc;
  /** 依賴的上游節點 */
  depends_on?: Array<string>;
  /** 所有的輸入和輸出 */
  open_api?: OpenAPI;
}

export interface NodeCategory {
  /** 分類名，空字符串表示下面的節點不屬於任何分類 */
  name?: string;
  node_type_list?: Array<string>;
  /** 插件的api_id列表 */
  plugin_api_id_list?: Array<string>;
  /** 跳轉官方插件列表的分類配置 */
  plugin_category_id_list?: Array<string>;
}

export interface NodeDesc {
  desc?: string;
  /** 副標題名稱 */
  name?: string;
  /** 該類型的icon */
  icon_url?: string;
  /** 是否支持批量，1不支持，2支持 */
  support_batch?: number;
  /** 連接要求 1左右都可連接 2只支持右側 */
  link_limit?: number;
}

export interface NodeError {
  node_id?: string;
}

export interface NodeEvent {
  id?: string;
  type?: EventType;
  node_title?: string;
  data?: string;
  node_icon?: string;
  /** 實際爲node_execute_id */
  node_id?: string;
  /** 與畫布裏的node_id對應 */
  schema_node_id?: string;
}

export interface NodeExecuteStatus {
  node_id?: string;
  is_finish?: boolean;
  update_time?: Int64;
  loop_index?: Int64;
  batch_index?: Int64;
  node_execute_uuid?: string;
  sub_execute_id?: string;
}

export interface NodeIdInfo {
  /** 節點id */
  NodeId?: string;
  /** 節點類型 */
  NodeType?: NodeType;
  /** 節點Param_id */
  NodeParamId?: Array<Int64>;
  /** 節點圖標url */
  IconUrl?: string;
  /** workflow類型：判斷子節點是工作流還是圖像流 */
  FlowMode?: WorkflowMode;
  /** 節點名稱 */
  NodeName?: string;
  /** 節點音色id */
  VoiceIds?: Array<string>;
  /** llm技能 */
  LLMSkill?: NodeLLMSkill;
  /** 插件授權是否共享，1-共享授權，0-如果是授權插件則爲單獨授權，否則無意義 */
  PluginAuthMode?: number;
  /** 私有模型列表 */
  PrivateModels?: Array<string>;
}

export interface NodeInfo {
  node_id?: string;
  node_type?: string;
  node_title?: string;
}

export interface NodeLLMSkill {
  PluginIds?: Array<Int64>;
  DataSetIds?: Array<Int64>;
  SubWorkflowIds?: Array<Int64>;
}

export interface NodePanelPlugin {
  plugin_id?: string;
  name?: string;
  desc?: string;
  icon?: string;
  tool_list?: Array<NodePanelPluginAPI>;
  version?: string;
  product_id?: string;
  product_availability?: ProductAvailability;
  commercial_setting?: CommercialSetting;
}

export interface NodePanelPluginAPI {
  api_id?: string;
  api_name?: string;
  api_desc?: string;
}

export interface NodePanelPluginData {
  plugin_list?: Array<NodePanelPlugin>;
  /** 數據源爲page+size的，這裏返回 page+1；數據源爲cursor模式的，這裏返回數據源返回的cursor */
  next_page_or_cursor?: string;
  has_more?: boolean;
}

export interface NodePanelSearchData {
  resource_workflow?: NodePanelWorkflowData;
  project_workflow?: NodePanelWorkflowData;
  favorite_plugin?: NodePanelPluginData;
  resource_plugin?: NodePanelPluginData;
  project_plugin?: NodePanelPluginData;
  store_plugin?: NodePanelPluginData;
}

export interface NodePanelSearchRequest {
  /** 搜索的數據類型，傳空、不傳或者傳All表示搜索所有類型 */
  search_type?: NodePanelSearchType;
  space_id?: string;
  project_id?: string;
  /** 搜索關鍵字 */
  search_key?: string;
  /** 首次請求時值爲"", 底層實現時根據數據源的分頁模式轉換成page or cursor。當 search_type 爲 ResourceWorkflow, ProjectWorkflow, ResourcePlugin, ProjectPlugin 時：此字段代表 頁碼 ，必須爲可轉換爲 >0 的 int64 的字符串。當 search_type 爲 FavoritePlugin, StorePlugin 時：此字段代表 遊標 。首次請求時可以爲空字符串；後續請求傳入上一頁返回的 next_page_or_cursor。當 search_type 爲 All 時：此字段的校驗被跳過。 */
  page_or_cursor?: string;
  /** 每頁返回的結果數量。大於等於1，小於等於50。 */
  page_size?: number;
  /** 排除的workflow_id，用於搜索workflow時排除當前workflow的id */
  exclude_workflow_id?: string;
  enterprise_id?: string;
  Base?: base.Base;
}

export interface NodePanelSearchResponse {
  data?: NodePanelSearchData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface NodePanelWorkflowData {
  workflow_list?: Array<Workflow>;
  /** 由於workflow的查詢使用都是page+size，這裏返回 page+1 */
  next_page_or_cursor?: string;
  has_more?: boolean;
}

export interface NodeParam {
  /** 輸入參數列表，支持多級；支持mapping */
  input_list?: Array<Param>;
  /** 輸出參數列表，支持多級 */
  output_list?: Array<Param>;
  /** 如果是API類型的Node，插件名、API名、插件版本、API的描述 */
  api_param?: APIParam;
  /** 如果是代碼片段，則包含代碼內容 */
  code_param?: CodeParam;
  /** 如果是模型，則包含模型的基礎信息 */
  llm_param?: LLMParam;
  /** 如果是數據集，選擇數據集的片段 */
  dataset_param?: DatasetParam;
  /** end節點，如何結束 */
  terminate_plan?: TerminatePlan;
  /** （新）輸入參數列表 */
  input_parameters?: Array<Parameter>;
  /** （新）輸出參數列表 */
  output_parameters?: Array<Parameter>;
  /** 批量設置情況 */
  batch?: Batch;
  /** if節點參數 */
  if_param?: IfParam;
}

export interface NodeParamData {
  workflow_id?: Int64;
  node_type?: string;
  param_name?: string;
  param_value?: string;
}

export interface NodeParamRequest {
  node_type?: string;
  param_names?: Array<string>;
}

export interface NodeProps {
  id?: string;
  type?: string;
  is_enable_chat_history?: boolean;
  is_enable_user_query?: boolean;
  is_ref_global_variable?: boolean;
}

export interface NodeResult {
  nodeId?: string;
  NodeType?: string;
  NodeName?: string;
  nodeStatus?: NodeExeStatus;
  errorInfo?: string;
  /** 入參 jsonstring類型 */
  input?: string;
  /** 出參 jsonstring */
  output?: string;
  /** 運行耗時 eg：3s */
  nodeExeCost?: string;
  /** 消耗 */
  tokenAndCost?: TokenAndCost;
  /** 直接輸出 */
  raw_output?: string;
  errorLevel?: string;
  index?: number;
  items?: string;
  maxBatchSize?: number;
  limitVariable?: string;
  loopVariableLen?: number;
  batch?: string;
  isBatch?: boolean;
  logVersion?: number;
  extra?: string;
  executeId?: string;
  subExecuteId?: string;
  needAsync?: boolean;
  async_status?: AsyncSubWorkflowStatus;
}

export interface NodeTemplate {
  id?: string;
  type?: NodeTemplateType;
  name?: string;
  desc?: string;
  icon_url?: string;
  support_batch?: SupportBatch;
  node_type?: string;
  color?: string;
  commercial_node?: boolean;
  plugin_list?: Array<string>;
  /** 火山資源id列表，與plugin id互斥 */
  volc_res_list?: Array<string>;
}

export interface NodeTemplateListData {
  template_list?: Array<NodeTemplate>;
  /** 節點的展示分類配置 */
  cate_list?: Array<NodeCategory>;
  plugin_api_list?: Array<PluginAPINode>;
  plugin_category_list?: Array<PluginCategory>;
}

export interface NodeTemplateListRequest {
  /** 需要的節點類型 不傳默認返回全部 */
  need_types?: Array<NodeTemplateType>;
  /** 需要的節點類型, string 類型 */
  node_types?: Array<string>;
  Base?: base.Base;
}

export interface NodeTemplateListResponse {
  data?: NodeTemplateListData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface OnboardingInfo {
  /** markdown 格式 */
  prologue?: string;
  /** 問題列表 */
  suggested_questions?: Array<string>;
  /** 是否顯示所有建議問題 */
  display_all_suggestions?: boolean;
}

export interface OpenAPI {
  input_list?: Array<Parameter>;
  output_list?: Array<Parameter>;
}

export interface OpenAPIGetNodeExecuteHistoryRequest {
  workflow_id?: string;
  execute_id?: string;
  node_execute_uuid?: string;
}

export interface OpenAPIGetNodeExecuteHistoryResponse {
  code?: Int64;
  msg?: string;
  data?: WorkflowNodeExecuteHistory;
}

export interface OpenAPIGetWorkflowInfoRequest {
  workflow_id?: string;
  connector_id?: string;
  is_debug?: boolean;
  /** 4: optional string AppID (api.query = "app_id") */
  caller?: string;
  /** DEPRECATED 角色信息，chatSDK消費，歷史版本無法增加 */
  include_chatflow_role?: boolean;
  /** 是否包含輸入輸出參數 */
  include_input_output?: boolean;
}

export interface OpenAPIGetWorkflowInfoResponse {
  /** 適配api */
  code?: number;
  msg?: string;
  data?: WorkflowInfo;
}

export interface OpenAPIGetWorkflowListRequest {
  page_num?: number;
  page_size?: number;
  workspace_id?: string;
  workflow_mode?: string;
  app_id?: string;
  publish_status?: string;
  folder_id?: string;
  include_input_output?: boolean;
}

export interface OpenAPIGetWorkflowListResponse {
  data: OpenAPIWorkflowList;
  code?: number;
  msg?: string;
}

export interface OpenAPIListVersionData {
  items?: Array<OpenAPIVersionMetaInfo>;
  next_page_token?: string;
  has_more?: boolean;
}

export interface OpenAPIListVersionRequest {
  workflow_id: string;
  publish_status?: string;
  /** default = 10，最大爲30 */
  page_size?: number;
  /** 多次分頁的時候需要傳入 */
  page_token?: string;
  /** 是否包含輸入輸出參數 */
  include_input_output?: boolean;
}

export interface OpenAPIListVersionResponse {
  data?: OpenAPIListVersionData;
  code: Int64;
  msg: string;
}

export interface OpenAPIParameter {
  description?: string;
  /** 是否必填 */
  required?: boolean;
  /** 是否所有的都可以用這個 */
  default_value?: string;
  /** Object類型下的子類型 */
  properties?: Record<string, OpenAPIParameter>;
  /** 參數類型，來源於OpenAPIParamType */
  type?: string;
  /** Array類型子類型 */
  items?: OpenAPIParameter;
}

export interface OpenAPIRunFlowRequest {
  /** required, 待執行的 Workflow ID，此工作流應已發佈 */
  workflow_id?: string;
  /** 工作流開始節點的輸入參數及取值 (JSON 序列化字符串) */
  parameters?: string;
  /** 用於指定一些額外的字段，非必要可不填寫 */
  ext?: Record<string, string>;
  /** 需要關聯的智能體 ID */
  bot_id?: string;
  /** 是否異步運行 (默認 false) */
  is_async?: boolean;
  /** 執行模式，默認爲正式運行，試運行需要傳入"DEBUG" */
  execute_mode?: string;
  /** DEPRECATED 版本號，project 版本 */
  version?: string;
  /** 渠道 ID，比如 ui builder、template、商店等 */
  connector_id?: string;
  /** 該工作流關聯的應用的 ID */
  app_id?: string;
  /** 項目 ID，爲了兼容 ui builder 等場景 */
  project_id?: string;
  /** 項目版本，只有運行工作流爲project內工作流時可以傳值，不傳默認使用最新版本 */
  app_version?: string;
  /** 資源庫工作流版本，只有運行工作流爲資源庫內工作流時可以傳值，不傳默認使用最新版本 */
  workflow_version?: string;
}

export interface OpenAPIRunFlowResponse {
  /** 通用字段
required, 調用狀態碼。0 表示調用成功，其他值表示調用失敗。 */
  code: Int64;
  /** 狀態信息。成功時通常爲 "Success"，API 調用失敗時可通過此字段查看詳細錯誤信息。 */
  msg?: string;
  /** 同步返回字段
工作流執行結果 (JSON 序列化字符串或普通字符串) */
  data?: string;
  token?: Int64;
  /** DEPRECATED */
  cost?: string;
  /** 工作流試運行調試頁面 URL */
  debug_url?: string;
  /** 資源使用情況 */
  usage?: Usage;
  /** 異步返回字段
異步執行的事件 ID */
  execute_id?: string;
}

export interface OpenAPIStreamResumeFlowRequest {
  /** 工作流執行中斷事件 ID */
  event_id?: string;
  /** 中斷類型 */
  interrupt_type?: InterruptType;
  /** 恢復執行時，用戶對智能體指定問題的回覆 */
  resume_data?: string;
  /** 用於指定一些額外的字段，非必要可不填寫 */
  ext?: Record<string, string>;
  /** 待執行的 Workflow ID，此工作流應已發佈 */
  workflow_id?: string;
  /** 渠道ID，比如ui builder、template、商店等 */
  connector_id?: string;
}

export interface OpenAPIStreamRunFlowResponse {
  /** 絕對序號 */
  id?: string;
  /** 事件類型:message,done,error */
  event?: string;
  /** 節點信息
節點中的序號 */
  node_seq_id?: string;
  /** 節點名稱 */
  node_title?: string;
  /** ContentType爲Text時的返回 */
  content?: string;
  /** 節點是否執行完成 */
  node_is_finish?: boolean;
  /** content type爲interrupt時傳輸，中斷協議 */
  interrupt_data?: Interrupt;
  /** 返回的數據類型 */
  content_type?: string;
  /** Content Type爲Card時返回的卡片內容 */
  card_body?: string;
  /** 節點類型 */
  node_type?: string;
  node_id?: string;
  /** 循環index，循環中才有值 */
  loop_index?: Int64;
  /** 批量index，批量中才有值 */
  batch_index?: Int64;
  /** 節點執行uuid */
  node_execute_uuid?: string;
  /** 子執行id,只有與executeID不一樣的時候才賦值（子工作流） */
  sub_execute_id?: string;
  /** 成功時最後一條消息 */
  ext?: Record<string, string>;
  token?: Int64;
  /** DEPRECATED */
  cost?: string;
  /** 資源使用情況 */
  usage?: Usage;
  /** 錯誤信息 */
  error_code?: Int64;
  error_message?: string;
  debug_url?: string;
}

export interface OpenAPIToggleCollaborationModeRequest {
  workflow_id?: string;
  collaboration_mode?: string;
}

export interface OpenAPIToggleCollaborationModeResponse {
  code?: number;
  msg?: string;
}

export interface OpenAPIUserInfo {
  id?: string;
  name?: string;
}

export interface OpenAPIVersionMetaInfo {
  workflow_id?: string;
  created_at?: string;
  updated_at?: string;
  version?: string;
  description?: string;
  /** 創建者 */
  creator?: OpenAPIUserInfo;
  /** 輸入 */
  input?: OpenAPIWorkflowInput;
  /** 輸出 */
  output?: OpenAPIWorkflowOutput;
}

export interface OpenAPIWorkflowBasic {
  workflow_id?: string;
  workflow_name?: string;
  description?: string;
  icon_url?: string;
  app_id?: string;
  creator?: OpenAPIUserInfo;
  created_at?: string;
  updated_at?: string;
}

export interface OpenAPIWorkflowInput {
  /** 輸入參數 */
  parameters?: Record<string, OpenAPIParameter>;
}

export interface OpenAPIWorkflowList {
  items: Array<OpenAPIWorkflowBasic>;
  has_more: boolean;
}

export interface OpenAPIWorkflowOutput {
  /** 輸出參數 */
  parameters?: Record<string, OpenAPIParameter>;
  /** 結束節點纔有，返回變量/返回文本,來源於OpenAPIEndReturnType */
  terminate_plan?: string;
  /** 返回文本時的輸出內容，如{{output}} */
  content?: string;
}

export interface OpenCollaboratorRequest {
  workflow_id: string;
  space_id: string;
  Base?: base.Base;
}

export interface OpenCollaboratorResponse {
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface OperateInfo {
  commit_id?: string;
  time?: Int64;
  user?: UserInfo;
}

export interface OperateListData {
  operate_list?: Array<OperateInfo>;
  start_id?: string;
  end_id?: string;
  has_more?: boolean;
}

export interface OperateListRequest {
  space_id: string;
  workflow_id: string;
  /** default = 10 */
  limit: number;
  /** 多次分頁的時候需要傳入 */
  last_commit_id: string;
  type: OperateType;
  Base?: base.Base;
}

export interface OperateListResponse {
  data: OperateListData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface OperationInfo {
  operator?: Creator;
  operator_time?: Int64;
}

export interface OPExecuteHistory {
  execute_id?: string;
  workflow_id?: string;
  workflow_name?: string;
  execute_status?: WorkflowExeStatus;
  execute_mode?: WorkflowExecuteMode;
  run_mode?: WorkflowRunMode;
  bot_id?: string;
  log_id?: string;
  connector_id?: string;
  connector_uid?: string;
  commit_id?: string;
  project_id?: string;
  project_version?: string;
  workflow_version?: string;
  entry_method?: string;
  create_time?: Int64;
  update_time?: Int64;
  /** 執行成功 */
  input?: string;
  output?: string;
  /** 執行失敗
調用狀態碼。0 表示調用成功。其他值表示調用失敗。你可以通過 error_message 字段判斷詳細的錯誤原因。 */
  error_code?: string;
  /** 狀態信息。爲 API 調用失敗時可通過此字段查看詳細錯誤信息。 */
  error_msg?: string;
}

export interface Param {
  key?: Array<string>;
  desc?: string;
  type?: InputType;
  required?: boolean;
  value?: string;
  /** 要求  1不允許刪除 2不允許更改名稱 3什麼都可修改 4只顯示，全部不允許更改 */
  requirement?: ParamRequirementType;
  from_node_id?: string;
  from_output?: Array<string>;
  /** 默認值 */
  default_value?: string;
}

export interface Parameter {
  name?: string;
  desc?: string;
  required?: boolean;
  type?: InputType;
  sub_parameters?: Array<Parameter>;
  /** 如果Type是數組，則有subtype */
  sub_type?: InputType;
  /** 如果入參的值是引用的則有fromNodeId */
  from_node_id?: string;
  /** 具體引用哪個節點的key */
  from_output?: Array<string>;
  /** 如果入參是用戶手輸 就放這裏 */
  value?: string;
  format?: PluginParamTypeFormat;
  /** 輔助類型；type=string生效，0 爲unset */
  assist_type?: Int64;
  /** 如果Type是數組，表示子元素的輔助類型；sub_type=string生效，0 爲unset */
  sub_assist_type?: Int64;
  /** 默認值 */
  default_value?: string;
}

export interface PathError {
  start?: string;
  end?: string;
  /** 路徑上的節點ID */
  path?: Array<string>;
}

/** 插件配置 */
export interface PluginAPINode {
  /** 實際的插件配置 */
  plugin_id?: string;
  api_id?: string;
  api_name?: string;
  /** 用於節點展示 */
  name?: string;
  desc?: string;
  icon_url?: string;
  node_type?: string;
}

export interface PluginAuthStatus {
  /** 是否爲授權插件 */
  is_oauth?: boolean;
  /** 用戶授權狀態 */
  status?: OAuthStatus;
  /** 未授權，返回授權url */
  content?: string;
}

/** 查看更多圖像插件 */
export interface PluginCategory {
  plugin_category_id?: string;
  only_official?: boolean;
  /** 用於節點展示 */
  name?: string;
  icon_url?: string;
  node_type?: string;
}

export interface PluginDetail {
  id?: string;
  icon_url?: string;
  description?: string;
  is_official?: boolean;
  name?: string;
  plugin_status?: Int64;
  plugin_type?: Int64;
  latest_version_ts?: Int64;
  latest_version_name?: string;
  version_name?: string;
}

export interface PluginFCItem {
  plugin_id?: string;
  api_id?: string;
  api_name?: string;
  is_draft?: boolean;
  plugin_version?: string;
  plugin_from?: PluginFrom;
}

export interface PluginTag {
  type?: Int64;
  name?: string;
  icon?: string;
  active_icon?: string;
}

export interface PluginVersionInfo {
  id?: string;
  name?: string;
  icon?: string;
  version?: string;
  tools?: Array<Int64>;
  project_id?: string;
  is_product?: boolean;
  is_library?: boolean;
}

export interface PrincipalIdentifier {
  /** 主體類型 */
  Type: PrincipalType;
  /** 主體Id */
  Id: string;
}

export interface ProductAgreement {
  /** 協議基礎信息
簽署協議的彈窗標題 */
  title?: string;
  /** 簽署協議的彈窗內容 */
  description?: string;
  /** 協議的具體鏈接 */
  link?: string;
  /** 協議 - 用戶維度信息
用戶是否已經簽署協議 */
  has_signed?: boolean;
  /** 用戶是否能夠簽署協議 */
  can_sign?: boolean;
}

export interface ProductAvailability {
  /** 用戶等級 >= user_level 時，可用該商品；枚舉值對應 benefit_common.UserLevel */
  user_level?: number;
  /** 商品協議相關
是否需要簽署協議後才能使用 */
  need_sign_agreement?: boolean;
  /** 商品協議相關 */
  product_agreement?: ProductAgreement;
}

export interface ProjectConversation {
  unique_id?: string;
  conversation_name?: string;
  /** 對於自己在 coze 渠道的 conversationid */
  conversation_id?: string;
  release_conversation_name?: string;
}

export interface ProjectWorkflowInfo {
  workflow_id?: string;
  space_id?: string;
  project_id?: string;
  /** 是否查詢草稿版本的資源依賴樹，true表示是查詢草稿版本，false表示分析發佈版本的資源依賴樹 */
  draft?: boolean;
  /** project的版本號，若 draft 爲 true，則該字段無效。若未傳遞該字段值或其值爲 0，則獲取最新已發佈版本。 */
  project_version?: string;
}

export interface PublishBasicWorkflowData {
  /** 最近發佈項目的信息 */
  basic_info?: WorkflowBasicInfo;
  user_info?: UserInfo;
  /** 已發佈渠道聚合 */
  connectors?: Array<ConnectorInfo>;
  /** 截止昨天總token消耗 */
  total_token?: string;
}

export interface PublishWorkflowData {
  workflow_id?: string;
  publish_commit_id?: string;
  success?: boolean;
  /** 如果有默認提交，返回submit commit id */
  vcs_submit_commit_id?: string;
  /** 返回 publish commit id */
  vcs_publish_commit_id?: string;
}

export interface PublishWorkflowListData {
  workflows?: Array<PublishBasicWorkflowData>;
  total?: number;
  has_more?: boolean;
  next_cursor_id?: string;
}

export interface PublishWorkflowRequest {
  /** 不可爲空或0，用於唯一標識一個工作流。 */
  workflow_id: string;
  /** 不可爲空或0，用於標識工作流所屬的空間。 */
  space_id: string;
  /** 用於標識是否有協作者，默認爲false。 */
  has_collaborator: boolean;
  /** 發佈到哪個環境，不填默認線上 */
  env?: string;
  /** 使用哪個版本發佈，不填默認最新提交版本，如果提供則需要與WorkflowId匹配。用於指定使用哪個版本的工作流。 */
  commit_id?: string;
  /** 強制發佈。若流程提交的上一步執行了 TestRun 步驟且運行結果是流程運行成功，“force” 參數值應爲 false，或不傳遞該參數；若流程提交的上一步不是執行 TestRun 步驟 或者 上一步是TestRun但是流程運行結果不成功/未知，“force” 參數值應爲 true 。 */
  force?: boolean;
  /** required, 發佈workflow的版本號，遵循 SemVer 格式爲"vx.y.z"，必須比當前版本大，可通過 GetCanvasInfo 獲取當前版本 */
  workflow_version?: string;
  /** workflow的版本描述 */
  version_description?: string;
  Base?: base.Base;
}

export interface PublishWorkflowResponse {
  data: PublishWorkflowData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface PublishWorkflowV2Data {
  workflow_id?: string;
  commit_id?: string;
  success?: boolean;
}

export interface PublishWorkflowV2Request {
  workflow_id: string;
  space_id: string;
  Base?: base.Base;
}

export interface PublishWorkflowV2Response {
  code?: Int64;
  msg?: string;
  data: PublishWorkflowV2Data;
  BaseResp: base.BaseResp;
}

export interface PutOnListExampleWorkflowRequest {
  workflow_id: string;
  Base?: base.Base;
}

export interface PutOnListExampleWorkflowResponse {
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface QueryWorkflowNodeTypeRequest {
  space_id?: string;
  workflow_id?: string;
  Base?: base.Base;
}

export interface QueryWorkflowNodeTypeResponse {
  data?: WorkflowNodeTypeData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface QueryWorkflowV2Request {
  workflow_id: string;
  space_id?: string;
  Base?: base.Base;
}

export interface QueryWorkflowV2Response {
  data: WorkflowV2Data;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface RegionGrayRequest {
  /** 需要灰度的功能key */
  feature_key: string;
  Base?: base.Base;
}

export interface RegionGrayResponse {
  allow: boolean;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface ReleasedWorkflow {
  plugin_id?: string;
  workflow_id?: string;
  space_id?: string;
  name?: string;
  desc?: string;
  icon?: string;
  inputs?: unknown;
  outputs?: unknown;
  end_type?: number;
  type?: number;
  sub_workflow_list?: Array<SubWorkflow>;
  version?: string;
  create_time?: Int64;
  update_time?: Int64;
  /** workflow創作者信息 */
  creator?: Creator;
  flow_mode?: WorkflowMode;
  flow_version?: string;
  flow_version_desc?: string;
  latest_flow_version?: string;
  latest_flow_version_desc?: string;
  commit_id?: string;
  output_nodes?: Array<NodeInfo>;
}

export interface ReleasedWorkflowData {
  workflow_list?: Array<ReleasedWorkflow>;
  total?: Int64;
}

export interface ReleasedWorkflowRPC {
  PluginID?: Int64;
  WorkflowID?: Int64;
  SpaceId?: Int64;
  Name?: string;
  Desc?: string;
  Icon?: string;
  Inputs?: string;
  Outputs?: string;
  EndType?: number;
  Type?: number;
  SubWorkflowIDList?: Array<SubWorkflow>;
  Version?: string;
  CreateTime?: Int64;
  UpdateTime?: Int64;
  CreatorId?: Int64;
  EndContent?: string;
  Schema?: string;
  FlowMode?: WorkflowMode;
}

export interface ReleasedWorkflowsData {
  Total?: Int64;
  Workflows?: Array<ReleasedWorkflowRPC>;
}

export interface RemoveExampleWorkflowRequest {
  workflow_id: string;
  Base?: base.Base;
}

export interface RemoveExampleWorkflowResponse {
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface ResourceActionAuth {
  can_edit?: boolean;
  can_delete?: boolean;
  can_copy?: boolean;
}

export interface ResourceAuthInfo {
  /** 資源id */
  workflow_id?: string;
  /** 用戶id */
  user_id?: string;
  /** 用戶資源操作權限 */
  auth?: ResourceActionAuth;
}

export interface ResourceCollaboratorData {
  user?: CollaboratorInfo;
  owner?: boolean;
}

export interface ResourceCreatorData {
  workflow_id: string;
  space_id?: string;
  creator?: Creator;
  collaborator_mode?: CollaboratorMode;
}

export interface ResourcePointP90Request {
  workflow_id?: string;
  space_id?: string;
  Base?: base.Base;
}

export interface ResourcePointP90Response {
  token?: number;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface ResponseStyle {
  mode?: number;
}

export interface ResumeFailedCallbackContent {
  CheckpointID?: Int64;
  /** 業務自定義數據 */
  Extra?: string;
  ErrorCode?: string;
  ErrorMsg?: string;
}

export interface RetryTaskRequest {
  task_id?: Array<string>;
  job_id?: string;
  Base?: base.Base;
}

export interface RetryTaskResponse {
  task_execute_id_ref?: Record<string, string>;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface RevertDraftData {
  /** 提交的 commit_id。其作用是唯一標識一個流程的單個提交版本（每個 commit_id 僅對應且僅能對應一個流程的一次提交版本）。 */
  submit_commit_id?: string;
}

export interface RevertDraftRequest {
  space_id: string;
  workflow_id: string;
  commit_id: string;
  type: OperateType;
  env?: string;
  Base?: base.Base;
}

export interface RevertDraftResponse {
  data: RevertDraftData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface RunCtx {
  SpaceID?: Int64;
  UserID?: Int64;
  HasCard?: boolean;
  HasCardNodes?: Array<string>;
  LinkRootID?: string;
  UserInfo?: UserInfoEnv;
  Env?: Environment;
  Ext?: Record<string, string>;
  ProjectID?: Int64;
  ProjectVersion?: string;
}

export interface RunFlowHTTPRequest {
  workflow_id: string;
  input?: Record<string, string>;
  space_id?: string;
  bot_id?: string;
}

export interface SaveWorkflowData {
  name?: string;
  url?: string;
  status?: WorkFlowDevStatus;
  workflow_status?: WorkFlowStatus;
  is_version_gray?: boolean;
}

export interface SaveWorkflowRequest {
  /** 流程的id，用來標識唯一的流程 */
  workflow_id: string;
  /** 流程的schema */
  schema?: string;
  /** required，空間id，不可爲空字符串，用於標識工作流所屬的空間。 */
  space_id?: string;
  /** 非必填，如果提供則長度必須在1-100之間。用於更新工作流的名稱。 */
  name?: string;
  /** 非必填，如果提供則長度必須在1-600之間。用於更新工作流的描述信息。 */
  desc?: string;
  /** 非必填，如果提供則不能爲空字符串。用於更新工作流的圖標URI。 */
  icon_uri?: string;
  /** 不可爲空字符串。其作用是唯一標識一個流程的單個提交版本（每個 submit_commit_id 僅對應且僅能對應一個流程的一次提交版本）。 */
  submit_commit_id: string;
  /** 是否忽略提交狀態流轉，默認爲false。如果爲true，則忽略狀態流轉。如果爲false，查詢流程提交狀態，流程提交狀態會變成CanNotSubmit。 */
  ignore_status_transfer?: boolean;
  save_version?: string;
  Base?: base.Base;
}

export interface SaveWorkflowResponse {
  data: SaveWorkflowData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface SaveWorkflowV2Data {
  name?: string;
  url?: string;
  status?: WorkFlowStatus;
}

export interface SaveWorkflowV2Request {
  workflow_id: string;
  schema?: string;
  space_id?: string;
  name?: string;
  desc?: string;
  icon_uri?: string;
  ignore_status_transfer?: boolean;
  Base?: base.Base;
}

export interface SaveWorkflowV2Response {
  data: SaveWorkflowV2Data;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface ShowDifferencesRequest {
  space_id: string;
  workflow_id: string;
  /** type */
  type: OperateType;
  Base?: base.Base;
}

export interface ShowDifferencesResponse {
  data: DiffContent;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface SignImageURLRequest {
  uri: string;
  Scene?: string;
  Base?: base.Base;
}

export interface SignImageURLResponse {
  url: string;
  code: Int64;
  msg: string;
  BaseResp?: base.BaseResp;
}

export interface Snapshot {
  WorkflowID?: string;
  SpaceID?: string;
  CommitID?: string;
  Branch?: VCSCanvasType;
  Schema?: string;
  Name?: string;
  Description?: string;
  IconURI?: string;
  UserInfo?: Creator;
  CreateTime?: Int64;
  UpdateTime?: Int64;
}

export interface StreamPushVoiceConfig {
  /** 是否開啓語音輸出 */
  IsCallTransferVoice?: boolean;
  /** 音色ID */
  VoiceId?: string;
  /** 音色名稱 */
  VoiceName?: string;
  /** 音色情感 */
  voice_emotion?: string;
  /** 音色情感值 */
  voice_emotion_scale?: number;
  /** 音色場景 */
  voice_scene?: string;
}

export interface StreamRunFlowHTTPResponse {
  /** 絕對序號 */
  id?: string;
  /** 事件類型:message,done,error */
  event?: string;
  /** 節點信息
節點中的序號 */
  node_seq_id?: string;
  node_id?: string;
  /** 節點名稱 */
  node_title?: string;
  /** 節點類型 */
  node_type?: NodeType;
  /** ContentType爲Text時的返回 */
  content?: string;
  /** 節點是否執行完成 */
  node_is_finish?: boolean;
  /** content type爲interrupt時傳輸，中斷協議 */
  interrupt_data?: Interrupt;
  /** 返回的數據類型 */
  content_type?: string;
  /** Content Type爲Card時返回的卡片內容 */
  card_body?: string;
  /** 當前節點是否流式輸出 */
  is_stream?: boolean;
  /** 當前節點所屬的 workflow id */
  current_workflow_id?: string;
  /** 成功時最後一條消息 */
  ext?: Record<string, string>;
  token?: Int64;
  /** DEPRECATED */
  cost?: string;
  /** 錯誤信息 */
  error_code?: Int64;
  error_message?: string;
}

export interface SubmitWorkflowData {
  /** 當前草稿如果落後最新版本，則爲true 否則爲false */
  need_merge?: boolean;
  /** 提交的 commit_id。其作用是唯一標識一個流程的單個提交版本（每個 commit_id 僅對應且僅能對應一個流程的一次提交版本）。 */
  submit_commit_id?: string;
}

export interface SubmitWorkflowRequest {
  workflow_id: string;
  space_id: string;
  desc?: string;
  /** 強制提交。若流程提交的上一步執行了 TestRun 步驟且運行結果是流程運行成功，“force” 參數值應爲 false，或不傳遞該參數；若流程提交的上一步不是執行 TestRun 步驟 或者 上一步是TestRun但是流程運行結果不成功/未知，“force” 參數值應爲 true 。 */
  force?: boolean;
  Base?: base.Base;
}

export interface SubmitWorkflowResponse {
  data: SubmitWorkflowData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface SubWorkflow {
  id?: string;
  name?: string;
}

/** suggest */
export interface SuggestReplyInfo {
  /** 對應 Coze Auto-Suggestion
建議問題模型 */
  suggest_reply_mode?: SuggestReplyInfoMode;
  /** 用戶自定義建議問題 */
  customized_suggest_prompt?: string;
}

export interface TableInfo {
  id?: string;
  name?: string;
  icon?: string;
  project_id?: string;
  is_product?: boolean;
  is_library?: boolean;
}

export interface TaskInfo {
  job_id?: string;
  task_id?: string;
  execute_id?: string;
  space_id?: string;
  workflow_id?: string;
  workflow_version?: string;
  project_version?: string;
  token?: Int64;
  input?: string;
  output?: string;
  status?: TaskStatus;
  create_time?: Int64;
  update_time?: Int64;
  /** 失敗原因 */
  error_msg?: string;
  /** 失敗原因 */
  error_code?: string;
}

export interface TerminatePlan {
  /** 結束方式 */
  plan?: TerminatePlanType;
  content?: string;
}

export interface TokenAndCost {
  /** input消耗Token數 */
  inputTokens?: string;
  /** input花費 */
  inputCost?: string;
  /** Output消耗Token數 */
  outputTokens?: string;
  /** Output花費 */
  outputCost?: string;
  /** 總消耗Token數 */
  totalTokens?: string;
  /** 總花費 */
  totalCost?: string;
}

export interface UpdateCollaboratorInfo {
  /** 更新的目標空間 */
  UpdateWfMap?: Record<string, Array<Int64>>;
  /** 未獲取到workflow的空間 */
  ErrSpaceList?: Array<Int64>;
  /** 未獲取到協作者信息的workflow */
  ErrWorkflowMap?: Record<string, Array<Int64>>;
  BaseResp?: base.BaseResp;
}

export interface UpdateProjectConversationDefRequest {
  project_id: string;
  unique_id: string;
  conversation_name: string;
  space_id: string;
  Base?: base.Base;
}

export interface UpdateProjectConversationDefResponse {
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface UpdateWorkflowMetaRequest {
  workflow_id: string;
  space_id: string;
  name?: string;
  desc?: string;
  icon_uri?: string;
  flow_mode?: WorkflowMode;
  Base?: base.Base;
}

export interface UpdateWorkflowMetaResponse {
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface UploadAuthTokenInfo {
  access_key_id?: string;
  secret_access_key?: string;
  session_token?: string;
  expired_time?: string;
  current_time?: string;
}

export interface Usage {
  token_count?: number;
  output_count?: number;
  input_count?: number;
}

export interface UserBehaviorAuthData {
  auth_type?: AuthType;
  config: MultiCollaborationConfigItem;
  can_upgrade: boolean;
  level?: UserLevel;
}

export interface UserBehaviorAuthRequest {
  workflow_id: string;
  space_id: string;
  /** 指定用戶嘗試執行的具體行爲類型。接口根據此類型來應用不同的權限校驗規則和業務處理流程。 */
  action_type: UserBehaviorType;
  /** true: 接口僅返回與用戶當前等級相關的配置信息（如最大工作流數量、最大協作者數量），而不執行實際的權限校驗。false: 接口將執行完整的權限檢查，判斷用戶是否有權執行 ActionType 指定的操作。 */
  only_config_item: boolean;
  Base?: base.Base;
}

export interface UserBehaviorAuthResponse {
  data: UserBehaviorAuthData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface UserInfo {
  user_id?: Int64;
  user_name?: string;
  user_avatar?: string;
  /** 用戶暱稱 */
  nickname?: string;
}

export interface UserInfoEnv {
  user_id?: Int64;
  device_id?: Int64;
  message_id?: Int64;
  connector_name?: string;
  connector_uid?: string;
  connector_id?: Int64;
  tako_bot_history?: string;
  section_id?: Int64;
}

export interface UserInputConfig {
  /** 默認輸入方式 */
  default_input_mode?: InputMode;
  /** 用戶語音消息發送形式 */
  send_voice_mode?: SendVoiceMode;
}

export interface ValidateErrorData {
  node_error?: NodeError;
  path_error?: PathError;
  message?: string;
  type?: ValidateErrorType;
}

export interface ValidateJobInputRequest {
  workflow_id?: string;
  workflow_version?: string;
  project_version?: string;
  space_id?: string;
  input_uri?: string;
  Base?: base.Base;
}

export interface ValidateJobInputResponse {
  pass?: boolean;
  input_cnt?: number;
  errors?: Array<InputValidateError>;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface ValidateSchemaRequest {
  schema: string;
  bind_project_id?: string;
  bind_bot_id?: string;
  Base?: base.Base;
}

export interface ValidateSchemaResponse {
  data?: Array<ValidateErrorData>;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface ValidateTreeInfo {
  workflow_id?: string;
  name?: string;
  errors?: Array<ValidateErrorData>;
}

export interface ValidateTreeRequest {
  workflow_id: string;
  /** 這個和bind_bot_id 二選一 */
  bind_project_id?: string;
  /** 這個和bind_project_id 二選一 */
  bind_bot_id?: string;
  schema?: string;
  Base?: base.Base;
}

export interface ValidateTreeResponse {
  data?: Array<ValidateTreeInfo>;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface VCSCanvasData {
  /** 提交的commit_id */
  submit_commit_id?: string;
  /** 草稿的commit_id */
  draft_commit_id?: string;
  /** 版本類型 */
  type?: VCSCanvasType;
  /** 當前用戶是否有權限編輯 */
  can_edit?: boolean;
  /** 發佈的commit_id */
  publish_commit_id?: string;
}

export interface VersionHistoryListData {
  version_list: Array<VersionMetaInfo>;
  cursor?: string;
  has_more: boolean;
}

export interface VersionHistoryListRequest {
  space_id: string;
  workflow_id: string;
  /** 1=submit 2=online 3=ppe */
  type: OperateType;
  /** default = 10 */
  limit?: number;
  /** 如果傳了 做過濾 */
  commit_ids?: Array<string>;
  /** 多次分頁的時候需要傳入 */
  cursor?: string;
  /** 1=create_time 2=update_time 目前僅支持這兩個 */
  order_by?: OrderBy;
  Base?: base.Base;
}

export interface VersionHistoryListResponse {
  data: VersionHistoryListData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface VersionMetaInfo {
  workflow_id?: string;
  space_id?: string;
  commit_id?: string;
  submit_commit_id?: string;
  create_time?: Int64;
  update_time?: Int64;
  env?: string;
  desc?: string;
  user?: UserInfo;
  type?: OperateType;
  offline?: boolean;
  is_delete?: boolean;
  version?: string;
  /** 區分老版本的commit id(自動生成)和新版本的version如v0.0.1 */
  version_type?: VersionType;
}

export interface VoiceConfig {
  voice_name?: string;
  /** 音色ID */
  voice_id?: string;
  /** 音色情感 */
  voice_emotion?: string;
  /** 音色情感值 */
  voice_emotion_scale?: number;
  /** 音色場景，如多情感 */
  voice_scene?: string;
}

/** workflow快照基本信息 */
export interface WkPluginBasicData {
  workflow_id?: string;
  space_id?: string;
  name?: string;
  desc?: string;
  url?: string;
  icon_uri?: string;
  status?: WorkFlowStatus;
  /** workfklow對應的插件id */
  plugin_id?: string;
  create_time?: Int64;
  update_time?: Int64;
  source_id?: string;
  creator?: Creator;
  schema?: string;
  start_node?: Node;
  flow_mode?: WorkflowMode;
  sub_workflows?: Array<Int64>;
  latest_publish_commit_id?: string;
  end_node?: Node;
}

export interface WkPluginData {
  Workflow?: WkPluginBasicData;
  Nodes?: Array<NodeIdInfo>;
}

export interface WkPluginInfo {
  PluginId: Int64;
  WorkflowId: Int64;
}

export interface WkProcessIOData {
  workflow_id?: string;
  start_node?: Node;
  end_node?: Node;
  execute_id?: string;
  flow_mode?: WorkflowMode;
  input_data?: string;
  raw_output_data?: string;
  output_data?: string;
}

export interface Workflow {
  /** 流程id，全局唯一 */
  workflow_id?: string;
  /** 流程名稱 */
  name?: string;
  desc?: string;
  /** workflow 的 icon 的 url */
  url?: string;
  icon_uri?: string;
  /** 流程的提交狀態 */
  status?: WorkFlowDevStatus;
  /** 類型，1:官方模版 */
  type?: WorkFlowType;
  /** workfklow對應的插件id */
  plugin_id?: string;
  create_time?: Int64;
  update_time?: Int64;
  schema_type?: SchemaType;
  start_node?: Node;
  tag?: Tag;
  /** 模版創作者id */
  template_author_id?: string;
  /** 模版創作者暱稱 */
  template_author_name?: string;
  /** 模版創作者頭像 */
  template_author_picture_url?: string;
  /** 空間id */
  space_id?: string;
  /** 流程出入參 */
  interface_str?: string;
  /** 新版workflow的定義 schema */
  schema_json?: string;
  /** workflow創作者信息 */
  creator?: Creator;
  /** 存儲模型 */
  persistence_model?: PersistenceModel;
  /** workflow or imageflow，默認值爲workflow */
  flow_mode?: WorkflowMode;
  /** workflow商品審覈版本狀態 */
  product_draft_status?: ProductDraftStatus;
  /** 當前一定返回nil, {"project_id":"xxx","flow_id":xxxx} */
  external_flow_info?: string;
  /** workflow多人協作按鈕狀態 */
  collaborator_mode?: CollaboratorMode;
  check_result?: Array<CheckResult>;
  project_id?: string;
  /** project 下的 workflow 纔有 */
  dev_plugin_id?: string;
  save_version?: string;
  /** 結束節點 */
  end_node?: Node;
}

export interface WorkflowBasicInfo {
  id?: string;
  name?: string;
  description?: string;
  icon_uri?: string;
  icon_url?: string;
  space_id?: string;
  owner_id?: string;
  create_time?: Int64;
  update_time?: Int64;
  publish_time?: Int64;
  permission_type?: PermissionType;
}

export interface WorkflowChildNodes {
  WorkflowId?: Int64;
  CreatorId?: Int64;
  SpaceId?: Int64;
  PluginIds?: Array<Int64>;
  DataSetIds?: Array<Int64>;
  SubWorkflowIds?: Array<Int64>;
}

export interface WorkflowData {
  WorkflowId?: Int64;
  CreatorId?: Int64;
  SpaceId?: Int64;
  PluginIds?: Array<Int64>;
  DataSetIds?: Array<Int64>;
}

export interface WorkflowDependency {
  WorkflowId?: Int64;
  SpaceId?: Int64;
  Name?: string;
  Desc?: string;
  Url?: string;
  CreatorId?: Int64;
  PluginIds?: Array<Int64>;
  DataSetIds?: Array<Int64>;
  SubWorkflowIds?: Array<Int64>;
  Root?: boolean;
  IconUri?: string;
  ToolIds?: Array<Int64>;
  ModelIds?: Array<Int64>;
  DatabaseIds?: Array<Int64>;
  VoiceIds?: Array<string>;
  WorkflowMode?: WorkflowMode;
  /** 使用共享OAuth授權的插件 */
  ShareAuthPluginIds?: Array<Int64>;
  /** 不使用授權，或者使用單獨授權的插件 */
  SingleAuthPluginIds?: Array<Int64>;
  /** 私有模型列表 */
  PrivateModels?: Array<string>;
  /** 記憶庫ID */
  MemoryIDs?: Array<Int64>;
}

export interface WorkflowDetail {
  id?: string;
  plugin_id?: string;
  description?: string;
  icon_url?: string;
  is_official?: boolean;
  name?: string;
  status?: Int64;
  type?: Int64;
  api_detail?: APIDetail;
  latest_version_name?: string;
  flow_mode?: Int64;
}

export interface WorkflowDetailData {
  workflow_id?: string;
  space_id?: string;
  name?: string;
  desc?: string;
  icon?: string;
  inputs?: unknown;
  outputs?: unknown;
  version?: string;
  create_time?: Int64;
  update_time?: Int64;
  project_id?: string;
  end_type?: number;
  icon_uri?: string;
  flow_mode?: WorkflowMode;
  output_nodes?: Array<NodeInfo>;
}

export interface WorkflowDetailInfoData {
  workflow_id?: string;
  space_id?: string;
  name?: string;
  desc?: string;
  icon?: string;
  inputs?: unknown;
  outputs?: unknown;
  version?: string;
  create_time?: Int64;
  update_time?: Int64;
  project_id?: string;
  end_type?: number;
  icon_uri?: string;
  flow_mode?: WorkflowMode;
  plugin_id?: string;
  /** workflow創作者信息 */
  creator?: Creator;
  flow_version?: string;
  flow_version_desc?: string;
  latest_flow_version?: string;
  latest_flow_version_desc?: string;
  commit_id?: string;
  is_project?: boolean;
  output_nodes?: Array<NodeInfo>;
}

/** 異步工作流的執行結果 */
export interface WorkflowExecuteHistory {
  /** 執行 ID。 */
  execute_id?: Int64;
  /** 執行狀態。Success：執行成功。Running：執行中。Fail：執行失敗。 */
  execute_status?: string;
  /** 執行工作流時指定的 Bot ID。返回 0 表示未指定智能體 ID。 */
  bot_id?: Int64;
  /** 智能體的發佈渠道 ID，默認僅顯示 Agent as API 渠道，渠道 ID 爲 1024。 */
  connector_id?: Int64;
  /** 用戶 ID，執行工作流時通過 ext 字段指定的 user_id。如果未指定，則返回 Token 申請人的扣子 ID。 */
  connector_uid?: string;
  /** 工作流的運行方式：0：同步運行。1：流式運行。2：異步運行。 */
  run_mode?: WorkflowRunMode;
  /** 工作流異步運行的 Log ID。如果工作流執行異常，可以聯繫服務團隊通過 Log ID 排查問題。 */
  log_id?: string;
  /** 工作流運行開始時間，Unixtime 時間戳格式，單位爲秒。 */
  create_time?: Int64;
  /** 工作流的恢復運行時間，Unixtime 時間戳格式，單位爲秒。 */
  update_time?: Int64;
  /** 工作流試運行調試頁面。訪問此頁面可查看每個工作流節點的運行結果、輸入輸出等信息。 */
  debug_url?: string;
  /** 工作流的輸出是否因爲過大被清理。true：已清理。false：未清理。 */
  is_output_trimmed?: boolean;
  /** 執行成功 */
  input?: string;
  /** 工作流的輸出，通常爲 JSON 序列化字符串，也有可能是非 JSON 結構的字符串。 */
  output?: string;
  token?: Int64;
  /** DEPRECATED */
  cost?: string;
  /** DEPRECATED */
  cost_unit?: string;
  ext?: Record<string, string>;
  node_execute_status?: Record<string, NodeExecuteStatus>;
  /** 工作流的使用量,token等 */
  usage?: Usage;
  /** 執行失敗
調用狀態碼。0 表示調用成功。其他值表示調用失敗。你可以通過 error_message 字段判斷詳細的錯誤原因。 */
  error_code?: string;
  /** 狀態信息。爲 API 調用失敗時可通過此字段查看詳細錯誤信息。 */
  error_msg?: string;
}

export interface WorkflowFCItem {
  workflow_id?: string;
  plugin_id?: string;
  is_draft?: boolean;
  workflow_version?: string;
}

/** Workflow 過濾條件 */
export interface WorkflowFilter {
  workflow_id?: string;
  workflow_version?: string;
}

export interface WorkflowGrayFeatureItem {
  /** 灰度feature */
  feature: string;
  /** 是否命中灰度featire。true-命中灰度，false-未命中灰度。 */
  in_gray: boolean;
}

export interface WorkflowInfo {
  role?: ChatFlowRole;
  workflow_detail?: OpenAPIWorkflowBasic;
  /** 輸入 */
  input?: OpenAPIWorkflowInput;
  /** 輸出 */
  output?: OpenAPIWorkflowOutput;
}

export interface WorkflowListByBindBizRequest {
  space_id?: string;
  bind_biz_id?: string;
  bind_biz_type?: number;
  status?: WorkFlowListStatus;
  login_user_create?: boolean;
  /** workflow or imageflow, 默認爲workflow */
  flow_mode?: WorkflowMode;
  Base?: base.Base;
}

export interface WorkflowListByBindBizResponse {
  data: WorkFlowListData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface WorkflowListByBindBizV2Request {
  space_id?: string;
  bind_biz_id?: string;
  bind_biz_type?: number;
  status?: WorkFlowListStatus;
  login_user_create?: boolean;
  /** workflow or imageflow, 默認爲workflow */
  flow_mode?: WorkflowMode;
  Base?: base.Base;
}

export interface WorkflowListByBindBizV2Response {
  data: WorkflowListV2Data;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface WorkFlowListData {
  workflow_list?: Array<Workflow>;
  auth_list?: Array<ResourceAuthInfo>;
  total?: Int64;
}

export interface WorkflowListV2Data {
  workflow_list?: Array<WorkflowV2>;
  total?: Int64;
}

export interface WorkflowListV2Request {
  page?: number;
  size?: number;
  workflow_ids?: Array<string>;
  type?: WorkFlowType;
  name?: string;
  tags?: Tag;
  space_id?: string;
  status?: WorkFlowListStatus;
  order_by?: OrderBy;
  login_user_create?: boolean;
  /** workflow or imageflow, 默認爲workflow */
  flow_mode?: WorkflowMode;
  Base?: base.Base;
}

export interface WorkflowListV2Response {
  data: WorkflowListV2Data;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface WorkflowNodeDebugV2Data {
  workflow_id?: string;
  node_id?: string;
  execute_id?: string;
  session_id?: string;
}

export interface WorkflowNodeDebugV2Request {
  workflow_id?: string;
  node_id?: string;
  input?: Record<string, string>;
  batch?: Record<string, string>;
  space_id?: string;
  bot_id?: string;
  project_id?: string;
  setting?: Record<string, string>;
  Base?: base.Base;
}

export interface WorkflowNodeDebugV2Response {
  code?: Int64;
  msg?: string;
  data?: WorkflowNodeDebugV2Data;
  BaseResp?: base.BaseResp;
}

export interface WorkflowNodeExecuteHistory {
  is_finish?: boolean;
  /** 執行成功 */
  node_output?: string;
}

export interface WorkflowNodeTypeData {
  node_types?: Array<string>;
  sub_workflow_node_types?: Array<string>;
  nodes_properties?: Array<NodeProps>;
  sub_workflow_nodes_properties?: Array<NodeProps>;
}

export interface WorkflowNodeV2 {
  WorkflowID?: string;
  NodeID?: Int64;
  Name?: string;
  Desc?: string;
  CreateTime?: Int64;
  UpdateTime?: Int64;
  CreatorId?: string;
  AuthorId?: string;
  SpaceId?: string;
  Schema?: string;
}

export interface WorkflowNodeV2Data {
  WorkflowNode?: Record<Int64, WorkflowNodeV2>;
}

export interface WorkflowReferencesData {
  workflow_list?: Array<Workflow>;
}

export interface WorkflowRuntimeInfo {
  WorkflowID?: Int64;
  name?: string;
  desc?: string;
  /** plugin api parameter 結構，序列化爲 json string */
  input?: string;
  /** plugin api parameter 結構，序列化爲 json string */
  output?: string;
  runMode?: Int64;
}

export interface WorkFlowTemplateTagData {
  tags: Array<PluginTag>;
}

export interface WorkFlowTemplateTagRequest {
  /** workflow or imageflow, 默認爲workflow */
  flow_mode?: WorkflowMode;
  Base?: base.Base;
}

export interface WorkFlowTemplateTagResponse {
  data?: WorkFlowTemplateTagData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface WorkflowTestResumeRequest {
  /** required 運行中會中斷的流程的ID。 */
  workflow_id: string;
  execute_id: string;
  event_id: string;
  data: string;
  space_id?: string;
  Base?: base.Base;
}

export interface WorkflowTestResumeResponse {
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface WorkFlowTestRunData {
  workflow_id?: string;
  execute_id?: string;
  session_id?: string;
}

export interface WorkFlowTestRunDataV2 {
  workflow_id?: string;
  execute_id?: string;
  session_id?: string;
}

export interface WorkFlowTestRunRequest {
  /** required，工作流id，不可爲空, 用於唯一標識一個工作流。 */
  workflow_id: string;
  /** 用於提供工作流測試執行的輸入參數。 */
  input?: Record<string, string>;
  /** required，空間id, 不可爲空,用於標識工作流所屬的空間。 */
  space_id?: string;
  /** agent的id，非project下的流程，涉及變量節點、數據庫的流程 */
  bot_id?: string;
  /** 廢棄 */
  submit_commit_id?: string;
  /** 流程畫布的CanvasInfo中指定vcs的draft_commit_id，默認爲空，爲空時默認選最新的草稿版本, 用於指定使用哪個草稿版本的工作流。 */
  commit_id?: string;
  /** 用於標識工作流所屬的項目。 */
  project_id?: string;
  Base?: base.Base;
}

export interface WorkFlowTestRunResponse {
  data: WorkFlowTestRunData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface WorkFlowTestRunV2Request {
  workflow_id?: string;
  input?: Record<string, string>;
  space_id?: string;
  bot_id?: string;
  Base?: base.Base;
}

export interface WorkFlowTestRunV2Response {
  code?: Int64;
  msg?: string;
  data?: WorkFlowTestRunDataV2;
  BaseResp: base.BaseResp;
}

export interface WorkflowV2 {
  workflow_id?: string;
  name?: string;
  desc?: string;
  url?: string;
  icon_uri?: string;
  status?: WorkFlowStatus;
  /** 類型，1:官方模版 */
  type?: WorkFlowType;
  /** workfklow對應的插件id */
  plugin_id?: string;
  create_time?: Int64;
  update_time?: Int64;
  schema_type?: SchemaType;
  start_node?: Node;
  tag?: Tag;
  /** 模版創作者id */
  template_author_id?: string;
  /** 模版創作者暱稱 */
  template_author_name?: string;
  /** 模版創作者頭像 */
  template_author_picture_url?: string;
  /** 空間id */
  space_id?: string;
  /** 流程出入參 */
  interface_str?: string;
  /** 新版workflow的定義 schema */
  schema_json?: string;
  /** workflow創作者信息 */
  creator?: Creator;
  /** workflow or imageflow, 默認爲workflow */
  flow_mode?: WorkflowMode;
  /** workflow商品審覈版本狀態 */
  product_draft_status?: ProductDraftStatus;
  project_id?: string;
  /** dev插件id */
  dev_plugin_id?: string;
}

export interface WorkflowV2Data {
  workflow?: WorkflowV2;
  /** 是否綁定了Agent */
  is_bind_agent?: boolean;
  /** 生成的兼容commit_id，如果請求的是publish態的 */
  publish_commit_id?: string;
  bind_biz_id?: string;
  bind_biz_type?: number;
}

export interface WorkflowVersionInfo {
  id?: string;
  name?: string;
  icon?: string;
  version?: string;
  project_id?: string;
  is_product?: boolean;
  is_library?: boolean;
}
/* eslint-enable */
