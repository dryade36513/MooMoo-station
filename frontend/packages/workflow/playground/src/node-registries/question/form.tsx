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

import { I18n } from '@coze-arch/i18n';

import { NodeConfigForm } from '@/node-registries/common/components';
import { Section } from '@/form';
import { AnswerType } from '@/constants/question-settings';

import {
  ModelSelectField,
  InputsParametersField,
  ExpressionEditorField,
  RadioSetterField,
} from '../common/fields';
import { QuestionOutputs } from './components/question-outputs';
import { AnswerOptionField } from './components/answer-option-field';

const Render = () => (
  <NodeConfigForm>
    <ModelSelectField
      name="llmParam"
      title={I18n.t('workflow_detail_llm_model')}
    />
    <InputsParametersField
      name="inputParameters"
      tooltip={I18n.t(
        'workflow_ques_input_tooltips',
        {},
        '輸入需要添加到問題的參數,這些參數可以被下方的問題引用',
      )}
    />
    <Section
      title={I18n.t('workflow_ques_content', {}, '提問內容')}
      tooltip={I18n.t(
        'workflow_ques_content_tooltips',
        {},
        '用於對用戶發出提問的具體內容描述',
      )}
    >
      <div className="w-full mb-[12px]">
        <ExpressionEditorField
          name="questionParams.question"
          dataTestName="/questionParams/question"
          placeholder={I18n.t('workflow_ques_content_placeholder')}
          className="!p-[4px]"
          containerClassName="!bg-transparent"
        />
      </div>
      <Section
        headerClassName="!mb-0"
        title={
          <div className="text-xs font-normal">
            {I18n.t('workflow_ques_ans_type', {}, '請選擇回答類型')}
          </div>
        }
        noPadding
        collapsible={false}
      >
        <RadioSetterField
          name="questionParams.answer_type"
          defaultValue={AnswerType.Text}
          options={{
            key: 'questionParams.answer_type',
            mode: 'card',
            direction: 'vertical',
            customClassName: 'pt-[4px] gap-y-[4px]',
            options: [
              {
                value: AnswerType.Text,
                label: I18n.t('workflow_ques_ans_type_direct', {}, '直接回答'),
              },
              {
                value: AnswerType.Option,
                label: I18n.t('workflow_ques_ans_type_option', {}, '選項回答'),
              },
            ],
          }}
        />
      </Section>
      <AnswerOptionField
        name="questionParams.options"
        optionPlaceholder={I18n.t(
          'workflow_ans_content_placeholder',
          {},
          '可以使用{{變量名}}引入輸入參數中的變量',
        )}
        defaultOptionText={I18n.t(
          'workflow_ques_ans_type_option_other_placeholder',
          {},
          '此選項對用戶不可見，當用戶回覆無關內容時，走此分支',
        )}
      />
    </Section>
    <QuestionOutputs />
  </NodeConfigForm>
);

export default Render;
