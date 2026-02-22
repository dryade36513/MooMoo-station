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

import * as resource_common from './resource_common';

export type Int64 = string | number;

export enum IntelligenceTaskActionEventMsgEventType {
  TaskSuccess = 1,
  TaskFailed = 2,
  TaskCanceled = 3,
}

export enum IntelligenceTaskActionType {
  Copy = 1,
  Move = 2,
  Publish = 3,
  ImportExport = 4,
}

export enum IntelligenceTaskEntityLocationType {
  Project = 1,
  Space = 2,
  Online = 3,
  Template = 4,
  Agent = 5,
}

export enum IntelligenceTaskEntityType {
  Plugin = 1,
  Workflow = 2,
  Imageflow = 3,
  Knowledge = 4,
  UI = 5,
  Project = 6,
  Database = 7,
  Variable = 8,
  Trigger = 9,
  Agent = 10,
  Prompt = 11,
  Shortcut = 12,
  Chux = 13,
  Memorybase = 14,
}

export enum IntelligenceTaskStatus {
  Success = 1,
  Processing = 2,
  Failed = 3,
  Canceled = 4,
}

export enum IntelligenceTaskType {
  /** 複製項目內的資源到同項目 */
  CopyResourceInProject = 1,
  /** 複製項目資源到Library */
  CopyProjectResourceToLibrary = 2,
  /** 移動項目資源到Library */
  MoveProjectResourceToLibrary = 3,
  /** 複製Library資源到項目 */
  CopyLibraryResourceToProject = 4,
  /** 複製項目 */
  CopyProject = 5,
  /** 項目發佈到渠道 */
  PublishProject = 6,
  /** 複製項目模板 */
  CopyTemplateToProject = 7,
  /** 項目發佈到模板 */
  PublishProjectTemplate = 8,
  /** 項目模版上架 */
  LaunchProjectTemplate = 9,
  /** 項目存檔 */
  ArchiveProject = 10,
  /** 項目回滾 */
  RollbackProject = 11,
  /** 單個資源跨空間複製 */
  CrossSpaceCopy = 12,
  /** 項目跨空間複製 */
  CrossSpaceCopyProject = 13,
  /** 導出 */
  Export = 14,
  /** 導入 */
  Import = 15,
  /** 發佈初見項目 */
  PublishChuxProject = 16,
  /** 同空間複製資源 */
  CopyResource = 17,
}

export interface ExtraInfo {
  /** 主操作實體關聯的子實體id列表 '業務透傳字段 json string' */
  SubSourceInfoList?: Array<SubSourceInfo>;
  /** 子實體映射的id列表 '業務透傳字段 json string' */
  SourceMappingList?: Array<SourceMapping>;
  /** 主操作實體的名稱 */
  Name?: string;
  /** 主操作實體的圖標 url */
  Icon?: string;
  /** agent複製映射關係 */
  OldAgentIdToNewIdMap?: Record<Int64, Int64>;
  /** 包地址 */
  PackageUri?: string;
  /** 資源的元數據信息 */
  ResInfo?: string;
  /** 清理節點鑑權信息的列表 */
  ClearAuthNodeList?: string;
  /** 導出的子資源信息 */
  ExportSubResource?: string;
  /** 導入導出包的版本 */
  ExportVersion?: string;
}

export interface FailedReasonDetail {
  /** 失敗原因 */
  FailedReason?: string;
  /** 操作實體id */
  EntityId?: Int64;
  /** 操作實體類型 */
  EntityType?: IntelligenceTaskEntityType;
  /** 實體名稱 */
  EntityName?: string;
}

/** task mq schema */
export interface IntelligenceTaskActionEventMsg {
  TaskId?: Int64;
  EventType?: IntelligenceTaskActionEventMsgEventType;
  /** 事件時間 ms */
  TimeStamp?: Int64;
  /** task詳情信息 */
  TaskInfo?: IntelligenceTaskInfo;
}

export interface IntelligenceTaskEntityLocationInfo {
  /** '位置類型' */
  LocationType?: IntelligenceTaskEntityLocationType;
  /** '位置空間id' */
  SpaceId?: string;
  /** '位置project id' */
  ProjectId?: string;
  /** '位置實體version' */
  Version?: string;
}

/** task資源方實現接口定義,外部可引用 */
export interface IntelligenceTaskInfo {
  /** 任務id */
  TaskId?: string;
  /** 任務創建者id */
  UserId?: string;
  /** 操作實體類型 */
  EntityType?: IntelligenceTaskEntityType;
  /** 操作實體id */
  EntityId?: string;
  /** '操作類型' */
  ActionType?: IntelligenceTaskActionType;
  /** '源位置信息 */
  SourceLocationInfo?: IntelligenceTaskEntityLocationInfo;
  /** '目標位置信息' */
  TargetLocationInfo?: IntelligenceTaskEntityLocationInfo;
  /** '業務透傳字段 json string' */
  Extra?: string;
  /** 任務狀態 */
  Status?: IntelligenceTaskStatus;
  /** 重試次數 */
  RetryNum?: number;
  /** 失敗原因彙總 */
  FailedReasons?: Array<FailedReasonDetail>;
  /** 項目類型 */
  TaskType?: IntelligenceTaskType;
  /** 創建時間 */
  CreateTime?: Int64;
  /** 更新時間 */
  UpdateTime?: Int64;
  /** 資源的基本信息 */
  ResourceMetaInfo?: resource_common.ResourceMetaInfo;
  /** 包地址 */
  packageUrl?: string;
  /** 目標實體id */
  TargetEntityId?: string;
}

export interface IntelligenceTaskLog {}

export interface SourceMapping {
  EntityType: IntelligenceTaskEntityType;
  OriginalId: Int64;
  TargetId: Int64;
  /** 其他的信息，比如plugin的tool映射信息 */
  TargetResInfo?: string;
  /** 包地址 */
  PackageUrl?: string;
}

export interface SubSourceInfo {
  EntityType: IntelligenceTaskEntityType;
  Ids: Array<Int64>;
}

export interface TaskCancelRequest {
  TaskInfo: IntelligenceTaskInfo;
}

export interface TaskCancelResponse {}

export interface TaskChangeRefRequest {
  TaskInfo: IntelligenceTaskInfo;
}

export interface TaskChangeRefResponse {
  /** 失敗時可選返回的失敗原因 */
  FailedReasons?: Array<FailedReasonDetail>;
}

export interface TaskExecuteRequest {
  TaskInfo: IntelligenceTaskInfo;
}

export interface TaskExecuteResponse {
  /** 失敗時可選返回的失敗原因 */
  FailedReasons?: Array<FailedReasonDetail>;
  /** 子實體映射的id列表 */
  SourceMappingList?: Array<SourceMapping>;
}

export interface TaskPostProcessRequest {
  TaskInfo: IntelligenceTaskInfo;
}

export interface TaskPostProcessResponse {
  /** 失敗時可選返回的失敗原因 */
  FailedReasons?: Array<FailedReasonDetail>;
}

export interface TaskPreCheckRequest {
  TaskInfo: IntelligenceTaskInfo;
}

export interface TaskPreCheckResponse {
  /** 失敗時可選返回的失敗原因 */
  FailedReasons?: Array<FailedReasonDetail>;
}

export interface TaskSubSourceRequest {
  /** 任務要處理的實體，對應的子資源 */
  TaskInfo: IntelligenceTaskInfo;
}

export interface TaskSubSourceResponse {
  /** 失敗時可選返回的失敗原因 */
  FailedReasons?: Array<FailedReasonDetail>;
  /** 實體對應的子資源列表 */
  SubSourceMap?: Record<Int64, Array<SubSourceInfo>>;
}
/* eslint-enable */
