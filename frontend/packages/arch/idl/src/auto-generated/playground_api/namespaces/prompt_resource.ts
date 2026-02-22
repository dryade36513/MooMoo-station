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

export enum ActionKey {
  /** 複製 */
  Copy = 1,
  /** 刪除 */
  Delete = 2,
  /** 啓用/禁用 */
  EnableSwitch = 3,
  /** 編輯 */
  Edit = 4,
  /** 跨空間複製 */
  CrossSpaceCopy = 10,
}

export enum ResourcePublishStatus {
  /** 未發佈 */
  UnPublished = 1,
  /** 已發佈 */
  Published = 2,
}

export interface DeletePromptResourceRequest {
  prompt_resource_id: string;
}

export interface DeletePromptResourceResponse {
  code: Int64;
  msg: string;
}

/** 展示用，實現方提供展示信息 */
export interface DisplayResourceInfo {
  /** 資源id */
  ResID?: Int64;
  /** 資源描述 */
  Desc?: string;
  /** 資源Icon，完整url */
  Icon?: string;
  /** 資源狀態，各類型資源自身定義 */
  BizResStatus?: number;
  /** 是否開啓多人編輯 */
  CollaborationEnable?: boolean;
  /** 業務攜帶的擴展信息，以res_type區分，每個res_type定義的schema和含義不一樣，使用前需要判斷res_type */
  BizExtend?: Record<string, string>;
  /** 不同類型的不同操作按鈕，由資源實現方和前端約定。返回則展示，要隱藏某個按鈕，則不要返回； */
  Actions?: Array<ResourceAction>;
  /** 是否禁止進詳情頁 */
  DetailDisable?: boolean;
  /** 資源名稱 */
  Name?: string;
  /** 資源發佈狀態，1-未發佈，2-已發佈 */
  PublishStatus?: ResourcePublishStatus;
  /** 最近編輯時間, unix秒級時間戳 */
  EditTime?: Int64;
}

export interface GetOfficialPromptResourceListRequest {
  keyword?: string;
}

export interface GetOfficialPromptResourceListResponse {
  data?: Array<PromptResource>;
  code: Int64;
  msg: string;
}

export interface GetPromptResourceInfoRequest {
  prompt_resource_id: string;
}

export interface GetPromptResourceInfoResponse {
  data?: PromptResource;
  code: Int64;
  msg: string;
}

export interface MGetDisplayResourceInfoRequest {
  /** 最大傳一頁的數量，實現方可以限制最大100個 */
  ResIDs?: Array<Int64>;
  /** 當前的用戶，實現方用於判斷權限 */
  CurrentUserID?: Int64;
}

export interface MGetDisplayResourceInfoResponse {
  ResourceList?: Array<DisplayResourceInfo>;
}

export interface PromptResource {
  id?: string;
  space_id?: string;
  name?: string;
  description?: string;
  prompt_text?: string;
}

export interface ResourceAction {
  /** 一個操作對應一個唯一的key，key由資源側約束 */
  key: ActionKey;
  /** ture=可以操作該Action，false=置灰 */
  enable: boolean;
}

export interface ShowPromptResource {
  id?: string;
}

/** 參數優先級從上往下 */
export interface SyncPromptResourceToEsRequest {
  SyncAll?: boolean;
  PromptResourceIDList?: Array<Int64>;
  SpaceIDList?: Array<Int64>;
}

export interface SyncPromptResourceToEsResponse {}

export interface UpsertPromptResourceRequest {
  prompt: PromptResource;
}

export interface UpsertPromptResourceResponse {
  data?: ShowPromptResource;
  code: Int64;
  msg: string;
}
/* eslint-enable */
