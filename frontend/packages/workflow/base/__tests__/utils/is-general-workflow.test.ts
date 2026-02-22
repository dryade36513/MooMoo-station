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

import { describe, it, expect } from 'vitest';
import { WorkflowMode } from '@coze-arch/bot-api/workflow_api';

import { isGeneralWorkflow } from '../../src/utils/is-general-workflow';

describe('is-general-workflow', () => {
  it('應該在 flowMode 爲 Workflow 時返回 true', () => {
    expect(isGeneralWorkflow(WorkflowMode.Workflow)).toBe(true);
  });

  it('應該在 flowMode 爲 ChatFlow 時返回 true', () => {
    expect(isGeneralWorkflow(WorkflowMode.ChatFlow)).toBe(true);
  });

  it('應該在 flowMode 爲其他值時返回 false', () => {
    // Test other possible WorkflowMode values
    expect(isGeneralWorkflow(WorkflowMode.Imageflow)).toBe(false);
  });
});
