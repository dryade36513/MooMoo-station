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

export enum CozeAccountType {
  /** 未知 */
  Unknown = 0,
  /** 組織賬號 */
  Organization = 1,
  /** 個人賬號 */
  Personal = 2,
}

export enum FollowType {
  /** 無關係 */
  Unknown = 0,
  /** 關注 */
  Followee = 1,
  /** 粉絲 */
  Follower = 2,
  /** 互相關注 */
  MutualFollow = 3,
}

export enum UserRole {
  Unknown = 0,
  /** 普通版 */
  Normal = 1,
  /** 專業版主賬號 */
  ProfessionalRootUser = 2,
  /** 專業版子賬號 */
  ProfessionalBasicAccount = 3,
}

export interface Price {
  /** 金額 */
  amount?: string;
  /** 幣種，如USD、CNY */
  currency?: string;
  /** 小數位數 */
  decimal_num?: number;
}
/* eslint-enable */
