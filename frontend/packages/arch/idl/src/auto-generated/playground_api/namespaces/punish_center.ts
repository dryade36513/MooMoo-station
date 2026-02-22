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

export enum CozePunishTaskStatus {
  Success = 0,
  Fail = 1,
}

export interface CozePunishRequest {
  /** 處罰措施id，通過這個id來選擇執行哪個處罰 */
  PunishMeasureID: Int64;
  /** 處罰對象id列表 */
  ObjectIDs: Array<string>;
  /** 處罰人uid */
  OperatorUID?: Int64;
  /** 處罰人郵箱 */
  OperatorEmail?: string;
  /** 處罰源 */
  Source?: string;
  /** 處罰持續時間 */
  Duration?: Int64;
  /** 處罰原因 */
  Remark?: string;
}

export interface CozePunishResponse {
  /** 處罰系統無法感知和校驗處罰對象id，需要接入方返回處罰結果
key:對象id；value:處罰結果 */
  PunishResultMap: Record<string, CozePunishTaskResult>;
}

export interface CozePunishTaskResult {
  status: CozePunishTaskStatus;
}

export interface CozeUnPunishRequest {
  PunishMeasureID: Int64;
  ObjectIDs: Array<string>;
  OperatorUID?: Int64;
  OperatorEmail?: string;
  Source?: string;
  Remark?: string;
}

export interface CozeUnPunishResponse {
  UnPunishResultMap: Record<string, CozePunishTaskResult>;
}
/* eslint-enable */
