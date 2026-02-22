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

import { convertModelParamsToSchema } from '../src/utils/model/convert-model-params-to-schema';
import {
  ModelFormComponent,
  ModelFormVoidFieldComponent,
} from '../src/constant/model-form-component';
import modelParams from './model-params.json';

vi.mock('@coze-studio/bot-detail-store/multi-agent', () => ({}));
vi.mock('@coze-studio/bot-detail-store/model', () => ({}));
vi.mock('@coze-studio/bot-detail-store/bot-info', () => ({}));

describe('convert-model-params-to-schema', () => {
  it('should convert correctly', () => {
    const res = convertModelParamsToSchema({ model_params: modelParams });
    expect(res).toStrictEqual({
      type: 'object',
      properties: {
        1: {
          type: 'void',
          'x-decorator':
            ModelFormVoidFieldComponent.ModelFormGenerationDiversityGroupItem,
          'x-decorator-props': {
            title: '生成多樣性',
          },
          'x-index': 1,
          properties: {
            temperature: {
              type: 'number',
              'x-component': ModelFormComponent.SliderInputNumber,
              'x-component-props': {
                max: 2,
                min: 0,
                step: 0.01,
                decimalPlaces: 2,
              },
              'x-decorator': ModelFormComponent.ModelFormItem,
              'x-decorator-props': {
                label: '回覆隨機性',
                popoverContent:
                  '即 Temperature，較高的 Temperature 會讓模型生成更多樣和創新的文本，反之生成內容會更加保守且類似於訓練數據。',
              },
              'x-index': 1,
            },
            top_p: {
              type: 'number',
              'x-component': ModelFormComponent.SliderInputNumber,
              'x-component-props': {
                max: 1,
                min: 0,
                step: 0.01,
                decimalPlaces: 2,
              },
              'x-decorator': ModelFormComponent.ModelFormItem,
              'x-decorator-props': {
                label: 'Top P',
                popoverContent:
                  '設定Top p概率閾值，模型在生成文本時只從概率超過閾值的詞彙中選擇，從而控制文本的多樣性',
              },
              'x-index': 2,
            },
            frequency_penalty: {
              type: 'number',
              'x-component': ModelFormComponent.SliderInputNumber,
              'x-component-props': {
                max: 2,
                min: -2,
                step: 0.01,
                decimalPlaces: 2,
              },
              'x-decorator': ModelFormComponent.ModelFormItem,
              'x-decorator-props': {
                label: '重複詞彙懲罰',
                popoverContent:
                  '當該值爲正時，它會降低已出現詞彙的重複率，進而提高模型輸出詞彙的多樣性',
              },
              'x-index': 3,
            },
            presence_penalty: {
              type: 'number',
              'x-component': ModelFormComponent.SliderInputNumber,
              'x-component-props': {
                max: 2,
                min: -2,
                step: 0.01,
                decimalPlaces: 2,
              },
              'x-decorator': ModelFormComponent.ModelFormItem,
              'x-decorator-props': {
                label: '存在懲罰',
                popoverContent:
                  '減少已提及內容的重複，增加新主題和概念的引入，促進內容的多元化。',
              },
              'x-index': 4,
            },
          },
        },
        2: {
          type: 'void',
          'x-decorator': ModelFormVoidFieldComponent.ModelFormGroupItem,
          'x-decorator-props': {
            title: '輸入及輸出長度',
          },
          'x-index': 2,
          properties: {
            max_tokens: {
              type: 'number',
              'x-component': ModelFormComponent.SliderInputNumber,
              'x-component-props': {
                max: 16384,
                min: 1,
                step: 1,
                decimalPlaces: 0,
              },
              'x-decorator': ModelFormComponent.ModelFormItem,
              'x-decorator-props': {
                label: '最大回復長度',
                popoverContent:
                  '可控制模型回覆的最多 Token 數量，以滿足不同場景和需求。通常 100 Tokens 約等於 60 箇中文漢字。',
              },
              'x-index': 1,
            },
            response_format: {
              type: 'number',
              'x-component': ModelFormComponent.RadioButton,
              'x-component-props': {
                type: 'button',
                options: [
                  {
                    label: '文本',
                    value: 0,
                  },
                  {
                    label: 'Markdown',
                    value: 1,
                  },
                ],
              },
              'x-decorator': ModelFormComponent.ModelFormItem,
              'x-decorator-props': {
                label: '輸出格式',
                popoverContent:
                  '文本: 使用普通文本格式回覆Markdown: 將強制模型使用Markdown格式輸出回覆\nJSON: 將強制模型使用 JSON 格式輸出回覆',
              },
              'x-index': 2,
            },
          },
        },
      },
    });
  });
});
