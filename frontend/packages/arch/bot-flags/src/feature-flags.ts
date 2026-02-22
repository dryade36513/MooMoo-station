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

/** ************************************************* */
/** This file is auto generate by `rush flags` */
/** Please don't update manually.                   */
/** ************************************************* */

/* eslint-disable @typescript-eslint/naming-convention */
export interface FEATURE_FLAGS extends Record<string, boolean> {
  /**
   *
   * bot.fg.test.1
   *
   * Creator: ** wangfocheng **
   *
   * Create at 2024-02-20T16:35:06+08:00
   *
   * Owner: wangfocheng, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.arch.bot.fg.test.1': boolean;

  /**
   *
   * chrome ext sdk
   *
   * Creator: ** wenming.2020 **
   *
   * Create at 2024-01-19T17:57:37+08:00
   *
   * Owner: wenming.2020, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.arch.chrome_ext_sdk': boolean;

  /**
   *
   * control console feature of logger in production
   *
   * Creator: ** liukaizhan.038 **
   *
   * Create at 2024-03-04T20:42:56+08:00
   *
   * Owner: liukaizhan.038, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.arch.logger_console': boolean;

  /**
   *
   * workflow multiple batch variables
   *
   * Creator: ** fanwenjie.fe **
   *
   * Create at 2024-01-17T21:19:37+08:00
   *
   * Owner: liuyangxing, xukai.luics, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.arch.multiple_batch_variables': boolean;

  /**
   *
   *  調整 useApp 內獲取 search query 參數 hook
   *
   * Creator: ** zhanglinling.quan **
   *
   * Create at 2024-07-04T10:59:09+08:00
   *
   * Owner: zhanglinling.quan, fanwenjie.fe, zengxiaohui, jiangxujin
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.arch.search_query_hook': boolean;

  /**
   *
   * coze-design 使用暗黑模式入口
   *
   * Creator: ** huangjian **
   *
   * Create at 2024-07-17T11:15:18+08:00
   *
   * Owner: huangjian, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.arch.theme.toggle': boolean;

  /**
   *
   * workflow彈窗封裝成獨立pkg
   *
   * Creator: ** lvxinsheng **
   *
   * Create at 2024-07-08T15:18:35+08:00
   *
   * Owner: lvxinsheng, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.add_modal_move': boolean;

  /**
   *
   * workflow畫布詳情接口切換
   *
   * Creator: ** jiwangjian **
   *
   * Create at 2024-08-07T14:11:12+08:00
   *
   * Owner: jiwangjian, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.api_canvas': boolean;

  /**
   *
   * workflow api 遷移
   *
   * Creator: ** lvxinsheng **
   *
   * Create at 2024-05-14T15:01:33+08:00
   *
   * Owner: lvxinsheng, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.api_refactor': boolean;

  /**
   *
   * workflow audio video nodes
   *
   * Creator: ** liuyangxing **
   *
   * Create at 2025-05-19T16:29:02+08:00
   *
   * Owner: liuyangxing, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.audio_video_nodes': boolean;

  /**
   *
   * Workflow batch node next
   *
   * Creator: ** liuyangxing **
   *
   * Create at 2025-03-28T12:02:08+08:00
   *
   * Owner: liuyangxing, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.batch_node_v2': boolean;

  /**
   *
   * blockwise_wf
   *
   * Creator: ** zengxiaohui **
   *
   * Create at 2024-06-24T18:05:21+08:00
   *
   * Owner: zengxiaohui, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.blockwise_wf': boolean;

  /**
   *
   * 畫板節點遷移 V2 表單協議
   *
   * Creator: ** gaojianyuan **
   *
   * Create at 2025-03-13T16:42:35+08:00
   *
   * Owner: gaojianyuan, fanwenjie.fe, fengzilong, zengxiaohui
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.canvas_node_v2': boolean;

  /**
   *
   * workflow chat history
   *
   * Creator: ** lvwentao **
   *
   * Create at 2024-05-23T11:13:34+08:00
   *
   * Owner: lvwentao, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.chat_history': boolean;

  /**
   *
   * workflow chat history round setting
   *
   * Creator: ** zengxiaohui **
   *
   * Create at 2025-01-08T17:54:58+08:00
   *
   * Owner: zengxiaohui, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.chat_history_round': boolean;

  /**
   *
   * code節點遷移新版本節點引擎
   *
   * Creator: ** zhangyi.hanchayi **
   *
   * Create at 2025-03-18T17:56:13+08:00
   *
   * Owner: zhangyi.hanchayi, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.code_v2': boolean;

  /**
   *
   * 流程condition節點forminit時，默認帶上right字段邏輯優化
   *
   * Creator: ** liji.leej **
   *
   * Create at 2025-01-16T11:14:44+08:00
   *
   * Owner: liji.leej, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.condition_init_right': boolean;

  /**
   *
   * condition node v2
   *
   * Creator: ** liji.leej **
   *
   * Create at 2025-04-01T14:24:49+08:00
   *
   * Owner: liji.leej, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.condition_node_v2': boolean;

  /**
   *
   * 會話管理批量刪除
   *
   * Creator: ** jiangxujin **
   *
   * Create at 2025-04-24T10:54:08+08:00
   *
   * Owner: jiangxujin, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.conversation_batch_delete': boolean;

  /**
   *
   * 節點測試支持copilot生成參數
   *
   * Creator: ** zhangyi.hanchayi **
   *
   * Create at 2024-12-04T20:26:23+08:00
   *
   * Owner: zhangyi.hanchayi, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.copilot_generate': boolean;

  /**
   *
   * workflwo coze2.0 交互開關
   *
   * Creator: ** lvxinsheng **
   *
   * Create at 2024-09-18T17:10:28+08:00
   *
   * Owner: lvxinsheng, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.coze_v2': boolean;

  /**
   *
   * sql node migrate
   *
   * Creator: ** yangzihang.77 **
   *
   * Create at 2025-03-24T21:04:29+08:00
   *
   * Owner: yangzihang.77, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.database_v2': boolean;

  /**
   *
   * dataset search node migrate
   *
   * Creator: ** yangzihang.77 **
   *
   * Create at 2025-03-17T16:35:35+08:00
   *
   * Owner: yangzihang.77, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.dataset_search_v2': boolean;

  /**
   *
   * dataset node migrate
   *
   * Creator: ** yangzihang.77 **
   *
   * Create at 2025-03-05T14:43:41+08:00
   *
   * Owner: yangzihang.77, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.dataset_v2': boolean;

  /**
   *
   * - bot.automation.dataset_volcano
   *
   * Creator: ** yangzihang.77 **
   *
   * Create at 2025-04-10T15:53:47+08:00
   *
   * Owner: yangzihang.77, fanwenjie.fe, liuqinghua.tongtong
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.dataset_volcano': boolean;

  /**
   *
   * dataset write node
   *
   * Creator: ** yangzihang.77 **
   *
   * Create at 2024-10-21T19:51:14+08:00
   *
   * Owner: yangzihang.77, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.dataset_write': boolean;

  /**
   *
   * dependency tree
   *
   * Creator: ** chenjiawei.inizio **
   *
   * Create at 2025-04-08T16:00:09+08:00
   *
   * Owner: chenjiawei.inizio, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.dependency_tree': boolean;

  /**
   *
   * 當空間開啓 DEV 模式時,自動支持多人協作
   *
   * Creator: ** zhanglinling.quan **
   *
   * Create at 2024-06-28T14:10:02+08:00
   *
   * Owner: zhanglinling.quan, fanwenjie.fe, zengxiaohui, jiwangjian, jiangxujin
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.dev_auto_collaboration': boolean;

  /**
   *
   * 控制封裝和解封功能開關
   *
   * Creator: ** zhangyi.hanchayi **
   *
   * Create at 2024-10-25T10:21:02+08:00
   *
   * Owner: zhangyi.hanchayi, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.encapsulate': boolean;

  /**
   *
   * 結束節點 v2 表單
   *
   * Creator: ** zhangchaoyang.805 **
   *
   * Create at 2025-03-13T14:12:15+08:00
   *
   * Owner: zhangchaoyang.805, fanwenjie.fe, zengxiaohui, fengzilong
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.end_node_v2': boolean;

  /**
   *
   * end節點value schema 錯誤
   *
   * Creator: ** liji.leej **
   *
   * Create at 2025-02-18T10:48:21+08:00
   *
   * Owner: liji.leej, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.end_schema_format': boolean;

  /**
   *
   * 工作流異常信息透出需求灰度
   *
   * Creator: ** jiwangjian **
   *
   * Create at 2024-05-10T20:05:57+08:00
   *
   * Owner: jiwangjian, fanwenjie.fe, lixubai
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.error_info': boolean;

  /**
   *
   * 文件支持輸入
   *
   * Creator: ** zhangyi.hanchayi **
   *
   * Create at 2025-03-09T23:35:01+08:00
   *
   * Owner: zhangyi.hanchayi, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.file_enable_input': boolean;

  /**
   *
   * 下線變量節點，True 是變量節點禁用，節點表單全部只讀
   *
   * Creator: ** liji.leej **
   *
   * Create at 2024-12-16T12:46:48+08:00
   *
   * Owner: liji.leej, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.forbid_variable_node': boolean;

  /**
   *
   * use global state引發的渲染卡頓
   *
   * Creator: ** zhangyi.hanchayi **
   *
   * Create at 2025-01-15T12:03:07+08:00
   *
   * Owner: zhangyi.hanchayi, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.global_state_render': boolean;

  /**
   *
   * 全局變量數據變化後需要觸發一次節點表單校驗
   *
   * Creator: ** liji.leej **
   *
   * Create at 2025-04-15T11:47:37+08:00
   *
   * Owner: liji.leej, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.global_variable_change_validate': boolean;

  /**
   *
   * workflow http node
   *
   * Creator: ** yangzihang.77 **
   *
   * Create at 2025-01-16T21:14:23+08:00
   *
   * Owner: yangzihang.77, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.http_node': boolean;

  /**
   *
   * 圖像生成節點組件化開關
   *
   * Creator: ** zhuxiaowei.711 **
   *
   * Create at 2025-03-07T14:38:41+08:00
   *
   * Owner: zhuxiaowei.711, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.image_generate_node_componentization': boolean;

  /**
   *
   * 圖像生成 圖像參考組件化開關
   *
   * Creator: ** zhuxiaowei.711 **
   *
   * Create at 2025-03-19T16:06:37+08:00
   *
   * Owner: zhuxiaowei.711, fanwenjie.fe, zengxiaohui, yangzihang.77
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.image_generate_node_v2': boolean;

  /**
   *
   * 是否啓用 Imageflow 能力
   *
   * Creator: ** zhanglinling.quan **
   *
   * Create at 2024-04-25T11:42:01+08:00
   *
   * Owner: zhanglinling.quan, fanwenjie.fe, zhuxiaowei.711, lvwentao, zengxiaohui
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.imageflow': boolean;

  /**
   *
   * coze2.0圖像流適配graph
   *
   * Creator: ** zhuxiaowei.711 **
   *
   * Create at 2024-10-24T11:55:57+08:00
   *
   * Owner: zhuxiaowei.711, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.imageflow_adapt_graph': boolean;

  /**
   *
   * 輸入節點遷移 v2 表單引擎
   *
   * Creator: ** zhangchaoyang.805 **
   *
   * Create at 2025-03-12T11:56:50+08:00
   *
   * Owner: zhangchaoyang.805, fanwenjie.fe, zengxiaohui, fengzilong
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.input_node_v2': boolean;

  /**
   *
   * object literal
   *
   * Creator: ** zhangyi.hanchayi **
   *
   * Create at 2025-02-26T10:57:49+08:00
   *
   * Owner: zhangyi.hanchayi, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.input_object_literal': boolean;

  /**
   *
   * integrate flow lang sdk
   *
   * Creator: ** fengzilong **
   *
   * Create at 2024-08-26T19:41:15+08:00
   *
   * Owner: fengzilong, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.integrate_flowlangsdk': boolean;

  /**
   *
   * intent node mode switcher
   *
   * Creator: ** zengxiaohui **
   *
   * Create at 2025-02-17T13:23:30+08:00
   *
   * Owner: zengxiaohui, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.intent_mode': boolean;

  /**
   *
   * intent node v2
   *
   * Creator: ** liji.leej **
   *
   * Create at 2025-04-01T14:25:30+08:00
   *
   * Owner: liji.leej, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.intent_node_v2': boolean;

  /**
   *
   * json 序列化 反序列化節點
   *
   * Creator: ** yukaige **
   *
   * Create at 2025-04-21T11:53:55+08:00
   *
   * Owner: yukaige, qiangshunliang
   *
   * SCM: unknown; Path: /
   *
   * Status: 2
   */
  'bot.automation.json_parser_stringify': boolean;

  /**
   *
   * 資源庫內全局變量選擇優化
   *
   * Creator: ** liji.leej **
   *
   * Create at 2025-03-20T19:46:40+08:00
   *
   * Owner: liji.leej, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.library_global_variable_cache': boolean;

  /**
   *
   * workflow llm  cache
   *
   * Creator: ** zhangyi.hanchayi **
   *
   * Create at 2025-05-07T15:51:57+08:00
   *
   * Owner: zhangyi.hanchayi, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.llm_cache': boolean;

  /**
   *
   * llm-content-skill
   *
   * Creator: ** zhangyi.hanchayi **
   *
   * Create at 2024-12-10T22:06:24+08:00
   *
   * Owner: zhangyi.hanchayi, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.llm_content_skill': boolean;

  /**
   *
   * llm cot add reasoning_content
   *
   * Creator: ** zhangyi.hanchayi **
   *
   * Create at 2025-02-14T16:17:56+08:00
   *
   * Owner: zhangyi.hanchayi, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.llm_cot': boolean;

  /**
   *
   * llm function call
   *
   * Creator: ** zhangyi.hanchayi **
   *
   * Create at 2025-02-26T08:43:45+08:00
   *
   * Owner: zhangyi.hanchayi, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.llm_fc': boolean;

  /**
   *
   * llm 模型緩存問題
   *
   * Creator: ** zhangyi.hanchayi **
   *
   * Create at 2024-12-16T10:40:21+08:00
   *
   * Owner: zhangyi.hanchayi, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.llm_models': boolean;

  /**
   *
   * workflow是否開啓llm節點支持object輸出
   *
   * Creator: ** lvxinsheng **
   *
   * Create at 2024-07-09T11:13:12+08:00
   *
   * Owner: lvxinsheng, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.llm_output_obj': boolean;

  /**
   *
   * LLM節點系統提示詞支持插入技能
   *
   * Creator: ** liji.leej **
   *
   * Create at 2025-02-13T15:12:43+08:00
   *
   * Owner: liji.leej, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.llm_prompt_skills': boolean;

  /**
   *
   * workflow LLM節點開啓技能配置
   *
   * Creator: ** lvxinsheng **
   *
   * Create at 2024-11-15T16:52:39+08:00
   *
   * Owner: lvxinsheng, fanwenjie.fe, zhangyi.hanchayi
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.llm_skill': boolean;

  /**
   *
   * 訂正llm節點需求灰度
   *
   * Creator: ** yangzihang.77 **
   *
   * Create at 2024-10-16T16:38:02+08:00
   *
   * Owner: yangzihang.77, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.llm_version': boolean;

  /**
   *
   * llm 視覺理解
   *
   * Creator: ** zhangyi.hanchayi **
   *
   * Create at 2025-02-26T07:15:37+08:00
   *
   * Owner: zhangyi.hanchayi, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.llm_vision': boolean;

  /**
   *
   * workflow loop node v2
   *
   * Creator: ** liuyangxing **
   *
   * Create at 2025-03-27T14:56:53+08:00
   *
   * Owner: liuyangxing, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.loop_node_v2': boolean;

  /**
   *
   * long term memory optimization
   *
   * Creator: ** zengxiaohui **
   *
   * Create at 2025-04-08T14:53:57+08:00
   *
   * Owner: zengxiaohui, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.ltm_enhance': boolean;

  /**
   *
   * long term memory node
   *
   * Creator: ** zengxiaohui **
   *
   * Create at 2024-08-21T20:25:33+08:00
   *
   * Owner: zengxiaohui, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.ltm_node': boolean;

  /**
   *
   * workflow ltm node v2
   *
   * Creator: ** zengxiaohui **
   *
   * Create at 2025-03-11T15:10:32+08:00
   *
   * Owner: zengxiaohui, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.ltm_node_v2': boolean;

  /**
   *
   * chatflow message auto write
   *
   * Creator: ** zengxiaohui **
   *
   * Create at 2025-04-15T13:31:02+08:00
   *
   * Owner: zengxiaohui, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.message_auto_write': boolean;

  /**
   *
   * workflow chat related nodes
   *
   * Creator: ** zengxiaohui **
   *
   * Create at 2025-03-31T23:19:06+08:00
   *
   * Owner: zengxiaohui, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.message_nodes': boolean;

  /**
   *
   * 模型管理升級
   *
   * Creator: ** zhangyi.hanchayi **
   *
   * Create at 2024-12-16T16:53:52+08:00
   *
   * Owner: zhangyi.hanchayi, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.models_v2': boolean;

  /**
   *
   * 控制是否開啓condition多條件分支
   *
   * Creator: ** lvxinsheng **
   *
   * Create at 2024-04-29T10:55:19+08:00
   *
   * Owner: lvxinsheng, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.multi_condition': boolean;

  /**
   *
   * workflow畫布開啓新包
   *
   * Creator: ** lvxinsheng **
   *
   * Create at 2024-05-06T17:36:37+08:00
   *
   * Owner: lvxinsheng, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.new_playground': boolean;

  /**
   *
   * 控制使用新交互的變量選擇
   *
   * Creator: ** lvxinsheng **
   *
   * Create at 2024-06-04T16:09:48+08:00
   *
   * Owner: lvxinsheng, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.new_var_select': boolean;

  /**
   *
   * workflow new shortcuts
   *
   * Creator: ** liuyangxing **
   *
   * Create at 2025-03-19T19:41:40+08:00
   *
   * Owner: liuyangxing, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.newShortcut': boolean;

  /**
   *
   * nl2flow 調試工具,不要上到線上
   *
   * Creator: ** zhangchaoyang.805 **
   *
   * Create at 2025-02-26T11:36:17+08:00
   *
   * Owner: zhangchaoyang.805, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.nl2flow_devtools': boolean;

  /**
   *
   * 執行日誌超長展示省略號
   *
   * Creator: ** liji.leej **
   *
   * Create at 2025-02-13T14:15:30+08:00
   *
   * Owner: liji.leej, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.node_log_ellipsis': boolean;

  /**
   *
   * 是否啓用流程節點運行結果接口優化
   *
   * Creator: ** liji.leej **
   *
   * Create at 2025-01-14T15:53:47+08:00
   *
   * Owner: liji.leej, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.node_log_optimization': boolean;

  /**
   *
   * 節點選擇面板露出更多插件
   *
   * Creator: ** zhangchaoyang.805 **
   *
   * Create at 2025-02-13T11:12:20+08:00
   *
   * Owner: zhangchaoyang.805, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.node_panel_more_nodes': boolean;

  /**
   *
   * llm node refactored based on nodev2
   *
   * Creator: ** heyuan.cn **
   *
   * Create at 2024-10-11T15:18:52+08:00
   *
   * Owner: heyuan.cn, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.nodev2': boolean;

  /**
   *
   * 單草稿協作模式開關···
   *
   * Creator: ** zhanglinling.quan **
   *
   * Create at 2024-07-16T16:51:48+08:00
   *
   * Owner: zhanglinling.quan, fanwenjie.fe, zengxiaohui, jiangxujin
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.one_draft_cooperation': boolean;

  /**
   *
   * 輸出節點遷移 v2 表單
   *
   * Creator: ** zhangchaoyang.805 **
   *
   * Create at 2025-03-14T16:03:44+08:00
   *
   * Owner: zhangchaoyang.805, fanwenjie.fe, zengxiaohui, fengzilong
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.output_node_v2': boolean;

  /**
   *
   * workflow output node support voice & history settings
   *
   * Creator: ** liuyangxing **
   *
   * Create at 2025-04-24T19:35:08+08:00
   *
   * Owner: liuyangxing, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.output_settings': boolean;

  /**
   *
   * wf plugin node v2 version
   *
   * Creator: ** zengxiaohui **
   *
   * Create at 2025-03-06T21:13:44+08:00
   *
   * Owner: zengxiaohui, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.plugin_node_v2': boolean;

  /**
   *
   * workflow plugin oauth
   *
   * Creator: ** liuyangxing **
   *
   * Create at 2025-04-17T19:12:43+08:00
   *
   * Owner: liuyangxing, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.plugin_oauth': boolean;

  /**
   *
   * project IDE 多窗口需求
   *
   * Creator: ** yangzihang.77 **
   *
   * Create at 2025-03-13T20:19:39+08:00
   *
   * Owner: yangzihang.77, fanwenjie.fe, chenjiawei.inizio
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 0
   */
  'bot.automation.project_multi_tab': boolean;

  /**
   *
   * workflow question node
   *
   * Creator: ** jiwangjian **
   *
   * Create at 2024-06-25T11:08:41+08:00
   *
   * Owner: jiwangjian, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.question_node': boolean;

  /**
   *
   * question node 2.0
   *
   * Creator: ** yangzihang.77 **
   *
   * Create at 2025-02-26T16:30:23+08:00
   *
   * Owner: yangzihang.77, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.question_v2': boolean;

  /**
   *
   * refactor workflow header
   *
   * Creator: ** chenjiawei.inizio **
   *
   * Create at 2025-04-08T16:01:56+08:00
   *
   * Owner: chenjiawei.inizio, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.refactor_workflow_header': boolean;

  /**
   *
   * replace json editor
   *
   * Creator: ** fengzilong **
   *
   * Create at 2025-03-31T13:16:50+08:00
   *
   * Owner: fengzilong, fanwenjie.fe, liji.leej
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.replace_import_json_editor': boolean;

  /**
   *
   * setting on error v2
   *
   * Creator: ** zhangyi.hanchayi **
   *
   * Create at 2025-03-19T19:25:22+08:00
   *
   * Owner: zhangyi.hanchayi, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.setting_on_error_v2': boolean;

  /**
   *
   * workflow shortcuts
   *
   * Creator: ** liuyangxing **
   *
   * Create at 2025-02-27T19:22:23+08:00
   *
   * Owner: liuyangxing, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.shortcut': boolean;

  /**
   *
   * whether show code node in douyin agent
   *
   * Creator: ** zengxiaohui **
   *
   * Create at 2025-02-08T18:42:47+08:00
   *
   * Owner: zengxiaohui, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.show_douyin_code': boolean;

  /**
   *
   * whether to show skill in douyin-editor
   *
   * Creator: ** zengxiaohui **
   *
   * Create at 2025-02-08T18:18:21+08:00
   *
   * Owner: zengxiaohui, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.show_skills': boolean;

  /**
   *
   * 側邊欄支持拖動
   *
   * Creator: ** zhangyi.hanchayi **
   *
   * Create at 2025-01-07T18:09:59+08:00
   *
   * Owner: zhangyi.hanchayi, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.sidebar_resize': boolean;

  /**
   *
   * 開始節點遷移 v2 表單協議
   *
   * Creator: ** zhangchaoyang.805 **
   *
   * Create at 2025-03-10T11:05:29+08:00
   *
   * Owner: zhangchaoyang.805, fanwenjie.fe, zengxiaohui, gaojianyuan, fengzilong
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.start_node_v2': boolean;

  /**
   *
   * 流程開始節點支持音色字段，true 時開始節點能配置音色類型字段
   *
   * Creator: ** liji.leej **
   *
   * Create at 2024-12-10T11:49:20+08:00
   *
   * Owner: liji.leej, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.start_support_voice': boolean;

  /**
   *
   * 子流程支持異步
   *
   * Creator: ** zhangyi.hanchayi **
   *
   * Create at 2025-04-23T07:36:12+08:00
   *
   * Owner: zhangyi.hanchayi, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.subflow_async': boolean;

  /**
   *
   * subworkflow node v2 version
   *
   * Creator: ** zengxiaohui **
   *
   * Create at 2025-03-29T23:26:49+08:00
   *
   * Owner: zengxiaohui, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.subworkflow_node_v2': boolean;

  /**
   *
   * workflow test run json bigint display
   *
   * Creator: ** zhangyi.hanchayi **
   *
   * Create at 2025-02-17T15:02:57+08:00
   *
   * Owner: zhangyi.hanchayi, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.test_run_bigint': boolean;

  /**
   *
   * test run panel optimization
   *
   * Creator: ** liji.leej **
   *
   * Create at 2025-03-06T10:58:15+08:00
   *
   * Owner: liji.leej, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.test_run_panel_optimization': boolean;

  /**
   *
   * TestRun Test LLM Node
   *
   * Creator: ** jiangxujin **
   *
   * Create at 2025-04-18T11:10:20+08:00
   *
   * Owner: jiangxujin, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.test_run_test_llm': boolean;

  /**
   *
   * 新版testrun ai 生成
   *
   * Creator: ** jiangxujin **
   *
   * Create at 2025-03-11T20:08:56+08:00
   *
   * Owner: jiangxujin, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.testrun_ai_gen_v2': boolean;

  /**
   *
   * 觸發器 delete 節點 V2 表單協議
   *
   * Creator: ** gaojianyuan **
   *
   * Create at 2025-03-13T16:40:23+08:00
   *
   * Owner: gaojianyuan, fanwenjie.fe, fengzilong, zengxiaohui
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.trigger_delete_node_v2': boolean;

  /**
   *
   * 啓用 wf 觸發器
   *
   * Creator: ** gaojianyuan **
   *
   * Create at 2024-10-22T11:34:46+08:00
   *
   * Owner: gaojianyuan, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.trigger_is_open': boolean;

  /**
   *
   * 觸發器read 節點遷移 V2 表單協議
   *
   * Creator: ** gaojianyuan **
   *
   * Create at 2025-03-13T16:49:19+08:00
   *
   * Owner: gaojianyuan, fanwenjie.fe, fengzilong, zengxiaohui
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.trigger_read_node_v2': boolean;

  /**
   *
   * 觸發器 upsert 節點 V2 表單協議
   *
   * Creator: ** gaojianyuan **
   *
   * Create at 2025-03-13T16:39:19+08:00
   *
   * Owner: gaojianyuan, fanwenjie.fe, fengzilong, zengxiaohui
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.trigger_upsert_v2': boolean;

  /**
   *
   * workflow support undo redo
   *
   * Creator: ** zhangyi.hanchayi **
   *
   * Create at 2024-05-23T18:43:44+08:00
   *
   * Owner: zhangyi.hanchayi, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.undo_redo': boolean;

  /**
   *
   * 子流程使用新的詳情接口
   *
   * Creator: ** jiangxujin **
   *
   * Create at 2025-05-07T17:17:45+08:00
   *
   * Owner: jiangxujin, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.use_new_workflow_detail_api': boolean;

  /**
   *
   * 變量切換簡單類型還留有schema
   *
   * Creator: ** zhangyi.hanchayi **
   *
   * Create at 2025-04-28T11:04:44+08:00
   *
   * Owner: zhangyi.hanchayi, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.value_type_change': boolean;

  /**
   *
   * 新增變量聚合節點
   *
   * Creator: ** zhangyi.hanchayi **
   *
   * Create at 2024-11-14T16:53:18+08:00
   *
   * Owner: zhangyi.hanchayi, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.variable_merge': boolean;

  /**
   *
   * variable node v2
   *
   * Creator: ** yangzihang.77 **
   *
   * Create at 2025-04-25T17:15:43+08:00
   *
   * Owner: yangzihang.77, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.variable_v2': boolean;

  /**
   *
   * 工作流支持輸入複雜變量
   *
   * Creator: ** zhangchaoyang.805 **
   *
   * Create at 2025-01-03T10:56:21+08:00
   *
   * Owner: zhangchaoyang.805, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.wf_complex_literal': boolean;

  /**
   *
   * workflow plugin optimization
   *
   * Creator: ** zengxiaohui **
   *
   * Create at 2024-07-30T20:54:04+08:00
   *
   * Owner: zengxiaohui, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.wf_plugin_sync': boolean;

  /**
   *
   * WF 支持多環境在線
   *
   * Creator: ** zhanglinling.quan **
   *
   * Create at 2024-06-17T14:48:12+08:00
   *
   * Owner: zhanglinling.quan, fanwenjie.fe, zengxiaohui, jiwangjian, jiangxujin
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.wf_ppe_env': boolean;

  /**
   *
   * WF 多環境在線服務是否上線完畢
   *
   * Creator: ** zhanglinling.quan **
   *
   * Create at 2024-06-27T20:59:46+08:00
   *
   * Owner: zhanglinling.quan, fanwenjie.fe, zengxiaohui
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.wf_ppe_env_serve_ready': boolean;

  /**
   *
   * Workflow 開始節點默認值組件使用 literal-value-input
   *
   * Creator: ** zhangchaoyang.805 **
   *
   * Create at 2025-01-08T14:52:06+08:00
   *
   * Owner: zhangchaoyang.805, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.wf_start_use_literal_input': boolean;

  /**
   *
   * new workflow text-process based on new form engine
   *
   * Creator: ** zengxiaohui **
   *
   * Create at 2025-02-27T15:24:07+08:00
   *
   * Owner: zengxiaohui, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.wf_text_node_new': boolean;

  /**
   *
   * workflow template v2
   *
   * Creator: ** yangzihang.77 **
   *
   * Create at 2024-11-07T01:36:19+08:00
   *
   * Owner: yangzihang.77, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.wk_template_v2': boolean;

  /**
   *
   * 新增crud節點
   *
   * Creator: ** zhuxiaowei.711 **
   *
   * Create at 2025-02-20T12:44:19+08:00
   *
   * Owner: zhuxiaowei.711, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.workflow_crud_nodes': boolean;

  /**
   *
   * 獲取子流程詳情使用新接口
   *
   * Creator: ** zhangchaoyang.805 **
   *
   * Create at 2025-01-17T14:11:33+08:00
   *
   * Owner: zhangchaoyang.805, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.workflow_detail_info': boolean;

  /**
   *
   * 工作流模板調整爲示例
   *
   * Creator: ** zhangchaoyang.805 **
   *
   * Create at 2024-12-06T17:12:51+08:00
   *
   * Owner: zhangchaoyang.805, fanwenjie.fe, yangzihang.77, zengxiaohui
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.automation.workflow_example': boolean;

  /**
   *
   * Workflow Store 功能
   *
   * Creator: ** zhanglinling.quan **
   *
   * Create at 2024-05-14T20:40:51+08:00
   *
   * Owner: zhanglinling.quan, fanwenjie.fe, shicaiqiang, gaoding.devingao
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.automation.workflowStore': boolean;

  /**
   *
   * agent app開關
   *
   * Creator: ** shanrenkai **
   *
   * Create at 2024-04-27T10:49:48+08:00
   *
   * Owner: shanrenkai
   *
   * SCM: unknown; Path: /
   *
   * Status: 1
   */
  'bot.builder.agent_app': boolean;

  /**
   *
   * card builder x agent app 開關
   *
   * Creator: ** shanrenkai **
   *
   * Create at 2024-05-13T17:00:20+08:00
   *
   * Owner: shanrenkai, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.builder.agent_app_card_builder': boolean;

  /**
   *
   * 調研助手支持md開關
   *
   * Creator: ** shanrenkai **
   *
   * Create at 2024-04-28T14:51:23+08:00
   *
   * Owner: shanrenkai, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.builder.agent_app_md_doc': boolean;

  /**
   *
   * agent app chat ui refactory
   *
   * Creator: ** gaoyuanhan.duty **
   *
   * Create at 2024-08-05T17:25:45+08:00
   *
   * Owner: gaoyuanhan.duty, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.builder.agent_chat_ui_upgrade': boolean;

  /**
   *
   * app builder entry
   *
   * Creator: ** yaoqiyu **
   *
   * Create at 2024-04-23T21:13:53+08:00
   *
   * Owner: yaoqiyu, fanwenjie.fe, yusha.icey, shanrenkai, aihao.a
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.builder.app_builder_entry': boolean;

  /**
   *
   * builder audio comp
   *
   * Creator: ** wuwenqi.depp **
   *
   * Create at 2024-06-12T20:23:27+08:00
   *
   * Owner: wuwenqi.depp, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.builder.audio': boolean;

  /**
   *
   * Widget entry at header
   *
   * Creator: ** wuwenqi.depp **
   *
   * Create at 2024-03-21T16:48:42+08:00
   *
   * Owner: wuwenqi.depp, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.builder.bot.builder.widget': boolean;

  /**
   *
   * UI Builder支持自定義組件能力
   *
   * Creator: ** chenyuliang.12138 **
   *
   * Create at 2025-02-20T14:32:54+08:00
   *
   * Owner: chenyuliang.12138, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.builder.custom_components': boolean;

  /**
   *
   * UI Builder 自定義組件開發入口
   *
   * Creator: ** chenyuliang.12138 **
   *
   * Create at 2025-04-03T12:03:17+08:00
   *
   * Owner: chenyuliang.12138, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.builder.dev_custom_components': boolean;

  /**
   *
   * AI Card NL2Card
   *
   * Creator: ** yusha.icey **
   *
   * Create at 2024-02-02T14:33:00+08:00
   *
   * Owner: yusha.icey, fanwenjie.fe, baihaihui, aihao.a, shanrenkai
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.builder.editor_copilot': boolean;

  /**
   *
   * form_comp
   *
   * Creator: ** fengkun **
   *
   * Create at 2024-07-09T20:15:27+08:00
   *
   * Owner: fengkun, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.builder.form_comp': boolean;

  /**
   *
   * miniApp in h5 keepalive
   *
   * Creator: ** fengkun **
   *
   * Create at 2025-03-07T11:08:46+08:00
   *
   * Owner: fengkun, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.builder.mp_keepalive': boolean;

  /**
   *
   * 論文大師引用跳轉
   *
   * Creator: ** chenyuliang.12138 **
   *
   * Create at 2024-06-06T11:31:56+08:00
   *
   * Owner: chenyuliang.12138, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.builder.paper_refer_jump': boolean;

  /**
   *
   * 論文大師翻譯功能開關
   *
   * Creator: ** chenyuliang.12138 **
   *
   * Create at 2024-06-04T14:49:45+08:00
   *
   * Owner: chenyuliang.12138, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.builder.paper_translate': boolean;

  /**
   *
   * 組件表單開啓平臺能力
   *
   * Creator: ** fengkun **
   *
   * Create at 2024-09-05T16:00:28+08:00
   *
   * Owner: fengkun, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.builder.platform_action': boolean;

  /**
   *
   * UI Builder crdt 自動優化開關
   *
   * Creator: ** shanrenkai **
   *
   * Create at 2025-02-08T15:32:35+08:00
   *
   * Owner: shanrenkai, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.builder.sandbox_crdt_optimize': boolean;

  /**
   *
   * 筆記大師顯隱控制
   *
   * Creator: ** chenyuliang.12138 **
   *
   * Create at 2024-07-10T12:25:24+08:00
   *
   * Owner: chenyuliang.12138, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.builder.show_agent_notes': boolean;

  /**
   *
   * 論文大師顯隱控制
   *
   * Creator: ** chenyuliang.12138 **
   *
   * Create at 2024-07-10T12:23:46+08:00
   *
   * Owner: chenyuliang.12138, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.builder.show_agent_paper': boolean;

  /**
   *
   * 長文寫作助手顯隱控制
   *
   * Creator: ** chenyuliang.12138 **
   *
   * Create at 2024-07-10T12:24:45+08:00
   *
   * Owner: chenyuliang.12138, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.builder.show_agent_survey': boolean;

  /**
   *
   * 長文寫作助手進 store 是否開啓
   *
   * Creator: ** chenyuliang.12138 **
   *
   * Create at 2024-07-01T14:44:33+08:00
   *
   * Owner: chenyuliang.12138, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 0
   */
  'bot.builder.survey_store': boolean;

  /**
   *
   * card thumb op
   *
   * Creator: ** wuwenqi.depp **
   *
   * Create at 2024-08-20T16:42:48+08:00
   *
   * Owner: wuwenqi.depp, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.builder.thumbop': boolean;

  /**
   *
   * bot builder => cici & store channel => video component
   *
   * Creator: ** wuwenqi.depp **
   *
   * Create at 2024-07-21T23:05:35+08:00
   *
   * Owner: wuwenqi.depp
   *
   * SCM: unknown; Path: /
   *
   * Status: 1
   */
  'bot.builder.video': boolean;

  /**
   *
   * 服務端生圖
   *
   * Creator: ** fengguocai **
   *
   * Create at 2024-05-16T19:02:39+08:00
   *
   * Owner: fengguocai, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.community.bot_server_screenshot': boolean;

  /**
   *
   * coze docs
   *
   * Creator: ** shenxiaojie.316 **
   *
   * Create at 2024-12-19T16:48:26+08:00
   *
   * Owner: shenxiaojie.316, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.community.bot.community.docs': boolean;

  /**
   *
   * 控制coze coin
   *
   * Creator: ** fengguocai **
   *
   * Create at 2024-06-05T10:00:08+08:00
   *
   * Owner: fengguocai, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.community.coin': boolean;

  /**
   *
   * premium credits
   *
   * Creator: ** fengguocai **
   *
   * Create at 2024-08-05T11:25:32+08:00
   *
   * Owner: fengguocai, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.community.credits': boolean;

  /**
   *
   * coze docs
   *
   * Creator: ** shenxiaojie.316 **
   *
   * Create at 2024-12-19T16:49:54+08:00
   *
   * Owner: shenxiaojie.316, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.community.docs': boolean;

  /**
   *
   * 用戶主頁一期
   *
   * Creator: ** shenxiaojie.316 **
   *
   * Create at 2024-06-26T17:56:53+08:00
   *
   * Owner: shenxiaojie.316, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.community.homepage': boolean;

  /**
   *
   * 控制海外release環境是否打開token支付和屏蔽任務列表
   *
   * Creator: ** fengguocai **
   *
   * Create at 2024-04-01T17:29:22+08:00
   *
   * Owner: fengguocai, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.community.i18n_token_task': boolean;

  /**
   *
   * key for my demo
   *
   * Creator: ** lingyibin.jason **
   *
   * Create at 2024-01-08T14:52:41+08:00
   *
   * Owner: lingyibin.jason, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.community.lyb_demo_test2': boolean;

  /**
   *
   * oauth app optimize
   *
   * Creator: ** zhangyingdong **
   *
   * Create at 2025-01-23T19:07:44+08:00
   *
   * Owner: zhangyingdong, fanwenjie.fe, geping
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.community.oauth.app.optimize': boolean;

  /**
   *
   * api playground
   *
   * Creator: ** zhangyingdong **
   *
   * Create at 2024-12-05T01:49:26+08:00
   *
   * Owner: zhangyingdong, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.community.playground': boolean;

  /**
   *
   * 訂閱計劃
   *
   * Creator: ** fengguocai **
   *
   * Create at 2024-05-31T19:16:09+08:00
   *
   * Owner: fengguocai, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.community.premium': boolean;

  /**
   *
   * 國內複製基礎版資源到專業版空間
   *
   * Creator: ** fengguocai **
   *
   * Create at 2025-02-21T14:07:00+08:00
   *
   * Owner: fengguocai, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.community.premium_copy_resource_old': boolean;

  /**
   *
   * coze bot search
   *
   * Creator: ** chenzhuli.bimo **
   *
   * Create at 2024-03-25T19:40:59+08:00
   *
   * Owner: chenzhuli.bimo, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.community.search': boolean;

  /**
   *
   * space invite code offline
   *
   * Creator: ** zhangyingdong **
   *
   * Create at 2025-05-06T17:52:11+08:00
   *
   * Owner: zhangyingdong, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.community.space_invite_code_offline': boolean;

  /**
   *
   * space landingpage
   *
   * Creator: ** zhangyingdong **
   *
   * Create at 2025-04-14T20:31:28+08:00
   *
   * Owner: zhangyingdong, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.community.space_landing': boolean;

  /**
   *
   * store chat ui refactory
   *
   * Creator: ** gaoyuanhan.duty **
   *
   * Create at 2024-08-05T17:29:36+08:00
   *
   * Owner: gaoyuanhan.duty, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.community.store_chat_ui_upgrade': boolean;

  /**
   *
   * 圖像流商店。。。。。。。
   *
   * Creator: ** zhanglinling.quan **
   *
   * Create at 2024-07-04T16:17:14+08:00
   *
   * Owner: zhanglinling.quan, fanwenjie.fe, zengxiaohui, jiangxujin, gaoding.devingao
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.community.store_imageflow': boolean;

  /**
   *
   * 插件及bot商店上架能力
   *
   * Creator: ** shicaiqiang **
   *
   * Create at 2024-02-02T11:28:48+08:00
   *
   * Owner: shicaiqiang, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.community.store_listing': boolean;

  /**
   *
   * store share chat ui refactory
   *
   * Creator: ** gaoyuanhan.duty **
   *
   * Create at 2024-08-05T17:28:00+08:00
   *
   * Owner: gaoyuanhan.duty, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.community.store_share_chat_ui_upgrade': boolean;

  /**
   *
   * 控制整體token入口
   *
   * Creator: ** fengguocai **
   *
   * Create at 2024-04-01T21:45:37+08:00
   *
   * Owner: fengguocai, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.community.token': boolean;

  /**
   *
   * token自動充值
   *
   * Creator: ** fengguocai **
   *
   * Create at 2024-04-15T09:48:05+08:00
   *
   * Owner: fengguocai, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.community.token_auto_charge': boolean;

  /**
   *
   * coze token payment entrance
   *
   * Creator: ** liuhexiang **
   *
   * Create at 2024-02-01T11:54:52+08:00
   *
   * Owner: liuhexiang, fanwenjie.fe, fengguocai
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.community.token_payment': boolean;

  /**
   *
   * token頁面任務開關
   *
   * Creator: ** fengguocai **
   *
   * Create at 2024-04-03T17:38:10+08:00
   *
   * Owner: fengguocai, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.community.token_tasks': boolean;

  /**
   *
   * translate
   *
   * Creator: ** shicaiqiang **
   *
   * Create at 2024-06-05T11:14:21+08:00
   *
   * Owner: shicaiqiang, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.community.translate': boolean;

  /**
   *
   * 整體控制coze coin和coze token
   *
   * Creator: ** fengguocai **
   *
   * Create at 2024-06-04T19:49:04+08:00
   *
   * Owner: fengguocai, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.community.wallet': boolean;

  /**
   *
   * control Filebox module visibility in Bot maker
   *
   * Creator: ** zengdeqin **
   *
   * Create at 2024-01-24T14:15:32+08:00
   *
   * Owner: zengdeqin, fanwenjie.fe, lishuli.lsl, rosefang.123, sunshengda, zhangyuanzhou.zyz
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.data.bot_filebox': boolean;

  /**
   *
   * 手動採集插件二期，coze側灰度
   *
   * Creator: ** zhangyuanzhou.zyz **
   *
   * Create at 2024-08-29T11:26:03+08:00
   *
   * Owner: zhangyuanzhou.zyz, fanwenjie.fe, meixuliang.3
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.data.data_crawler_v2': boolean;

  /**
   *
   * 授權彈窗是否使用新的
   *
   * Creator: ** wucheng.4362 **
   *
   * Create at 2024-03-12T22:04:52+08:00
   *
   * Owner: wucheng.4362, rosefang.123
   *
   * SCM: unknown; Path: /
   *
   * Status: 1
   */
  'bot.data.data_source_refactor': boolean;

  /**
   *
   * 支持導入 Excel 創建 Database
   *
   * Creator: ** zhangyuanzhou.zyz **
   *
   * Create at 2024-01-30T15:27:57+08:00
   *
   * Owner: zhangyuanzhou.zyz, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 0
   */
  'bot.data.excel_to_database': boolean;

  /**
   *
   * filebox支持GUI界面
   *
   * Creator: ** zhangyuanzhou.zyz **
   *
   * Create at 2024-06-26T17:32:05+08:00
   *
   * Owner: zhangyuanzhou.zyz, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.data.filebox_gui': boolean;

  /**
   *
   * konwledge 列表 bot引用
   *
   * Creator: ** wangyan.yoki **
   *
   * Create at 2024-06-27T22:10:16+08:00
   *
   * Owner: wangyan.yoki, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.data.knowledge_bots_count': boolean;

  /**
   *
   * 知識庫上傳容量升級
   *
   * Creator: ** zhangyuanzhou.zyz **
   *
   * Create at 2024-08-22T11:42:22+08:00
   *
   * Owner: zhangyuanzhou.zyz, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.data.knowledge_capacity': boolean;

  /**
   *
   * 飛書知識庫手動更新和定時更新
   *
   * Creator: ** zhangyuanzhou.zyz **
   *
   * Create at 2024-07-01T10:33:19+08:00
   *
   * Owner: zhangyuanzhou.zyz, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.data.knowledge_feishu_manual_update': boolean;

  /**
   *
   * knowledge idl遷移-->memory
   *
   * Creator: ** wangyan.yoki **
   *
   * Create at 2024-02-22T15:01:54+08:00
   *
   * Owner: wangyan.yoki, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.data.knowledge_idl_memory': boolean;

  /**
   *
   * knowledge支持markdown和xls文件
   *
   * Creator: ** zhangyuanzhou.zyz **
   *
   * Create at 2024-07-01T16:03:20+08:00
   *
   * Owner: zhangyuanzhou.zyz, fanwenjie.fe, meixuliang.3
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.data.knowledge_md_xls': boolean;

  /**
   *
   * knowledge pages dev package
   *
   * Creator: ** zengdeqin **
   *
   * Create at 2024-03-25T16:02:49+08:00
   *
   * Owner: zengdeqin, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 0
   */
  'bot.data.knowledge_pages': boolean;

  /**
   *
   * 知識庫支持Photo
   *
   * Creator: ** zhangyuanzhou.zyz **
   *
   * Create at 2024-05-30T18:24:39+08:00
   *
   * Owner: zhangyuanzhou.zyz, fanwenjie.fe, lianghongrong
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.data.knowledge_photo': boolean;

  /**
   *
   * 召回知識庫卡片
   *
   * Creator: ** zhangxiang.01 **
   *
   * Create at 2024-06-18T14:13:59+08:00
   *
   * Owner: zhangxiang.01, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.data.knowledge_source_card': boolean;

  /**
   *
   * knowledge support image
   *
   * Creator: ** zhangyangning **
   *
   * Create at 2024-03-20T17:36:33+08:00
   *
   * Owner: zhangyangning, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.data.knowledge_support_image': boolean;

  /**
   *
   * knowledge table 列支持拖拽
   *
   * Creator: ** zhangyuanzhou.zyz **
   *
   * Create at 2024-06-18T10:36:26+08:00
   *
   * Owner: zhangyuanzhou.zyz, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.data.knowledge_table_column_drag': boolean;

  /**
   *
   * Lark Wiki 支持搜索
   *
   * Creator: ** zhangyuanzhou.zyz **
   *
   * Create at 2024-07-05T11:06:29+08:00
   *
   * Owner: zhangyuanzhou.zyz, fanwenjie.fe, meixuliang.3
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.data.lark_wiki_search': boolean;

  /**
   *
   * knowledge segment
   *
   * Creator: ** haozhenfei **
   *
   * Create at 2025-01-09T11:12:22+08:00
   *
   * Owner: haozhenfei, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.data.level_segment': boolean;

  /**
   *
   * LTM 增加prompt配置開關，用於workflow使用
   *
   * Creator: ** lianghongrong **
   *
   * Create at 2024-08-21T19:14:06+08:00
   *
   * Owner: lianghongrong, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.data.ltm_prompt_config': boolean;

  /**
   *
   * memory_edit_ltm
   *
   * Creator: ** wangyan.yoki **
   *
   * Create at 2024-05-23T10:36:06+08:00
   *
   * Owner: wangyan.yoki, fanwenjie.fe, lihuiwen.123
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.data.memory_edit_ltm': boolean;

  /**
   *
   *  multiple agent 模式下支持timeCapsule
   *
   * Creator: ** liuqinghua.tongtong **
   *
   * Create at 2024-03-11T14:33:18+08:00
   *
   * Owner: liuqinghua.tongtong, fanwenjie.fe, zhangyuanzhou.zyz
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.data.multiple_time_capsule': boolean;

  /**
   *
   * 支持NL2DB
   *
   * Creator: ** zhangyuanzhou.zyz **
   *
   * Create at 2024-02-20T16:33:46+08:00
   *
   * Owner: zhangyuanzhou.zyz, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.data.nl2db': boolean;

  /**
   *
   * 未召回切片固定回覆
   *
   * Creator: ** zhangyuanzhou.zyz **
   *
   * Create at 2024-06-11T10:51:38+08:00
   *
   * Owner: zhangyuanzhou.zyz, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.data.no_recall_reply': boolean;

  /**
   *
   * 測試試使用，需要用於灰度開關
   *
   * Creator: ** wucheng.4362 **
   *
   * Create at 2024-03-14T13:14:37+08:00
   *
   * Owner: wucheng.4362, rosefang.123
   *
   * SCM: unknown; Path: /
   *
   * Status: 1
   */
  'bot.data.refactor_data_source': boolean;

  /**
   *
   * data refactor upload feishu
   *
   * Creator: ** rosefang.123 **
   *
   * Create at 2024-03-08T16:25:40+08:00
   *
   * Owner: rosefang.123, fanwenjie.fe, wucheng.4362
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.data.refactor_feishu': boolean;

  /**
   *
   * data refactor upload google&notion
   *
   * Creator: ** rosefang.123 **
   *
   * Create at 2024-03-08T16:25:06+08:00
   *
   * Owner: rosefang.123, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.data.refactor_google_notion': boolean;

  /**
   *
   * data knowledge refactor close
   *
   * Creator: ** rosefang.123 **
   *
   * Create at 2024-04-08T17:36:01+08:00
   *
   * Owner: rosefang.123, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.data.refactor_knowledge_close': boolean;

  /**
   *
   * data refactor upload table
   *
   * Creator: ** rosefang.123 **
   *
   * Create at 2024-03-08T16:24:22+08:00
   *
   * Owner: rosefang.123, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.data.refactor_table': boolean;

  /**
   *
   * data refactor upload text_local_custom
   *
   * Creator: ** rosefang.123 **
   *
   * Create at 2024-03-08T16:23:22+08:00
   *
   * Owner: rosefang.123, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.data.refactor_text_local_custom': boolean;

  /**
   *
   * data refactor upload text_url
   *
   * Creator: ** rosefang.123 **
   *
   * Create at 2024-03-08T16:23:49+08:00
   *
   * Owner: rosefang.123, fanwenjie.fe, sunshengda
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.data.refactor_text_url': boolean;

  /**
   *
   * source display
   *
   * Creator: ** wangyan.yoki **
   *
   * Create at 2024-04-28T20:05:53+08:00
   *
   * Owner: wangyan.yoki, fanwenjie.fe, gaoshuda
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.data.source_display': boolean;

  /**
   *
   * timeCapsule FG
   *
   * Creator: ** zhangyangning **
   *
   * Create at 2024-01-17T20:17:25+08:00
   *
   * Owner: zhangyangning, fanwenjie.fe, liuqinghua.tongtong, gaoshuda, zhangyuanzhou.zyz, meixuliang.3
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.data.time_capsule': boolean;

  /**
   *
   * variablepage
   *
   * Creator: ** haozhenfei **
   *
   * Create at 2024-12-11T10:30:12+08:00
   *
   * Owner: haozhenfei, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.data.variablepage': boolean;

  /**
   *
   * ai chat for devops
   *
   * Creator: ** chengshihao **
   *
   * Create at 2024-03-05T15:45:54+08:00
   *
   * Owner: chengshihao, fanwenjie.fe, xiongyanan.211, liuhua.jia, caiyexiang, wangfan.jerry, chentao.arthur, youhong, weiyu.chen
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.devops.aichat': boolean;

  /**
   *
   * 分析頁重構優化
   *
   * Creator: ** wangzixuan.0408 **
   *
   * Create at 2024-05-13T16:42:56+08:00
   *
   * Owner: wangzixuan.0408, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.devops.analytics_overview_v2': boolean;

  /**
   *
   * 運營看板二期
   *
   * Creator: ** wangzixuan.0408 **
   *
   * Create at 2024-07-02T15:09:52+08:00
   *
   * Owner: wangzixuan.0408, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.devops.analytics_overview_v3': boolean;

  /**
   *
   * 變更滿意度 FG 管理員
   *
   * Creator: ** chendaxin.tk **
   *
   * Create at 2024-03-28T19:51:03+08:00
   *
   * Owner: fanwenjie.fe, wangzixuan.0408
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.devops.analytics.satisfaction': boolean;

  /**
   *
   * arena feedback
   *
   * Creator: ** zhangchi.zhc **
   *
   * Create at 2024-08-13T16:38:07+08:00
   *
   * Owner: zhangchi.zhc, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.devops.arena_feedback': boolean;

  /**
   *
   * 競技場題庫功能
   *
   * Creator: ** zhangchi.zhc **
   *
   * Create at 2024-06-27T14:56:14+08:00
   *
   * Owner: zhangchi.zhc, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.devops.arena_questionbank': boolean;

  /**
   *
   * 協作模式開關
   *
   * Creator: ** zhangchi.zhc **
   *
   * Create at 2024-04-15T20:13:08+08:00
   *
   * Owner: zhangchi.zhc, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.devops.collaboration_switch': boolean;

  /**
   *
   * 多人協作線上體驗問題修復
   *
   * Creator: ** tangxintian **
   *
   * Create at 2024-03-06T21:33:16+08:00
   *
   * Owner: tangxintian, fanwenjie.fe, zhangchi.zhc
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.devops.collaboration_version': boolean;

  /**
   *
   * 多人協作編輯鎖和新版本推送功能灰度
   *
   * Creator: ** zhangchi.zhc **
   *
   * Create at 2024-02-25T18:50:29+08:00
   *
   * Owner: zhangchi.zhc, fanwenjie.fe, lihuiwen.123
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.devops.collaboration_websocket': boolean;

  /**
   *
   * devtool灰度配置
   *
   * Creator: ** luomingwei.tommy **
   *
   * Create at 2024-03-22T14:02:59+08:00
   *
   * Owner: luomingwei.tommy, lukexian.bryce, liangjinshuo
   *
   * SCM: unknown; Path: /
   *
   * Status: 1
   */
  'bot.devops.devtool': boolean;

  /**
   *
   * 釦子羅盤在釦子的入口
   *
   * Creator: ** wangziqiang.carl **
   *
   * Create at 2025-03-28T16:39:16+08:00
   *
   * Owner: wangziqiang.carl, fanwenjie.fe, sunzhiyuan.evan
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.devops.enable_cozeloop_entry': boolean;

  /**
   *
   * coze2.0 評測
   *
   *
   * Creator: ** zhangyifei.sky **
   *
   * Create at 2024-11-06T19:14:24+08:00
   *
   * Owner: zhangyifei.sky, wangziqi.9425, wangziqiang.carl
   *
   * SCM: unknown; Path: /
   *
   * Status: 2
   */
  'bot.devops.evaluate_coze_2': boolean;

  /**
   *
   * 評測基礎版 Feature
   *
   * Creator: ** wangzixuan.0408 **
   *
   * Create at 2024-07-11T19:33:58+08:00
   *
   * Owner: wangzixuan.0408, fanwenjie.fe, liuwei.felix
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.devops.evaluation_lite': boolean;

  /**
   *
   * 灰度增加配置項
   *
   * Creator: ** wangzixuan.0408 **
   *
   * Create at 2024-07-18T14:51:24+08:00
   *
   * Owner: wangzixuan.0408, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.devops.gray_publish_config': boolean;

  /**
   *
   * 控制意圖跳轉query
   *
   * Creator: ** wangzixuan.0408 **
   *
   * Create at 2024-06-27T14:07:54+08:00
   *
   * Owner: wangzixuan.0408, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.devops.intent_to_queries': boolean;

  /**
   *
   * devops merge prompt diff
   *
   * Creator: ** zhangchi.zhc **
   *
   * Create at 2024-07-28T13:24:37+08:00
   *
   * Owner: zhangchi.zhc, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.devops.merge_prompt_diff': boolean;

  /**
   *
   * mockset_auto_generate
   *
   * Creator: ** linyueqiang **
   *
   * Create at 2024-03-29T17:24:25+08:00
   *
   * Owner: fanwenjie.fe, qihai, wangzixuan.0408
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.devops.mockset_auto_generate': boolean;

  /**
   *
   * plugin mockset 代碼拆包
   *
   * Creator: ** linyueqiang **
   *
   * Create at 2024-05-07T19:18:54+08:00
   *
   * Owner: linyueqiang, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.devops.mockset_manage': boolean;

  /**
   *
   * 控制新版的鏈路追蹤展示
   *
   * Creator: ** liuwei.felix **
   *
   * Create at 2024-09-30T15:57:38+08:00
   *
   * Owner: liuwei.felix, fanwenjie.fe, chengmo.mo
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.devops.new_query_trace': boolean;

  /**
   *
   * 新版queries控制
   *
   * Creator: ** wangzixuan.0408 **
   *
   * Create at 2024-06-22T22:33:24+08:00
   *
   * Owner: wangzixuan.0408, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.devops.new.queries.entry': boolean;

  /**
   *
   * 下線canvasdata
   *
   * Creator: ** zhangchi.zhc **
   *
   * Create at 2024-03-27T16:05:57+08:00
   *
   * Owner: zhangchi.zhc, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.devops.offline_canvas_data': boolean;

  /**
   *
   * plugin 導入導出功能開關
   *
   * Creator: ** linyueqiang **
   *
   * Create at 2024-01-31T15:48:08+08:00
   *
   * Owner: linyueqiang, fanwenjie.fe, xiaojing.98
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.devops.plugin_import_export': boolean;

  /**
   *
   * plugin mockset 功能開關
   *
   * Creator: ** linyueqiang **
   *
   * Create at 2024-01-31T14:23:06+08:00
   *
   * Owner: fanwenjie.fe, guoshuai.030, lixubai, lvqianqian.lqq, zhulili.zhu, wangfei.fyn, qihai, liwei.1019, wangzixuan.0408
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.devops.plugin_mockset': boolean;

  /**
   *
   * query分析多渠道擴展
   *
   * Creator: ** wangzixuan.0408 **
   *
   * Create at 2024-05-30T15:45:21+08:00
   *
   * Owner: wangzixuan.0408, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.devops.qa_channel_extend': boolean;

  /**
   *
   * query分析入口控制
   *
   * Creator: ** wangzixuan.0408 **
   *
   * Create at 2024-06-24T14:15:37+08:00
   *
   * Owner: wangzixuan.0408, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.devops.query_analytics.entry': boolean;

  /**
   *
   * 運營指標支持實時查詢
   *
   * Creator: ** lvjiawen.1996 **
   *
   * Create at 2024-04-26T14:59:59+08:00
   *
   * Owner: lvjiawen.1996, fanwenjie.fe, jiangqi.rrt, wangzixuan.0408, zhangchi.zhc
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.devops.real_time_op_indicator': boolean;

  /**
   *
   * 鍵入tab,觸發changelog生成
   *
   * Creator: ** wangzixuan.0408 **
   *
   * Create at 2024-03-12T18:39:24+08:00
   *
   * Owner: wangzixuan.0408, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.devops.tab_to_gen_changelog': boolean;

  /**
   *
   * Testset Auto Generate Button
   *
   * Creator: ** qihai **
   *
   * Create at 2024-03-15T12:55:10+08:00
   *
   * Owner: qihai, fanwenjie.fe, jiangxujin, jiangqi.rrt, wangzixuan.0408
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.devops.testset_auto_gen': boolean;

  /**
   *
   * bot.devops.testset_expert_mode
   *
   * Creator: ** linyueqiang **
   *
   * Create at 2024-05-10T13:25:38+08:00
   *
   * Owner: linyueqiang, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.devops.testset_expert_mode': boolean;

  /**
   *
   * 多人協作三路merge
   *
   * Creator: ** zhangchi.zhc **
   *
   * Create at 2024-03-06T19:51:28+08:00
   *
   * Owner: zhangchi.zhc, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.devops.three_merge': boolean;

  /**
   *
   * trace to workflow
   *
   * Creator: ** wangzixuan.0408 **
   *
   * Create at 2024-08-14T18:07:23+08:00
   *
   * Owner: wangzixuan.0408, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.devops.trace_workflow_link': boolean;

  /**
   *
   * devops typo: use userInput span as Agent span
   *
   * Creator: ** linyueqiang **
   *
   * Create at 2024-06-05T13:25:45+08:00
   *
   * Owner: linyueqiang, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.devops.use_user_input_as_agent': boolean;

  /**
   *
   * 社會場景在市場中的開關
   *
   * Creator: ** gaoding.devingao **
   *
   * Create at 2024-06-17T15:40:08+08:00
   *
   * Owner: gaoding.devingao, shicaiqiang
   *
   * SCM: unknown; Path: /
   *
   * Status: 1
   */
  'bot.store.social.scene': boolean;

  /**
   *
   * 註銷是否區分子用戶，海外屏蔽
   *
   * Creator: ** yuwenbinjie **
   *
   * Create at 2025-01-21T15:25:37+08:00
   *
   * Owner: yuwenbinjie, fanwenjie.fe, duwenhan
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.add_basic_user': boolean;

  /**
   *
   * 登錄流程是否經過年齡門判斷
   *
   * Creator: ** liuqinghua.tongtong **
   *
   * Create at 2024-03-15T14:46:29+08:00
   *
   * Owner: liuqinghua.tongtong, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.age_gate': boolean;

  /**
   *
   * multi child bot update auto setting
   *
   * Creator: ** lengfangbing **
   *
   * Create at 2024-05-20T14:36:04+08:00
   *
   * Owner: lengfangbing, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.agent_bot_auto_update': boolean;

  /**
   *
   * generate with bot tab
   *
   * Creator: ** yuwenbinjie **
   *
   * Create at 2024-10-16T11:29:26+08:00
   *
   * Owner: yuwenbinjie, fanwenjie.fe, sunzhiyuan.evan
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.ai_to_agent': boolean;

  /**
   *
   * answer action feature gating
   *
   * Creator: ** gaoyuanhan.duty **
   *
   * Create at 2024-05-07T15:18:33+08:00
   *
   * Owner: gaoyuanhan.duty, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.answer_action': boolean;

  /**
   *
   * api sdk publish token 收費提示 (目前僅 海外 inhouse 和 release 生效)
   *
   * Creator: ** jiangqian.8 **
   *
   * Create at 2024-06-05T14:47:10+08:00
   *
   * Owner: fanwenjie.fe, shenxiaojie.316
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.api_publish_token_tips': boolean;

  /**
   *
   * 審覈bot信息增加space_id並且指引彈窗內容接入審覈
   *
   * Creator: ** lengfangbing **
   *
   * Create at 2024-04-23T18:54:37+08:00
   *
   * Owner: lengfangbing, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.audit_space_id_desc': boolean;

  /**
   *
   * bot input length limit
   *
   * Creator: ** gaoyuanhan.duty **
   *
   * Create at 2024-06-26T22:18:53+08:00
   *
   * Owner: gaoyuanhan.duty, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.bot_input_length_limit': boolean;

  /**
   *
   * feature open guide modal
   *
   * Creator: ** zhangnan.615 **
   *
   * Create at 2024-03-11T17:55:54+08:00
   *
   * Owner: zhangnan.615, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.bot_publish_guide_modal': boolean;

  /**
   *
   * 異步插件/workflow/imageflow配置入口;異步任務查看
   *
   * Creator: ** wanglitong **
   *
   * Create at 2024-06-24T12:00:28+08:00
   *
   * Owner: wanglitong, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.bot.studio.async_tools_config': boolean;

  /**
   *
   * bot move fg
   *
   * Creator: ** meixuliang.3 **
   *
   * Create at 2024-06-20T17:49:50+08:00
   *
   * Owner: meixuliang.3, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.botmove': boolean;

  /**
   *
   * card check llm
   *
   * Creator: ** zhangnan.615 **
   *
   * Create at 2024-03-21T11:43:21+08:00
   *
   * Owner: zhangnan.615, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.card_llm': boolean;

  /**
   *
   * chat area action lock
   *
   * Creator: ** gaoyuanhan.duty **
   *
   * Create at 2024-06-14T16:23:11+08:00
   *
   * Owner: gaoyuanhan.duty, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.chat_action_lock': boolean;

  /**
   *
   * chat area init refactor
   *
   * Creator: ** liushuoyan **
   *
   * Create at 2024-07-24T17:07:56+08:00
   *
   * Owner: liushuoyan, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.chat_area_refactor': boolean;

  /**
   *
   * chat audio speech
   *
   * Creator: ** gaoyuanhan.duty **
   *
   * Create at 2025-01-16T15:42:03+08:00
   *
   * Owner: gaoyuanhan.duty, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.chat.audio.speech': boolean;

  /**
   *
   * duo ren xie zuo ru kou
   *
   * Creator: ** lengfangbing **
   *
   * Create at 2024-02-26T11:25:23+08:00
   *
   * Owner: fanwenjie.fe, tangxintian, zhangchi.zhc, duwenhan, zhanghaochen.z, lihuiwen.123
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.collaboration_enter': boolean;

  /**
   *
   * 多人協作付費入口的 FG
   *
   * Creator: ** jiangxujin **
   *
   * Create at 2024-09-04T17:33:42+08:00
   *
   * Owner: jiangxujin, fanwenjie.fe, lihuiwen.123, fanchen
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.collaboration_pay': boolean;

  /**
   *
   * 多人協作開發者、協作者、運維者角色fg
   *
   * Creator: ** lihuiwen.123 **
   *
   * Create at 2024-07-22T20:32:52+08:00
   *
   * Owner: lihuiwen.123, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.collaborators_roles': boolean;

  /**
   *
   * commercialize-s3-evaluate
   *
   * Creator: ** duwenhan **
   *
   * Create at 2025-03-13T16:36:06+08:00
   *
   * Owner: duwenhan, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.commercialize_s3_evaluate': boolean;

  /**
   *
   * cookie banner custom render
   *
   * Creator: ** lengfangbing **
   *
   * Create at 2024-05-08T17:53:06+08:00
   *
   * Owner: lengfangbing, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.cookie_custom_render': boolean;

  /**
   *
   * coze assistant
   *
   * Creator: ** gaoyuanhan.duty **
   *
   * Create at 2024-09-19T15:25:27+08:00
   *
   * Owner: gaoyuanhan.duty, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.coze_assistant': boolean;

  /**
   *
   * coze-pro-fg
   *
   * Creator: ** liwei.1019 **
   *
   * Create at 2024-05-14T14:01:03+08:00
   *
   * Owner: liwei.1019, fanwenjie.fe, duwenhan
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.coze_pro': boolean;

  /**
   *
   * coze pro copy
   *
   * Creator: ** duwenhan **
   *
   * Create at 2024-07-22T15:23:05+08:00
   *
   * Owner: duwenhan, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.coze_pro_copy': boolean;

  /**
   *
   * 歷史版本可調試功能開關
   *
   * Creator: ** lihuiwen.123 **
   *
   * Create at 2024-07-02T12:40:34+08:00
   *
   * Owner: lihuiwen.123, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.coze_pro_debug': boolean;

  /**
   *
   * Coze Pro Hooks開關
   *
   * Creator: ** lihuiwen.123 **
   *
   * Create at 2024-06-27T17:07:58+08:00
   *
   * Owner: lihuiwen.123, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.coze_pro_hooks': boolean;

  /**
   *
   * coze pro 火山登錄 & 權益展示
   *
   * Creator: ** duwenhan **
   *
   * Create at 2024-06-20T20:27:34+08:00
   *
   * Owner: duwenhan, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.coze_pro_rights': boolean;

  /**
   *
   * coze pro 入口fg
   *
   * Creator: ** lihuiwen.123 **
   *
   * Create at 2024-06-15T13:00:27+08:00
   *
   * Owner: lihuiwen.123, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.coze_pro_update_entry': boolean;

  /**
   *
   * llm custom card
   *
   * Creator: ** zhangnan.615 **
   *
   * Create at 2024-09-18T11:42:05+08:00
   *
   * Owner: zhangnan.615, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.custom_card_llm': boolean;

  /**
   *
   * custom-platform
   *
   * Creator: ** liwei.1019 **
   *
   * Create at 2024-08-05T15:23:25+08:00
   *
   * Owner: liwei.1019, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.custom_platform': boolean;

  /**
   *
   * 控制抖音分身
   *
   * Creator: ** chuzhu **
   *
   * Create at 2025-01-09T17:39:00+08:00
   *
   * Owner: chuzhu, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.douyin_bot': boolean;

  /**
   *
   * douyin inapp oauth
   *
   * Creator: ** duwenhan **
   *
   * Create at 2024-05-06T11:04:11+08:00
   *
   * Owner: duwenhan, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.douyin_inapp_oauth': boolean;

  /**
   *
   * douyin login only
   *
   * Creator: ** duwenhan **
   *
   * Create at 2025-02-18T17:40:00+08:00
   *
   * Owner: duwenhan, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.douyin_login_only': boolean;

  /**
   *
   * flow share tip
   *
   * Creator: ** zhangnan.615 **
   *
   * Create at 2024-09-03T20:05:15+08:00
   *
   * Owner: zhangnan.615, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.flow_share_tip': boolean;

  /**
   *
   * 強制oauth進行登錄和授權
   *
   * Creator: ** lengfangbing **
   *
   * Create at 2024-03-27T14:33:58+08:00
   *
   * Owner: lengfangbing
   *
   * SCM: unknown; Path: /
   *
   * Status: 1
   */
  'bot.studio.force_oauth': boolean;

  /**
   *
   * gif_avater_background
   *
   * Creator: ** zhangnan.615 **
   *
   * Create at 2024-06-03T19:30:48+08:00
   *
   * Owner: zhangnan.615, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.gif_avater_background': boolean;

  /**
   *
   * bot版本歷史的審覈結果查看按鈕展示
   *
   * Creator: ** lengfangbing **
   *
   * Create at 2024-03-12T17:48:05+08:00
   *
   * Owner: lengfangbing
   *
   * SCM: unknown; Path: /
   *
   * Status: 1
   */
  'bot.studio.history_cqc_result': boolean;

  /**
   *
   * home bot分享續聊場景
   *
   * Creator: ** lihuiwen.123 **
   *
   * Create at 2024-06-13T18:01:44+08:00
   *
   * Owner: lihuiwen.123, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.home_bot_share_message': boolean;

  /**
   *
   * home bot trigger
   *
   * Creator: ** gaoyuanhan.duty **
   *
   * Create at 2024-06-18T11:35:39+08:00
   *
   * Owner: gaoyuanhan.duty, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.home_bot_trigger': boolean;

  /**
   *
   * home chat ui ractory
   *
   * Creator: ** gaoyuanhan.duty **
   *
   * Create at 2024-08-05T17:13:05+08:00
   *
   * Owner: gaoyuanhan.duty, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.home_chat_ui_upgrade': boolean;

  /**
   *
   * 首頁 feed 篩選
   *
   * Creator: ** zhanghaochen.z **
   *
   * Create at 2024-11-21T20:49:29+08:00
   *
   * Owner: zhanghaochen.z, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.home.feed_filter': boolean;

  /**
   *
   * bot json2struct
   *
   * Creator: ** zhangnan.615 **
   *
   * Create at 2024-06-17T14:26:56+08:00
   *
   * Owner: zhangnan.615, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.json_to_struct': boolean;

  /**
   *
   * jump form
   *
   * Creator: ** zhangnan.615 **
   *
   * Create at 2024-06-04T11:34:14+08:00
   *
   * Owner: zhangnan.615, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.jump_form': boolean;

  /**
   *
   * 音色克隆模塊開關
   *
   * Creator: ** sunzhiyuan.evan **
   *
   * Create at 2024-12-26T11:05:58+08:00
   *
   * Owner: sunzhiyuan.evan, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.library_voice_resource': boolean;

  /**
   *
   * 模型個性化配置功能開關
   *
   * Creator: ** gaoyuanhan.duty **
   *
   * Create at 2024-04-25T14:26:05+08:00
   *
   * Owner: gaoyuanhan.duty, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.model_customize_config': boolean;

  /**
   *
   * model function config
   *
   * Creator: ** duwenhan **
   *
   * Create at 2024-06-06T22:24:57+08:00
   *
   * Owner: duwenhan, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.model_func_config': boolean;

  /**
   *
   * model management v1
   *
   * Creator: ** yuwenbinjie **
   *
   * Create at 2024-12-13T11:35:48+08:00
   *
   * Owner: yuwenbinjie, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.model_manage_v1': boolean;

  /**
   *
   * 模型選擇組件交互優化 M-5566443540
   *
   * Creator: ** zhanghaochen.z **
   *
   * Create at 2024-12-19T12:56:45+08:00
   *
   * Owner: zhanghaochen.z, fanwenjie.fe, duwenhan, sunzhiyuan.evan
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.model_select': boolean;

  /**
   *
   * switch display position for endpointName & name in model select option
   *
   * Creator: ** duwenhan **
   *
   * Create at 2024-12-03T11:48:41+08:00
   *
   * Owner: duwenhan, fanwenjie.fe, geping
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.model_select_switch_end_point_name_pos': boolean;

  /**
   *
   * 付費配置
   *
   *
   * Creator: ** zhanghaochen.z **
   *
   * Create at 2024-05-30T17:32:30+08:00
   *
   * Owner: zhanghaochen.z, fengguocai, sunzhiyuan.evan
   *
   * SCM: unknown; Path: /
   *
   * Status: 1
   */
  'bot.studio.monetize_config': boolean;

  /**
   *
   * test rules
   *
   * Creator: ** zhanghaochen.z **
   *
   * Create at 2024-04-07T16:27:25+08:00
   *
   * Owner: zhanghaochen.z
   *
   * SCM: unknown; Path: /
   *
   * Status: 1
   */
  'bot.studio.multi_agent.test': boolean;

  /**
   *
   * multi audit
   *
   * Creator: ** lengfangbing **
   *
   * Create at 2024-06-24T11:04:03+08:00
   *
   * Owner: lengfangbing, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.multi_bot_audit': boolean;

  /**
   *
   * multimodal message
   *
   * Creator: ** gaoyuanhan.duty **
   *
   * Create at 2024-03-20T18:02:21+08:00
   *
   * Owner: gaoyuanhan.duty, fanwenjie.fe, wanglitong, fanchen
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.multimodal_message': boolean;

  /**
   *
   * new model list
   *
   * Creator: ** fengkun **
   *
   * Create at 2025-05-15T20:27:54+08:00
   *
   * Owner: fengkun, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.new_model_list': boolean;

  /**
   *
   * nl to prompt
   *
   * Creator: ** gaoyuanhan.duty **
   *
   * Create at 2024-06-19T17:05:08+08:00
   *
   * Owner: gaoyuanhan.duty, fanwenjie.fe, haozhenfei
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.nl_prompt': boolean;

  /**
   *
   * nl2desc & pre oauth
   *
   * Creator: ** liwei.1019 **
   *
   * Create at 2024-06-13T16:38:37+08:00
   *
   * Owner: liwei.1019, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.nl2desc_oauth': boolean;

  /**
   *
   * oauth app edit page
   *
   * Creator: ** yuwenbinjie **
   *
   * Create at 2024-08-26T11:29:14+08:00
   *
   * Owner: yuwenbinjie, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.oauth_app_edit_page': boolean;

  /**
   *
   * 開場白圖文混排
   *
   * Creator: ** gaoyuanhan.duty **
   *
   * Create at 2024-04-22T22:27:15+08:00
   *
   * Owner: gaoyuanhan.duty, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.onboarding_markdown': boolean;

  /**
   *
   * op banner
   *
   * Creator: ** lengfangbing **
   *
   * Create at 2024-07-04T10:50:36+08:00
   *
   * Owner: lengfangbing, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.op_banner': boolean;

  /**
   *
   * open 支持 analytics 模塊
   *
   * Creator: ** jiangqian.8 **
   *
   * Create at 2024-05-29T16:50:48+08:00
   *
   * Owner: fanwenjie.fe, shenxiaojie.316
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.open_analytics': boolean;

  /**
   *
   * open jinja syntax
   *
   * Creator: ** duwenhan **
   *
   * Create at 2024-05-15T11:19:07+08:00
   *
   * Owner: duwenhan, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.open_jinja_syntax': boolean;

  /**
   *
   * control tool view switch some tool
   *
   * Creator: ** liushuoyan **
   *
   * Create at 2024-04-15T16:47:15+08:00
   *
   * Owner: liushuoyan, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.open_tool_switch': boolean;

  /**
   *
   * open 平臺 開啓web sdk
   *
   * Creator: ** jiangqian.8 **
   *
   * Create at 2024-04-01T16:42:06+08:00
   *
   * Owner: fanwenjie.fe, liuyuhang.0, gaoyuanhan.duty
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.open_web_sdk': boolean;

  /**
   *
   * PAT chat permission migrate notice
   *
   * Creator: ** duwenhan **
   *
   * Create at 2024-08-15T15:41:49+08:00
   *
   * Owner: duwenhan, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.pat_chat_permission_mig_notice': boolean;

  /**
   *
   * API & SDK
   *
   * Creator: ** shenxiaojie.316 **
   *
   * Create at 2025-03-30T09:31:32+08:00
   *
   * Owner: shenxiaojie.316, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.permission': boolean;

  /**
   *
   * 開放平臺權限點優化.
   *
   * Creator: ** jiangqian.8 **
   *
   * Create at 2024-07-24T14:45:09+08:00
   *
   * Owner: fanwenjie.fe, shenxiaojie.316
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.permission_optimize': boolean;

  /**
   *
   * 插件分攤fg
   *
   * Creator: ** lihuiwen.123 **
   *
   * Create at 2024-09-02T21:00:53+08:00
   *
   * Owner: lihuiwen.123, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.plugin_cost_sharing': boolean;

  /**
   *
   * plugin add file type
   *
   * Creator: ** lengfangbing **
   *
   * Create at 2024-07-16T15:39:05+08:00
   *
   * Owner: lengfangbing, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.plugin_file_type': boolean;

  /**
   *
   * plugin oauth
   *
   * Creator: ** fanwentao.77 **
   *
   * Create at 2024-03-14T11:37:45+08:00
   *
   * Owner: fanwentao.77, fanwenjie.fe, liwei.1019, liuyuhang.0
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.plugin_oauth': boolean;

  /**
   *
   * Agent IDE 權限授權優化開關（主要用於開源）
   *
   * Creator: ** chenyuliang.12138 **
   *
   * Create at 2025-04-24T17:04:58+08:00
   *
   * Owner: chenyuliang.12138, fanwenjie.fe, fengkun
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.plugin_oauth_opt': boolean;

  /**
   *
   * opt for mock set
   *
   * Creator: ** liwei.1019 **
   *
   * Create at 2024-06-12T16:37:08+08:00
   *
   * Owner: liwei.1019, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.plugin_opt_mock_set': boolean;

  /**
   *
   * plugin permission manage
   *
   * Creator: ** jiangqian.8 **
   *
   * Create at 2024-07-30T16:39:06+08:00
   *
   * Owner: fanwenjie.fe, lihuiwen.123
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.plugin_permission_manage': boolean;

  /**
   *
   * VPC接入FG
   *
   * Creator: ** lihuiwen.123 **
   *
   * Create at 2025-05-06T14:56:54+08:00
   *
   * Owner: lihuiwen.123, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.plugin_vpc': boolean;

  /**
   *
   * chat ui
   *
   * Creator: ** gaoyuanhan.duty **
   *
   * Create at 2024-08-05T17:12:26+08:00
   *
   * Owner: gaoyuanhan.duty, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.preview_chat_ui_upgrade': boolean;

  /**
   *
   * nl2prd
   *
   * Creator: ** lihuiwen.123 **
   *
   * Create at 2025-01-03T16:22:38+08:00
   *
   * Owner: lihuiwen.123, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.project_ide_nl2prd': boolean;

  /**
   *
   * Project發佈模板配置封面圖片使用imageX上傳
   *
   * Creator: ** liujiakang.i **
   *
   * Create at 2025-04-27T16:21:24+08:00
   *
   * Owner: liujiakang.i, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.project_publish_imagex': boolean;

  /**
   *
   * prompt diff
   *
   * Creator: ** haozhenfei **
   *
   * Create at 2025-02-19T14:24:47+08:00
   *
   * Owner: haozhenfei, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.prompt_diff': boolean;

  /**
   *
   * 新版PromptKit
   *
   * Creator: ** haozhenfei **
   *
   * Create at 2024-10-14T14:28:52+08:00
   *
   * Owner: haozhenfei, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.prompt_kit': boolean;

  /**
   *
   * 發佈管理融合數據觀測-分析
   *
   * Creator: ** liujiakang.i **
   *
   * Create at 2025-04-23T16:36:44+08:00
   *
   * Owner: liujiakang.i, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.publish_analysis': boolean;

  /**
   *
   * publish to aweme comment
   *
   * Creator: ** lengfangbing **
   *
   * Create at 2024-06-11T11:45:32+08:00
   *
   * Owner: lengfangbing, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.publish_aweme_comment': boolean;

  /**
   *
   * 發佈管理入口展示
   *
   * Creator: ** duwenhan **
   *
   * Create at 2025-01-15T11:59:03+08:00
   *
   * Owner: duwenhan, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.publish_management': boolean;

  /**
   *
   * bot Publish的機審攔截前置提前
   *
   * Creator: ** lengfangbing **
   *
   * Create at 2024-03-12T20:04:38+08:00
   *
   * Owner: lengfangbing
   *
   * SCM: unknown; Path: /
   *
   * Status: 1
   */
  'bot.studio.publish_modal_fast': boolean;

  /**
   *
   * 用戶 query 收集
   *
   * Creator: ** jiangqian.8 **
   *
   * Create at 2024-06-24T14:59:16+08:00
   *
   * Owner: fanwenjie.fe, haozhenfei
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.query_collect': boolean;

  /**
   *
   * 發佈管理
   *
   * Creator: ** fengguocai **
   *
   * Create at 2024-12-26T14:56:49+08:00
   *
   * Owner: fengguocai, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.release_management': boolean;

  /**
   *
   * 切換豆包大模型標題
   *
   * Creator: ** lihuiwen.123 **
   *
   * Create at 2024-05-13T20:06:15+08:00
   *
   * Owner: lihuiwen.123, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.seed_mode_name': boolean;

  /**
   *
   * share message chat ui refactory
   *
   * Creator: ** gaoyuanhan.duty **
   *
   * Create at 2024-08-05T17:34:46+08:00
   *
   * Owner: gaoyuanhan.duty, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.share_message_plugin_chat_ui_upgrade': boolean;

  /**
   *
   * 快捷指令二期muti開關
   *
   * Creator: ** haozhenfei **
   *
   * Create at 2024-05-31T16:25:30+08:00
   *
   * Owner: haozhenfei, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.shortcuts_muti': boolean;

  /**
   *
   * 社會化場景需求 FG
   *
   * Creator: ** zhanghaochen.z **
   *
   * Create at 2024-04-19T15:21:28+08:00
   *
   * Owner: zhanghaochen.z, fanchen, lengfangbing
   *
   * SCM: unknown; Path: /
   *
   * Status: 1
   */
  'bot.studio.social': boolean;

  /**
   *
   * 社會場景發佈
   *
   * 最少10字符
   *
   * Creator: ** zhanghaochen.z **
   *
   * Create at 2024-06-21T11:06:11+08:00
   *
   * Owner: zhanghaochen.z, fanwenjie.fe, fanchen
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.social.publish': boolean;

  /**
   *
   * 社會場景支持 workflow 和變量
   *
   * Creator: ** zhanghaochen.z **
   *
   * Create at 2024-07-17T14:51:45+08:00
   *
   * Owner: zhanghaochen.z, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.social.tools': boolean;

  /**
   *
   * remove force set uuname
   *
   * Creator: ** duwenhan **
   *
   * Create at 2024-10-29T15:40:16+08:00
   *
   * Owner: duwenhan, fanwenjie.fe, liusen.1245
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.stop_force_changename': boolean;

  /**
   *
   * store tts
   *
   * Creator: ** zhangxiang.01 **
   *
   * Create at 2024-03-11T14:35:45+08:00
   *
   * Owner: zhangxiang.01, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.store_bot_tts': boolean;

  /**
   *
   * tns store in review open in
   *
   * Creator: ** lengfangbing **
   *
   * Create at 2024-04-15T10:37:54+08:00
   *
   * Owner: lengfangbing, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.store_review_link': boolean;

  /**
   *
   * 任務模塊改造，新增event task
   *
   * Creator: ** yuwenbinjie **
   *
   * Create at 2024-03-21T20:22:24+08:00
   *
   * Owner: yuwenbinjie, fanwenjie.fe, zhangxiang.01, fuzonghao
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.task_triger_event': boolean;

  /**
   *
   * enable team manage v2 feature
   *
   * Creator: ** duwenhan **
   *
   * Create at 2024-12-18T20:39:12+08:00
   *
   * Owner: duwenhan, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.team_manage_v2': boolean;

  /**
   *
   * template navbar show
   *
   * Creator: ** liushuoyan **
   *
   * Create at 2024-09-19T21:28:41+08:00
   *
   * Owner: liushuoyan, fanwenjie.fe, zhanghaochen.z
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.template': boolean;

  /**
   *
   * template sell
   *
   * Creator: ** duwenhan **
   *
   * Create at 2024-10-21T21:15:03+08:00
   *
   * Owner: duwenhan, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.template_sell': boolean;

  /**
   *
   * template show loadmore and nomore
   *
   * Creator: ** liushuoyan **
   *
   * Create at 2024-09-20T20:56:07+08:00
   *
   * Owner: liushuoyan, fanwenjie.fe, zhanghaochen.z
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.template_show_nomore': boolean;

  /**
   *
   * a
   *
   * Creator: ** zhanghaochen.z **
   *
   * Create at 2025-02-27T19:47:31+08:00
   *
   * Owner: zhanghaochen.z, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.test_zhc': boolean;

  /**
   *
   * tool coze design
   *
   * Creator: ** liushuoyan **
   *
   * Create at 2024-05-24T12:03:08+08:00
   *
   * Owner: liushuoyan, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.tool_design_v2': boolean;

  /**
   *
   * trigger hit audit
   *
   * Creator: ** lengfangbing **
   *
   * Create at 2024-06-04T11:25:16+08:00
   *
   * Owner: lengfangbing, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.trigger_hit_audit': boolean;

  /**
   *
   * tts with lang
   *
   * Creator: ** zhangxiang.01 **
   *
   * Create at 2024-04-07T21:57:02+08:00
   *
   * Owner: zhangxiang.01, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.tts_lang_detect': boolean;

  /**
   *
   * upload ai to gif（暫時關閉上傳組件生成gif功能，後續pm單讀需求開啓）
   *
   * Creator: ** yuwenbinjie **
   *
   * Create at 2024-10-16T11:35:08+08:00
   *
   * Owner: yuwenbinjie, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.upload_ai_gif': boolean;

  /**
   *
   * voice chat
   *
   * Creator: ** zhangxiang.01 **
   *
   * Create at 2024-05-19T18:39:52+08:00
   *
   * Owner: zhangxiang.01, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.voice_chat': boolean;

  /**
   *
   * haidilao speechRate
   *
   * Creator: ** zhangxiang.01 **
   *
   * Create at 2024-06-25T21:06:01+08:00
   *
   * Owner: zhangxiang.01, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.voice_chat_settings': boolean;

  /**
   *
   * 控制火山賬號融合功能上線
   *
   * Creator: ** chuzhu **
   *
   * Create at 2024-11-23T17:02:20+08:00
   *
   * Owner: chuzhu, fanwenjie.fe, duwenhan, geping
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.volc_login_account_combine': boolean;

  /**
   *
   * 綁定火山精調模型入口
   *
   * Creator: ** lihuiwen.123 **
   *
   * Create at 2024-05-11T15:51:26+08:00
   *
   * Owner: lihuiwen.123, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 0
   */
  'bot.studio.volcano_bind_entry': boolean;

  /**
   *
   * 火山綁定模型開關
   *
   * Creator: ** lihuiwen.123 **
   *
   * Create at 2024-05-11T15:40:42+08:00
   *
   * Owner: lihuiwen.123, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 0
   */
  'bot.studio.volcano_switch': boolean;

  /**
   *
   * chat area grab
   *
   * Creator: ** liushuoyan **
   *
   * Create at 2024-07-03T21:29:25+08:00
   *
   * Owner: liushuoyan, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 2
   */
  'bot.studio.word_grab': boolean;

  /**
   *
   * workflow as agent
   *
   * Creator: ** duwenhan **
   *
   * Create at 2024-06-26T22:14:47+08:00
   *
   * Owner: duwenhan, fanwenjie.fe
   *
   * SCM: obric/cloud/developer_admin_web; Path: /
   *
   * Status: 1
   */
  'bot.studio.workflow_as_agent': boolean;

  /**
   *
   * 小程序模版分包能力，由於支持 Chat 和 Markdown taro 版本，但是這個功能由於以前沒有嘗試過，所以還是一個試驗功能
   *
   * Creator: ** yangyu.1 **
   *
   * Create at 2025-01-22T17:32:19+08:00
   *
   * Owner: yangyu.1
   *
   * SCM: unknown; Path: /
   *
   * Status: 2
   */
  'bot.ui.builder.template.subcontracting': boolean;

  /**
   *
   * mockset功能降級開關
   *
   * Creator: ** lixubai **
   *
   * Create at 2024-03-18T21:37:13+08:00
   *
   * Owner: lixubai
   *
   * SCM: unknown; Path: /
   *
   * Status: 2
   */
  'bot.workflow.mockset': boolean;

  /**
   *
   * 執行歷史遷移，是否初始化NDB
   *
   * Creator: ** lixubai **
   *
   * Create at 2024-06-11T11:19:06+08:00
   *
   * Owner: lixubai
   *
   * SCM: unknown; Path: /
   *
   * Status: 2
   */
  'bot.workflow.ndb.init': boolean;

  /**
   *
   * BotWorkflow節點執行歷史遷移
   *
   * Creator: ** lixubai **
   *
   * Create at 2024-05-15T22:35:08+08:00
   *
   * Owner: lixubai
   *
   * SCM: unknown; Path: /
   *
   * Status: 2
   */
  'bot.workflow.node.history.move': boolean;

  /**
   *
   * BotWorkflow執行歷史遷移切讀
   *
   * Creator: ** lixubai **
   *
   * Create at 2024-05-27T21:05:06+08:00
   *
   * Owner: lixubai
   *
   * SCM: unknown; Path: /
   *
   * Status: 2
   */
  'bot.workflow.node.history.read': boolean;

  /**
   *
   * 是否使用RMQ方式記錄執行歷史
   *
   * Creator: ** lixubai **
   *
   * Create at 2024-05-28T23:02:15+08:00
   *
   * Owner: lixubai
   *
   * SCM: unknown; Path: /
   *
   * Status: 1
   */
  'bot.workflow.node.history.rmq': boolean;

  /**
   *
   * BotWorkflow節點執行歷史停寫
   *
   * Creator: ** lixubai **
   *
   * Create at 2024-05-15T22:36:18+08:00
   *
   * Owner: lixubai
   *
   * SCM: unknown; Path: /
   *
   * Status: 2
   */
  'bot.workflow.node.history.stop': boolean;

  /**
   *
   * 123123123123
   *
   * Creator: ** liangjinshuo **
   *
   * Create at 2024-03-26T16:50:23+08:00
   *
   * Owner: liangjinshuo
   *
   * SCM: unknown; Path: /
   *
   * Status: 1
   */
  devops_test_bot_debug: boolean;

  /**
   *
   * 遷移空間時開啓【一鍵授權】方式
   *
   * Creator: ** fanchen **
   *
   * Create at 2025-04-24T16:27:44+08:00
   *
   * Owner: fanchen, sunzhiyuan.evan, sunkuo
   *
   * SCM: unknown; Path: /
   *
   * Status: 2
   */
  'enterprise.space.enable_auto_migrate_auth': boolean;

  /**
   *
   * 測試能否按地區進行灰度
   *
   * Creator: ** zhuxiaowei.711 **
   *
   * Create at 2024-12-17T11:21:09+08:00
   *
   * Owner: zhuxiaowei.711
   *
   * SCM: unknown; Path: /
   *
   * Status: 0
   */
  test_country: boolean;
}
