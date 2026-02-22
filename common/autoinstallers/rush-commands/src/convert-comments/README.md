# 中文備註轉換爲英文 - 項目概覽

## 📖 項目簡介

本項目是一個TypeScript命令行工具，用於自動將代碼倉庫中的中文註釋翻譯爲英文。通過調用OpenAI API，實現高質量的代碼註釋翻譯，同時保持原有的代碼格式和結構。

## 🎯 功能特性

- ✅ **智能文件掃描**：自動識別Git倉庫中的源碼文件
- ✅ **多語言支持**：支持TypeScript、JavaScript、Go、Markdown等文件格式
- ✅ **精確註釋解析**：準確定位和提取不同語言的註釋內容
- ✅ **高質量翻譯**：集成OpenAI API，提供專業的翻譯服務
- ✅ **格式保持**：保持原有的縮進、換行和註釋結構
- ✅ **安全備份**：自動創建文件備份，支持回滾操作
- ✅ **併發處理**：支持併發翻譯，提高處理效率
- ✅ **詳細報告**：生成完整的處理報告和統計信息
- ✅ **函數式設計**：採用FP編程範式，代碼簡潔易維護

## 🚀 快速開始

### 安裝依賴

```bash
npm install
```

### 基本使用

```bash
# 翻譯指定目錄下的所有支持文件
ai-translate --root ./src

# 指定文件擴展名
ai-translate --root ./src --exts ts,js,go

# 僅分析不修改（預覽模式）
ai-translate --root ./src --dry-run

# 詳細輸出模式
ai-translate --root ./src --verbose
```

### 配置OpenAI API

```bash
# 通過環境變量設置
export OPENAI_API_KEY=your-api-key

# 或通過命令行參數
ai-translate --root ./src --openai-key your-api-key
```

## 📁 項目結構

```
src/convert-comments/
├── 📄 requirements.md           # 需求文檔
├── 📄 implementation-plan.md    # 實現方案
├── 📄 technical-specification.md # 技術規格
├── 📄 README.md                # 項目概覽（本文件）
├── 📦 index.ts                 # 主入口文件
├── 🗂️ cli/                     # 命令行接口
│   ├── command.ts              # Commander.js命令定義
│   └── config.ts               # 配置管理
├── 🗂️ modules/                 # 核心功能模塊
│   ├── file-scan.ts            # 文件掃描模塊
│   ├── chinese-detection.ts    # 中文檢測模塊
│   ├── translation.ts          # 翻譯服務模塊
│   ├── file-replacement.ts     # 文件替換模塊
│   └── report.ts               # 報告生成模塊
├── 🗂️ utils/                   # 工具函數
│   ├── git.ts                  # Git操作工具
│   ├── language.ts             # 編程語言識別
│   ├── chinese.ts              # 中文字符檢測
│   └── fp.ts                   # 函數式編程工具
├── 🗂️ types/                   # TypeScript類型定義
│   ├── index.ts                # 主要類型定義
│   └── config.ts               # 配置類型
└── 🗂️ __tests__/               # 測試文件
    ├── unit/                   # 單元測試
    └── integration/            # 集成測試
```

## 🔧 核心模塊

### 1. 文件掃描模塊 (FileScanModule)
- 調用Git命令獲取倉庫文件列表
- 根據擴展名過濾目標文件
- 識別編程語言類型

### 2. 中文檢測模塊 (ChineseDetectionModule)
- 解析不同語言的註釋語法
- 識別包含中文字符的註釋
- 提取註釋的精確位置信息

### 3. 翻譯服務模塊 (TranslationModule)
- 調用OpenAI API進行翻譯
- 處理翻譯錯誤和重試機制
- 優化翻譯提示詞和上下文

### 4. 文件替換模塊 (FileReplacementModule)
- 精確替換文件中的中文註釋
- 保持代碼格式和縮進
- 實現備份和回滾機制

### 5. 報告生成模塊 (ReportModule)
- 收集處理過程的統計信息
- 生成詳細的處理報告
- 支持多種輸出格式

## ⚡ 技術亮點

### 函數式編程範式
採用純函數設計和不可變數據結構：
```typescript
const processRepository = pipe(
  getGitTrackedFiles,
  asyncMap(readFile),
  asyncFilter(hasChineseComments),
  asyncMap(extractChineseComments),
  asyncMap(translateComments),
  asyncMap(applyTranslations),
  generateReport
);
```

### 性能優化
- **併發控制**：使用Semaphore控制API調用頻率
- **緩存機制**：避免重複翻譯相同內容
- **增量處理**：僅處理修改過的文件
- **流式處理**：支持大文件分塊處理

### 錯誤處理
- **Result模式**：使用函數式錯誤處理
- **重試機制**：自動重試失敗的API調用
- **部分失敗**：支持部分文件失敗時繼續處理

## 🛠️ 開發指南

### 環境準備

1. **Node.js 環境**：建議使用 Node.js 16+
2. **TypeScript**：項目使用TypeScript開發
3. **OpenAI API Key**：需要有效的OpenAI API密鑰

### 開發流程

1. **安裝依賴**
```bash
npm install
```

2. **開發模式運行**
```bash
npm run dev
```

3. **運行測試**
```bash
npm test
```

4. **構建項目**
```bash
npm run build
```

### 貢獻指南

1. **Fork 項目**到自己的GitHub賬號
2. **創建功能分支**：`git checkout -b feature/new-feature`
3. **提交更改**：`git commit -am 'Add new feature'`
4. **推送分支**：`git push origin feature/new-feature`
5. **創建 Pull Request**

### 代碼規範

- **TypeScript嚴格模式**：啓用所有嚴格類型檢查
- **ESLint規則**：遵循項目ESLint配置
- **Prettier格式化**：保持代碼格式一致
- **單元測試**：新功能需要對應的單元測試

## 📋 命令行參數

### 必需參數
- `--root, -r <directory>`：需要處理的根目錄

### 可選參數
- `--exts, -e <extensions>`：文件擴展名，如 "ts,js,go,md"
- `--openai-key <key>`：OpenAI API密鑰
- `--model <model>`：OpenAI模型名稱（默認：gpt-3.5-turbo）
- `--dry-run`：僅分析不實際修改文件
- `--backup`：創建文件備份（默認啓用）
- `--verbose, -v`：詳細輸出模式
- `--output <file>`：報告輸出文件路徑

### 使用示例

```bash
# 基本使用
ai-translate --root ./src --exts ts,js

# 預覽模式（不修改文件）
ai-translate --root ./src --dry-run --verbose

# 使用GPT-4模型
ai-translate --root ./src --model gpt-4

# 生成JSON格式報告
ai-translate --root ./src --output report.json
```

## 🔍 配置文件

支持使用配置文件來管理默認設置：

```json
{
  "translation": {
    "model": "gpt-3.5-turbo",
    "maxRetries": 3,
    "timeout": 30000,
    "concurrency": 3
  },
  "processing": {
    "defaultExtensions": ["ts", "js", "go", "md"],
    "createBackup": true,
    "outputFormat": "console"
  },
  "git": {
    "ignorePatterns": ["node_modules/**", ".git/**", "dist/**"],
    "includeUntracked": false
  }
}
```

## 📊 輸出報告

處理完成後會生成詳細的統計報告：

```
📊 翻譯處理報告
==================
總文件數: 45
處理成功: 42
跳過文件: 3
翻譯註釋: 128
錯誤數量: 0
處理時間: 45.32秒

✅ 處理完成，無錯誤
```

## ⚠️ 注意事項

### API限制
- OpenAI API有調用頻率限制，建議合理設置併發數量
- 長時間運行可能消耗較多API配額

### 翻譯質量
- 自動翻譯可能不夠準確，建議人工審覈重要註釋
- 提供dry-run模式預覽翻譯結果

### 文件安全
- 默認創建備份文件，避免意外損失
- 建議在版本控制環境下使用

## 🔗 相關文檔

- [需求文檔](./requirements.md) - 詳細的功能需求說明
- [實現方案](./implementation-plan.md) - 整體架構和設計方案
- [技術規格](./technical-specification.md) - 詳細的技術實現規格

## 📞 問題反饋

如有問題或建議，請通過以下方式聯繫：

- 創建 GitHub Issue
- 提交 Pull Request
- 發送郵件至開發團隊

---

**Happy Coding! 🎉**
