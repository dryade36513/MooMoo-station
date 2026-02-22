# @coze-devops/common-modules

> Project template for react component with storybook.

## 目錄結構說明

``` bash
├── __tests__
├── .storybook
├── config
├── src
│   ├── assets  ## 公共靜態資源
│   │   ├── react.svg
│   │   └── rspack.png
│   ├── components  ## 公共組件
│   ├── hooks  ## 公共組件
│   ├── index.tsx  ## 對外統一出口, 導出內容類型可以是：component, hook, util, typing
│   ├── modules  ## 模塊集合：子目錄按業務模塊劃分；另外，index.tsx中導出的資源都是來自於modules目錄
│   │   └── query-trace
│   ├── services  ## 請求 api 封裝
│   ├── styles  ## 公共樣式
│   ├── typings  ## 公共類型
│   ├── typings.d.ts
│   └── utils  ## 公共工具庫
├── stories  ## 文檔
├── .eslintrc.js
├── .stylelintrc.js
├── OWNERS
├── package.json
├── README.md
├── tsconfig.build.json
├── tsconfig.json
└── vitest.config.ts
```
