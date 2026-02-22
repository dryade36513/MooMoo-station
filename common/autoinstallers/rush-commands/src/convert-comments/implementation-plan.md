# 中文備註轉換爲英文 - 實現方案

## 項目概述

基於需求文檔，本項目需要實現一個TypeScript腳本，用於將代碼倉庫內的中文備註自動轉換爲英文備註。

## 核心模塊設計

### 1. 文件掃描模塊 (FileScanModule)

```typescript
interface FileScanConfig {
  root: string;
  extensions: string[];
}

interface SourceFile {
  path: string;
  content: string;
  language: 'typescript' | 'javascript' | 'go' | 'markdown' | 'other';
}
```

**功能職責：**
- 調用git命令獲取倉庫所有源碼文件
- 根據文件擴展名過濾目標文件
- 讀取文件內容並識別編程語言類型

**核心函數：**
- `getGitTrackedFiles(root: string): Promise<string[]>`
- `filterFilesByExtensions(files: string[], extensions: string[]): string[]`
- `readSourceFiles(filePaths: string[]): Promise<SourceFile[]>`

### 2. 中文檢測模塊 (ChineseDetectionModule)

```typescript
interface ChineseComment {
  content: string;
  startLine: number;
  endLine: number;
  startColumn: number;
  endColumn: number;
  type: 'single-line' | 'multi-line' | 'documentation';
}

interface FileWithComments {
  file: SourceFile;
  chineseComments: ChineseComment[];
}
```

**功能職責：**
- 解析不同語言的註釋語法
- 識別包含中文字符的註釋
- 提取註釋的精確位置信息

**核心函數：**
- `detectChineseInComments(file: SourceFile): ChineseComment[]`
- `parseCommentsByLanguage(content: string, language: string): Comment[]`
- `containsChinese(text: string): boolean`

### 3. 翻譯服務模塊 (TranslationModule)

```typescript
interface TranslationConfig {
  apiKey: string;
  model: string;
  maxRetries: number;
  timeout: number;
}

interface TranslationResult {
  original: string;
  translated: string;
  confidence: number;
}
```

**功能職責：**
- 調用OpenAI API進行翻譯
- 處理翻譯錯誤和重試
- 保持代碼註釋的格式和結構

**核心函數：**
- `translateComment(comment: string, context?: string): Promise<TranslationResult>`
- `batchTranslate(comments: string[]): Promise<TranslationResult[]>`
- `createTranslationPrompt(comment: string, language: string): string`

### 4. 文件替換模塊 (FileReplacementModule)

```typescript
interface ReplacementOperation {
  file: string;
  replacements: Array<{
    start: number;
    end: number;
    original: string;
    replacement: string;
  }>;
}
```

**功能職責：**
- 精確替換文件中的中文註釋
- 保持代碼格式和縮進
- 創建備份機制

**核心函數：**
- `replaceCommentsInFile(file: SourceFile, replacements: ReplacementOperation): Promise<void>`
- `createBackup(filePath: string): Promise<string>`
- `applyReplacements(content: string, replacements: Replacement[]): string`

### 5. 報告生成模塊 (ReportModule)

```typescript
interface ProcessingReport {
  totalFiles: number;
  processedFiles: number;
  translatedComments: number;
  errors: Error[];
  duration: number;
  details: FileProcessingDetail[];
}

interface FileProcessingDetail {
  file: string;
  commentCount: number;
  status: 'success' | 'error' | 'skipped';
  errorMessage?: string;
}
```

**功能職責：**
- 記錄處理過程中的統計信息
- 生成詳細的處理報告
- 記錄錯誤和異常情況

## 命令行接口設計

### 主命令

```bash
ai-translate --root <directory> --exts <extensions> [options]
```

### 參數說明

- `--root, -r <directory>`: 需要處理的根目錄（必填）
- `--exts, -e <extensions>`: 文件擴展名數組，如 "ts,js,go,md"（可選，默認處理所有文本文件）
- `--openai-key <key>`: OpenAI API密鑰（可選，也可通過環境變量提供）
- `--model <model>`: OpenAI模型名稱（可選，默認gpt-3.5-turbo）
- `--dry-run`: 僅分析不實際修改文件（可選）
- `--backup`: 創建文件備份（可選，默認啓用）
- `--verbose, -v`: 詳細輸出模式（可選）
- `--output <file>`: 報告輸出文件（可選）

## 技術實現細節

### 1. 函數式編程範式

採用FP風格，主要體現在：
- 純函數設計：無副作用的數據轉換
- 不可變數據結構：使用immutable.js或原生不可變操作
- 函數組合：通過pipe和compose構建處理流水線
- 錯誤處理：使用Either/Maybe模式處理異常

### 2. 異步處理策略

```typescript
// 使用函數式風格的異步處理管道
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

### 3. 錯誤處理機制

- 使用Result類型封裝成功/失敗狀態
- 實現重試機制處理網絡錯誤
- 記錄詳細的錯誤日誌和上下文
- 支持部分失敗的情況下繼續處理

### 4. 性能優化

- 併發處理：合理控制併發數量避免API限制
- 緩存機制：避免重複翻譯相同內容
- 增量處理：僅處理修改過的文件
- 流式處理：大文件分塊處理

## 項目結構

```
src/convert-comments/
├── index.ts                 # 主入口文件
├── cli/
│   ├── command.ts          # Commander.js命令定義
│   └── config.ts           # 配置管理
├── modules/
│   ├── file-scan.ts        # 文件掃描模塊
│   ├── chinese-detection.ts # 中文檢測模塊
│   ├── translation.ts      # 翻譯服務模塊
│   ├── file-replacement.ts # 文件替換模塊
│   └── report.ts          # 報告生成模塊
├── utils/
│   ├── git.ts             # Git操作工具
│   ├── language.ts        # 編程語言識別
│   ├── chinese.ts         # 中文字符檢測
│   └── fp.ts             # 函數式編程工具
├── types/
│   ├── index.ts           # 類型定義
│   └── config.ts          # 配置類型
└── __tests__/
    ├── unit/              # 單元測試
    └── integration/       # 集成測試
```

## 依賴包選擇

### 核心依賴
- `commander`: 命令行接口
- `openai`: OpenAI API客戶端
- `simple-git`: Git操作
- `ramda` 或 `lodash/fp`: 函數式編程工具

### 開發依賴
- `typescript`: TypeScript編譯器
- `@types/node`: Node.js類型定義
- `jest`: 測試框架
- `prettier`: 代碼格式化
- `eslint`: 代碼檢查

## 開發階段規劃

### 階段1：基礎框架搭建
1. 項目初始化和依賴安裝
2. TypeScript配置和構建腳本
3. 命令行接口框架
4. 基礎類型定義

### 階段2：核心功能實現
1. 文件掃描模塊
2. 中文檢測模塊
3. 翻譯服務模塊
4. 文件替換模塊

### 階段3：完善和優化
1. 報告生成模塊
2. 錯誤處理和重試機制
3. 性能優化
4. 單元測試和集成測試

### 階段4：發佈準備
1. 文檔完善
2. 使用示例
3. 打包和發佈腳本
4. CI/CD配置

## 使用示例

```bash
# 基本使用
ai-translate --root ./src --exts ts,js,go

# 僅分析不修改
ai-translate --root ./src --dry-run

# 指定OpenAI配置
ai-translate --root ./src --openai-key sk-... --model gpt-4

# 生成詳細報告
ai-translate --root ./src --verbose --output report.json
```

## 質量保證

### 測試策略
- 單元測試：覆蓋所有核心函數
- 集成測試：端到端流程驗證
- 性能測試：大型倉庫處理能力
- 安全測試：API密鑰保護

### 代碼質量
- TypeScript嚴格模式
- ESLint規則檢查
- Prettier代碼格式化
- 代碼覆蓋率要求>90%

## 風險和緩解措施

### 主要風險
1. **API配額限制**：OpenAI API調用頻率限制
2. **翻譯質量**：自動翻譯可能不夠準確
3. **文件損壞**：替換操作可能破壞文件
4. **性能問題**：大型倉庫處理時間過長

### 緩解措施
1. 實現智能重試和降級機制
2. 提供人工審覈和修正功能
3. 強制備份和回滾機制
4. 併發控制和進度顯示
