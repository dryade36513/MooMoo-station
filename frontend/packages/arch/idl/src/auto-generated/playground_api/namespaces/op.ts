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

/** 運營後臺idl */
export interface OpGetUserInfoRequest {
  user_id?: string;
}

export interface OpGetUserInfoResponse {
  /** 用戶信息 */
  user_info?: OpUserInfo;
}

export interface OpUserInfo {
  /** 用戶基本信息 */
  basic_info?: UserbasicInfo;
  /** 付費信息 */
  payment_info?: UserPaymentInfo;
  /** 專業版信息 */
  professional_info?: UserProfessionalInfo;
}

export interface UserbasicInfo {
  user_id?: string;
  /** 用戶名 */
  user_name?: string;
  /** 郵箱 */
  email?: string;
  /** 用戶類型  內部用戶/外部用戶 */
  user_type?: string;
  /** 註冊時間 */
  registration_time?: string;
}

/** 用戶普通版付費信息 */
export interface UserPaymentInfo {
  /** 是否訂閱 */
  is_in_subscribe?: string;
}

/** 用戶專業版信息 */
export interface UserProfessionalInfo {
  /** 是否專業版用戶 */
  is_professional?: string;
  /** 火山ID */
  volcano_openId?: string;
}
/* eslint-enable */
