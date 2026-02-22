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

export interface DuplicateTemplateData {
  /** 複製後的實體ID，如果複製的是智能體模板，對應複製後的智能體ID */
  entity_id?: string;
  /** 枚舉類型，目前只有 agent（智能體） */
  entity_type?: string;
}

export interface DuplicateTemplateRequest {
  /** 模板ID（目前僅支持複製智能體） */
  template_id?: string;
  /** 工作空間ID（預期將模板複製該空間） */
  workspace_id?: string;
  /** 複製後的實體名稱（對於複製智能體來說，未指定則默認用複製的智能體的名稱） */
  name?: string;
}

export interface DuplicateTemplateResponse {
  code?: number;
  msg?: string;
  data?: DuplicateTemplateData;
}

export interface ListCategoryData {
  /** 分類 */
  items?: Array<ProductCategory>;
  /** 分頁: 是否還有更多 */
  has_more?: boolean;
}

export interface ListCategoryRequest {
  /** 實體類型 */
  entity_type?: string;
  /** 分頁: 頁碼 */
  page_num?: number;
  /** 分頁: 每頁數量 */
  page_size?: number;
}

export interface ListCategoryResponse {
  code?: number;
  msg?: string;
  data?: ListCategoryData;
}

export interface ListPluginData {
  /** 插件 */
  items?: Array<ProductPluginInfo>;
  /** 分頁: 是否還有更多 */
  has_more?: boolean;
}

export interface ListPluginRequest {
  /** 關鍵詞 */
  keyword?: string;
  /** 是否官方 */
  is_official?: boolean;
  /** 分類 ID */
  category_id?: string;
  /** 分頁: 頁碼 */
  page_num?: number;
  /** 分頁: 每頁數量 */
  page_size?: number;
  /** 排序: 相關性、最受歡迎、最近發佈 */
  sort_type?: string;
}

export interface ListPluginResponse {
  code?: number;
  msg?: string;
  data?: ListPluginData;
}

/** 插件特定信息 */
export interface PluginInfo {
  /** 插件描述 */
  description?: string;
  /** 工具總個數 */
  total_tools_count?: number;
  /** 收藏量 */
  favorite_count?: number;
  /** 熱度 */
  heat?: number;
  /** 成功率 */
  success_rate?: number;
  /** 執行時間（單位：毫秒） */
  avg_exec_duration_ms?: number;
  /** 智能體數據(數倉維護的數據) */
  bots_use_count?: Int64;
  /** 相關智能體(商店維護的數據) */
  associated_bots_use_count?: Int64;
  /** 調用量 */
  call_count?: Int64;
}

/** 商品分類信息 */
export interface ProductCategory {
  /** 分類 ID */
  id?: string;
  /** 分類名稱 */
  name?: string;
}

/** 商品元信息 */
export interface ProductMetainfo {
  /** 商品 ID */
  product_id?: string;
  /** 實體 ID (比如是插件 id) */
  entity_id?: string;
  /** 實體版本 */
  entity_version?: string;
  /** 實體類型 */
  entity_type?: string;
  /** 商品名稱 */
  name?: string;
  /** 商品描述 */
  description?: string;
  /** 商家信息 */
  user_info?: ProductUserInfo;
  /** 商品分類 */
  category?: ProductCategory;
  /** 商品圖標 URL */
  icon_url?: string;
  /** 商品上架時間 */
  listed_at?: Int64;
  /** 商品付費類型 */
  paid_type?: string;
  /** 商品是否官方 */
  is_official?: boolean;
  /** 商店商品鏈接 */
  product_url?: string;
}

export interface ProductPluginInfo {
  /** 商品元信息 */
  metainfo?: ProductMetainfo;
  /** 插件特定信息 */
  plugin_info?: PluginInfo;
}

export interface ProductUserInfo {
  user_id?: Int64;
  user_name?: string;
  nick_name?: string;
  avatar_url?: string;
}
/* eslint-enable */
