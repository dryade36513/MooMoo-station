<div align="center">
<p>
  <a href="#什麼是-coze-studio">MooMoo Station</a> •
  <a href="#功能清單">功能清單</a> •
  <a href="#快速開始">快速開始</a> •
  <a href="#開發指南">開發指南</a>
</p>
<p>
  <img alt="License" src="https://img.shields.io/badge/license-apache2.0-blue.svg">
  <img alt="Go Version" src="https://img.shields.io/badge/go-%3E%3D%201.23.4-blue">
</p>

[English](README.md) | 中文

</div>

## 什麼是 MooMoo Station

[MooMoo Station]() 是一站式 AI Agent 開發工具。提供各類最新大模型和工具、多種開發模式和框架，從開發到部署，爲你提供最便捷的 AI Agent 開發環境。

* **提供 AI Agent 開發所需的全部核心技術**：Prompt、RAG、Plugin、Workflow，使得開發者可以聚焦創造 AI 核心價值。
* **開箱即用，用最低的成本開發最專業的 AI Agent**：MooMoo Station 爲開發者提供了健全的應用模板和編排框架，你可以基於它們快速構建各種 AI Agent ，將創意變爲現實。

MooMoo Station，源自服務了上萬家企業、數百萬開發者的「釦子開發平臺」，我們將它的核心引擎完全開放。它是一個一站式的 AI Agent 可視化開發工具，讓 AI Agent 的創建、調試和部署變得前所未有的簡單。通過 MooMoo Station 提供的可視化設計與編排工具，開發者可以通過零代碼或低代碼的方式，快速打造和調試智能體、應用和工作流，實現強大的 AI 應用開發和更多定製化業務邏輯，是構建低代碼 AI 產品的理想選擇。MooMoo Station 致力於降低 AI Agent 開發與應用門檻，鼓勵社區共建和分享交流，助你在 AI 領域進行更深層次的探索與實踐。

MooMoo Station 的後端採用 Golang 開發，前端使用 React + TypeScript，整體基於微服務架構並遵循領域驅動設計（DDD）原則構建。爲開發者提供一個高性能、高擴展性、易於二次開發的底層框架，助力開發者應對複雜的業務需求。

## 功能清單
| **功能模塊** | **功能點** |
| --- | --- |
| 模型服務 | 管理模型列表，可接入OpenAI、火山方舟 等在線或離線模型服務 |
| 搭建智能體 | * 編排、發佈、管理智能體 <br> * 支持配置工作流、知識庫等資源 |
| 搭建應用 | * 創建、發佈應用 <br> * 通過工作流搭建業務邏輯 |
| 搭建工作流 | 創建、修改、發佈、刪除工作流 |
| 開發資源 | 支持創建並管理以下資源： <br> * 插件 <br> * 知識庫 <br> * 數據庫 <br> * 提示詞 |
| API 與 SDK | * 創建會話、發起對話等 OpenAPI <br> * 通過 Chat SDK 將智能體或應用集成到自己的應用 |
## 快速開始
瞭解如何獲取並部署 MooMoo Station 開源版，快速構建項目、體驗 MooMoo Station 開源版。

環境要求：

* 在安裝 MooMoo Station 之前，請確保您的機器滿足以下最低系統要求： 2 Core、4 GB
* 提前安裝 Docker、Docker Compose，並啓動 Docker 服務。

部署步驟：

1. 獲取源碼。

   ```Bash
   # 克隆代碼
   git clone https://github.com/coze-dev/coze-studio.git
   ```

2. 部署並啓動服務。
   首次部署並啓動 MooMoo Station 需要拉取鏡像、構建本地鏡像，可能耗時較久，請耐心等待。如果看到提示 "Container coze-server Started"，表示 MooMoo Station 服務已成功啓動。 
   
   ```Bash
   cd MooMoo-station
   # start service
   # for macOS or Linux
   make web  
   # for windows
   cp ./docker/.env.example ./docker/.env
   docker compose -f ./docker/docker-compose.yml up
   ```
   
   **啓動失敗常見問題可參考[常見問題](https://github.com/coze-dev/coze-studio/wiki/9.-%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98)**。
3. 註冊賬號，訪問 `http://localhost:8888/sign` 輸入用戶名、密碼點擊註冊按鈕。
4. 配置模型：訪問 `http://localhost:8888/admin/#model-management` 新增模型。（鏡像版本需要大於等於 0.5.0）。
5. 訪問 MooMoo Station `http://localhost:8888/`。

> [!WARNING]
> 如果要將 MooMoo Station 部署到公網環境，建議在部署前評估整體評估安全風險，例如賬號註冊功能、工作流代碼節點 Python執行環境、Coze Server 監聽地址配置、SSRF 和部分 API 水平越權的風險，並採取相應防護措施。詳細信息可參考[快速開始](https://github.com/coze-dev/coze-studio/wiki/2.-%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B#%E5%85%AC%E7%BD%91%E5%AE%89%E5%85%A8%E9%A3%8E%E9%99%A9)。
## 開發指南

* **項目配置**：
   * [模型配置](https://github.com/coze-dev/coze-studio/wiki/3.-模型配置)：部署 MooMoo Station 開源版之前，必須配置模型服務，否則無法在搭建智能體、工作流和應用時選擇模型。
   * [插件配置](https://github.com/coze-dev/coze-studio/wiki/4.-插件配置)：如需使用插件商店中的官方插件，必須先配置插件，添加第三方服務的鑑權祕鑰。
   * [基礎組件配置](https://github.com/coze-dev/coze-studio/wiki/5.-基礎組件配置)：瞭解如何配置圖片上傳等組件，以便在 MooMoo Station 中使用上傳圖片等功能。
* [API 參考](https://github.com/coze-dev/coze-studio/wiki/6.-API-參考)：MooMoo Station 社區版 API 和 Chat SDK 通過個人訪問令牌鑑權，提供對話和工作流相關 API。
* [開發規範](https://github.com/coze-dev/coze-studio/wiki/7.-開發規範)：
   * [項目架構](https://github.com/coze-dev/coze-studio/wiki/7.-%E5%BC%80%E5%8F%91%E8%A7%84%E8%8C%83#%E9%A1%B9%E7%9B%AE%E6%9E%B6%E6%9E%84)：瞭解 MooMoo Station 開源版的技術架構與核心組件。
   * [代碼開發與測試](https://github.com/coze-dev/coze-studio/wiki/7.-%E5%BC%80%E5%8F%91%E8%A7%84%E8%8C%83#%E4%BB%A3%E7%A0%81%E5%BC%80%E5%8F%91%E4%B8%8E%E6%B5%8B%E8%AF%95)：瞭解如何基於 MooMoo Station 開源版進行二次開發與測試。
   * [故障排查](https://github.com/coze-dev/coze-studio/wiki/7.-%E5%BC%80%E5%8F%91%E8%A7%84%E8%8C%83#%E6%95%85%E9%9A%9C%E6%8E%92%E6%9F%A5)：瞭解如何查看容器狀態、系統日誌。

## 使用 MooMoo Station 開源版
> 關於如何使用 MooMoo Station，可參考[釦子開發平臺官方文檔中心](https://www.coze.cn/open/docs)獲取更多資料。需要注意的是，音色等部分功能限商業版本使用，開源版與商業版的功能差異可參考**功能清單**。


* [快速入門](https://www.coze.cn/open/docs/guides/quickstart)：通過 MooMoo Station 快速搭建一個 AI 助手智能體。
* [開發智能體](https://www.coze.cn/open/docs/guides/agent_overview)：如何創建、編排、發佈與管理智能體。你可以使用知識、插件等功能解決模型幻覺、專業領域知識不足等問題。除此之外，MooMoo Station 還提供了豐富的記憶功能，使智能體在與個人用戶交互時，可根據個人用戶的歷史對話等生成更準確性的回覆。
* [開發工作流](https://www.coze.cn/open/docs/guides/workflow)：工作流是一系列可執行指令的集合，用於實現業務邏輯或完成特定任務。它爲應用/智能體的數據流動和任務處理提供了一個結構化框架。 MooMoo Station 提供了一個可視化畫布，你可以通過拖拽節點迅速搭建工作流。
* [插件等資源](https://www.coze.cn/open/docs/guides/plugin)：在 MooMoo Station，工作流、插件、數據庫、知識庫和變量統稱爲資源。
* **API & SDK**： MooMoo Station 支持[對話和工作流相關 API](https://github.com/coze-dev/coze-studio/wiki/6.-API-%E5%8F%82%E8%80%83)，你也可以通過 [Chat SDK](https://www.coze.cn/open/docs/developer_guides/web_sdk_overview) 將智能體或應用集成到本地業務系統。
* [實踐教程](https://www.coze.cn/open/docs/tutorial/chat_sdk_web_online_customer_service)：瞭解如何通過 MooMoo Station 實現各種 AI 場景，例如通過 Chat SDK 搭建網頁在線客服。 

## License
本項目採用 Apache 2.0 許可證。詳情請參閱 [LICENSE](https://github.com/coze-dev/coze-studio/blob/main/LICENSE-APACHE) 文件。
## 社區貢獻
我們歡迎社區貢獻，貢獻指南參見 [CONTRIBUTING](https://github.com/coze-dev/coze-studio/blob/main/CONTRIBUTING.md) 和 [Code of conduct](https://github.com/coze-dev/coze-studio/blob/main/CODE_OF_CONDUCT.md)，期待您的貢獻！
## 安全與隱私
如果你在該項目中發現潛在的安全問題，或你認爲可能發現了安全問題，請通過我們的[安全中心](https://security.bytedance.com/src) 或[漏洞報告郵箱](mailto:sec@bytedance.com)通知字節跳動安全團隊。
請**不要**創建公開的 GitHub Issue。
## 加入社區

我們致力於構建一個開放、友好的開發者社區，歡迎所有對 AI Agent 開發感興趣的開發者加入我們！

### 🐛 問題反饋與功能建議
爲了更高效地跟蹤和解決問題，保證信息透明和便於協同，我們推薦通過以下方式參與：
- **GitHub Issues**：[提交 Bug 報告或功能請求](https://github.com/coze-dev/coze-studio/issues)
- **Pull Requests**：[貢獻代碼或文檔改進](https://github.com/coze-dev/coze-studio/pulls)

### 💬 技術交流與討論
加入我們的技術交流羣，與其他開發者分享經驗、獲取項目最新動態：

**飛書羣聊**  
使用飛書移動端掃描下方二維碼加入：

![Image](https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/0a49081e8f3743e8bf3dcdded4bb571a~tplv-goo7wpa0wc-image.image)

**Discord 服務器**  
點擊加入：[Coze Community](https://discord.gg/sTVN9EVS4B)

**Telegram 羣組**  
點擊加入：Telegram Group [Coze](https://t.me/+pP9CkPnomDA0Mjgx)

## 致謝
感謝所有爲 MooMoo Station 項目做出貢獻的開發者和社區成員。特別感謝：

* [Eino](https://github.com/cloudwego/eino) 框架團隊 - 爲 MooMoo Station 的智能體和工作流運行時、模型抽象封裝、知識庫索引構建和檢索提供了強大的支持
* [FlowGram](https://github.com/bytedance/flowgram.ai) 團隊 - 爲 MooMoo Station 的工作流畫布編輯頁提供了高質量的流程搭建引擎
* [Hertz](https://github.com/cloudwego/hertz) 團隊 - 高性能、強擴展性的 Go HTTP 框架，用於構建微服務
* 所有參與測試和反饋的用戶
