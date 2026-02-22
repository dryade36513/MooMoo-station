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

import * as agent_provider from './namespaces/agent_provider';
import * as base from './namespaces/base';
import * as bot_schema from './namespaces/bot_schema';
import * as copilot from './namespaces/copilot';
import * as copilot_common from './namespaces/copilot_common';
import * as event from './namespaces/event';
import * as hook_common from './namespaces/hook_common';
import * as kctx from './namespaces/kctx';
import * as permission from './namespaces/permission';
import * as resource from './namespaces/resource';
import * as resource_common from './namespaces/resource_common';
import * as trace from './namespaces/trace';
import * as trigger from './namespaces/trigger';
import * as wf_openapi from './namespaces/wf_openapi';
import * as workflow from './namespaces/workflow';

export {
  agent_provider,
  base,
  bot_schema,
  copilot,
  copilot_common,
  event,
  hook_common,
  kctx,
  permission,
  resource,
  resource_common,
  trace,
  trigger,
  wf_openapi,
  workflow,
};
export * from './namespaces/agent_provider';
export * from './namespaces/base';
export * from './namespaces/bot_schema';
export * from './namespaces/copilot';
export * from './namespaces/copilot_common';
export * from './namespaces/event';
export * from './namespaces/hook_common';
export * from './namespaces/kctx';
export * from './namespaces/permission';
export * from './namespaces/resource';
export * from './namespaces/resource_common';
export * from './namespaces/trace';
export * from './namespaces/trigger';
export * from './namespaces/wf_openapi';
export * from './namespaces/workflow';

export type Int64 = string | number;

export default class WorkflowApiService<T> {
  private request: any = () => {
    throw new Error('WorkflowApiService.request is undefined');
  };
  private baseURL: string | ((path: string) => string) = '';

  constructor(options?: {
    baseURL?: string | ((path: string) => string);
    request?<R>(
      params: {
        url: string;
        method: 'GET' | 'DELETE' | 'POST' | 'PUT' | 'PATCH';
        data?: any;
        params?: any;
        headers?: any;
      },
      options?: T,
    ): Promise<R>;
  }) {
    this.request = options?.request || this.request;
    this.baseURL = options?.baseURL || '';
  }

  private genBaseURL(path: string) {
    return typeof this.baseURL === 'string'
      ? this.baseURL + path
      : this.baseURL(path);
  }

  /**
   * POST /api/workflow_api/create
   *
   * HTTP
   *
   * 創建流程
   */
  CreateWorkflow(
    req: workflow.CreateWorkflowRequest,
    options?: T,
  ): Promise<workflow.CreateWorkflowResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/create');
    const method = 'POST';
    const data = {
      name: _req['name'],
      desc: _req['desc'],
      icon_uri: _req['icon_uri'],
      space_id: _req['space_id'],
      flow_mode: _req['flow_mode'],
      schema_type: _req['schema_type'],
      bind_biz_id: _req['bind_biz_id'],
      bind_biz_type: _req['bind_biz_type'],
      project_id: _req['project_id'],
      create_conversation: _req['create_conversation'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/workflow_api/save
   *
   * 保存流程
   */
  SaveWorkflow(
    req: workflow.SaveWorkflowRequest,
    options?: T,
  ): Promise<workflow.SaveWorkflowResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/save');
    const method = 'POST';
    const data = {
      workflow_id: _req['workflow_id'],
      schema: _req['schema'],
      space_id: _req['space_id'],
      name: _req['name'],
      desc: _req['desc'],
      icon_uri: _req['icon_uri'],
      submit_commit_id: _req['submit_commit_id'],
      ignore_status_transfer: _req['ignore_status_transfer'],
      save_version: _req['save_version'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/workflow_api/latest
   *
   * 檢查流程最新的提交版本。在多人協作場景下，用這個接口檢查自己的草稿版本是否基於最新的提交版本分支出來的
   */
  CheckLatestSubmitVersion(
    req: workflow.CheckLatestSubmitVersionRequest,
    options?: T,
  ): Promise<workflow.CheckLatestSubmitVersionResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/latest');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      workflow_id: _req['workflow_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/submit */
  SubmitWorkflow(
    req: workflow.SubmitWorkflowRequest,
    options?: T,
  ): Promise<workflow.SubmitWorkflowResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/submit');
    const method = 'POST';
    const data = {
      workflow_id: _req['workflow_id'],
      space_id: _req['space_id'],
      desc: _req['desc'],
      force: _req['force'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/conflict_from */
  GetConflictFromContent(
    req: workflow.GetConflictFromContentRequest,
    options?: T,
  ): Promise<workflow.GetConflictFromContentResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/conflict_from');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      workflow_id: _req['workflow_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/operate_list */
  OperateList(
    req: workflow.OperateListRequest,
    options?: T,
  ): Promise<workflow.OperateListResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/operate_list');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      workflow_id: _req['workflow_id'],
      limit: _req['limit'],
      last_commit_id: _req['last_commit_id'],
      type: _req['type'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/differences */
  ShowDifferences(
    req: workflow.ShowDifferencesRequest,
    options?: T,
  ): Promise<workflow.ShowDifferencesResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/differences');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      workflow_id: _req['workflow_id'],
      type: _req['type'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/revert */
  RevertDraft(
    req: workflow.RevertDraftRequest,
    options?: T,
  ): Promise<workflow.RevertDraftResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/revert');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      workflow_id: _req['workflow_id'],
      commit_id: _req['commit_id'],
      type: _req['type'],
      env: _req['env'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/delete */
  DeleteWorkflow(
    req: workflow.DeleteWorkflowRequest,
    options?: T,
  ): Promise<workflow.DeleteWorkflowResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/delete');
    const method = 'POST';
    const data = {
      workflow_id: _req['workflow_id'],
      space_id: _req['space_id'],
      action: _req['action'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/workflow_api/workflow_references
   *
   * 查詢指定工作流被哪些其他工作流所引用。
   */
  GetWorkflowReferences(
    req: workflow.GetWorkflowReferencesRequest,
    options?: T,
  ): Promise<workflow.GetWorkflowReferencesResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/workflow_references');
    const method = 'POST';
    const data = {
      workflow_id: _req['workflow_id'],
      space_id: _req['space_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/released_workflows */
  GetReleasedWorkflows(
    req?: workflow.GetReleasedWorkflowsRequest,
    options?: T,
  ): Promise<workflow.GetReleasedWorkflowsResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/workflow_api/released_workflows');
    const method = 'POST';
    const data = {
      page: _req['page'],
      size: _req['size'],
      type: _req['type'],
      name: _req['name'],
      workflow_ids: _req['workflow_ids'],
      tags: _req['tags'],
      space_id: _req['space_id'],
      order_by: _req['order_by'],
      login_user_create: _req['login_user_create'],
      flow_mode: _req['flow_mode'],
      workflow_filter_list: _req['workflow_filter_list'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/workflow_api/canvas
   *
   * 獲取流程編輯態詳情，包括畫布信息、節點信息、邊信息、變量信息、權限信息、版本信息等
   */
  GetCanvasInfo(
    req: workflow.GetCanvasInfoRequest,
    options?: T,
  ): Promise<workflow.GetCanvasInfoResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/canvas');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      workflow_id: _req['workflow_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/merge */
  MergeWorkflow(
    req: workflow.MergeWorkflowRequest,
    options?: T,
  ): Promise<workflow.MergeWorkflowResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/merge');
    const method = 'POST';
    const data = {
      workflow_id: _req['workflow_id'],
      schema: _req['schema'],
      space_id: _req['space_id'],
      name: _req['name'],
      desc: _req['desc'],
      icon_uri: _req['icon_uri'],
      submit_commit_id: _req['submit_commit_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/history_schema */
  GetHistorySchema(
    req: workflow.GetHistorySchemaRequest,
    options?: T,
  ): Promise<workflow.GetHistorySchemaResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/history_schema');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      workflow_id: _req['workflow_id'],
      commit_id: _req['commit_id'],
      type: _req['type'],
      env: _req['env'],
      workflow_version: _req['workflow_version'],
      project_version: _req['project_version'],
      project_id: _req['project_id'],
      execute_id: _req['execute_id'],
      sub_execute_id: _req['sub_execute_id'],
      log_id: _req['log_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/workflow_api/workflow_list
   *
   * 獲取流程列表。
   */
  GetWorkFlowList(
    req?: workflow.GetWorkFlowListRequest,
    options?: T,
  ): Promise<workflow.GetWorkFlowListResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/workflow_api/workflow_list');
    const method = 'POST';
    const data = {
      page: _req['page'],
      size: _req['size'],
      workflow_ids: _req['workflow_ids'],
      type: _req['type'],
      name: _req['name'],
      tags: _req['tags'],
      space_id: _req['space_id'],
      status: _req['status'],
      order_by: _req['order_by'],
      login_user_create: _req['login_user_create'],
      flow_mode: _req['flow_mode'],
      schema_type_list: _req['schema_type_list'],
      project_id: _req['project_id'],
      checker: _req['checker'],
      bind_biz_id: _req['bind_biz_id'],
      bind_biz_type: _req['bind_biz_type'],
      project_version: _req['project_version'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/workflow_api/node_type
   *
   * 查詢流程中的節點類型
   */
  QueryWorkflowNodeTypes(
    req?: workflow.QueryWorkflowNodeTypeRequest,
    options?: T,
  ): Promise<workflow.QueryWorkflowNodeTypeResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/workflow_api/node_type');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      workflow_id: _req['workflow_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/workflow_api/list_collaborators
   *
   * 查詢協作者列表
   */
  ListCollaborators(
    req: workflow.ListCollaboratorsRequest,
    options?: T,
  ): Promise<workflow.ListCollaboratorsResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/list_collaborators');
    const method = 'POST';
    const data = {
      workflow_id: _req['workflow_id'],
      space_id: _req['space_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/workflow_api/test_run
   *
   * 試運行流程（test run）異步接口，需要輪詢GetWorkFlowProcess接口來進行流程運行結果的檢查
   */
  WorkFlowTestRun(
    req: workflow.WorkFlowTestRunRequest,
    options?: T,
  ): Promise<workflow.WorkFlowTestRunResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/test_run');
    const method = 'POST';
    const data = {
      workflow_id: _req['workflow_id'],
      input: _req['input'],
      space_id: _req['space_id'],
      bot_id: _req['bot_id'],
      submit_commit_id: _req['submit_commit_id'],
      commit_id: _req['commit_id'],
      project_id: _req['project_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/workflow_api/publish
   *
   * 發佈流程。該接口的用途是發佈非 project 內部的流程。
   */
  PublishWorkflow(
    req: workflow.PublishWorkflowRequest,
    options?: T,
  ): Promise<workflow.PublishWorkflowResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/publish');
    const method = 'POST';
    const data = {
      workflow_id: _req['workflow_id'],
      space_id: _req['space_id'],
      has_collaborator: _req['has_collaborator'],
      env: _req['env'],
      commit_id: _req['commit_id'],
      force: _req['force'],
      workflow_version: _req['workflow_version'],
      version_description: _req['version_description'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * GET /api/workflow_api/get_process
   *
   * 查看試運行執行歷史。在試運行時需要輪詢查看一個流程的試運行執行歷史。
   */
  GetWorkFlowProcess(
    req: workflow.GetWorkflowProcessRequest,
    options?: T,
  ): Promise<workflow.GetWorkflowProcessResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/get_process');
    const method = 'GET';
    const params = {
      workflow_id: _req['workflow_id'],
      space_id: _req['space_id'],
      execute_id: _req['execute_id'],
      sub_execute_id: _req['sub_execute_id'],
      need_async: _req['need_async'],
      log_id: _req['log_id'],
      node_id: _req['node_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, params }, options);
  }

  /** POST /api/workflow_api/copy */
  CopyWorkflow(
    req: workflow.CopyWorkflowRequest,
    options?: T,
  ): Promise<workflow.CopyWorkflowResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/copy');
    const method = 'POST';
    const data = {
      workflow_id: _req['workflow_id'],
      space_id: _req['space_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/data_compensation */
  DataCompensation(
    req: workflow.DataCompensationRequest,
    options?: T,
  ): Promise<workflow.DataCompensationResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/data_compensation');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      workflow_id: _req['workflow_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/workflow_api/upload/auth_token
   *
   * 文件上傳
   */
  GetUploadAuthToken(
    req?: workflow.GetUploadAuthTokenRequest,
    options?: T,
  ): Promise<workflow.GetUploadAuthTokenResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/workflow_api/upload/auth_token');
    const method = 'POST';
    const data = { scene: _req['scene'], Base: _req['Base'] };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/sign_image_url */
  SignImageURL(
    req: workflow.SignImageURLRequest,
    options?: T,
  ): Promise<workflow.SignImageURLResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/sign_image_url');
    const method = 'POST';
    const data = { uri: _req['uri'], Scene: _req['Scene'], Base: _req['Base'] };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/gray_feature */
  GetWorkflowGrayFeature(
    req?: workflow.GetWorkflowGrayFeatureRequest,
    options?: T,
  ): Promise<workflow.GetWorkflowGrayFeatureResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/workflow_api/gray_feature');
    const method = 'POST';
    const data = { space_id: _req['space_id'], Base: _req['Base'] };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/old_publish */
  PublishWorkflowV2(
    req: workflow.PublishWorkflowV2Request,
    options?: T,
  ): Promise<workflow.PublishWorkflowV2Response> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/old_publish');
    const method = 'POST';
    const data = {
      workflow_id: _req['workflow_id'],
      space_id: _req['space_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/workflow_api/template_tag
   *
   * Old Service
   */
  WorkFlowTemplateTag(
    req?: workflow.WorkFlowTemplateTagRequest,
    options?: T,
  ): Promise<workflow.WorkFlowTemplateTagResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/workflow_api/template_tag');
    const method = 'POST';
    const data = { flow_mode: _req['flow_mode'], Base: _req['Base'] };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/old_validate */
  ValidateSchema(
    req: workflow.ValidateSchemaRequest,
    options?: T,
  ): Promise<workflow.ValidateSchemaResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/old_validate');
    const method = 'POST';
    const data = {
      schema: _req['schema'],
      bind_project_id: _req['bind_project_id'],
      bind_bot_id: _req['bind_bot_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/old_create */
  CreateWorkflowV2(
    req: workflow.CreateWorkflowV2Request,
    options?: T,
  ): Promise<workflow.CreateWorkflowV2Response> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/old_create');
    const method = 'POST';
    const data = {
      name: _req['name'],
      desc: _req['desc'],
      icon_uri: _req['icon_uri'],
      space_id: _req['space_id'],
      flow_mode: _req['flow_mode'],
      bind_biz_id: _req['bind_biz_id'],
      bind_biz_type: _req['bind_biz_type'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/old_save */
  SaveWorkflowV2(
    req: workflow.SaveWorkflowV2Request,
    options?: T,
  ): Promise<workflow.SaveWorkflowV2Response> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/old_save');
    const method = 'POST';
    const data = {
      workflow_id: _req['workflow_id'],
      schema: _req['schema'],
      space_id: _req['space_id'],
      name: _req['name'],
      desc: _req['desc'],
      icon_uri: _req['icon_uri'],
      ignore_status_transfer: _req['ignore_status_transfer'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/old_query */
  QueryWorkflowV2(
    req: workflow.QueryWorkflowV2Request,
    options?: T,
  ): Promise<workflow.QueryWorkflowV2Response> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/old_query');
    const method = 'POST';
    const data = {
      workflow_id: _req['workflow_id'],
      space_id: _req['space_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/old_list */
  WorkflowListV2(
    req?: workflow.WorkflowListV2Request,
    options?: T,
  ): Promise<workflow.WorkflowListV2Response> {
    const _req = req || {};
    const url = this.genBaseURL('/api/workflow_api/old_list');
    const method = 'POST';
    const data = {
      page: _req['page'],
      size: _req['size'],
      workflow_ids: _req['workflow_ids'],
      type: _req['type'],
      name: _req['name'],
      tags: _req['tags'],
      space_id: _req['space_id'],
      status: _req['status'],
      order_by: _req['order_by'],
      login_user_create: _req['login_user_create'],
      flow_mode: _req['flow_mode'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/old_testRun */
  WorkflowTestRunV2(
    req?: workflow.WorkFlowTestRunV2Request,
    options?: T,
  ): Promise<workflow.WorkFlowTestRunV2Response> {
    const _req = req || {};
    const url = this.genBaseURL('/api/workflow_api/old_testRun');
    const method = 'POST';
    const data = {
      workflow_id: _req['workflow_id'],
      input: _req['input'],
      space_id: _req['space_id'],
      bot_id: _req['bot_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/cancel */
  CancelWorkFlow(
    req: workflow.CancelWorkFlowRequest,
    options?: T,
  ): Promise<workflow.CancelWorkFlowResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/cancel');
    const method = 'POST';
    const data = {
      execute_id: _req['execute_id'],
      space_id: _req['space_id'],
      workflow_id: _req['workflow_id'],
      async_subflow: _req['async_subflow'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/old_delete */
  DeleteWorkflowV2(
    req: workflow.DeleteWorkflowV2Request,
    options?: T,
  ): Promise<workflow.DeleteWorkflowV2Response> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/old_delete');
    const method = 'POST';
    const data = { workflow_id: _req['workflow_id'], Base: _req['Base'] };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/workflow_api/node_template_list
   *
   * 查詢節點模板列表
   */
  NodeTemplateList(
    req?: workflow.NodeTemplateListRequest,
    options?: T,
  ): Promise<workflow.NodeTemplateListResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/workflow_api/node_template_list');
    const method = 'POST';
    const data = {
      need_types: _req['need_types'],
      node_types: _req['node_types'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/workflow_api/imageflow_basic_nodes
   *
   * imageflow
   */
  GetImageflowBasicNodeList(
    req?: workflow.GetImageflowBasicNodeListRequest,
    options?: T,
  ): Promise<workflow.GetImageflowBasicNodeListResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/workflow_api/imageflow_basic_nodes');
    const method = 'POST';
    const data = { tab_type: _req['tab_type'], Base: _req['Base'] };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /v1/workflow/run
   *
   * OpenAPI
   *
   * OpenAPI運行流程。執行已發佈的工作流 (非流式)
   */
  OpenAPIRunFlow(
    req?: workflow.OpenAPIRunFlowRequest,
    options?: T,
  ): Promise<workflow.OpenAPIRunFlowResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/v1/workflow/run');
    const method = 'POST';
    const data = {
      workflow_id: _req['workflow_id'],
      parameters: _req['parameters'],
      ext: _req['ext'],
      bot_id: _req['bot_id'],
      is_async: _req['is_async'],
      execute_mode: _req['execute_mode'],
      version: _req['version'],
      connector_id: _req['connector_id'],
      app_id: _req['app_id'],
      project_id: _req['project_id'],
      app_version: _req['app_version'],
      workflow_version: _req['workflow_version'],
    };
    return this.request({ url, method, data }, options);
  }

  /** GET /api/workflow_api/message_nodes */
  GetWorkflowMessageNodes(
    req?: workflow.GetWorkflowMessageNodesRequest,
    options?: T,
  ): Promise<workflow.GetWorkflowMessageNodesResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/workflow_api/message_nodes');
    const method = 'GET';
    const params = {
      space_id: _req['space_id'],
      plugin_id: _req['plugin_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, params }, options);
  }

  /** POST /api/workflow_api/nodeDebug */
  WorkflowNodeDebugV2(
    req?: workflow.WorkflowNodeDebugV2Request,
    options?: T,
  ): Promise<workflow.WorkflowNodeDebugV2Response> {
    const _req = req || {};
    const url = this.genBaseURL('/api/workflow_api/nodeDebug');
    const method = 'POST';
    const data = {
      workflow_id: _req['workflow_id'],
      node_id: _req['node_id'],
      input: _req['input'],
      batch: _req['batch'],
      space_id: _req['space_id'],
      bot_id: _req['bot_id'],
      project_id: _req['project_id'],
      setting: _req['setting'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * GET /api/workflow_api/apiDetail
   *
   * 獲取workflow引用的插件工具詳情
   */
  GetApiDetail(
    req?: workflow.GetApiDetailRequest,
    options?: T,
  ): Promise<workflow.GetApiDetailResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/workflow_api/apiDetail');
    const method = 'GET';
    const params = {
      pluginID: _req['pluginID'],
      apiName: _req['apiName'],
      space_id: _req['space_id'],
      api_id: _req['api_id'],
      project_id: _req['project_id'],
      plugin_version: _req['plugin_version'],
      plugin_from: _req['plugin_from'],
      Base: _req['Base'],
    };
    return this.request({ url, method, params }, options);
  }

  /** GET /api/workflow_api/bots_ide_token */
  GetBotsIDEToken(
    req?: workflow.GetBotsIDETokenRequest,
    options?: T,
  ): Promise<workflow.GetBotsIDETokenResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/workflow_api/bots_ide_token');
    const method = 'GET';
    const params = {
      space_id: _req['space_id'],
      can_write: _req['can_write'],
      Base: _req['Base'],
    };
    return this.request({ url, method, params }, options);
  }

  /** POST /api/workflow_api/old_copy */
  CopyWorkflowV2(
    req: workflow.CopyWorkflowV2Request,
    options?: T,
  ): Promise<workflow.CopyWorkflowV2Response> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/old_copy');
    const method = 'POST';
    const data = {
      workflow_id: _req['workflow_id'],
      space_id: _req['space_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/delete_strategy */
  GetDeleteStrategy(
    req: workflow.GetDeleteStrategyRequest,
    options?: T,
  ): Promise<workflow.GetDeleteStrategyResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/delete_strategy');
    const method = 'POST';
    const data = {
      workflow_id: _req['workflow_id'],
      space_id: _req['space_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/listable_workflows */
  GetListableWorkflows(
    req: workflow.GetListableWorkflowsRequest,
    options?: T,
  ): Promise<workflow.GetListableWorkflowsResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/listable_workflows');
    const method = 'POST';
    const data = {
      space_id_list: _req['space_id_list'],
      page: _req['page'],
      size: _req['size'],
      flow_mode: _req['flow_mode'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/copy_wk_template */
  CopyWkTemplateApi(
    req: workflow.CopyWkTemplateApiRequest,
    options?: T,
  ): Promise<workflow.CopyWkTemplateApiResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/copy_wk_template');
    const method = 'POST';
    const data = {
      workflow_ids: _req['workflow_ids'],
      target_space_id: _req['target_space_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/delete_env */
  DeleteEnv(
    req: workflow.DeleteEnvRequest,
    options?: T,
  ): Promise<workflow.DeleteEnvResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/delete_env');
    const method = 'POST';
    const data = {
      workflow_id: _req['workflow_id'],
      space_id: _req['space_id'],
      env: _req['env'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/update_meta */
  UpdateWorkflowMeta(
    req: workflow.UpdateWorkflowMetaRequest,
    options?: T,
  ): Promise<workflow.UpdateWorkflowMetaResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/update_meta');
    const method = 'POST';
    const data = {
      workflow_id: _req['workflow_id'],
      space_id: _req['space_id'],
      name: _req['name'],
      desc: _req['desc'],
      icon_uri: _req['icon_uri'],
      flow_mode: _req['flow_mode'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/env_list */
  GetEnvList(
    req: workflow.GetEnvListRequest,
    options?: T,
  ): Promise<workflow.GetEnvListResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/env_list');
    const method = 'POST';
    const data = {
      workflow_id: _req['workflow_id'],
      space_id: _req['space_id'],
      limit: _req['limit'],
      cursor: _req['cursor'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/version_list */
  VersionHistoryList(
    req: workflow.VersionHistoryListRequest,
    options?: T,
  ): Promise<workflow.VersionHistoryListResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/version_list');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      workflow_id: _req['workflow_id'],
      type: _req['type'],
      limit: _req['limit'],
      commit_ids: _req['commit_ids'],
      cursor: _req['cursor'],
      order_by: _req['order_by'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/workflow_api/test_resume
   *
   * 流程中斷後的恢復，部分流程在運行中會中斷，在流程掛起後需要用該接口恢復運行流程
   */
  WorkFlowTestResume(
    req: workflow.WorkflowTestResumeRequest,
    options?: T,
  ): Promise<workflow.WorkflowTestResumeResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/test_resume');
    const method = 'POST';
    const data = {
      workflow_id: _req['workflow_id'],
      execute_id: _req['execute_id'],
      event_id: _req['event_id'],
      data: _req['data'],
      space_id: _req['space_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/open_collaborator */
  OpenCollaborator(
    req: workflow.OpenCollaboratorRequest,
    options?: T,
  ): Promise<workflow.OpenCollaboratorResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/open_collaborator');
    const method = 'POST';
    const data = {
      workflow_id: _req['workflow_id'],
      space_id: _req['space_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/close_collaborator */
  CloseCollaborator(
    req: workflow.CloseCollaboratorRequest,
    options?: T,
  ): Promise<workflow.CloseCollaboratorResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/close_collaborator');
    const method = 'POST';
    const data = {
      workflow_id: _req['workflow_id'],
      space_id: _req['space_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/batch_get_wkprocess_io */
  BatchGetWkProcessIO(
    req?: workflow.BatchGetWkProcessIORequest,
    options?: T,
  ): Promise<workflow.BatchGetWkProcessIOResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/workflow_api/batch_get_wkprocess_io');
    const method = 'POST';
    const data = {
      workflow_params: _req['workflow_params'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** GET /api/workflow_api/store_testrun_history */
  GetStoreTestRunHistory(
    req?: workflow.GetStoreTestRunHistoryRequest,
    options?: T,
  ): Promise<workflow.GetStoreTestRunHistoryResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/workflow_api/store_testrun_history');
    const method = 'GET';
    const params = {
      source_workflow_id: _req['source_workflow_id'],
      execute_id: _req['execute_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, params }, options);
  }

  /**
   * POST /v1/workflow/stream_run
   *
   * OpenAPI流式運行流程。執行資源庫內已發佈的工作流 或 project內的工作流，響應方式爲流式響應。
   */
  OpenAPIStreamRunFlow(
    req?: workflow.OpenAPIRunFlowRequest,
    options?: T,
  ): Promise<workflow.OpenAPIStreamRunFlowResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/v1/workflow/stream_run');
    const method = 'POST';
    const data = {
      workflow_id: _req['workflow_id'],
      parameters: _req['parameters'],
      ext: _req['ext'],
      bot_id: _req['bot_id'],
      is_async: _req['is_async'],
      execute_mode: _req['execute_mode'],
      version: _req['version'],
      connector_id: _req['connector_id'],
      app_id: _req['app_id'],
      project_id: _req['project_id'],
      app_version: _req['app_version'],
      workflow_version: _req['workflow_version'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * GET /v1/workflow/get_run_history
   *
   * OpenAPI查詢工作流異步執行結果。工作流異步運行後，查看執行結果。
   */
  OpenAPIGetWorkflowRunHistory(
    req: workflow.GetWorkflowRunHistoryRequest,
    options?: T,
  ): Promise<workflow.GetWorkflowRunHistoryResponse> {
    const _req = req;
    const url = this.genBaseURL('/v1/workflow/get_run_history');
    const method = 'GET';
    const params = {
      workflow_id: _req['workflow_id'],
      execute_id: _req['execute_id'],
    };
    return this.request({ url, method, params }, options);
  }

  /**
   * POST /v1/workflow/stream_resume
   *
   * OpenAPI恢復運行工作流。恢復運行已中斷的工作流，響應方式爲流式響應。
   */
  OpenAPIStreamResumeFlow(
    req?: workflow.OpenAPIStreamResumeFlowRequest,
    options?: T,
  ): Promise<workflow.OpenAPIStreamRunFlowResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/v1/workflow/stream_resume');
    const method = 'POST';
    const data = {
      event_id: _req['event_id'],
      interrupt_type: _req['interrupt_type'],
      resume_data: _req['resume_data'],
      ext: _req['ext'],
      workflow_id: _req['workflow_id'],
      connector_id: _req['connector_id'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/biz_list */
  WorkflowListByBindBiz(
    req?: workflow.WorkflowListByBindBizRequest,
    options?: T,
  ): Promise<workflow.WorkflowListByBindBizResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/workflow_api/biz_list');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      bind_biz_id: _req['bind_biz_id'],
      bind_biz_type: _req['bind_biz_type'],
      status: _req['status'],
      login_user_create: _req['login_user_create'],
      flow_mode: _req['flow_mode'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/workflow_api/behavior_auth
   *
   * 用於處理用戶在工作流相關操作（如協作者管理）時的權限校驗和配置獲取的核心接口。它根據用戶嘗試的行爲類型（ActionType）和相關上下文（如 WorkflowId, SpaceId），判斷用戶是否有權執行該操作，並返回相應的權限結果以及與用戶等級相關的配置信息。
   */
  UserBehaviorAuth(
    req: workflow.UserBehaviorAuthRequest,
    options?: T,
  ): Promise<workflow.UserBehaviorAuthResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/behavior_auth');
    const method = 'POST';
    const data = {
      workflow_id: _req['workflow_id'],
      space_id: _req['space_id'],
      action_type: _req['action_type'],
      only_config_item: _req['only_config_item'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/old_biz_list */
  WorkflowListByBindBizV2(
    req?: workflow.WorkflowListByBindBizV2Request,
    options?: T,
  ): Promise<workflow.WorkflowListByBindBizV2Response> {
    const _req = req || {};
    const url = this.genBaseURL('/api/workflow_api/old_biz_list');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      bind_biz_id: _req['bind_biz_id'],
      bind_biz_type: _req['bind_biz_type'],
      status: _req['status'],
      login_user_create: _req['login_user_create'],
      flow_mode: _req['flow_mode'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/workflow_api/stream_run_flow
   *
   * 給工作流模版提供的流式運行接口
   */
  StreamRunFlowHTTP(
    req: workflow.RunFlowHTTPRequest,
    options?: T,
  ): Promise<workflow.StreamRunFlowHTTPResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/stream_run_flow');
    const method = 'POST';
    const data = {
      workflow_id: _req['workflow_id'],
      input: _req['input'],
      space_id: _req['space_id'],
      bot_id: _req['bot_id'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/op_workflow/history_schema */
  OPGetHistorySchema(
    req: workflow.GetHistorySchemaRequest,
    options?: T,
  ): Promise<workflow.GetHistorySchemaResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/op_workflow/history_schema');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      workflow_id: _req['workflow_id'],
      commit_id: _req['commit_id'],
      type: _req['type'],
      env: _req['env'],
      workflow_version: _req['workflow_version'],
      project_version: _req['project_version'],
      project_id: _req['project_id'],
      execute_id: _req['execute_id'],
      sub_execute_id: _req['sub_execute_id'],
      log_id: _req['log_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** GET /api/op_workflow/get_process */
  OPGetWorkFlowProcess(
    req: workflow.GetWorkflowProcessRequest,
    options?: T,
  ): Promise<workflow.GetWorkflowProcessResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/op_workflow/get_process');
    const method = 'GET';
    const params = {
      workflow_id: _req['workflow_id'],
      space_id: _req['space_id'],
      execute_id: _req['execute_id'],
      sub_execute_id: _req['sub_execute_id'],
      need_async: _req['need_async'],
      log_id: _req['log_id'],
      node_id: _req['node_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, params }, options);
  }

  /**
   * POST /api/op_workflow/canvas
   *
   * 運維後臺的接口，接口以OP爲前綴，http的path前綴爲 /api/op_workflow/
   */
  OPGetCanvasInfo(
    req: workflow.GetCanvasInfoRequest,
    options?: T,
  ): Promise<workflow.GetCanvasInfoResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/op_workflow/canvas');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      workflow_id: _req['workflow_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/op_workflow/workflow_references */
  OPGetWorkflowReferences(
    req: workflow.GetWorkflowReferencesRequest,
    options?: T,
  ): Promise<workflow.GetWorkflowReferencesResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/op_workflow/workflow_references');
    const method = 'POST';
    const data = {
      workflow_id: _req['workflow_id'],
      space_id: _req['space_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** GET /api/op_workflow/apiDetail */
  OPGetApiDetail(
    req?: workflow.GetApiDetailRequest,
    options?: T,
  ): Promise<workflow.GetApiDetailResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/op_workflow/apiDetail');
    const method = 'GET';
    const params = {
      pluginID: _req['pluginID'],
      apiName: _req['apiName'],
      space_id: _req['space_id'],
      api_id: _req['api_id'],
      project_id: _req['project_id'],
      plugin_version: _req['plugin_version'],
      plugin_from: _req['plugin_from'],
      Base: _req['Base'],
    };
    return this.request({ url, method, params }, options);
  }

  /** POST /api/op_workflow/released_workflows */
  OPGetReleasedWorkflows(
    req?: workflow.GetReleasedWorkflowsRequest,
    options?: T,
  ): Promise<workflow.GetReleasedWorkflowsResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/op_workflow/released_workflows');
    const method = 'POST';
    const data = {
      page: _req['page'],
      size: _req['size'],
      type: _req['type'],
      name: _req['name'],
      workflow_ids: _req['workflow_ids'],
      tags: _req['tags'],
      space_id: _req['space_id'],
      order_by: _req['order_by'],
      login_user_create: _req['login_user_create'],
      flow_mode: _req['flow_mode'],
      workflow_filter_list: _req['workflow_filter_list'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/op_workflow/gray_feature */
  OPGetWorkflowGrayFeature(
    req?: workflow.GetWorkflowGrayFeatureRequest,
    options?: T,
  ): Promise<workflow.GetWorkflowGrayFeatureResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/op_workflow/gray_feature');
    const method = 'POST';
    const data = { space_id: _req['space_id'], Base: _req['Base'] };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/op_workflow/node_template_list */
  OPNodeTemplateList(
    req?: workflow.NodeTemplateListRequest,
    options?: T,
  ): Promise<workflow.NodeTemplateListResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/op_workflow/node_template_list');
    const method = 'POST';
    const data = {
      need_types: _req['need_types'],
      node_types: _req['node_types'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/op_workflow/latest */
  OPCheckLatestSubmitVersion(
    req: workflow.CheckLatestSubmitVersionRequest,
    options?: T,
  ): Promise<workflow.CheckLatestSubmitVersionResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/op_workflow/latest');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      workflow_id: _req['workflow_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/op_workflow/imageflow_basic_nodes */
  OPGetImageflowBasicNodeList(
    req?: workflow.GetImageflowBasicNodeListRequest,
    options?: T,
  ): Promise<workflow.GetImageflowBasicNodeListResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/op_workflow/imageflow_basic_nodes');
    const method = 'POST';
    const data = { tab_type: _req['tab_type'], Base: _req['Base'] };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/batch_delete */
  BatchDeleteWorkflow(
    req: workflow.BatchDeleteWorkflowRequest,
    options?: T,
  ): Promise<workflow.BatchDeleteWorkflowResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/batch_delete');
    const method = 'POST';
    const data = {
      workflow_id_list: _req['workflow_id_list'],
      space_id: _req['space_id'],
      action: _req['action'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/get_trace */
  GetTraceSDK(
    req?: trace.GetTraceSDKRequest,
    options?: T,
  ): Promise<trace.GetTraceSDKResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/workflow_api/get_trace');
    const method = 'POST';
    const data = { Base: _req['Base'] };
    const params = {
      log_id: _req['log_id'],
      start_at: _req['start_at'],
      end_at: _req['end_at'],
      workflow_id: _req['workflow_id'],
      execute_id: _req['execute_id'],
    };
    return this.request({ url, method, data, params }, options);
  }

  /**
   * POST /api/workflow_api/list_spans
   *
   * Trace
   *
   * 列出歷史執行的trace
   */
  ListRootSpans(
    req: trace.ListRootSpansRequest,
    options?: T,
  ): Promise<trace.ListRootSpansResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/list_spans');
    const method = 'POST';
    const data = {
      start_at: _req['start_at'],
      end_at: _req['end_at'],
      limit: _req['limit'],
      desc_by_start_time: _req['desc_by_start_time'],
      offset: _req['offset'],
      workflow_id: _req['workflow_id'],
      input: _req['input'],
      status: _req['status'],
      execute_mode: _req['execute_mode'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/workflow_detail */
  GetWorkflowDetail(
    req?: workflow.GetWorkflowDetailRequest,
    options?: T,
  ): Promise<workflow.GetWorkflowDetailResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/workflow_api/workflow_detail');
    const method = 'POST';
    const data = {
      workflow_ids: _req['workflow_ids'],
      space_id: _req['space_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/workflow_api/llm_fc_setting_detail
   *
   * 獲取llm節點使用的技能的詳情信息
   */
  GetLLMNodeFCSettingDetail(
    req: workflow.GetLLMNodeFCSettingDetailRequest,
    options?: T,
  ): Promise<workflow.GetLLMNodeFCSettingDetailResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/llm_fc_setting_detail');
    const method = 'POST';
    const data = {
      workflow_id: _req['workflow_id'],
      space_id: _req['space_id'],
      plugin_list: _req['plugin_list'],
      workflow_list: _req['workflow_list'],
      dataset_list: _req['dataset_list'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/llm_fc_setting_merged */
  GetLLMNodeFCSettingsMerged(
    req: workflow.GetLLMNodeFCSettingsMergedRequest,
    options?: T,
  ): Promise<workflow.GetLLMNodeFCSettingsMergedResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/llm_fc_setting_merged');
    const method = 'POST';
    const data = {
      workflow_id: _req['workflow_id'],
      space_id: _req['space_id'],
      plugin_fc_setting: _req['plugin_fc_setting'],
      workflow_fc_setting: _req['workflow_fc_setting'],
      dataset_fc_setting: _req['dataset_fc_setting'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/workflow_api/save_trigger
   *
   * trigger
   */
  SaveTrigger(
    req: trigger.SaveTriggerRequest,
    options?: T,
  ): Promise<trigger.SaveTriggerResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/save_trigger');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      project_id: _req['project_id'],
      trigger_id: _req['trigger_id'],
      connector_id: _req['connector_id'],
      name: _req['name'],
      event_id: _req['event_id'],
      config: _req['config'],
      payload: _req['payload'],
      workflow_id: _req['workflow_id'],
      trigger_type: _req['trigger_type'],
      status: _req['status'],
      set_type: _req['set_type'],
      project_version: _req['project_version'],
      creator: _req['creator'],
      source_sub_key: _req['source_sub_key'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** GET /api/workflow_api/list_trigger_events */
  ListTriggerAppEvents(
    req: trigger.ListTriggerAppEventsRequest,
    options?: T,
  ): Promise<trigger.ListTriggerAppEventsResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/list_trigger_events');
    const method = 'GET';
    const params = {
      space_id: _req['space_id'],
      project_id: _req['project_id'],
      app_type: _req['app_type'],
      Base: _req['Base'],
    };
    return this.request({ url, method, params }, options);
  }

  /** GET /api/workflow_api/list_triggers */
  ListTriggers(
    req: trigger.ListTriggersRequest,
    options?: T,
  ): Promise<trigger.ListTriggersResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/list_triggers');
    const method = 'GET';
    const params = {
      space_id: _req['space_id'],
      project_id: _req['project_id'],
      connector_id: _req['connector_id'],
      workflow_id: _req['workflow_id'],
      set_type: _req['set_type'],
      trigger_id: _req['trigger_id'],
      creator: _req['creator'],
      page_size: _req['page_size'],
      page_num: _req['page_num'],
      Base: _req['Base'],
    };
    return this.request({ url, method, params }, options);
  }

  /** POST /api/workflow_api/testrun_trigger */
  TestRunTrigger(
    req: trigger.TestRunTriggerRequest,
    options?: T,
  ): Promise<trigger.TestRunTriggerResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/testrun_trigger');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      project_id: _req['project_id'],
      trigger_id: _req['trigger_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * GET /api/workflow_api/get_trigger
   *
   * 獲取觸發器詳情
   */
  GetTrigger(
    req: trigger.GetTriggerRequest,
    options?: T,
  ): Promise<trigger.GetTriggerResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/get_trigger');
    const method = 'GET';
    const params = {
      space_id: _req['space_id'],
      project_id: _req['project_id'],
      workflow_id: _req['workflow_id'],
      set_type: _req['set_type'],
      project_version: _req['project_version'],
      Base: _req['Base'],
    };
    return this.request({ url, method, params }, options);
  }

  /**
   * POST /api/workflow_api/copilot_generate
   *
   * copilot
   */
  CopilotGenerate(
    req: copilot.CopilotGenerateRequest,
    options?: T,
  ): Promise<copilot.CopilotGenerateResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/copilot_generate');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      project_id: _req['project_id'],
      copilot_type: _req['copilot_type'],
      query: _req['query'],
      generate_test_case_input: _req['generate_test_case_input'],
      workflow_id: _req['workflow_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/project_conversation/update */
  UpdateProjectConversationDef(
    req: workflow.UpdateProjectConversationDefRequest,
    options?: T,
  ): Promise<workflow.UpdateProjectConversationDefResponse> {
    const _req = req;
    const url = this.genBaseURL(
      '/api/workflow_api/project_conversation/update',
    );
    const method = 'POST';
    const data = {
      project_id: _req['project_id'],
      unique_id: _req['unique_id'],
      conversation_name: _req['conversation_name'],
      space_id: _req['space_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/workflow_api/project_conversation/create
   *
   * conversation
   */
  CreateProjectConversationDef(
    req: workflow.CreateProjectConversationDefRequest,
    options?: T,
  ): Promise<workflow.CreateProjectConversationDefResponse> {
    const _req = req;
    const url = this.genBaseURL(
      '/api/workflow_api/project_conversation/create',
    );
    const method = 'POST';
    const data = {
      project_id: _req['project_id'],
      conversation_name: _req['conversation_name'],
      space_id: _req['space_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/workflow_api/project_conversation/delete
   *
   * 刪除項目中的會話定義，如果會話沒有綁定過工作流可以直接刪除，否則不傳遞replace字段會先返回綁定的流程列表，之後需要傳遞 replace 字段，將會話綁定的工作流替換成其他會話同時刪除原會話。
   */
  DeleteProjectConversationDef(
    req: workflow.DeleteProjectConversationDefRequest,
    options?: T,
  ): Promise<workflow.DeleteProjectConversationDefResponse> {
    const _req = req;
    const url = this.genBaseURL(
      '/api/workflow_api/project_conversation/delete',
    );
    const method = 'POST';
    const data = {
      project_id: _req['project_id'],
      unique_id: _req['unique_id'],
      replace: _req['replace'],
      check_only: _req['check_only'],
      space_id: _req['space_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** GET /api/workflow_api/project_conversation/list */
  ListProjectConversationDef(
    req: workflow.ListProjectConversationRequest,
    options?: T,
  ): Promise<workflow.ListProjectConversationResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/project_conversation/list');
    const method = 'GET';
    const params = {
      project_id: _req['project_id'],
      create_method: _req['create_method'],
      create_env: _req['create_env'],
      cursor: _req['cursor'],
      limit: _req['limit'],
      space_id: _req['space_id'],
      nameLike: _req['nameLike'],
      connector_id: _req['connector_id'],
      project_version: _req['project_version'],
      Base: _req['Base'],
    };
    return this.request({ url, method, params }, options);
  }

  /** POST /api/workflow_api/delete_trigger */
  DeleteTrigger(
    req: trigger.DeleteTriggerRequest,
    options?: T,
  ): Promise<trigger.DeleteTriggerResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/delete_trigger');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      project_id: _req['project_id'],
      trigger_id: _req['trigger_id'],
      set_type: _req['set_type'],
      creator: _req['creator'],
      connector_id: _req['connector_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /v1/workflows/chat
   *
   * OpenAPI流式運行對話流
   */
  OpenAPIChatFlowRun(
    req?: workflow.ChatFlowRunRequest,
    options?: T,
  ): Promise<workflow.ChatFlowRunResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/v1/workflows/chat');
    const method = 'POST';
    const data = {
      workflow_id: _req['workflow_id'],
      parameters: _req['parameters'],
      ext: _req['ext'],
      bot_id: _req['bot_id'],
      execute_mode: _req['execute_mode'],
      version: _req['version'],
      connector_id: _req['connector_id'],
      app_id: _req['app_id'],
      conversation_id: _req['conversation_id'],
      additional_messages: _req['additional_messages'],
      project_id: _req['project_id'],
      suggest_reply_info: _req['suggest_reply_info'],
      app_version: _req['app_version'],
      workflow_version: _req['workflow_version'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/op_workflow/workflow_detail */
  OPGetWorkflowDetail(
    req?: workflow.GetWorkflowDetailRequest,
    options?: T,
  ): Promise<workflow.GetWorkflowDetailResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/op_workflow/workflow_detail');
    const method = 'POST';
    const data = {
      workflow_ids: _req['workflow_ids'],
      space_id: _req['space_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/op_workflow/llm_fc_setting_detail */
  OPGetLLMNodeFCSettingDetail(
    req: workflow.GetLLMNodeFCSettingDetailRequest,
    options?: T,
  ): Promise<workflow.GetLLMNodeFCSettingDetailResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/op_workflow/llm_fc_setting_detail');
    const method = 'POST';
    const data = {
      workflow_id: _req['workflow_id'],
      space_id: _req['space_id'],
      plugin_list: _req['plugin_list'],
      workflow_list: _req['workflow_list'],
      dataset_list: _req['dataset_list'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/workflow_api/example_workflow_list
   *
   * 獲取示例流程列表
   */
  GetExampleWorkFlowList(
    req?: workflow.GetExampleWorkFlowListRequest,
    options?: T,
  ): Promise<workflow.GetExampleWorkFlowListResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/workflow_api/example_workflow_list');
    const method = 'POST';
    const data = {
      page: _req['page'],
      size: _req['size'],
      name: _req['name'],
      flow_mode: _req['flow_mode'],
      checker: _req['checker'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** GET /api/op_workflow/get_trigger */
  OPGetTrigger(
    req: trigger.GetTriggerRequest,
    options?: T,
  ): Promise<trigger.GetTriggerResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/op_workflow/get_trigger');
    const method = 'GET';
    const params = {
      space_id: _req['space_id'],
      project_id: _req['project_id'],
      workflow_id: _req['workflow_id'],
      set_type: _req['set_type'],
      project_version: _req['project_version'],
      Base: _req['Base'],
    };
    return this.request({ url, method, params }, options);
  }

  /** GET /api/op_workflow/list_trigger_events */
  OPListTriggerAppEvents(
    req: trigger.ListTriggerAppEventsRequest,
    options?: T,
  ): Promise<trigger.ListTriggerAppEventsResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/op_workflow/list_trigger_events');
    const method = 'GET';
    const params = {
      space_id: _req['space_id'],
      project_id: _req['project_id'],
      app_type: _req['app_type'],
      Base: _req['Base'],
    };
    return this.request({ url, method, params }, options);
  }

  /** POST /api/workflow_api/chat_flow_role/delete */
  DeleteChatFlowRole(
    req?: workflow.DeleteChatFlowRoleRequest,
    options?: T,
  ): Promise<workflow.DeleteChatFlowRoleResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/workflow_api/chat_flow_role/delete');
    const method = 'POST';
    const data = {
      WorkflowID: _req['WorkflowID'],
      ConnectorID: _req['ConnectorID'],
      ID: _req['ID'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/chat_flow_role/create */
  CreateChatFlowRole(
    req?: workflow.CreateChatFlowRoleRequest,
    options?: T,
  ): Promise<workflow.CreateChatFlowRoleResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/workflow_api/chat_flow_role/create');
    const method = 'POST';
    const data = { chat_flow_role: _req['chat_flow_role'], Base: _req['Base'] };
    return this.request({ url, method, data }, options);
  }

  /**
   * GET /api/workflow_api/chat_flow_role/get
   *
   * chat flow role config
   */
  GetChatFlowRole(
    req?: workflow.GetChatFlowRoleRequest,
    options?: T,
  ): Promise<workflow.GetChatFlowRoleResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/workflow_api/chat_flow_role/get');
    const method = 'GET';
    const params = {
      workflow_id: _req['workflow_id'],
      connector_id: _req['connector_id'],
      is_debug: _req['is_debug'],
      ext: _req['ext'],
      Base: _req['Base'],
    };
    return this.request({ url, method, params }, options);
  }

  /** POST /api/op_workflow/remove_example_workflow */
  OPRemoveExampleWorkflow(
    req: workflow.RemoveExampleWorkflowRequest,
    options?: T,
  ): Promise<workflow.RemoveExampleWorkflowResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/op_workflow/remove_example_workflow');
    const method = 'POST';
    const data = { workflow_id: _req['workflow_id'], Base: _req['Base'] };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/op_workflow/example_workflow_list */
  OPGetExampleWorkFlowList(
    req?: workflow.GetExampleWorkFlowListRequest,
    options?: T,
  ): Promise<workflow.GetExampleWorkFlowListResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/op_workflow/example_workflow_list');
    const method = 'POST';
    const data = {
      page: _req['page'],
      size: _req['size'],
      name: _req['name'],
      flow_mode: _req['flow_mode'],
      checker: _req['checker'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/op_workflow/put_on_list_example_workflow */
  OPPutOnListExampleWorkflow(
    req: workflow.PutOnListExampleWorkflowRequest,
    options?: T,
  ): Promise<workflow.PutOnListExampleWorkflowResponse> {
    const _req = req;
    const url = this.genBaseURL(
      '/api/op_workflow/put_on_list_example_workflow',
    );
    const method = 'POST';
    const data = { workflow_id: _req['workflow_id'], Base: _req['Base'] };
    return this.request({ url, method, data }, options);
  }

  /** GET /v1/workflows/:workflow_id */
  OpenAPIGetWorkflowInfo(
    req?: workflow.OpenAPIGetWorkflowInfoRequest,
    options?: T,
  ): Promise<workflow.OpenAPIGetWorkflowInfoResponse> {
    const _req = req || {};
    const url = this.genBaseURL(`/v1/workflows/${_req['workflow_id']}`);
    const method = 'GET';
    const params = {
      connector_id: _req['connector_id'],
      is_debug: _req['is_debug'],
      caller: _req['caller'],
      include_chatflow_role: _req['include_chatflow_role'],
      include_input_output: _req['include_input_output'],
    };
    return this.request({ url, method, params }, options);
  }

  /**
   * POST /api/workflow_api/region_gray
   *
   * 按國家地區控制灰度的接口
   */
  RegionGray(
    req: workflow.RegionGrayRequest,
    options?: T,
  ): Promise<workflow.RegionGrayResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/region_gray');
    const method = 'POST';
    const data = { feature_key: _req['feature_key'], Base: _req['Base'] };
    return this.request({ url, method, data }, options);
  }

  /**
   * GET /api/workflow_api/get_node_execute_history
   *
   * 查詢節點執行歷史。在試運行時需要輪詢查看一個節點的執行歷史。
   */
  GetNodeExecuteHistory(
    req: workflow.GetNodeExecuteHistoryRequest,
    options?: T,
  ): Promise<workflow.GetNodeExecuteHistoryResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/get_node_execute_history');
    const method = 'GET';
    const params = {
      workflow_id: _req['workflow_id'],
      space_id: _req['space_id'],
      execute_id: _req['execute_id'],
      node_id: _req['node_id'],
      is_batch: _req['is_batch'],
      batch_index: _req['batch_index'],
      node_type: _req['node_type'],
      node_history_scene: _req['node_history_scene'],
      Base: _req['Base'],
    };
    return this.request({ url, method, params }, options);
  }

  /**
   * POST /api/workflow_api/workflow_detail_info
   *
   * 獲取子流程的詳情
   */
  GetWorkflowDetailInfo(
    req?: workflow.GetWorkflowDetailInfoRequest,
    options?: T,
  ): Promise<workflow.GetWorkflowDetailInfoResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/workflow_api/workflow_detail_info');
    const method = 'POST';
    const data = {
      workflow_filter_list: _req['workflow_filter_list'],
      space_id: _req['space_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** GET /api/workflow_api/list_publish_trigger */
  ListPublishedTriggers(
    req: trigger.ListPublishedTriggersRequest,
    options?: T,
  ): Promise<trigger.ListPublishedTriggersResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/list_publish_trigger');
    const method = 'GET';
    const params = {
      space_id: _req['space_id'],
      project_id: _req['project_id'],
      set_type: _req['set_type'],
      app_type: _req['app_type'],
      connector_id: _req['connector_id'],
      query: _req['query'],
      page_size: _req['page_size'],
      page_num: _req['page_num'],
      Base: _req['Base'],
    };
    return this.request({ url, method, params }, options);
  }

  /** GET /api/workflow_api/get_publish_trigger */
  GetPublishedTriggerDetail(
    req: trigger.GetPublishedTriggerDetailsRequest,
    options?: T,
  ): Promise<trigger.GetPublishedTriggerDetailsResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/get_publish_trigger');
    const method = 'GET';
    const params = {
      space_id: _req['space_id'],
      project_id: _req['project_id'],
      source_id: _req['source_id'],
      connector_id: _req['connector_id'],
      query: _req['query'],
      page_size: _req['page_size'],
      page_num: _req['page_num'],
      base: _req['base'],
    };
    return this.request({ url, method, params }, options);
  }

  /** POST /api/workflow_api/operate_publish_trigger */
  OperatePublishedTrigger(
    req: trigger.OperatePublishedTriggerRequest,
    options?: T,
  ): Promise<trigger.OperatePublishedTriggerResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/operate_publish_trigger');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      project_id: _req['project_id'],
      connector_id: _req['connector_id'],
      trigger_id: _req['trigger_id'],
      status: _req['status'],
      base: _req['base'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/workflow_api/list_publish_workflow
   *
   * publis
   */
  ListPublishWorkflow(
    req: workflow.ListPublishWorkflowRequest,
    options?: T,
  ): Promise<workflow.ListPublishWorkflowResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/list_publish_workflow');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      owner_id: _req['owner_id'],
      name: _req['name'],
      order_last_publish_time: _req['order_last_publish_time'],
      order_total_token: _req['order_total_token'],
      size: _req['size'],
      cursor_id: _req['cursor_id'],
      workflow_ids: _req['workflow_ids'],
    };
    return this.request({ url, method, data }, options);
  }

  /** GET /api/op_workflow/get_node_execute_history */
  OPGetNodeExecuteHistory(
    req: workflow.GetNodeExecuteHistoryRequest,
    options?: T,
  ): Promise<workflow.GetNodeExecuteHistoryResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/op_workflow/get_node_execute_history');
    const method = 'GET';
    const params = {
      workflow_id: _req['workflow_id'],
      space_id: _req['space_id'],
      execute_id: _req['execute_id'],
      node_id: _req['node_id'],
      is_batch: _req['is_batch'],
      batch_index: _req['batch_index'],
      node_type: _req['node_type'],
      node_history_scene: _req['node_history_scene'],
      Base: _req['Base'],
    };
    return this.request({ url, method, params }, options);
  }

  /** POST /api/op_workflow/workflow_detail_info */
  OPGetWorkflowDetailInfo(
    req?: workflow.GetWorkflowDetailInfoRequest,
    options?: T,
  ): Promise<workflow.GetWorkflowDetailInfoResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/op_workflow/workflow_detail_info');
    const method = 'POST';
    const data = {
      workflow_filter_list: _req['workflow_filter_list'],
      space_id: _req['space_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/validate_tree */
  ValidateTree(
    req: workflow.ValidateTreeRequest,
    options?: T,
  ): Promise<workflow.ValidateTreeResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/validate_tree');
    const method = 'POST';
    const data = {
      workflow_id: _req['workflow_id'],
      bind_project_id: _req['bind_project_id'],
      bind_bot_id: _req['bind_bot_id'],
      schema: _req['schema'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** GET /api/op_workflow/get_execute_history_list */
  OPGetExecuteHistoryList(
    req?: workflow.GetExecuteHistoryListRequest,
    options?: T,
  ): Promise<workflow.GetExecuteHistoryListResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/op_workflow/get_execute_history_list');
    const method = 'GET';
    const params = {
      workflow_id: _req['workflow_id'],
      execute_id: _req['execute_id'],
      execute_mode: _req['execute_mode'],
      log_id: _req['log_id'],
      start_time: _req['start_time'],
      end_time: _req['end_time'],
      page: _req['page'],
      page_size: _req['page_size'],
      Base: _req['Base'],
    };
    return this.request({ url, method, params }, options);
  }

  /** POST /api/op_workflow/get_trace */
  OPGetTraceSDK(
    req?: trace.GetTraceSDKRequest,
    options?: T,
  ): Promise<trace.GetTraceSDKResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/op_workflow/get_trace');
    const method = 'POST';
    const data = { Base: _req['Base'] };
    const params = {
      log_id: _req['log_id'],
      start_at: _req['start_at'],
      end_at: _req['end_at'],
      workflow_id: _req['workflow_id'],
      execute_id: _req['execute_id'],
    };
    return this.request({ url, method, data, params }, options);
  }

  /** POST /api/op_workflow/version_list */
  OPVersionHistoryList(
    req: workflow.VersionHistoryListRequest,
    options?: T,
  ): Promise<workflow.VersionHistoryListResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/op_workflow/version_list');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      workflow_id: _req['workflow_id'],
      type: _req['type'],
      limit: _req['limit'],
      commit_ids: _req['commit_ids'],
      cursor: _req['cursor'],
      order_by: _req['order_by'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/op_workflow/list_spans */
  OPListRootSpans(
    req: trace.ListRootSpansRequest,
    options?: T,
  ): Promise<trace.ListRootSpansResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/op_workflow/list_spans');
    const method = 'POST';
    const data = {
      start_at: _req['start_at'],
      end_at: _req['end_at'],
      limit: _req['limit'],
      desc_by_start_time: _req['desc_by_start_time'],
      offset: _req['offset'],
      workflow_id: _req['workflow_id'],
      input: _req['input'],
      status: _req['status'],
      execute_mode: _req['execute_mode'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** GET /api/op_workflow/chat_flow_role/get */
  OPGetChatFlowRole(
    req?: workflow.GetChatFlowRoleRequest,
    options?: T,
  ): Promise<workflow.GetChatFlowRoleResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/op_workflow/chat_flow_role/get');
    const method = 'GET';
    const params = {
      workflow_id: _req['workflow_id'],
      connector_id: _req['connector_id'],
      is_debug: _req['is_debug'],
      ext: _req['ext'],
      Base: _req['Base'],
    };
    return this.request({ url, method, params }, options);
  }

  /** POST /api/op_workflow/get_workflow_id_by_execute_info */
  OPGetWorkflowIDByExecuteInfo(
    req?: workflow.GetWorkflowIDByExecuteInfoRequest,
    options?: T,
  ): Promise<workflow.GetWorkflowIDByExecuteInfoResponse> {
    const _req = req || {};
    const url = this.genBaseURL(
      '/api/op_workflow/get_workflow_id_by_execute_info',
    );
    const method = 'POST';
    const data = {
      execute_id: _req['execute_id'],
      sub_execute_id: _req['sub_execute_id'],
      log_id: _req['log_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/workflow_api/node_panel_search
   *
   * 節點面板搜索
   */
  NodePanelSearch(
    req?: workflow.NodePanelSearchRequest,
    options?: T,
  ): Promise<workflow.NodePanelSearchResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/workflow_api/node_panel_search');
    const method = 'POST';
    const data = {
      search_type: _req['search_type'],
      space_id: _req['space_id'],
      project_id: _req['project_id'],
      search_key: _req['search_key'],
      page_or_cursor: _req['page_or_cursor'],
      page_size: _req['page_size'],
      exclude_workflow_id: _req['exclude_workflow_id'],
      enterprise_id: _req['enterprise_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/workflow_api/dependency_tree
   *
   * 查詢流程的資源引用樹，能夠查詢到流程引用到的子流程、插件等
   */
  DependencyTree(
    req: workflow.DependencyTreeRequest,
    options?: T,
  ): Promise<workflow.DependencyTreeResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/dependency_tree');
    const method = 'POST';
    const data = {
      type: _req['type'],
      library_info: _req['library_info'],
      project_info: _req['project_info'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/workflow_api/encapsulate
   *
   * 封裝流程。此接口具備三種功能。功能一：僅對 schema 執行等同於 validate 的校驗操作；功能二：先對 schema 進行校驗，然後依次執行創建、保存和發佈流程的操作，該功能相當於 validate、create、save、publish 功能的組合；功能三：在某project下，對 schema 進行校驗並創建保存流程，但不執行發佈操作。
   */
  EncapsulateWorkflow(
    req: workflow.EncapsulateWorkflowRequest,
    options?: T,
  ): Promise<workflow.EncapsulateWorkflowResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/encapsulate');
    const method = 'POST';
    const data = {
      name: _req['name'],
      desc: _req['desc'],
      icon_uri: _req['icon_uri'],
      space_id: _req['space_id'],
      flow_mode: _req['flow_mode'],
      schema_type: _req['schema_type'],
      bind_biz_id: _req['bind_biz_id'],
      bind_biz_type: _req['bind_biz_type'],
      project_id: _req['project_id'],
      create_conversation: _req['create_conversation'],
      schema: _req['schema'],
      bind_bot_id: _req['bind_bot_id'],
      only_validate: _req['only_validate'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/project_conversation/batch_delete */
  BatchDeleteProjectConversation(
    req: workflow.BatchDeleteProjectConversationRequest,
    options?: T,
  ): Promise<workflow.BatchDeleteProjectConversationResponse> {
    const _req = req;
    const url = this.genBaseURL(
      '/api/workflow_api/project_conversation/batch_delete',
    );
    const method = 'POST';
    const data = {
      project_id: _req['project_id'],
      space_id: _req['space_id'],
      unique_id_list: _req['unique_id_list'],
      draft_mode: _req['draft_mode'],
      connector_id: _req['connector_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/get_plugin_auth_status */
  GetPluginAuthStatus(
    req?: workflow.GetPluginAuthStatusRequest,
    options?: T,
  ): Promise<workflow.GetPluginAuthStatusResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/workflow_api/get_plugin_auth_status');
    const method = 'POST';
    const data = {
      workflow_id: _req['workflow_id'],
      plugin_id: _req['plugin_id'],
      space_id: _req['space_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/op_workflow/check_dev_vcs_commit_id */
  OPCheckDevVCSCommitId(
    req?: workflow.CheckDevVCSCommitIdRequest,
    options?: T,
  ): Promise<workflow.CheckDevVCSCommitIdResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/op_workflow/check_dev_vcs_commit_id');
    const method = 'POST';
    const data = { wf_id_list: _req['wf_id_list'], Base: _req['Base'] };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/get_async_sub_process */
  GetNodeAsyncExecuteHistory(
    req: workflow.GetNodeAsyncExecuteHistoryRequest,
    options?: T,
  ): Promise<workflow.GetNodeAsyncExecuteHistoryResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/get_async_sub_process');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      parent_workflow_id: _req['parent_workflow_id'],
      parent_node_id: _req['parent_node_id'],
      workflow_id: _req['workflow_id'],
      status: _req['status'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** GET /v1/workflows */
  OpenAPIGetWorkflowList(
    req?: workflow.OpenAPIGetWorkflowListRequest,
    options?: T,
  ): Promise<workflow.OpenAPIGetWorkflowListResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/v1/workflows');
    const method = 'GET';
    const params = {
      page_num: _req['page_num'],
      page_size: _req['page_size'],
      workspace_id: _req['workspace_id'],
      workflow_mode: _req['workflow_mode'],
      app_id: _req['app_id'],
      publish_status: _req['publish_status'],
      folder_id: _req['folder_id'],
      include_input_output: _req['include_input_output'],
    };
    return this.request({ url, method, params }, options);
  }

  /** POST /api/workflow_api/get_flowlang_gray */
  GetFlowlangGray(
    req: workflow.GetFlowlangGrayRequest,
    options?: T,
  ): Promise<workflow.GetFlowlangGrayResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/get_flowlang_gray');
    const method = 'POST';
    const data = { space_id: _req['space_id'], Base: _req['Base'] };
    return this.request({ url, method, data }, options);
  }

  /** GET /v1/workflows/:workflow_id/run_histories/:execute_id/execute_nodes/:node_execute_uuid */
  OpenAPIGetNodeExecuteHistory(
    req?: workflow.OpenAPIGetNodeExecuteHistoryRequest,
    options?: T,
  ): Promise<workflow.OpenAPIGetNodeExecuteHistoryResponse> {
    const _req = req || {};
    const url = this.genBaseURL(
      `/v1/workflows/${_req['workflow_id']}/run_histories/${_req['execute_id']}/execute_nodes/${_req['node_execute_uuid']}`,
    );
    const method = 'GET';
    return this.request({ url, method }, options);
  }

  /**
   * GET /api/workflow_api/get_node_field_config
   *
   * 查詢節點的屬性配置
   */
  GetNodeFieldConfig(
    req?: workflow.GetNodeFieldConfigRequest,
    options?: T,
  ): Promise<workflow.GetNodeFieldConfigResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/workflow_api/get_node_field_config');
    const method = 'GET';
    const params = {
      nodeType: _req['nodeType'],
      fieldNames: _req['fieldNames'],
      Base: _req['Base'],
    };
    return this.request({ url, method, params }, options);
  }

  /** POST /api/workflow_api/mget_version_history */
  MGetVersionHistory(
    req: workflow.MGetVersionHistoryRequest,
    options?: T,
  ): Promise<workflow.MGetVersionHistoryResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/mget_version_history');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      workflow_id_version_map: _req['workflow_id_version_map'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** GET /api/op_workflow/get_node_field_config */
  OPGetNodeFieldConfig(
    req?: workflow.GetNodeFieldConfigRequest,
    options?: T,
  ): Promise<workflow.GetNodeFieldConfigResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/op_workflow/get_node_field_config');
    const method = 'GET';
    const params = {
      nodeType: _req['nodeType'],
      fieldNames: _req['fieldNames'],
      Base: _req['Base'],
    };
    return this.request({ url, method, params }, options);
  }

  /** GET /v1/workflows/:workflow_id/versions */
  OpenAPIListVersion(
    req: workflow.OpenAPIListVersionRequest,
    options?: T,
  ): Promise<workflow.OpenAPIListVersionResponse> {
    const _req = req;
    const url = this.genBaseURL(
      `/v1/workflows/${_req['workflow_id']}/versions`,
    );
    const method = 'GET';
    const params = {
      publish_status: _req['publish_status'],
      page_size: _req['page_size'],
      page_token: _req['page_token'],
      include_input_output: _req['include_input_output'],
    };
    return this.request({ url, method, params }, options);
  }

  /** POST /api/op_workflow/get_async_sub_process */
  OPGetNodeAsyncExecuteHistory(
    req: workflow.GetNodeAsyncExecuteHistoryRequest,
    options?: T,
  ): Promise<workflow.GetNodeAsyncExecuteHistoryResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/op_workflow/get_async_sub_process');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      parent_workflow_id: _req['parent_workflow_id'],
      parent_node_id: _req['parent_node_id'],
      workflow_id: _req['workflow_id'],
      status: _req['status'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/op_workflow/get_flowlang_gray */
  OPGetFlowlangGray(
    req: workflow.GetFlowlangGrayRequest,
    options?: T,
  ): Promise<workflow.GetFlowlangGrayResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/op_workflow/get_flowlang_gray');
    const method = 'POST';
    const data = { space_id: _req['space_id'], Base: _req['Base'] };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/get_p90 */
  ResourcePointP90(
    req?: workflow.ResourcePointP90Request,
    options?: T,
  ): Promise<workflow.ResourcePointP90Response> {
    const _req = req || {};
    const url = this.genBaseURL('/api/workflow_api/get_p90');
    const method = 'POST';
    const data = {
      workflow_id: _req['workflow_id'],
      space_id: _req['space_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/job_list */
  GetJobList(
    req?: workflow.GetJobListRequest,
    options?: T,
  ): Promise<workflow.GetJobListResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/workflow_api/job_list');
    const method = 'POST';
    const data = {
      page: _req['page'],
      size: _req['size'],
      job_ids: _req['job_ids'],
      space_id: _req['space_id'],
      status: _req['status'],
      order_by: _req['order_by'],
      login_user_create: _req['login_user_create'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/task_cancel */
  CancelTask(
    req?: workflow.CancelTaskRequest,
    options?: T,
  ): Promise<workflow.CancelTaskResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/workflow_api/task_cancel');
    const method = 'POST';
    const data = {
      task_id: _req['task_id'],
      job_id: _req['job_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/task_retry */
  RetryTask(
    req?: workflow.RetryTaskRequest,
    options?: T,
  ): Promise<workflow.RetryTaskResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/workflow_api/task_retry');
    const method = 'POST';
    const data = {
      task_id: _req['task_id'],
      job_id: _req['job_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/job_validate_input */
  ValidateJobInput(
    req?: workflow.ValidateJobInputRequest,
    options?: T,
  ): Promise<workflow.ValidateJobInputResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/workflow_api/job_validate_input');
    const method = 'POST';
    const data = {
      workflow_id: _req['workflow_id'],
      workflow_version: _req['workflow_version'],
      project_version: _req['project_version'],
      space_id: _req['space_id'],
      input_uri: _req['input_uri'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/task_list */
  GetTaskList(
    req: workflow.GetTaskListRequest,
    options?: T,
  ): Promise<workflow.GetTaskListResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/task_list');
    const method = 'POST';
    const data = {
      page: _req['page'],
      size: _req['size'],
      job_id: _req['job_id'],
      task_ids: _req['task_ids'],
      space_id: _req['space_id'],
      status: _req['status'],
      order_by: _req['order_by'],
      login_user_create: _req['login_user_create'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/job_cancel */
  CancelJob(
    req?: workflow.CancelJobRequest,
    options?: T,
  ): Promise<workflow.CancelJobResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/workflow_api/job_cancel');
    const method = 'POST';
    const data = { job_id: _req['job_id'], Base: _req['Base'] };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/job_create */
  CreateJob(
    req?: workflow.CreateJobRequest,
    options?: T,
  ): Promise<workflow.CreateJobResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/workflow_api/job_create');
    const method = 'POST';
    const data = {
      workflow_id: _req['workflow_id'],
      workflow_version: _req['workflow_version'],
      project_version: _req['project_version'],
      url: _req['url'],
      job_type: _req['job_type'],
      space_id: _req['space_id'],
      bind_project_id: _req['bind_project_id'],
      bind_bot_id: _req['bind_bot_id'],
      job_name: _req['job_name'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/job_input_template */
  JobInputTemplateDownload(
    req?: workflow.JobInputTemplateDownloadRequest,
    options?: T,
  ): Promise<workflow.JobInputTemplateDownloadResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/workflow_api/job_input_template');
    const method = 'POST';
    const data = {
      workflow_id: _req['workflow_id'],
      workflow_version: _req['workflow_version'],
      project_version: _req['project_version'],
      space_id: _req['space_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /v1/workflows/:workflow_id/collaboration_mode */
  OpenAPIToggleCollaborationMode(
    req?: workflow.OpenAPIToggleCollaborationModeRequest,
    options?: T,
  ): Promise<workflow.OpenAPIToggleCollaborationModeResponse> {
    const _req = req || {};
    const url = this.genBaseURL(
      `/v1/workflows/${_req['workflow_id']}/collaboration_mode`,
    );
    const method = 'POST';
    const data = { collaboration_mode: _req['collaboration_mode'] };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/job_output */
  JobOutDownload(
    req?: workflow.JobOutDownloadRequest,
    options?: T,
  ): Promise<workflow.JobOutDownloadResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/workflow_api/job_output');
    const method = 'POST';
    const data = {
      job_id: _req['job_id'],
      space_id: _req['space_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/job_input_config */
  GetJobInputConfig(
    req?: workflow.GetJobInputConfigRequest,
    options?: T,
  ): Promise<workflow.GetJobInputConfigResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/workflow_api/job_input_config');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      professional_user: _req['professional_user'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/workflow_api/get_code_migrate_gray */
  GetCodeMigrateGray(
    req: workflow.GetCodeMigrateGrayRequest,
    options?: T,
  ): Promise<workflow.GetCodeMigrateGrayResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/workflow_api/get_code_migrate_gray');
    const method = 'POST';
    const data = { space_id: _req['space_id'], Base: _req['Base'] };
    return this.request({ url, method, data }, options);
  }
}
/* eslint-enable */
