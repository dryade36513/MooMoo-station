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

export enum AppType {
  CRONJOB = 0,
  EVENT = 1,
}

export enum ExecutStatus {
  WAITING = 0,
  SUCCESS = 1,
  FAILED = 2,
}

export enum TriggerSetType {
  /** preset 觸發器 test run */
  DEBUG_PRESET = 0,
  /** preset 觸發器 線上 */
  ONLINE_PRESET = 1,
  /** 節點訂閱 test run */
  DEBUG_USERSET = 2,
  /** 節點訂閱 線上 */
  ONLINE_USERSET = 3,
  /** 線上，包括 user + preset */
  ONLINE = 4,
}

export enum TriggerStatus {
  Close = 0,
  Open = 1,
}

export interface DeleteTriggerData {
  affected_rows?: Int64;
}

export interface DeleteTriggerRequest {
  space_id: string;
  project_id: string;
  /** 觸發器id */
  trigger_id?: string;
  set_type?: TriggerSetType;
  /** 訂閱者 */
  creator?: string;
  /** 渠道id */
  connector_id?: string;
  Base?: base.Base;
}

export interface DeleteTriggerResponse {
  data: DeleteTriggerData;
  code: Int64;
  msg: string;
  base_resp: base.BaseResp;
}

export interface GetPublishedTriggerDetailsRequest {
  space_id: string;
  project_id: string;
  /** node id ，source_trigger_id */
  source_id: string;
  /** 渠道ID */
  connector_id?: string;
  /** 搜索 */
  query?: string;
  page_size?: Int64;
  page_num?: Int64;
  base?: base.Base;
}

export interface GetPublishedTriggerDetailsResponse {
  data: Array<TriggerPublishInfo>;
  total: Int64;
  code: Int64;
  msg: string;
  base_resp: base.BaseResp;
}

export interface GetTriggerRequest {
  space_id: string;
  project_id: string;
  workflow_id: string;
  /** 本期傳遞DEBUG_PRESET */
  set_type: TriggerSetType;
  project_version?: string;
  Base?: base.Base;
}

export interface GetTriggerResponse {
  data: TriggerInfo;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

/** 觸發器推送，trigger平臺 spi 接口 */
export interface Header {
  /** 業務ID，如Apaas，bot_platform */
  BizID?: string;
  /** 空間名稱，如Bytedance,bot platform中的space id\下游ID */
  Space?: string;
  /** 空間下的某個模塊，如bot platform中的bot id */
  Module?: string;
}

export interface ListPublishedTriggersRequest {
  space_id: string;
  project_id: string;
  /** 全部觸發器：ONLINE，系統觸發器：ONLINE_PRESET，用戶觸發器：ONLINE_USERSET */
  set_type?: TriggerSetType;
  /** 定時，事件 */
  app_type?: AppType;
  /** 渠道ID */
  connector_id?: string;
  /** 搜索 */
  query?: string;
  page_size?: Int64;
  page_num?: Int64;
  Base?: base.Base;
}

export interface ListPublishedTriggersResponse {
  data: Array<TriggerPublishInfo>;
  total: Int64;
  code: Int64;
  msg: string;
  base_resp: base.BaseResp;
}

export interface ListTriggerAppEventsRequest {
  space_id: string;
  project_id: string;
  /** 應用類型 */
  app_type?: AppType;
  Base?: base.Base;
}

export interface ListTriggerAppEventsResponse {
  data?: TriggerAppEventsData;
  code: Int64;
  msg: string;
  base_resp: base.BaseResp;
}

export interface ListTriggersRequest {
  space_id: string;
  project_id: string;
  /** 渠道ID */
  connector_id?: string;
  workflow_id?: string;
  /** 本期傳遞USERSET */
  set_type?: TriggerSetType;
  trigger_id?: string;
  /** 訂閱者 */
  creator?: string;
  page_size?: Int64;
  page_num?: Int64;
  Base?: base.Base;
}

export interface ListTriggersResponse {
  data?: TriggersData;
  code: Int64;
  msg: string;
  BaseResp?: base.BaseResp;
}

export interface OperatePublishedTriggerRequest {
  space_id: string;
  project_id: string;
  /** 渠道id */
  connector_id: string;
  trigger_id?: string;
  status?: TriggerStatus;
  base?: base.Base;
}

export interface OperatePublishedTriggerResponse {
  code: Int64;
  msg: string;
  base_resp: base.BaseResp;
}

export interface SaveTriggerRequest {
  space_id: string;
  project_id: string;
  /** 觸發器id */
  trigger_id?: string;
  /** 渠道id */
  connector_id?: string;
  /** 觸發器名字 */
  name?: string;
  /** 觸發器標識 */
  event_id: string;
  /** 觸發器配置 */
  config: string;
  /** 觸發wf的參數 */
  payload: string;
  workflow_id: string;
  /** 本期節點CRONJOB */
  trigger_type?: string;
  status?: TriggerStatus;
  set_type?: TriggerSetType;
  project_version?: Int64;
  /** 訂閱者 */
  creator?: string;
  /** workflow_id + node_id || 草稿態 */
  source_sub_key?: string;
  Base?: base.Base;
}

export interface SaveTriggerResponse {
  trigger_id: string;
  code: Int64;
  msg: string;
  base_resp: base.BaseResp;
}

export interface TestRunData {
  workflow_id?: string;
  execute_id?: string;
  session_id?: string;
}

export interface TestRunTriggerRequest {
  space_id: string;
  project_id: string;
  trigger_id: string;
  Base?: base.Base;
}

export interface TestRunTriggerResponse {
  data: TestRunData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface TriggerApp {
  app_id?: string;
  name?: string;
  description?: string;
  icon?: string;
  events?: Array<TriggerEvent>;
  /** CRONJOB、EVENT */
  app_type?: string;
}

export interface TriggerAppEventsData {
  trigger_apps: Array<TriggerApp>;
  total: Int64;
}

export interface TriggerEvent {
  id?: string;
  name?: string;
  description?: string;
  input_schema?: string;
}

export interface TriggerInfo {
  trigger_id?: string;
  user_id?: string;
  connector_id?: Int64;
  name?: string;
  event_id?: string;
  event_input_schema?: string;
  config?: string;
  payload?: string;
  workflow_id?: Int64;
  create_time?: Int64;
  status?: TriggerStatus;
}

export interface TriggerPublishInfo {
  /** node id ，source_trigger_id */
  source_id?: string;
  name?: string;
  app_type?: AppType;
  /** 配置 */
  config?: string;
  connector_id?: Array<string>;
  /** 全部觸發器：ONLINE，系統觸發器：ONLINE_PRESET，用戶觸發器：ONLINE_USERSET */
  set_type?: TriggerSetType;
  /** detail 接口返回
下次觸發時間，秒級時間戳 */
  next_trigger_time?: Int64;
  /** 訂閱者 */
  creator?: string;
  /** project version , bot version */
  version?: string;
  /** 觸發器id */
  trigger_id?: string;
  /** 觸發器狀態 */
  status?: TriggerStatus;
  /** 執行狀態 */
  execut_status?: ExecutStatus;
}

export interface TriggersData {
  trigger_list?: Array<TriggerInfo>;
  total?: Int64;
}
/* eslint-enable */
