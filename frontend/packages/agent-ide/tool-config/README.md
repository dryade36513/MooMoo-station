# @coze-agent-ide/tool-config
Tool 區域配置文件

## Features

- 新接入的 tool，需要在 types 文件中新增枚舉值
- 新接入的 tool，需要在 constants 文件中配置 TOOL_KEY_STORE_MAP、AGENT_SKILL_KEY_MAP，用於爲 ToolKey 和 /api/draftbot/update 接口的入參字段名做映射
- 新接入的 tool，需要在 constants 文件中配置 TOOL_KEY_TO_API_STATUS_KEY_MAP，用於爲 ToolKey 和 /api/draftbot/update_display_info 接口的字段名做映射
