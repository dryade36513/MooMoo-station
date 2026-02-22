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

import { useNodeTestId } from '@coze-workflow/base';
import { I18n } from '@coze-arch/i18n';

import {
  DatabaseSelectField,
  OutputsField,
} from '@/node-registries/database/common/fields';
import { NodeConfigForm } from '@/node-registries/common/components';
import { Section } from '@/form';

import { InputsParametersField } from '../../common/fields';
import { SqlField } from './components/sql-field';

const Render = () => {
  const { getNodeSetterId } = useNodeTestId();
  const setterTestId = getNodeSetterId('');

  return (
    <NodeConfigForm>
      <InputsParametersField
        testId={setterTestId}
        name="inputParameters"
        tooltip={I18n.t(
          'workflow_240218_07',
          {},
          '需要添加的輸入變量，SQL中可直接引用此處添加的變量',
        )}
      />
      <DatabaseSelectField name="databaseInfoList" />
      <Section
        title={I18n.t('workflow_240218_09', {}, 'SQL')}
        tooltip={I18n.t(
          'workflow_240218_10',
          {},
          '要執行的SQL語句,可以直接使用輸入參數中的變量,注意rowNum輸出返回的行數或者受影響的行數,outputList中的變量名需與SQL中定義的字段名一致。',
        )}
      >
        <SqlField name="sql" />
      </Section>
      <OutputsField name="outputs" />
    </NodeConfigForm>
  );
};

export default Render;
