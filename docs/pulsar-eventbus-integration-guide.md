# Pulsar EventBus 集成指南

## 概述

本文檔詳細介紹了 Apache Pulsar 作爲 EventBus 在 MooMoo Station 中的集成適配情況，包括架構設計、實現細節、配置說明和使用指南。

## 集成背景

### 爲什麼選擇 Pulsar？

在 MooMoo Station 的架構中，EventBus 承擔着關鍵的異步消息傳遞任務，包括工作流執行、Agent 通信、數據處理管道等核心功能。隨着用戶規模的增長和業務複雜度的提升，我們需要一個更加強大和靈活的消息隊列解決方案。

Pulsar 作爲新一代的分佈式消息系統，爲 MooMoo Station 帶來了以下核心優勢：

1. **高性能**: Pulsar 提供低延遲、高吞吐量的消息傳遞，能夠支撐 MooMoo Station 大規模併發的 Agent 執行和工作流處理
2. **多租戶**: 原生支持多租戶架構，完美契合 MooMoo Station 多用戶、多工作空間的業務模式
3. **持久化**: 支持消息持久化存儲，確保 Agent 執行狀態和工作流數據的可靠性，避免因系統重啓導致的任務丟失
4. **水平擴展**: 支持計算和存儲分離，易於水平擴展，能夠隨着 MooMoo Station 用戶增長而平滑擴容
5. **順序性保障**: Pulsar 提供強一致性的消息順序保證，確保 Agent 工作流中的步驟按正確順序執行，避免狀態混亂和數據不一致
6. **豐富特性**: 支持消息去重、延遲消息、死信隊列等高級特性，爲複雜的 AI 工作流提供更強的可靠性保障

### 與其他 MQ 的對比

| 特性                   | Pulsar         | NSQ            | Kafka          | RocketMQ       |
| ---------------------- | -------------- | -------------- | -------------- | -------------- |
| **部署複雜度**   | 中等           | 低             | 中等           | 中等           |
| **性能**         | 高             | 中等           | 高             | 高             |
| **多租戶支持**   | 原生支持       | 不支持         | 有限支持       | 有限支持       |
| **消息持久化**   | 強             | 有限           | 強             | 強             |
| **順序性保障**   | 強             | 弱             | 強             | 強             |
| **水平擴展性**   | 優秀           | 中等           | 良好           | 良好           |
| **擴縮容速度**   | 快速           | 中等           | 慢             | 中等           |
| **運維複雜度**   | 中等           | 低             | 高             | 中等           |
| **生態系統**     | 豐富           | 簡單           | 非常豐富       | 豐富           |

#### 水平擴展能力詳細對比

**Pulsar 的擴展優勢**：
- **計算存儲分離**：Broker（計算）和 BookKeeper（存儲）獨立擴展，可以根據業務需求精確調整資源
- **無狀態 Broker**：Broker 節點無狀態，可以快速啓動和停止，實現秒級擴縮容
- **自動負載均衡**：新增 Broker 後自動進行 Topic 和 Partition 的負載重分配
- **熱擴容**：支持在不停服的情況下動態增減節點，對業務無影響

**與其他 MQ 的對比**：
- **Kafka**：需要手動進行 Partition 重分配，擴容過程複雜且耗時，可能影響業務
- **RocketMQ**：雖然支持動態擴容，但 NameServer 和 Broker 的協調機制相對複雜
- **NSQ**：單機架構限制了擴展能力，只能通過增加 Topic 數量來提升吞吐量

這種優秀的擴展能力使得 Pulsar 特別適合 MooMoo Station 這種用戶增長快速、業務負載波動大的場景。

## 架構設計

### 整體架構

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   MooMoo Station   │    │  Pulsar         │    │   EventBus      │
│   Application   │───▶│   Client        │───▶│   Manager       │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                │
                                ▼
                       ┌─────────────────┐
                       │  Apache Pulsar  │
                       │   Cluster       │
                       └─────────────────┘
```

### 核心組件

#### 1. Pulsar Producer

**文件位置**: `backend/infra/impl/eventbus/pulsar/producer.go`

**核心功能**:

```go
type Producer interface {
    Send(ctx context.Context, body []byte, opts ...SendOpt) error
    BatchSend(ctx context.Context, bodyArr [][]byte, opts ...SendOpt) error
}

type producerImpl struct {
    topic    string
    client   pulsar.Client
    producer pulsar.Producer
}
```

**特性**:
- 支持同步和異步發送
- 批量發送優化性能
- JWT 認證支持
- 優雅關閉處理

#### 2. Pulsar Consumer

**文件位置**: `backend/infra/impl/eventbus/pulsar/consumer.go`

**核心功能**:

```go
func RegisterConsumer(serviceURL, topic, group string, 
    consumerHandler eventbus.ConsumerHandler, 
    opts ...eventbus.ConsumerOpt) error
```

**特性**:
- 獨佔模式消費，保證消息順序
- 自動重試和錯誤處理
- 上下文取消支持
- 消息確認和否認機制

#### 3. EventBus 工廠

**文件位置**: `backend/infra/impl/eventbus/eventbus.go`

**集成點**:

```go
case consts.MQTypePulsar:
    return pulsar.NewProducer(nameServer, topic, group)
```

## 使用指南

### 1. 準備項目

```bash
# 克隆項目
git clone https://github.com/coze-dev/coze-studio.git
cd coze-studio
```

### 2. 修改 Docker Compose 配置

在 `docker/docker-compose.yml` 文件中添加 Pulsar 服務：

```yaml
services:
  # 添加 Pulsar 服務
  pulsar:
    image: apachepulsar/pulsar:3.0.12
    container_name: coze-pulsar
    restart: always
    command: >
      sh -c "bin/pulsar standalone"
    ports:
      - "6650:6650"   # Pulsar 服務端口
      - "8080:8080"   # Pulsar 管理端口
    volumes:
      - ./data/pulsar:/pulsar/data
    networks:
      - coze-network
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8080/admin/v2/clusters"]
      interval: 30s
      timeout: 10s
      retries: 5
      start_period: 30s

  # 其他現有服務...
```

### 3. 配置環境變量

修改 `.env` 文件，配置 MooMoo Station 使用 Pulsar：

```bash
# 進入 docker 目錄
cd docker

# 複製環境配置文件
cp .env.example .env

# 編輯 .env 文件，添加以下配置：
# 消息隊列類型
COZE_MQ_TYPE=pulsar

# Pulsar 服務地址
MQ_NAME_SERVER=pulsar://pulsar:6650

# JWT 認證 Token（可選，如果啓用了認證）
# PULSAR_JWT_TOKEN=your_jwt_token_here
```

### 4. 啓動服務

```bash
# 啓動包含 Pulsar 的完整 MooMoo Station 服務
docker-compose up -d

# 查看服務啓動狀態
docker-compose ps
```

### 5. 驗證部署

```bash
# 檢查 Pulsar 容器狀態
docker ps | grep pulsar

# 檢查 Pulsar 健康狀態
curl -f http://localhost:8080/admin/v2/clusters

# 查看 Pulsar 日誌
docker logs coze-pulsar

# 測試 Pulsar 連接
docker exec -it coze-pulsar bin/pulsar-admin clusters list
```

### 6. 訪問服務

- **MooMoo Station**: `http://localhost:3000`（根據實際配置）
- **Pulsar Admin**: `http://localhost:8080`

現在 MooMoo Station 已經成功集成 Pulsar 作爲消息隊列，所有的事件總線功能都將通過 Pulsar 處理。

## 附錄

### A. 生產環境集羣部署

生產環境推薦使用 Pulsar 集羣部署以獲得高可用性和更好的性能。集羣部署涉及 ZooKeeper、BookKeeper 和 Broker 等多個組件的配置，配置較爲複雜。

**生產環境建議**：
- 使用 Pulsar 集羣模式部署，確保高可用性
- 開啓 JWT 認證，保障系統安全
- 配置適當的資源限制和監控

詳細的集羣部署配置請參考 [Apache Pulsar 官方文檔](https://pulsar.apache.org/docs/4.1.x/deploy-kubernetes/)。

### B. 可視化管理工具

對於需要圖形化界面管理 Pulsar 集羣的用戶，可以考慮使用 ASP 社區版。ASP 社區版是一個專爲 Apache Pulsar 設計的現代化管理平臺，提供了直觀的 Web 界面來管理集羣、租戶、命名空間、主題等資源。該平臺支持實時監控、性能指標展示、配置管理等功能，大大簡化了 Pulsar 集羣的日常運維工作。

更多信息請參考：[ASP 社區版文檔](https://ascentstream.com/docs/asp/asp-community/overview)

### C. 適配特點

#### 1. 設計原則

**架構兼容性設計**：
- 嚴格遵循 MooMoo Station EventBus 接口規範，確保與現有系統無縫集成
- 採用工廠模式實現多種 MQ 的統一管理
- 保持與 NSQ、Kafka、RocketMQ 實現的接口一致性

**性能優先**：
- 異步批量發送減少網絡開銷
- 連接池複用降低連接成本
- 消息確認機制保證可靠性

**易於部署**：
- 單機模式快速啓動
- Docker 容器化部署
- 環境變量配置，靈活易用

#### 2. 技術亮點

**JWT 認證支持**：
```go
// 自動檢測和配置 JWT 認證
if jwtToken := os.Getenv(consts.PulsarJWTToken); jwtToken != "" {
    clientOptions.Authentication = pulsar.NewAuthenticationToken(jwtToken)
    logs.Debugf("Using JWT authentication, token length: %d", len(jwtToken))
}
```

**批量發送優化**：
```go
// 異步批量發送提高性能
for _, body := range bodyArr {
    msg := &pulsar.ProducerMessage{Payload: body}
    if option.ShardingKey != nil {
        msg.Key = *option.ShardingKey
    }
    p.producer.SendAsync(ctx, msg, callback)
}
```

**優雅關閉處理**：
```go
// 監聽系統信號，優雅關閉資源
safego.Go(context.Background(), func() {
    signal.WaitExit()
    logs.Infof("shutting down pulsar consumer for topic: %s, group: %s", topic, group)
    cancel()
    consumer.Close()
    client.Close()
})
```

### C. 故障排查

#### 1. 常見問題

**連接問題**：
```bash
# 檢查 Pulsar 服務狀態
docker exec -it coze-pulsar bin/pulsar-admin brokers healthcheck

# 檢查網絡連通性
telnet localhost 6650

# 查看連接配置
docker exec -it coze-pulsar cat conf/standalone.conf | grep -E "(advertisedAddress|bindAddress)"
```

**認證問題**：
```bash
# 檢查 JWT Token 配置
echo $PULSAR_JWT_TOKEN

# 驗證 Token 有效性
docker exec -it coze-pulsar bin/pulsar-admin --auth-plugin org.apache.pulsar.client.impl.auth.AuthenticationToken \
  --auth-params token:$PULSAR_JWT_TOKEN \
  clusters list
```

**性能問題**：
```bash
# 查看 Topic 積壓情況
docker exec -it coze-pulsar bin/pulsar-admin topics stats persistent://public/default/your-topic

# 調整批量發送參數
# 在代碼中可以通過 SendOpt 配置批量大小和延遲
```

#### 2. 日誌分析

```bash
# 查看 Pulsar 服務日誌
docker logs coze-pulsar

# 查看應用日誌中的 Pulsar 相關信息
tail -f logs/coze-studio.log | grep -i "pulsar\|eventbus"

# 啓用詳細日誌
# 在 Pulsar 配置中設置 rootLogLevel=DEBUG
```

#### 3. 監控指標

```bash
# 獲取 Broker 指標
curl http://localhost:8080/metrics/

# 獲取特定 Topic 指標
curl http://localhost:8080/admin/v2/persistent/public/default/your-topic/stats

# 監控消費延遲
docker exec -it coze-pulsar bin/pulsar-admin topics subscriptions persistent://public/default/your-topic
```

### D. 最佳實踐

#### 1. 生產環境配置

```bash
# 推薦的生產環境配置
COZE_MQ_TYPE=pulsar
MQ_NAME_SERVER=pulsar://pulsar-broker-1:6650,pulsar://pulsar-broker-2:6650,pulsar://pulsar-broker-3:6650
PULSAR_JWT_TOKEN=your-production-jwt-token

# Pulsar 集羣配置
# 建議至少 3 個 Broker 節點
# 建議至少 3 個BookKeeper 節點
# 建議至少 3 個 ZooKeeper 節點
```

#### 2. 性能調優

```bash
# Producer 配置優化
# 批量發送大小：1000 條消息或 1MB
# 發送超時：30 秒
# 壓縮算法：LZ4

# Consumer 配置優化
# 接收隊列大小：1000
# 確認超時：30 秒
# 消費者類型：Exclusive（保證順序）
```

#### 3. 安全配置

```bash
# 啓用 JWT 認證
PULSAR_JWT_TOKEN=your-jwt-token

# 配置訪問控制列表（ACL）
# 通過 Pulsar Admin 工具配置 Topic 級別的權限
```

## 總結

Apache Pulsar 在 MooMoo Station 中的 EventBus 集成實現了以下目標：

1. **高性能**: 支持高吞吐量、低延遲的消息傳遞
2. **高可靠**: 消息持久化存儲，支持消息確認機制
3. **易擴展**: 支持水平擴展，適應業務增長
4. **易運維**: 豐富的管理工具和監控指標
5. **企業級**: 多租戶支持，適合企業級應用場景

通過這次集成，MooMoo Station 爲用戶提供了一個高性能、高可靠、易擴展的消息隊列解決方案，特別適合需要高吞吐量、低延遲、企業級特性的場景。

## 相關鏈接

- [Apache Pulsar 官方文檔](https://pulsar.apache.org/docs/)
- [Pulsar Go Client 文檔](https://pulsar.apache.org/docs/client-libraries-go/)
- [ASP 社區版文檔](https://ascentstream.com/docs/asp/asp-community/overview)
- [MooMoo Station 項目地址](https://github.com/coze-dev/coze-studio)
