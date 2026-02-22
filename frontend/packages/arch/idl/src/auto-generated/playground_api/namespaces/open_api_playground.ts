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

import * as bot_open_api from './bot_open_api';

export type Int64 = string | number;

export interface ListBotVersionsData {
  items?: Array<OpenBotVersionInfo>;
  has_more?: boolean;
}

export interface OpenAddSpaceMemberData {
  /** 成功添加的成員列表 */
  added_success_user_ids?: Array<string>;
  /** 成功邀請的成員列表 */
  invited_success_user_ids?: Array<string>;
  /** 不存在的用戶列表 */
  not_exist_user_ids?: Array<string>;
  /** 已經加入空間的用戶不進行處理 */
  already_joined_user_ids?: Array<string>;
  /** 已經發起邀請的用戶不進行處理 */
  already_invited_user_ids?: Array<string>;
}

export interface OpenAddSpaceMemberRequest {
  /** 空間ID */
  workspace_id?: string;
  /** 要添加的成員，數量最多20 */
  users?: Array<OpenSpaceMember>;
}

export interface OpenAddSpaceMemberResponse {
  data?: OpenAddSpaceMemberData;
  code: Int64;
  msg: string;
}

export interface OpenApplyJoinSpaceData {
  /** 成功申請的用戶列表 */
  applied_success_user_ids?: Array<string>;
  /** 申請失敗的用戶列表 */
  applied_failed_user_ids?: Array<string>;
}

export interface OpenApplyJoinSpaceRequest {
  /** 空間ID */
  workspace_id?: string;
  /** 用戶ID列表 */
  user_ids?: Array<string>;
}

export interface OpenApplyJoinSpaceResponse {
  data?: OpenApplyJoinSpaceData;
  code: Int64;
  msg: string;
}

export interface OpenBotVersionInfo {
  version?: string;
  created_at?: Int64;
  creator?: OpenCreatorInfo;
  publish_status?: string;
  /** 發佈時用戶輸入的記錄信息 */
  changelog?: string;
}

export interface OpenCreateSpaceRequest {
  /** 空間名稱 */
  name?: string;
  /** 空間描述 */
  description?: string;
  /** 空間圖標，通過上傳接口https://www.coze.cn/open/docs/developer_guides/upload_files，未指定文件ID則使用默認頭像 */
  icon_file_id?: string;
  /** 組織id */
  coze_account_id?: string;
  /** 空間所有者id，不傳則爲當前用戶 */
  owner_uid?: string;
}

export interface OpenCreateSpaceResponse {
  data?: OpenCreateSpaceRet;
  code: Int64;
  msg: string;
}

export interface OpenCreateSpaceRet {
  /** 空間id */
  id?: string;
}

export interface OpenCreatorInfo {
  id?: string;
  /** 暱稱 */
  name?: string;
}

export interface OpenGetBotInfoRequest {
  bot_id?: string;
  is_published?: boolean;
  /** 發佈查最新 */
  connector_id?: string;
}

export interface OpenGetBotInfoResponse {
  data?: bot_open_api.BotInfo;
  code?: Int64;
  msg?: string;
}

export interface OpenListBotVersionsRequest {
  bot_id?: string;
  page_num?: number;
  page_size?: number;
  publish_status?: string;
  connector_id?: string;
}

export interface OpenListBotVersionsResponse {
  data?: ListBotVersionsData;
  code?: Int64;
  msg?: string;
}

export interface OpenRemoveSpaceMemberData {
  /** 成功移除的成員列表 */
  removed_success_user_ids?: Array<string>;
  /** 不在空間的用戶不進行處理 */
  not_in_workspace_user_ids?: Array<string>;
  /** 空間所有者不進行處理 */
  owner_not_support_remove_user_ids?: Array<string>;
}

export interface OpenRemoveSpaceMemberRequest {
  /** 空間ID */
  workspace_id?: string;
  /** 要移除的成員，數量最多5 */
  user_ids?: Array<string>;
}

export interface OpenRemoveSpaceMemberResponse {
  data?: OpenRemoveSpaceMemberData;
  code: Int64;
  msg: string;
}

export interface OpenRemoveSpaceRequest {
  /** 空間ID */
  workspace_id?: string;
}

export interface OpenRemoveSpaceResponse {
  code: Int64;
  msg: string;
}

export interface OpenSpace {
  /** 空間 id */
  id?: string;
  /** 空間名稱 */
  name?: string;
  /** 空間圖標 url */
  icon_url?: string;
  /** 當前用戶角色, 枚舉值: owner, admin, member */
  role_type?: string;
  /** 工作空間類型, 枚舉值: personal, team */
  workspace_type?: string;
  /** 企業 id */
  enterprise_id?: string;
  joined_status?: string;
  /** 空間描述 */
  description?: string;
  owner_uid?: string;
  /** 空間管理員 id 列表 */
  admin_uids?: Array<string>;
}

export interface OpenSpaceData {
  workspaces?: Array<OpenSpace>;
  /** 空間總數 */
  total_count?: Int64;
}

/** *  plagyground 開放api idl文件
 * */
export interface OpenSpaceListRequest {
  page_num?: Int64;
  page_size?: Int64;
  enterprise_id?: string;
  user_id?: string;
  coze_account_id?: string;
  /** 不傳默認 "joined" */
  scope?: string;
}

export interface OpenSpaceListResponse {
  data?: OpenSpaceData;
  code: Int64;
  msg: string;
}

export interface OpenSpaceMember {
  /** 用戶ID */
  user_id?: string;
  /** 暱稱（添加成員時不用傳） */
  user_nickname?: string;
  /** 用戶名（添加成員時不用傳） */
  user_unique_name?: string;
  /** 頭像 （添加成員時不用傳） */
  avatar_url?: string;
  /** 當前用戶角色 */
  role_type?: string;
}

export interface OpenSpaceMemberListData {
  items?: Array<OpenSpaceMember>;
  /** 空間成員總數 */
  total_count?: Int64;
}

export interface OpenSpaceMemberListRequest {
  /** 空間ID */
  workspace_id?: string;
  /** 頁數，默認爲1 */
  page_num?: number;
  /** 每頁大小，默認爲20，最大50 */
  page_size?: number;
}

export interface OpenSpaceMemberListResponse {
  data?: OpenSpaceMemberListData;
  code: Int64;
  msg: string;
}

export interface OpenSwitchBotDevelopModeRequest {
  bot_id?: string;
  collaboration_mode?: string;
}

export interface OpenSwitchBotDevelopModeResponse {
  code?: Int64;
  msg?: string;
}

export interface OpenUpdateSpaceMemberRequest {
  /** 空間id */
  workspace_id?: string;
  /** 更新用戶id */
  user_id?: string;
  /** 更新的用戶角色(不允許修改owner，只允許變更member/admin -> member/admin) */
  role_type?: string;
}

export interface OpenUpdateSpaceMemberResponse {
  code?: Int64;
  msg?: string;
}
/* eslint-enable */
