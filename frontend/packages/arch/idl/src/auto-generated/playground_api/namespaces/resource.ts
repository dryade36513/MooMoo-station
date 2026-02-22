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

export interface AuthData {
  /** 資源類型 */
  res_type?: resource_common.ResType;
  /** 節點鑑權信息 */
  auth_data?: string;
  /** 資源ID */
  res_id?: Int64;
}

export interface BatchResourceCopyDoRequest {
  /** 環境參數 */
  ResourceCopyEnv?: resource_common.ResourceCopyEnv;
  ResourceLocators?: Array<resource_common.ResourceLocator>;
  /** 該資源引用的子資源映射 */
  ChildrenCopyResults?: Array<resource_common.ResourceCopyResult>;
  /** 導入導出的版本 */
  export_version?: resource_common.ExportVersion;
}

export interface BatchResourceCopyDoResponse {
  CopyResults?: Array<resource_common.ResourceCopyResult>;
}

export interface BatchSyncResourceRequest {
  ResourceList?: Array<resource_common.StaticResourceInfo>;
  Op?: resource_common.SyncOperation;
}

export interface BatchSyncResourceResponse {}

export interface ExportPreCheckRequest {
  /** 資源類型 */
  res_type: resource_common.ResType;
  /** 資源ID */
  id: Int64;
  /** 用戶ID */
  user_id: Int64;
  /** 工作流的commit版本號 */
  commitId?: string;
}

export interface ExportPreCheckResponse {
  /** 鑑權信息 */
  auth_data_list?: Array<AuthData>;
  /** 依賴的子資源列表 */
  dep_resource_list?: Array<resource_common.ResourceMetaInfo>;
}

export interface GetUploadAuthTokenData {
  service_id?: string;
  upload_path_prefix?: string;
  auth?: UploadAuthTokenInfo;
  upload_host?: string;
}

export interface GetUploadAuthTokenRequest {
  /** 上傳場景，可選值："export" */
  scene?: string;
}

export interface GetUploadAuthTokenResponse {
  data?: GetUploadAuthTokenData;
  code: Int64;
  msg: string;
}

export interface ImportPreCheckRequest {
  package_uri: string;
  /** 用戶ID */
  user_id: Int64;
}

export interface ImportPreCheckResponse {
  /** 資源的ID */
  res_id?: Int64;
  /** 資源類型 */
  res_type?: resource_common.ResType;
  name?: string;
  desc?: string;
  /** icon的url */
  icon_url?: string;
  /** icon的uri */
  icon_uri?: string;
  /** 對話流還是資源流 */
  flow_mode?: number;
  /** 校驗文件的url */
  check_file_url?: string;
  /** 錯誤數量 */
  error_count?: Int64;
}

export interface LibraryResourceListRequest {
  /** 是否由當前用戶創建，0-不篩選，1-當前用戶 */
  user_filter?: number;
  /** [4,1]   0代表不篩選 */
  res_type_filter?: Array<number>;
  /** 名稱 */
  name?: string;
  /** 發佈狀態，0-不篩選，1-未發佈，2-已發佈 */
  publish_status_filter?: number;
  /** 用戶所在空間ID */
  space_id: string;
  /** 頁數，首頁是1。默認1。 */
  page?: number;
  /** 一次讀取的數據條數，默認10，最大100. */
  size?: number;
  /** 8 : optional i32 offset, // 數據記錄偏移，含義是從第(offset+1)條記錄開始讀
遊標，用於分頁，默認0，第一次請求可以不傳，後續請求需要帶上上次返回的cursor */
  cursor?: string;
  /** 用來指定自定義搜索的字段 不填默認只name匹配，eg []string{name,自定} 匹配name和自定義字段full_text */
  search_keys?: Array<string>;
  /** 當res_type_filter爲[2 workflow]時，是否需要返回圖片流 */
  is_get_imageflow?: boolean;
}

export interface LibraryResourceListResponse {
  code?: Int64;
  msg?: string;
  resource_list?: Array<resource_common.ResourceInfo>;
  total?: number;
  /** 遊標，用於下次請求的cursor */
  cursor?: string;
  /** 是否還有數據待拉取 */
  has_more?: boolean;
}

export interface LibraryResourceListRpcRequest {
  /** 是否由當前用戶創建，0-不篩選，1-當前用戶 */
  user_filter?: number;
  /** [4,1]   0代表不篩選 */
  res_type_filter?: Array<number>;
  /** 名稱 */
  name?: string;
  /** 發佈狀態，0-不篩選，1-未發佈，2-已發佈 */
  publish_status_filter?: number;
  /** 用戶所在空間ID */
  space_id: string;
  /** 頁數，首頁是1。默認1。 */
  page?: number;
  /** 一次讀取的數據條數，默認10，最大100. */
  size?: number;
  /** 數據記錄偏移，含義是從第(offset+1)條記錄開始讀 */
  offset?: number;
  /** 遊標，用於分頁，默認0，第一次請求可以不傳，後續請求需要帶上上次返回的cursor */
  cursor?: string;
  /** 用戶id */
  devID?: Int64;
  /** 用來指定自定義搜索的字段 不填默認只name匹配，eg []string{name,自定} 匹配name和自定義字段full_text */
  search_keys?: Array<string>;
  is_get_imageflow?: boolean;
}

export interface LibraryResourceListRpcResponse {
  resource_list?: Array<resource_common.ResourceInfo>;
  total?: number;
  /** 遊標，用於下次請求的cursor */
  cursor?: string;
  /** 是否還有數據待拉取 */
  has_more?: boolean;
}

export interface LibraryResourceRecycleRequest {
  space_id?: string;
}

export interface LibraryResourceRecycleResponse {
  code?: Int64;
  msg?: string;
  recycle_time_map?: Record<resource_common.ResType, Int64>;
}

export interface MGetDisplayResourceInfoRequest {
  /** 最大傳一頁的數量，實現方可以限制最大100個 */
  ResIDs?: Array<Int64>;
  /** 當前的用戶，實現方用於判斷權限 */
  CurrentUserID?: Int64;
  /** 資源類型（爲了支持一個服務可以多種資源） */
  ResTypeMap?: Record<Int64, resource_common.ResType>;
}

export interface MGetDisplayResourceInfoResponse {
  ResourceList?: Array<resource_common.DisplayResourceInfo>;
}

export interface MGetProjectResourceInfoRequest {
  /** 項目ID */
  ProjectID?: Int64;
  /** 當前的用戶 */
  CurrentUserID?: Int64;
  /** 用戶所在space id */
  SpaceID?: Int64;
  /** 是否忽略權限，直接根據project id拉取 */
  SkipPermission?: boolean;
  /** 指定獲取某個版本的project的資源 */
  ProjectVersion?: Int64;
}

export interface MGetProjectResourceInfoResponse {
  ResourceList?: Array<resource_common.ProjectResourceInfo>;
}

export interface ProjectResourceListRequest {
  /** 項目ID */
  project_id: string;
  /** 用戶所在space id */
  space_id?: string;
  /** 指定獲取某個版本的project的資源 */
  project_version?: string;
}

export interface ProjectResourceListResponse {
  code?: Int64;
  msg?: string;
  resource_groups?: Array<resource_common.ProjectResourceGroup>;
}

export interface ProjectResourceListRpcRequest {
  /** 項目ID */
  ProjectID?: Int64;
  /** 當前的用戶 */
  CurrentUserID?: Int64;
  /** 用戶所在space id */
  SpaceID?: Int64;
  /** 指定獲取某個版本的project的資源 */
  ProjectVersion?: Int64;
}

export interface ProjectResourceListRpcResponse {
  resource_groups?: Array<resource_common.ProjectResourceGroup>;
}

export interface ResourceCopyCanceledRequest {
  /** 環境參數 */
  ResourceCopyEnv?: resource_common.ResourceCopyEnv;
}

export interface ResourceCopyCanceledResponse {}

export interface ResourceCopyCancelRequest {
  /** 複製任務id, 用於查詢任務狀態或取消、重試任務 */
  task_id?: string;
}

export interface ResourceCopyCancelResponse {
  code?: Int64;
  msg?: string;
}

export interface ResourceCopyCancelRpcRequest {
  /** 項目ID */
  TaskID: Int64;
}

export interface ResourceCopyCancelRpcResponse {}

export interface ResourceCopyDetailRequest {
  /** 複製任務id, 用於查詢任務狀態或取消、重試任務 */
  task_id?: string;
}

export interface ResourceCopyDetailResponse {
  code?: Int64;
  msg?: string;
  task_detail?: resource_common.ResourceCopyTaskDetail;
}

export interface ResourceCopyDispatchRequest {
  /** 場景，只支持單資源的操作 */
  scene?: resource_common.ResourceCopyScene;
  /** 被用戶選擇複製/移動的資源ID */
  res_id?: string;
  res_type?: resource_common.ResType;
  /** 所在項目ID */
  project_id?: string;
  res_name?: string;
  /** 跨空間複製的目標space id */
  target_space_id?: string;
  /** 資源的元信息 */
  res_info?: resource_common.ResourceMetaInfo;
  /** 包的地址 */
  package_uri?: string;
  /** 清理鑑權的節點列表 */
  clear_auth_node_list?: Array<string>;
  /** 導出的子資源列表 */
  export_sub_resource?: Array<resource_common.ResourceMetaInfo>;
  /** 導出的資源包的版本 */
  export_version?: resource_common.ExportVersion;
}

export interface ResourceCopyDispatchResponse {
  code?: Int64;
  msg?: string;
  /** 複製任務id, 用於查詢任務狀態或取消、重試任務 */
  task_id?: string;
  /** 不可以進行操作的原因，返回多語言文本 */
  failed_reasons?: Array<resource_common.ResourceCopyFailedReason>;
}

export interface ResourceCopyDispatchRpcRequest {
  Scene?: resource_common.ResourceCopyScene;
  ResID?: Int64;
  ResType?: resource_common.ResType;
  ProjectID?: Int64;
  /** 當前的用戶，實現方用於判斷權限 */
  CurrentUserID?: Int64;
  ResName?: string;
  /** 跨空間複製的目標space id */
  TargetSpaceID?: Int64;
  /** 資源的元信息 */
  res_info?: resource_common.ResourceMetaInfo;
  /** 包的地址 */
  package_uri?: string;
  /** 清理鑑權的節點列表 */
  clear_auth_node_list?: Array<string>;
  /** 導出的子資源列表 */
  export_sub_resource?: Array<resource_common.ResourceMetaInfo>;
  /** 導出的資源包的版本 */
  export_version?: resource_common.ExportVersion;
}

export interface ResourceCopyDispatchRpcResponse {
  /** 複製任務id, 用於查詢任務狀態或取消、重試任務 */
  TaskID?: Int64;
  FailedReasons?: Array<resource_common.ResourceCopyFailedReason>;
}

export interface ResourceCopyDoRequest {
  /** 環境參數 */
  ResourceCopyEnv?: resource_common.ResourceCopyEnv;
  ResourceLocator?: resource_common.ResourceLocator;
  /** 該資源引用的子資源映射 */
  ChildrenCopyResults?: Array<resource_common.ResourceCopyResult>;
}

export interface ResourceCopyDoResponse {
  CopyResult?: resource_common.ResourceCopyResult;
}

export interface ResourceCopyEditLockRequest {
  /** 環境參數 */
  ResourceCopyEnv?: resource_common.ResourceCopyEnv;
  /** 要被操作的資源 */
  ResourceLocators?: Array<resource_common.ResourceLocator>;
}

export interface ResourceCopyEditLockResponse {}

export interface ResourceCopyEditUnlockRequest {
  /** 環境參數 */
  ResourceCopyEnv?: resource_common.ResourceCopyEnv;
  /** 要被操作的資源 */
  ResourceLocators?: Array<resource_common.ResourceLocator>;
}

export interface ResourceCopyEditUnlockResponse {}

export interface ResourceCopyPostProcessRequest {
  /** 環境參數 */
  ResourceCopyEnv?: resource_common.ResourceCopyEnv;
  /** 要被操作的資源 */
  ResourceLocators?: Array<resource_common.ResourceLocator>;
}

export interface ResourceCopyPostProcessResponse {}

export interface ResourceCopyPreCheckRequest {
  /** 環境參數 */
  ResourceCopyEnv?: resource_common.ResourceCopyEnv;
  /** 要被操作的資源 */
  ResourceLocators?: Array<resource_common.ResourceLocator>;
}

export interface ResourceCopyPreCheckResponse {
  /** 不可以進行操作的原因，返回多語言文本。有問題才append到數組 */
  FailedReasons?: Array<resource_common.ResourceCopyCheckFailedReason>;
}

export interface ResourceCopyRefChangeRequest {
  /** 環境參數 */
  ResourceCopyEnv?: resource_common.ResourceCopyEnv;
  CopyResults?: Array<resource_common.ResourceCopyResult>;
}

export interface ResourceCopyRefChangeResponse {}

export interface ResourceCopyRefTreeRequest {
  /** 環境參數 */
  ResourceCopyEnv?: resource_common.ResourceCopyEnv;
  ResourceLocator?: resource_common.ResourceLocator;
}

export interface ResourceCopyRefTreeResponse {
  RefTreeNodes?: Array<resource_common.RefTreeNode>;
}

export interface ResourceCopyRetryRequest {
  /** 複製任務id, 用於查詢任務狀態或取消、重試任務 */
  task_id?: string;
}

export interface ResourceCopyRetryResponse {
  code?: Int64;
  msg?: string;
  /** 不可以進行操作的原因，返回多語言文本 */
  failed_reasons?: Array<resource_common.ResourceCopyFailedReason>;
}

export interface ResourceCopyRetryRpcRequest {
  /** 項目ID */
  TaskID: Int64;
}

export interface ResourceCopyRetryRpcResponse {
  FailedReasons?: Array<resource_common.ResourceCopyFailedReason>;
}

export interface ResourceCopyTaskDetailRequest {
  /** 項目ID */
  TaskID: Int64;
}

export interface ResourceCopyTaskDetailResponse {
  /** 環境參數 */
  ResourceCopyEnv?: resource_common.ResourceCopyEnv;
  CopyResults?: Array<resource_common.ResourceCopyResult>;
  Status?: resource_common.TaskStatus;
  ResName?: string;
}

export interface ResourceCopyVisibleRequest {
  /** 環境參數 */
  ResourceCopyEnv?: resource_common.ResourceCopyEnv;
  /** 要被操作的資源 */
  ResourceLocators?: Array<resource_common.ResourceLocator>;
}

export interface ResourceCopyVisibleResponse {}

export interface ResourceExportPreCheckRequest {
  /** 資源類型 */
  res_type: resource_common.ResType;
  /** 資源ID */
  id: Int64;
  /** 用戶ID */
  user_id: Int64;
  /** 工作流的commit版本號 */
  commitId?: string;
}

export interface ResourceExportPreCheckResponse {
  /** 鑑權信息 */
  auth_data_list?: Array<AuthData>;
  /** 依賴的子資源列表 */
  dep_resource_list?: Array<resource_common.ResourceMetaInfo>;
}

export interface ResourceImportPreCheckRequest {
  /** 資源元信息 */
  res_meta_info_list: Array<resource_common.ResourceMetaInfo>;
  /** 資源列表 */
  res_list?: Array<resource_common.ResourceLocator>;
  /** 導入導出的版本 */
  export_version?: resource_common.ExportVersion;
}

export interface ResourceImportPreCheckResponse {
  /** 資源元信息 */
  res_meta_info_list: Array<resource_common.ResourceMetaInfo>;
  /** 每個資源校驗失敗的原因 */
  fail_reasons?: Record<Int64, Array<resource_common.FailedReasonDetail>>;
}

export interface ResourceRefTreeInProjectRequest {
  /** 項目ID */
  ProjectID: Int64;
  /** 不傳就是草稿 */
  ProjectVersion?: Int64;
}

export interface ResourceRefTreeInProjectResponse {
  RefTreeNodes?: Array<resource_common.RefTreeNode>;
}

export interface ResourceTaskPreCheckRequest {
  /** 環境參數 */
  ResourceCopyEnv?: resource_common.ResourceCopyEnv;
}

export interface ResourceTaskPreCheckResponse {
  /** 不可以進行操作的原因，返回多語言文本。有問題才append到數組 */
  FailedReasons?: Array<resource_common.ResourceCopyCheckFailedReason>;
}

export interface SyncResourceCompensateRequest {}

export interface SyncResourceCompensateResponse {}

export interface UploadAuthTokenInfo {
  access_key_id?: string;
  secret_access_key?: string;
  session_token?: string;
  expired_time?: string;
  current_time?: string;
}
/* eslint-enable */
