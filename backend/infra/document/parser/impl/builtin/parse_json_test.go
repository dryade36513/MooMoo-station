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

package builtin

import (
	"bytes"
	"context"
	"testing"

	"github.com/cloudwego/eino/components/document/parser"
	"github.com/stretchr/testify/assert"

	"github.com/coze-dev/coze-studio/backend/infra/document"
	contract "github.com/coze-dev/coze-studio/backend/infra/document/parser"
)

func TestParseJSON(t *testing.T) {
	b := []byte(`[
    {
        "department": "心血管科",
        "title": "高血壓患者能喫黨蔘嗎？",
        "question": "我有高血壓這兩天女婿來的時候給我拿了些黨蔘泡水喝，您好高血壓可以喫黨蔘嗎？",
        "answer": "高血壓病人可以口服黨蔘的。黨蔘有降血脂，降血壓的作用，可以徹底消除血液中的垃圾，從而對冠心病以及心血管疾病的患者都有一定的穩定預防工作作用，因此平時口服黨蔘能遠離三高的危害。另外黨蔘除了益氣養血，降低中樞神經作用，調整消化系統功能，健脾補肺的功能。感謝您的進行諮詢，期望我的解釋對你有所幫助。"
    },
    {
        "department": "消化科",
        "title": "哪家醫院能治胃反流",
        "question": "燒心，打隔，咳嗽低燒，以有4年多",
        "answer": "建議你用奧美拉唑同時，加用嗎丁啉或莫沙必利或援生力維，另外還可以加用達喜片"
    }
]`)

	reader := bytes.NewReader(b)

	config := &contract.Config{
		FileExtension: contract.FileExtensionJSON,
		ParsingStrategy: &contract.ParsingStrategy{
			HeaderLine:    0,
			DataStartLine: 1,
			RowsCount:     2,
		},
		ChunkingStrategy: nil,
	}
	pfn := ParseJSON(config)
	docs, err := pfn(context.Background(), reader, parser.WithExtraMeta(map[string]any{
		"document_id":  int64(123),
		"knowledge_id": int64(456),
	}))
	assert.NoError(t, err)
	for i, doc := range docs {
		assertSheet(t, i, doc)
	}
}

func TestParseJSONWithSchema(t *testing.T) {
	b := []byte(`[
    {
        "department": "心血管科",
        "title": "高血壓患者能喫黨蔘嗎？",
        "question": "我有高血壓這兩天女婿來的時候給我拿了些黨蔘泡水喝，您好高血壓可以喫黨蔘嗎？",
        "answer": "高血壓病人可以口服黨蔘的。黨蔘有降血脂，降血壓的作用，可以徹底消除血液中的垃圾，從而對冠心病以及心血管疾病的患者都有一定的穩定預防工作作用，因此平時口服黨蔘能遠離三高的危害。另外黨蔘除了益氣養血，降低中樞神經作用，調整消化系統功能，健脾補肺的功能。感謝您的進行諮詢，期望我的解釋對你有所幫助。"
    },
    {
        "department": "消化科",
        "title": "哪家醫院能治胃反流",
        "question": "燒心，打隔，咳嗽低燒，以有4年多",
        "answer": "建議你用奧美拉唑同時，加用嗎丁啉或莫沙必利或援生力維，另外還可以加用達喜片"
    }
]`)

	reader := bytes.NewReader(b)
	config := &contract.Config{
		FileExtension: contract.FileExtensionJSON,
		ParsingStrategy: &contract.ParsingStrategy{
			HeaderLine:    0,
			DataStartLine: 1,
			RowsCount:     2,
			Columns: []*document.Column{
				{
					ID:       101,
					Name:     "department",
					Type:     document.TableColumnTypeString,
					Nullable: false,
					Sequence: 0,
				},
				{
					ID:       102,
					Name:     "title",
					Type:     document.TableColumnTypeString,
					Nullable: false,
					Sequence: 1,
				},
				{
					ID:       103,
					Name:     "question",
					Type:     document.TableColumnTypeString,
					Nullable: false,
					Sequence: 2,
				},
				{
					ID:       104,
					Name:     "answer",
					Type:     document.TableColumnTypeString,
					Nullable: false,
					Sequence: 3,
				},
			},
		},
	}
	pfn := ParseJSON(config)
	docs, err := pfn(context.Background(), reader, parser.WithExtraMeta(map[string]any{
		"document_id":  int64(123),
		"knowledge_id": int64(456),
	}))
	assert.NoError(t, err)
	for i, doc := range docs {
		assertSheet(t, i, doc)
	}
}
