# @coze-arch/monorepo-kits

> 一個用於管理 monorepo 項目的工具包，提供了基於 Rush 框架的項目查找、依賴分析和配置管理功能。

## 🚀 功能概述

`@coze-arch/monorepo-kits` 是專爲 monorepo 項目設計的工具庫，提供了一套完整的包管理、依賴分析和配置查詢解決方案。通過統一的 API 接口，幫助開發者更高效地管理複雜的 monorepo 項目結構。

## ✨ 主要功能

### 📦 子包管理
- **依賴遞歸查找**: 自動查找包的所有子依賴關係
- **路徑解析**: 獲取包在文件系統中的實際位置
- **配置查詢**: 讀取包的 package.json 配置信息
- **緩存優化**: 智能緩存機制提升查找性能

### ⚙️ Rush 配置管理
- **配置加載**: 自動加載和管理 Rush 配置
- **單例模式**: 避免重複加載配置文件
- **類型安全**: 完整的 TypeScript 類型支持

### 🔍 項目查找
- **依賴分析**: 查找包的直接和間接依賴關係
- **項目定位**: 快速定位指定包的項目配置
- **關係查詢**: 分析包之間的依賴關係圖

## 📚 API 文檔

### 子包管理

#### `lookupSubPackages(packageName: string): string[]`
遞歸查找指定包的所有子依賴包。

```typescript
import { lookupSubPackages } from '@coze-arch/monorepo-kits';

const deps = lookupSubPackages('@coze/ui-components');
console.log(deps); // ['@coze/icons', '@coze/themes', ...]
```

#### `getPackageLocation(packageName: string): string`
獲取指定包的文件系統路徑。

```typescript
import { getPackageLocation } from '@coze-arch/monorepo-kits';

const location = getPackageLocation('@coze/ui-components');
console.log(location); // '/path/to/packages/ui-components'
```

#### `getPackageJson(packageName: string): RushConfigurationProject['packageJson']`
獲取指定包的 package.json 配置信息。

```typescript
import { getPackageJson } from '@coze-arch/monorepo-kits';

const pkg = getPackageJson('@coze/ui-components');
console.log(pkg.version); // '1.0.0'
```

### Rush 配置管理

#### `getRushConfiguration(): RushConfiguration`
獲取 Rush 配置實例（單例模式）。

```typescript
import { getRushConfiguration } from '@coze-arch/monorepo-kits';

const rushConfig = getRushConfiguration();
console.log(rushConfig.projects.length); // 項目總數
```

### 項目查找

#### `lookupTo(to: string): string[]`
查找指定包的直接依賴項。

```typescript
import { lookupTo } from '@coze-arch/monorepo-kits';

const dependencies = lookupTo('@coze/ui-components');
console.log(dependencies); // 依賴的包名數組
```

#### `lookupOnly(packageName: string): RushConfigurationProject`
查找並返回指定包的完整項目配置對象。

```typescript
import { lookupOnly } from '@coze-arch/monorepo-kits';

const project = lookupOnly('@coze/ui-components');
console.log(project.projectFolder); // 項目文件夾路徑
```

## 🛠 安裝使用

### 安裝

```bash
# 在 monorepo 內部作爲工具庫使用
npm install @coze-arch/monorepo-kits
```

### 基本使用

```typescript
import {
  lookupSubPackages,
  getPackageLocation,
  getRushConfiguration,
  lookupOnly
} from '@coze-arch/monorepo-kits';

// 查找包的所有依賴
const allDeps = lookupSubPackages('your-package');

// 獲取包的位置
const location = getPackageLocation('your-package');

// 獲取項目配置
const project = lookupOnly('your-package');

// 獲取 Rush 配置
const rushConfig = getRushConfiguration();
```

## 🏗 項目結構

```
src/
├── index.ts          # 主入口文件，導出所有公共 API
├── sub-packages.ts   # 子包管理和依賴查找功能
├── rush-config.ts    # Rush 配置管理
└── lookup.ts         # 項目查找相關功能
```

## 🎯 使用場景

### 1. 依賴分析工具
```typescript
// 分析包的依賴關係
const analyzeDependencies = (packageName: string) => {
  const allDeps = lookupSubPackages(packageName);
  const directDeps = lookupTo(packageName);

  return {
    total: allDeps.length,
    direct: directDeps.length,
    indirect: allDeps.length - directDeps.length
  };
};
```

### 2. 構建腳本集成
```typescript
// 在構建腳本中獲取包信息
const buildPackage = (packageName: string) => {
  const location = getPackageLocation(packageName);
  const pkg = getPackageJson(packageName);

  console.log(`Building ${pkg.name}@${pkg.version} at ${location}`);
  // ... 執行構建邏輯
};
```

### 3. 自動化工具開發
```typescript
// 爲自動化工具提供項目信息
const getProjectInfo = (packageName: string) => {
  const project = lookupOnly(packageName);
  const dependencies = lookupSubPackages(packageName);

  return {
    name: project.packageName,
    path: project.projectFolder,
    dependencies,
    config: project.packageJson
  };
};
```

## 🚀 特性優勢

- **🎯 專爲 Monorepo 設計**: 針對大型 monorepo 項目優化
- **⚡ 高性能**: 智能緩存機制，避免重複計算
- **🛡 類型安全**: 完整的 TypeScript 類型定義
- **🔧 易於集成**: 簡潔的 API 設計，易於集成到現有工具鏈
- **📦 輕量級**: 最小化依賴，專注核心功能

## 📄 依賴信息

- **主要依賴**: `@rushstack/rush-sdk@5.100.2`
- **開發依賴**: ESLint、TypeScript、Vitest 等工具鏈
- **運行環境**: Node.js 18+

## 🤝 貢獻指南

歡迎提交 Issue 和 Pull Request 來改進這個項目。

## 📝 許可證

Apache-2.0 License

---

**作者**: fanwenjie.fe@bytedance.com

如需瞭解更多信息，請查看項目文檔或聯繫維護團隊。
