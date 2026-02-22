# @coze-arch/bot-error 使用文檔
## 安裝
```
cd ${path/to/project}
rush add  @coze-arch/bot-error
```
## 使用
提供了一些用於錯誤處理的工具。

### CustomError

CustomError 是一個自定義錯誤類，用來代替原生的Error，使用 throw new CustomerError拋出的錯誤會上報到slardar的自定義事件中，使用方可以根據需要進行監控處理，不會統計到jsError

```
import { CustomError } from '@coze-arch/bot-error';

throw new CustomError('parmasValidation', 'empty copy');

```

### isCustomError

isCustomError 是一個函數，它可以檢查一個錯誤是否是 CustomError

```
import { isCustomError, CustomError } from '@coze-arch/bot-error';

const myError = new CustomError('parmasValidation', 'empty copy');

console.log(isCustomError(error)); // 輸出：true
```

### useErrorCatch

useErrorCatch 是一個 React Hook，它可以幫助你在組件中捕獲和處理錯誤。
1. 監聽全局 unhandledrejection、error 事件，上報相關內容由業務側自行補充
2. 對於已知錯誤，上報自定義事件進行監控
