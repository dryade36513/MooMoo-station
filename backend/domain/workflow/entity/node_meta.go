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

package entity

import (
	"fmt"
	"strconv"
)

type NodeType string

func (nt NodeType) IDStr() string {
	m := NodeMetaByNodeType(nt)
	if m == nil {
		return ""
	}
	return fmt.Sprintf("%d", m.ID)
}

func IDStrToNodeType(s string) NodeType {
	id, err := strconv.ParseInt(s, 10, 64)
	if err != nil {
		return ""
	}
	for _, m := range NodeTypeMetas {
		if m.ID == id {
			return m.Key
		}
	}
	return ""
}

type NodeTypeMeta struct {
	ID              int64
	Key             NodeType
	DisplayKey      string
	Name            string `json:"name"`
	Category        string `json:"category"`
	Color           string `json:"color"`
	Desc            string `json:"desc"`
	IconURI         string `json:"icon_uri"`
	SupportBatch    bool   `json:"support_batch"`
	Disabled        bool   `json:"disabled,omitempty"`
	EnUSName        string `json:"en_us_name,omitempty"`
	EnUSDescription string `json:"en_us_description,omitempty"`

	ExecutableMeta
}

func (ntm *NodeTypeMeta) GetDisplayKey() string {
	if len(ntm.DisplayKey) > 0 {
		return ntm.DisplayKey
	}

	return string(ntm.Key)
}

type Category struct {
	Key      string `json:"key"`
	Name     string `json:"name"`
	EnUSName string `json:"en_us_name"`
}

type ExecutableMeta struct {
	IsComposite      bool  `json:"is_composite,omitempty"`
	DefaultTimeoutMS int64 `json:"default_timeout_ms,omitempty"` // default timeout in milliseconds, 0 means no timeout
	PreFillZero      bool  `json:"pre_fill_zero,omitempty"`
	PostFillNil      bool  `json:"post_fill_nil,omitempty"`
	MayUseChatModel  bool  `json:"may_use_chat_model,omitempty"`
	InputSourceAware bool  `json:"input_source_aware,omitempty"` // whether this node needs to know the runtime status of its input sources

	// IncrementalOutput indicates that the node's output is intended for progressive, user-facing streaming.
	// This distinguishes nodes that actually stream text to the user (e.g., 'Exit', 'Output')
	//from those that are merely capable of streaming internally (defined by StreamingParadigms),
	// In essence, nodes with IncrementalOutput are a subset of those defined in StreamingParadigms.
	// When set to true, stream chunks from the node are persisted in real-time and can be fetched by get_process.
	IncrementalOutput bool `json:"incremental_output,omitempty"`

	// UseCtxCache indicates that the node would require a newly initialized ctx cache for each invocation.
	// example use cases:
	// - write warnings to the ctx cache during Invoke, and read from the ctx within Callback output converter
	UseCtxCache bool `json:"use_ctx_cache,omitempty"`

	// PersistInputOnInterrupt indicates that the workflow execution should persist this node's input
	// on interrupt, and restore the input on resume.
	// example use cases:
	// - NodeTypeQuestionAnswer stores input in checkpoint,
	//   so during resume it could access info such as user-defined extra prompt.
	// - NodeTypeBatch stores input in checkpoint,
	//   so during resume it could access the input arrays.
	PersistInputOnInterrupt bool `json:"persist_input_on_interrupt,omitempty"`

	// BlockEndStream indicates the node will block end stream until all stream chunks are received.
	// If not set and the node's output is stream, control will transfer to successor as
	// soon as the end stream itself is created.
	BlockEndStream bool `json:"block_end_stream,omitempty"`

	// UseDatabase indicates the node REQUIRES a DataBase to work,
	// and MUST have the non-empty config value of vo.Node.Data.Inputs.DatabaseInfoList in Canvas.
	// Coze-Studio will copy/move the specified Database when copying/moving workflows.
	UseDatabase bool `json:"use_database,omitempty"`

	// UseKnowledge indicates the node REQUIRES a Knowledge dataset to work,
	// and MUST have non-empty config value of vo.Node.Data.Inputs.DatasetParam[0].
	// Coze-Studio will copy/move the specified Knowledge Dataset when copying/moving workflows.
	UseKnowledge bool `json:"use_knowledge,omitempty"`

	// UsePlugin indicates the node REQUIRES a Plugin to work,
	// and MUST have non-empty config value of vo.Node.Data.Inputs.PluginAPIParam.
	// Coze-Studio will copy/move the specified Plugin when copying/moving workflows.
	UsePlugin bool `json:"use_plugin,omitempty"`
}

type PluginNodeMeta struct {
	PluginID int64    `json:"plugin_id"`
	NodeType NodeType `json:"node_type"`
	Category string   `json:"category"`
	ApiID    int64    `json:"api_id"`
	ApiName  string   `json:"api_name"`
	Name     string   `json:"name"`
	Desc     string   `json:"desc"`
	IconURL  string   `json:"icon_url"`
}

type PluginCategoryMeta struct {
	PluginCategoryMeta int64    `json:"plugin_category_meta"`
	NodeType           NodeType `json:"node_type"`
	Category           string   `json:"category"`
	Name               string   `json:"name"`
	OnlyOfficial       bool     `json:"only_official"`
	IconURL            string   `json:"icon_url"`
}

const (
	NodeTypeVariableAggregator         NodeType = "VariableAggregator"
	NodeTypeIntentDetector             NodeType = "IntentDetector"
	NodeTypeTextProcessor              NodeType = "TextProcessor"
	NodeTypeHTTPRequester              NodeType = "HTTPRequester"
	NodeTypeLoop                       NodeType = "Loop"
	NodeTypeContinue                   NodeType = "Continue"
	NodeTypeBreak                      NodeType = "Break"
	NodeTypeVariableAssigner           NodeType = "VariableAssigner"
	NodeTypeVariableAssignerWithinLoop NodeType = "VariableAssignerWithinLoop"
	NodeTypeQuestionAnswer             NodeType = "QuestionAnswer"
	NodeTypeInputReceiver              NodeType = "InputReceiver"
	NodeTypeOutputEmitter              NodeType = "OutputEmitter"
	NodeTypeDatabaseCustomSQL          NodeType = "DatabaseCustomSQL"
	NodeTypeDatabaseQuery              NodeType = "DatabaseQuery"
	NodeTypeDatabaseInsert             NodeType = "DatabaseInsert"
	NodeTypeDatabaseDelete             NodeType = "DatabaseDelete"
	NodeTypeDatabaseUpdate             NodeType = "DatabaseUpdate"
	NodeTypeKnowledgeIndexer           NodeType = "KnowledgeIndexer"
	NodeTypeKnowledgeRetriever         NodeType = "KnowledgeRetriever"
	NodeTypeKnowledgeDeleter           NodeType = "KnowledgeDeleter"
	NodeTypeEntry                      NodeType = "Entry"
	NodeTypeExit                       NodeType = "Exit"
	NodeTypeCodeRunner                 NodeType = "CodeRunner"
	NodeTypePlugin                     NodeType = "Plugin"
	NodeTypeCreateConversation         NodeType = "CreateConversation"
	NodeTypeConversationList           NodeType = "ConversationList"
	NodeTypeMessageList                NodeType = "MessageList"
	NodeTypeCreateMessage              NodeType = "CreateMessage"
	NodeTypeEditMessage                NodeType = "EditMessage"
	NodeTypeDeleteMessage              NodeType = "DeleteMessage"
	NodeTypeLambda                     NodeType = "Lambda"
	NodeTypeLLM                        NodeType = "LLM"
	NodeTypeSelector                   NodeType = "Selector"
	NodeTypeBatch                      NodeType = "Batch"
	NodeTypeSubWorkflow                NodeType = "SubWorkflow"
	NodeTypeJsonSerialization          NodeType = "JsonSerialization"
	NodeTypeJsonDeserialization        NodeType = "JsonDeserialization"
	NodeTypeConversationUpdate         NodeType = "ConversationUpdate"
	NodeTypeConversationDelete         NodeType = "ConversationDelete"
	NodeTypeClearConversationHistory   NodeType = "ClearConversationHistory"
	NodeTypeConversationHistory        NodeType = "ConversationHistory"
	NodeTypeComment                    NodeType = "Comment"
)

const (
	EntryNodeKey = "100001"
	ExitNodeKey  = "900001"
)

var Categories = []Category{
	{
		Key:      "", // this is the default category. some of the most important nodes belong here, such as LLM, plugin, sub-workflow
		Name:     "",
		EnUSName: "",
	},
	{
		Key:      "logic",
		Name:     "業務邏輯",
		EnUSName: "Logic",
	},
	{
		Key:      "input&output",
		Name:     "輸入&輸出",
		EnUSName: "Input&Output",
	},
	{
		Key:      "database",
		Name:     "數據庫",
		EnUSName: "Database",
	},
	{
		Key:      "data",
		Name:     "知識庫&數據",
		EnUSName: "Data",
	},
	{
		Key:      "image",
		Name:     "圖像處理",
		EnUSName: "Image",
	},
	{
		Key:      "audio&video",
		Name:     "音視頻處理",
		EnUSName: "Audio&Video",
	},
	{
		Key:      "utilities",
		Name:     "組件",
		EnUSName: "Utilities",
	},
	{
		Key:      "conversation_management",
		Name:     "會話管理",
		EnUSName: "Conversation management",
	},
	{
		Key:      "conversation_history",
		Name:     "會話歷史",
		EnUSName: "Conversation history",
	},
	{
		Key:      "message",
		Name:     "消息",
		EnUSName: "Message",
	},
}

// NodeTypeMetas holds the metadata for all available node types.
// It is initialized with built-in node types and potentially extended by loading from external sources.
var NodeTypeMetas = map[NodeType]*NodeTypeMeta{
	NodeTypeEntry: {
		ID:           1,
		Key:          NodeTypeEntry,
		DisplayKey:   "Start",
		Name:         "開始",
		Category:     "input&output",
		Desc:         "工作流的起始節點，用於設定啓動工作流需要的信息",
		Color:        "#5C62FF",
		IconURI:      "default_icon/workflow_icon/icon-start.jpg",
		SupportBatch: false,
		ExecutableMeta: ExecutableMeta{
			PostFillNil: true,
		},
		EnUSName:        "Start",
		EnUSDescription: "The starting node of the workflow, used to set the information needed to initiate the workflow.",
	},
	NodeTypeExit: {
		ID:           2,
		Key:          NodeTypeExit,
		DisplayKey:   "End",
		Name:         "結束",
		Category:     "input&output",
		Desc:         "工作流的最終節點，用於返回工作流運行後的結果信息",
		Color:        "#5C62FF",
		IconURI:      "default_icon/workflow_icon/icon-end.jpg",
		SupportBatch: false,
		ExecutableMeta: ExecutableMeta{
			PreFillZero:       true,
			InputSourceAware:  true,
			IncrementalOutput: true,
		},
		EnUSName:        "End",
		EnUSDescription: "The final node of the workflow, used to return the result information after the workflow runs.",
	},
	NodeTypeLLM: {
		ID:           3,
		Key:          NodeTypeLLM,
		DisplayKey:   "LLM",
		Name:         "大模型",
		Category:     "",
		Desc:         "調用大語言模型,使用變量和提示詞生成回覆",
		Color:        "#5C62FF",
		IconURI:      "default_icon/workflow_icon/icon-llm.jpg",
		SupportBatch: true,
		ExecutableMeta: ExecutableMeta{
			PreFillZero:      true,
			PostFillNil:      true,
			InputSourceAware: true,
			MayUseChatModel:  true,
			UseCtxCache:      true,
		},
		EnUSName:        "LLM",
		EnUSDescription: "Invoke the large language model, generate responses using variables and prompt words.",
	},
	NodeTypePlugin: {
		ID:           4,
		Key:          NodeTypePlugin,
		DisplayKey:   "Api",
		Name:         "插件",
		Category:     "",
		Desc:         "通過添加工具訪問實時數據和執行外部操作",
		Color:        "#CA61FF",
		IconURI:      "default_icon/workflow_icon/icon-plugin.jpg",
		SupportBatch: true,
		ExecutableMeta: ExecutableMeta{
			PreFillZero: true,
			PostFillNil: true,
			UsePlugin:   true,
		},
		EnUSName:        "Plugin",
		EnUSDescription: "Used to access external real-time data and perform operations",
	},
	NodeTypeCodeRunner: {
		ID:           5,
		Key:          NodeTypeCodeRunner,
		DisplayKey:   "Code",
		Name:         "代碼",
		Category:     "logic",
		Desc:         "編寫代碼，處理輸入變量來生成返回值",
		Color:        "#00B2B2",
		IconURI:      "default_icon/workflow_icon/icon-code.jpg",
		SupportBatch: false,
		ExecutableMeta: ExecutableMeta{
			PreFillZero: true,
			PostFillNil: true,
			UseCtxCache: true,
		},
		EnUSName:        "Code",
		EnUSDescription: "Write code to process input variables to generate return values.",
	},
	NodeTypeKnowledgeRetriever: {
		ID:           6,
		Key:          NodeTypeKnowledgeRetriever,
		DisplayKey:   "Dataset",
		Name:         "知識庫檢索",
		Category:     "data",
		Desc:         "在選定的知識中,根據輸入變量召回最匹配的信息,並以列表形式返回",
		Color:        "#FF811A",
		IconURI:      "default_icon/workflow_icon/icon-knowledge-query.jpg",
		SupportBatch: false,
		ExecutableMeta: ExecutableMeta{
			PreFillZero:  true,
			PostFillNil:  true,
			UseCtxCache:  true,
			UseKnowledge: true,
		},
		EnUSName:        "Knowledge retrieval",
		EnUSDescription: "In the selected knowledge, the best matching information is recalled based on the input variable and returned as an Array.",
	},
	NodeTypeSelector: {
		ID:              8,
		Key:             NodeTypeSelector,
		DisplayKey:      "If",
		Name:            "選擇器",
		Category:        "logic",
		Desc:            "連接多個下游分支，若設定的條件成立則僅運行對應的分支，若均不成立則只運行“否則”分支",
		Color:           "#00B2B2",
		IconURI:         "default_icon/workflow_icon/icon-condition.jpg",
		SupportBatch:    false,
		ExecutableMeta:  ExecutableMeta{},
		EnUSName:        "Condition",
		EnUSDescription: "Connect multiple downstream branches. Only the corresponding branch will be executed if the set conditions are met. If none are met, only the 'else' branch will be executed.",
	},
	NodeTypeSubWorkflow: {
		ID:           9,
		Key:          NodeTypeSubWorkflow,
		DisplayKey:   "SubWorkflow",
		Name:         "工作流",
		Category:     "",
		Desc:         "集成已發佈工作流，可以執行嵌套子任務",
		Color:        "#00B83E",
		IconURI:      "default_icon/workflow_icon/icon-workflow.jpg",
		SupportBatch: true,
		ExecutableMeta: ExecutableMeta{
			BlockEndStream: true,
		},
		EnUSName:        "Workflow",
		EnUSDescription: "Add published workflows to execute subtasks",
	},
	NodeTypeDatabaseCustomSQL: {
		ID:           12,
		Key:          NodeTypeDatabaseCustomSQL,
		DisplayKey:   "Database",
		Name:         "SQL自定義",
		Category:     "database",
		Desc:         "基於用戶自定義的 SQL 完成對數據庫的增刪改查操作",
		Color:        "#FF811A",
		IconURI:      "default_icon/workflow_icon/icon-database.jpg",
		SupportBatch: false,
		ExecutableMeta: ExecutableMeta{
			PreFillZero: true,
			PostFillNil: true,
			UseDatabase: true,
		},
		EnUSName:        "SQL Customization",
		EnUSDescription: "Complete the operations of adding, deleting, modifying and querying the database based on user-defined SQL",
	},
	NodeTypeOutputEmitter: {
		ID:           13,
		Key:          NodeTypeOutputEmitter,
		DisplayKey:   "Message",
		Name:         "輸出",
		Category:     "input&output",
		Desc:         "節點從“消息”更名爲“輸出”，支持中間過程的消息輸出，支持流式和非流式兩種方式",
		Color:        "#5C62FF",
		IconURI:      "default_icon/workflow_icon/icon-output.jpg",
		SupportBatch: false,
		ExecutableMeta: ExecutableMeta{
			PreFillZero:       true,
			InputSourceAware:  true,
			IncrementalOutput: true,
			BlockEndStream:    true,
		},
		EnUSName:        "Output",
		EnUSDescription: "The node is renamed from \"message\" to \"output\", Supports message output in the intermediate process and streaming and non-streaming methods",
	},
	NodeTypeTextProcessor: {
		ID:           15,
		Key:          NodeTypeTextProcessor,
		DisplayKey:   "Text",
		Name:         "文本處理",
		Category:     "utilities",
		Desc:         "用於處理多個字符串類型變量的格式",
		Color:        "#3071F2",
		IconURI:      "default_icon/workflow_icon/icon-text.jpg",
		SupportBatch: false,
		ExecutableMeta: ExecutableMeta{
			PreFillZero:      true,
			InputSourceAware: true,
		},
		EnUSName:        "Text Processing",
		EnUSDescription: "The format used for handling multiple string-type variables.",
	},
	NodeTypeQuestionAnswer: {
		ID:           18,
		Key:          NodeTypeQuestionAnswer,
		DisplayKey:   "Question",
		Name:         "問答",
		Category:     "utilities",
		Desc:         "支持中間向用戶提問問題,支持預置選項提問和開放式問題提問兩種方式",
		Color:        "#3071F2",
		IconURI:      "default_icon/workflow_icon/icon-question.jpg",
		SupportBatch: false,
		ExecutableMeta: ExecutableMeta{
			PreFillZero:             true,
			PostFillNil:             true,
			MayUseChatModel:         true,
			PersistInputOnInterrupt: true,
		},
		EnUSName:        "Question",
		EnUSDescription: "Support asking questions to the user in the middle of the conversation, with both preset options and open-ended questions",
	},
	NodeTypeBreak: {
		ID:              19,
		Key:             NodeTypeBreak,
		DisplayKey:      "Break",
		Name:            "終止循環",
		Category:        "logic",
		Desc:            "用於立即終止當前所在的循環，跳出循環體",
		Color:           "#00B2B2",
		IconURI:         "default_icon/workflow_icon/icon-break.jpg",
		SupportBatch:    false,
		ExecutableMeta:  ExecutableMeta{},
		EnUSName:        "Break",
		EnUSDescription: "Used to immediately terminate the current loop and jump out of the loop",
	},
	NodeTypeVariableAssignerWithinLoop: {
		ID:              20,
		Key:             NodeTypeVariableAssignerWithinLoop,
		DisplayKey:      "LoopSetVariable",
		Name:            "設置變量",
		Category:        "logic",
		Desc:            "用於重置循環變量的值，使其下次循環使用重置後的值",
		Color:           "#00B2B2",
		IconURI:         "default_icon/workflow_icon/icon-loop-set-variable.jpg",
		SupportBatch:    false,
		ExecutableMeta:  ExecutableMeta{},
		EnUSName:        "Set Variable",
		EnUSDescription: "Used to reset the value of the loop variable so that it uses the reset value in the next iteration",
	},
	NodeTypeLoop: {
		ID:           21,
		Key:          NodeTypeLoop,
		DisplayKey:   "Loop",
		Name:         "循環",
		Category:     "logic",
		Desc:         "用於通過設定循環次數和邏輯，重複執行一系列任務",
		Color:        "#00B2B2",
		IconURI:      "default_icon/workflow_icon/icon-loop.jpg",
		SupportBatch: false,
		ExecutableMeta: ExecutableMeta{
			IsComposite:             true,
			PreFillZero:             true,
			PostFillNil:             true,
			PersistInputOnInterrupt: true,
		},
		EnUSName:        "Loop",
		EnUSDescription: "Used to repeatedly execute a series of tasks by setting the number of iterations and logic",
	},
	NodeTypeIntentDetector: {
		ID:           22,
		Key:          NodeTypeIntentDetector,
		DisplayKey:   "Intent",
		Name:         "意圖識別",
		Category:     "logic",
		Desc:         "用於用戶輸入的意圖識別，並將其與預設意圖選項進行匹配。",
		Color:        "#00B2B2",
		IconURI:      "default_icon/workflow_icon/icon-intent.jpg",
		SupportBatch: false,
		ExecutableMeta: ExecutableMeta{
			PreFillZero:     true,
			PostFillNil:     true,
			MayUseChatModel: true,
			UseCtxCache:     true,
		},
		EnUSName:        "Intent recognition",
		EnUSDescription: "Used for recognizing the intent in user input and matching it with preset intent options.",
	},
	NodeTypeKnowledgeIndexer: {
		ID:           27,
		Key:          NodeTypeKnowledgeIndexer,
		DisplayKey:   "DatasetWrite",
		Name:         "知識庫寫入",
		Category:     "data",
		Desc:         "寫入節點可以添加 文本類型 的知識庫，僅可以添加一個知識庫",
		Color:        "#FF811A",
		IconURI:      "default_icon/workflow_icon/icon-knowledge-write.jpg",
		SupportBatch: false,
		ExecutableMeta: ExecutableMeta{
			PreFillZero:  true,
			PostFillNil:  true,
			UseKnowledge: true,
		},
		EnUSName:        "Knowledge writing",
		EnUSDescription: "The write node can add a knowledge base of type text. Only one knowledge base can be added.",
	},
	NodeTypeBatch: {
		ID:           28,
		Key:          NodeTypeBatch,
		DisplayKey:   "Batch",
		Name:         "批處理",
		Category:     "logic",
		Desc:         "通過設定批量運行次數和邏輯，運行批處理體內的任務",
		Color:        "#00B2B2",
		IconURI:      "default_icon/workflow_icon/icon-batch.jpg",
		SupportBatch: false,
		ExecutableMeta: ExecutableMeta{
			IsComposite:             true,
			PreFillZero:             true,
			PostFillNil:             true,
			PersistInputOnInterrupt: true,
		},
		EnUSName:        "Batch",
		EnUSDescription: "By setting the number of batch runs and logic, run the tasks in the batch body.",
	},
	NodeTypeContinue: {
		ID:              29,
		Key:             NodeTypeContinue,
		DisplayKey:      "Continue",
		Name:            "繼續循環",
		Category:        "logic",
		Desc:            "用於終止當前循環，執行下次循環",
		Color:           "#00B2B2",
		IconURI:         "default_icon/workflow_icon/icon-continue.jpg",
		SupportBatch:    false,
		ExecutableMeta:  ExecutableMeta{},
		EnUSName:        "Continue",
		EnUSDescription: "Used to immediately terminate the current loop and execute next loop",
	},
	NodeTypeInputReceiver: {
		ID:           30,
		Key:          NodeTypeInputReceiver,
		DisplayKey:   "Input",
		Name:         "輸入",
		Category:     "input&output",
		Desc:         "支持中間過程的信息輸入",
		Color:        "#5C62FF",
		IconURI:      "default_icon/workflow_icon/icon_input.jpg",
		SupportBatch: false,
		ExecutableMeta: ExecutableMeta{
			PostFillNil: true,
		},
		EnUSName:        "Input",
		EnUSDescription: "Support intermediate information input",
	},
	NodeTypeComment: {
		ID:           31,
		Key:          NodeTypeComment,
		Name:         "註釋",
		Category:     "",             // Not found in cate_list
		Desc:         "comment_desc", // Placeholder from JSON
		Color:        "",
		SupportBatch: false, // supportBatch: 1
		EnUSName:     "Comment",
	},
	NodeTypeVariableAggregator: {
		ID:           32,
		Key:          NodeTypeVariableAggregator,
		Name:         "變量聚合",
		Category:     "logic",
		Desc:         "對多個分支的輸出進行聚合處理",
		Color:        "#00B2B2",
		IconURI:      "default_icon/workflow_icon/icon-variable-merge.jpg",
		SupportBatch: false,
		ExecutableMeta: ExecutableMeta{
			PostFillNil:       true,
			InputSourceAware:  true,
			UseCtxCache:       true,
			IncrementalOutput: true,
		},
		EnUSName:        "Variable Merge",
		EnUSDescription: "Aggregate the outputs of multiple branches.",
	},
	NodeTypeMessageList: {
		ID:           37,
		Key:          NodeTypeMessageList,
		Name:         "查詢消息列表",
		Category:     "message",
		Desc:         "用於查詢消息列表",
		Color:        "#F2B600",
		IconURI:      "default_icon/workflow_icon/icon-query-message-list.jpg",
		SupportBatch: false,
		ExecutableMeta: ExecutableMeta{
			PreFillZero: true,
			PostFillNil: true,
		},
		EnUSName:        "Query message list",
		EnUSDescription: "Used to query the message list",
	},
	NodeTypeClearConversationHistory: {
		ID:           38,
		Key:          NodeTypeClearConversationHistory,
		Name:         "清空會話歷史",
		Category:     "conversation_history", // Mapped from cate_list
		Desc:         "用於清空會話歷史，清空後LLM看到的會話歷史爲空",
		Color:        "#F2B600",
		IconURI:      "default_icon/workflow_icon/icon-clear-context.jpg",
		SupportBatch: false, // supportBatch: 1
		ExecutableMeta: ExecutableMeta{
			PreFillZero: true,
			PostFillNil: true,
		},
		EnUSName:        "Clear conversation history",
		EnUSDescription: "Used to clear conversation history. After clearing, the conversation history visible to the LLM node will be empty.",
	},
	NodeTypeCreateConversation: {
		ID:           39,
		Key:          NodeTypeCreateConversation,
		Name:         "創建會話",
		Category:     "conversation_management",
		Desc:         "用於創建會話",
		Color:        "#F2B600",
		IconURI:      "default_icon/workflow_icon/icon-create-conversation.jpg",
		SupportBatch: false,
		ExecutableMeta: ExecutableMeta{
			PreFillZero: true,
			PostFillNil: true,
		},
		EnUSName:        "Create conversation",
		EnUSDescription: "This node is used to create a conversation.",
	},
	NodeTypeVariableAssigner: {
		ID:              40,
		Key:             NodeTypeVariableAssigner,
		DisplayKey:      "AssignVariable",
		Name:            "變量賦值",
		Category:        "data",
		Desc:            "用於給支持寫入的變量賦值，包括應用變量、用戶變量",
		Color:           "#FF811A",
		IconURI:         "default_icon/workflow_icon/icon-variable-assign.jpg",
		SupportBatch:    false,
		ExecutableMeta:  ExecutableMeta{},
		EnUSName:        "Variable assign",
		EnUSDescription: "Assigns values to variables that support the write operation, including app and user variables.",
	},
	NodeTypeDatabaseUpdate: {
		ID:           42,
		Key:          NodeTypeDatabaseUpdate,
		DisplayKey:   "DatabaseUpdate",
		Name:         "更新數據",
		Category:     "database",
		Desc:         "修改表中已存在的數據記錄，用戶指定更新條件和內容來更新數據",
		Color:        "#F2B600",
		IconURI:      "default_icon/workflow_icon/icon-database-update.jpg",
		SupportBatch: false,
		ExecutableMeta: ExecutableMeta{
			PreFillZero: true,
			UseDatabase: true,
		},
		EnUSName:        "Update Data",
		EnUSDescription: "Modify the existing data records in the table, and the user specifies the update conditions and contents to update the data",
	},
	NodeTypeDatabaseQuery: {
		ID:           43,
		Key:          NodeTypeDatabaseQuery,
		DisplayKey:   "DatabaseSelect",
		Name:         "查詢數據",
		Category:     "database",
		Desc:         "從表獲取數據，用戶可定義查詢條件、選擇列等，輸出符合條件的數據",
		Color:        "#F2B600",
		IconURI:      "default_icon/workflow_icon/icon-database-query.jpg",
		SupportBatch: false,
		ExecutableMeta: ExecutableMeta{
			PreFillZero: true,
			UseDatabase: true,
		},
		EnUSName:        "Query Data",
		EnUSDescription: "Query data from the table, and the user can define query conditions, select columns, etc., and output the data that meets the conditions",
	},
	NodeTypeDatabaseDelete: {
		ID:           44,
		Key:          NodeTypeDatabaseDelete,
		DisplayKey:   "DatabaseDelete",
		Name:         "刪除數據",
		Category:     "database",
		Desc:         "從表中刪除數據記錄，用戶指定刪除條件來刪除符合條件的記錄",
		Color:        "#F2B600",
		IconURI:      "default_icon/workflow_icon/icon-database-delete.jpg",
		SupportBatch: false,
		ExecutableMeta: ExecutableMeta{
			PreFillZero: true,
			UseDatabase: true,
		},
		EnUSName:        "Delete Data",
		EnUSDescription: "Delete data records from the table, and the user specifies the deletion conditions to delete the records that meet the conditions",
	},
	NodeTypeHTTPRequester: {
		ID:           45,
		Key:          NodeTypeHTTPRequester,
		DisplayKey:   "Http",
		Name:         "HTTP 請求",
		Category:     "utilities",
		Desc:         "用於發送API請求，從接口返回數據",
		Color:        "#3071F2",
		IconURI:      "default_icon/workflow_icon/icon-http.jpg",
		SupportBatch: false,
		ExecutableMeta: ExecutableMeta{
			PreFillZero: true,
			PostFillNil: true,
		},
		EnUSName:        "HTTP request",
		EnUSDescription: "It is used to send API requests and return data from the interface.",
	},
	NodeTypeDatabaseInsert: {
		ID:           46,
		Key:          NodeTypeDatabaseInsert,
		DisplayKey:   "DatabaseInsert",
		Name:         "新增數據",
		Category:     "database",
		Desc:         "向表添加新數據記錄，用戶輸入數據內容後插入數據庫",
		Color:        "#F2B600",
		IconURI:      "default_icon/workflow_icon/icon-database-create.jpg",
		SupportBatch: false,
		ExecutableMeta: ExecutableMeta{
			PreFillZero: true,
			UseDatabase: true,
		},
		EnUSName:        "Add Data",
		EnUSDescription: "Add new data records to the table, and insert them into the database after the user enters the data content",
	},
	NodeTypeConversationUpdate: {
		ID:           51,
		Name:         "修改會話",
		Key:          NodeTypeConversationUpdate,
		Category:     "conversation_management",
		Desc:         "用於修改會話的名字",
		Color:        "#F2B600",
		IconURI:      "default_icon/workflow_icon/icon-update-conversation.jpg",
		SupportBatch: false,
		ExecutableMeta: ExecutableMeta{
			PreFillZero: true,
			PostFillNil: true,
		},
		EnUSName:        "Edit Conversation",
		EnUSDescription: "Used to modify the name of a conversation.",
	},

	NodeTypeConversationDelete: {
		ID:           52,
		Name:         "刪除會話",
		Key:          NodeTypeConversationDelete,
		Category:     "conversation_management",
		Desc:         "用於刪除會話",
		Color:        "#F2B600",
		IconURI:      "default_icon/workflow_icon/icon-delete-conversation.jpg",
		SupportBatch: false,
		ExecutableMeta: ExecutableMeta{
			PreFillZero: true,
			PostFillNil: true,
		},
		EnUSName:        "Delete Conversation",
		EnUSDescription: "Used to delete a conversation.",
	},
	NodeTypeConversationList: {
		ID:           53,
		Name:         "查詢會話列表",
		Key:          NodeTypeConversationList,
		Category:     "conversation_management",
		Desc:         "用於查詢所有會話，包含靜態會話、動態會話",
		Color:        "#F2B600",
		IconURI:      "default_icon/workflow_icon/icon-query-conversation-list.jpg",
		SupportBatch: false,
		ExecutableMeta: ExecutableMeta{
			PostFillNil: true,
		},
		EnUSName:        "Query Conversation List",
		EnUSDescription: "Used to query all conversations, including static conversations and dynamic conversations",
	},
	NodeTypeConversationHistory: {
		ID:           54,
		Name:         "查詢會話歷史",
		Key:          NodeTypeConversationHistory,
		Category:     "conversation_history", // Mapped from cate_list
		Desc:         "用於查詢會話歷史，返回LLM可見的會話消息",
		Color:        "#F2B600",
		IconURI:      "default_icon/workflow_icon/icon-query-conversation-history.jpg",
		SupportBatch: false,
		ExecutableMeta: ExecutableMeta{
			PreFillZero: true,
			PostFillNil: true,
		},
		EnUSName:        "Query Conversation History",
		EnUSDescription: "Used to query conversation history, returns conversation messages visible to the LLM",
	},
	NodeTypeCreateMessage: {
		ID:           55,
		Name:         "創建消息",
		Key:          NodeTypeCreateMessage,
		Category:     "message",
		Desc:         "用於創建消息",
		Color:        "#F2B600",
		IconURI:      "default_icon/workflow_icon/icon-create-message.jpg",
		SupportBatch: false, // supportBatch: 1
		ExecutableMeta: ExecutableMeta{
			PreFillZero: true,
			PostFillNil: true,
		},
		EnUSName:        "Create message",
		EnUSDescription: "Used to create messages",
	},
	NodeTypeEditMessage: {
		ID:           56,
		Name:         "修改消息",
		Key:          NodeTypeEditMessage,
		Category:     "message",
		Desc:         "用於修改消息",
		Color:        "#F2B600",
		IconURI:      "default_icon/workflow_icon/icon-update-message.jpg",
		SupportBatch: false, // supportBatch: 1
		ExecutableMeta: ExecutableMeta{
			PreFillZero: true,
			PostFillNil: true,
		},
		EnUSName:        "Edit message",
		EnUSDescription: "Used to edit messages",
	},
	NodeTypeDeleteMessage: {
		ID:           57,
		Name:         "刪除消息",
		Key:          NodeTypeDeleteMessage,
		Category:     "message",
		Desc:         "用於刪除消息",
		Color:        "#F2B600",
		IconURI:      "default_icon/workflow_icon/icon-delete-message.jpg",
		SupportBatch: false, // supportBatch: 1
		ExecutableMeta: ExecutableMeta{
			PreFillZero: true,
			PostFillNil: true,
		},
		EnUSName:        "Delete message",
		EnUSDescription: "Used to delete messages",
	},
	NodeTypeJsonSerialization: {
		// ID is the unique identifier of this node type. Used in various front-end APIs.
		ID: 58,

		// Key is the unique NodeType of this node. Used in backend code as well as saved in DB.
		Key: NodeTypeJsonSerialization,

		// DisplayKey is the string used in frontend to identify this node.
		// Example use cases:
		// - used during querying test-run results for nodes
		// - used in returned messages from streaming openAPI Runs.
		// If empty, will use Key as DisplayKey.
		DisplayKey: "ToJSON",

		// Name is the node in ZH_CN, will be displayed on Canvas.
		Name: "JSON 序列化",

		// Category is the category of this node, determines which category this node will be displayed in.
		Category: "utilities",

		// Desc is the desc in ZH_CN, will be displayed as tooltip on Canvas.
		Desc: "用於把變量轉化爲JSON字符串",

		// Color is the color of the upper edge of the node displayed on Canvas.
		Color: "F2B600",

		// IconURI is the resource identifier for the icon displayed on the Canvas. It's resolved into a full URL by the backend to support different deployment environments.
		IconURI: "default_icon/workflow_icon/icon-json-stringify.jpg",

		// SupportBatch indicates whether this node can set batch mode.
		// NOTE: ultimately it's frontend that decides which node can enable batch mode.
		SupportBatch: false,

		// ExecutableMeta configures certain common aspects of request-time behaviors for this node.
		ExecutableMeta: ExecutableMeta{
			// PreFillZero decides whether to pre-fill zero value for any missing fields in input.
			PreFillZero: true,
			// PostFillNil decides whether to post-fill nil value for any missing fields in output.
			PostFillNil: true,
		},
		// EnUSName is the name in EN_US, will be displayed on Canvas if language of Coze-Studio is set to EnUS.
		EnUSName: "JSON serialization",
		// EnUSDescription is the description in EN_US, will be displayed on Canvas if language of Coze-Studio is set to EnUS.
		EnUSDescription: "Convert variable to JSON string",
	},
	NodeTypeJsonDeserialization: {
		ID:           59,
		Key:          NodeTypeJsonDeserialization,
		DisplayKey:   "FromJSON",
		Name:         "JSON 反序列化",
		Category:     "utilities",
		Desc:         "用於將JSON字符串解析爲變量",
		Color:        "F2B600",
		IconURI:      "default_icon/workflow_icon/icon-json-parser.jpg",
		SupportBatch: false,
		ExecutableMeta: ExecutableMeta{
			PreFillZero: true,
			PostFillNil: true,
			UseCtxCache: true,
		},
		EnUSName:        "JSON deserialization",
		EnUSDescription: "Parse JSON string to variable",
	},
	NodeTypeKnowledgeDeleter: {
		ID:           60,
		Key:          NodeTypeKnowledgeDeleter,
		DisplayKey:   "KnowledgeDelete",
		Name:         "知識庫刪除",
		Category:     "data",
		Desc:         "用於刪除知識庫中的文檔",
		Color:        "#FF811A",
		IconURI:      "default_icon/workflow_icon/icon-knowledge-delete.jpg",
		SupportBatch: false,
		ExecutableMeta: ExecutableMeta{
			PreFillZero:  true,
			PostFillNil:  true,
			UseKnowledge: true,
		},
		EnUSName:        "Knowledge delete",
		EnUSDescription: "The delete node can delete a document in knowledge base.",
	},
	NodeTypeLambda: {
		ID:       1000,
		Key:      NodeTypeLambda,
		Name:     "Lambda",
		EnUSName: "Comment",
	},
}

// PluginNodeMetas holds metadata for specific plugin API entity.
var PluginNodeMetas []*PluginNodeMeta

// PluginCategoryMetas holds metadata for plugin category entity.
var PluginCategoryMetas []*PluginCategoryMeta

func NodeMetaByNodeType(t NodeType) *NodeTypeMeta {
	if m, ok := NodeTypeMetas[t]; ok {
		return m
	}

	return nil
}
