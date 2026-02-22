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

import { type ConditionOperator } from '@coze-workflow/base';
import { I18n } from '@coze-arch/i18n';
import {
  IconCozEqual,
  IconCozEqualSlash,
  IconCozGreater,
  IconCozGreaterEqual,
  IconCozLess,
  IconCozLessEqual,
  IconCozMatch,
  IconCozMatchSlash,
  IconCozElementOf,
  IconCozElementOfSlash,
} from '@coze-arch/coze-design/icons';

export const ConditionOperatorMap: Record<
  ConditionOperator,
  {
    label: string;
    operationIcon: React.ReactNode;
  }
> = {
  EQUAL: {
    label: I18n.t('workflow_condition_operation_equal', {}, '等於'),
    operationIcon: <IconCozEqual />,
  },
  NOT_EQUAL: {
    label: I18n.t('workflow_condition_operation_not_equal', {}, '不等於'),
    operationIcon: <IconCozEqualSlash />,
  },
  GREATER_THAN: {
    label: I18n.t('workflow_condition_operation_greater_than', {}, '大於'),
    operationIcon: <IconCozGreater />,
  },
  LESS_THAN: {
    label: I18n.t('workflow_condition_operation_less_than', {}, '小於'),
    operationIcon: <IconCozLess />,
  },
  GREATER_EQUAL: {
    label: I18n.t('workflow_condition_operation_greater_equal', {}, '大於等於'),
    operationIcon: <IconCozGreaterEqual />,
  },
  LESS_EQUAL: {
    label: I18n.t('workflow_condition_operation_less_equal', {}, '小於等於'),
    operationIcon: <IconCozLessEqual />,
  },
  IN: {
    label: I18n.t('workflow_condition_operation_in', {}, '屬於'),
    operationIcon: <IconCozElementOf />,
  },
  NOT_IN: {
    label: I18n.t('workflow_condition_operation_not_in', {}, '不屬於'),
    operationIcon: <IconCozElementOfSlash />,
  },
  IS_NULL: {
    label: I18n.t('workflow_condition_operation_is_null', {}, '爲空'),
    operationIcon: <IconCozEqual />,
  },
  IS_NOT_NULL: {
    label: I18n.t('workflow_condition_operation_is_not_null', {}, '不爲空'),
    operationIcon: <IconCozEqualSlash />,
  },
  LIKE: {
    label: I18n.t('workflow_condition_operation_like', {}, '模糊匹配'),
    operationIcon: <IconCozMatch />,
  },
  NOT_LIKE: {
    label: I18n.t('workflow_condition_operation_not_like', {}, '不模糊匹配'),
    operationIcon: <IconCozMatchSlash />,
  },
  BE_TRUE: {
    label: I18n.t('workflow_condition_operation_be_true', {}, '爲真'),
    operationIcon: <IconCozEqual />,
  },
  BE_FALSE: {
    label: I18n.t('workflow_condition_operation_be_false', {}, '爲假'),
    operationIcon: <IconCozEqual />,
  },
};
