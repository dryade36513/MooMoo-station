# NATS EventBus 集成指南

## 概述

本文檔詳細介紹了 NATS 作爲 EventBus 在 MooMoo Station 中的集成適配情況，包括架構設計、實現細節、配置說明和使用指南。

## 集成背景

### 爲什麼選擇 NATS？

在 MooMoo Station 的架構中，EventBus 承擔着關鍵的異步消息傳遞任務，包括工作流執行、Agent 通信、數據處理管道等核心功能。NATS 作爲一個輕量級、高性能的消息系統，爲 MooMoo Station 帶來了以下核心優勢：

1. **輕量級**: NATS 具有極小的資源佔用和簡單的部署架構，非常適合雲原生環境
2. **高性能**: 提供低延遲、高吞吐量的消息傳遞，能夠支撐 MooMoo Station 大規模併發的 Agent 執行
3. **簡單易用**: API 簡潔直觀，降低了開發和維護成本
4. **JetStream 支持**: 通過 JetStream 提供消息持久化、重放和流處理能力
5. **雲原生**: 原生支持 Kubernetes，易於在容器化環境中部署和管理
6. **安全性**: 內置多種認證和授權機制，支持 TLS 加密

### 與其他 MQ 的對比

| 特性                   | NATS           | NSQ            | Kafka          | RocketMQ       | Pulsar         |
| ---------------------- | -------------- | -------------- | -------------- | -------------- | -------------- |
| **部署複雜度**   | 極低           | 低             | 中等           | 中等           | 中等           |
| **性能**         | 極高           | 中等           | 高             | 高             | 高             |
| **資源佔用**     | 極低           | 低             | 中等           | 中等           | 中等           |
| **消息持久化**   | JetStream      | 有限           | 強             | 強             | 強             |
| **順序性保障**   | 支持           | 弱             | 強             | 強             | 強             |
| **水平擴展性**   | 良好           | 中等           | 良好           | 良好           | 優秀           |
| **運維複雜度**   | 極低           | 低             | 高             | 中等           | 中等           |
| **雲原生支持**   | 優秀           | 中等           | 中等           | 中等           | 良好           |

#### NATS 的核心優勢

**輕量級和高性能**：
- **內存佔用**：NATS 服務器通常只需要幾十 MB 內存即可處理數百萬消息
- **啓動速度**：秒級啓動，非常適合微服務和容器化部署
- **延遲**：亞毫秒級消息延遲，適合實時性要求高的場景
- **吞吐量**：單節點可處理數百萬消息/秒

**簡單性**：
- **配置簡單**：最小化配置即可運行，無需複雜的集羣配置
- **API 簡潔**：發佈/訂閱模式簡單直觀，學習成本低
- **運維友好**：監控和調試工具豐富，問題排查容易

**雲原生特性**：
- **Kubernetes 集成**：官方提供 Helm Charts 和 Operator
- **服務發現**：內置服務發現機制，無需外部依賴
- **彈性伸縮**：支持動態集羣成員變更

## 架構設計

### 整體架構

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   MooMoo Station   │    │   NATS Server   │    │   JetStream     │
│   Application   │    │                 │    │   Storage       │
├─────────────────┤    ├─────────────────┤    ├─────────────────┤
│   Producer      │───▶│   Core NATS     │    │   Streams       │
│   Consumer      │◀───│   JetStream     │◀───│   Consumers     │
│   EventBus      │    │   Clustering    │    │   Key-Value     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### 消息流轉模式

NATS 在 MooMoo Station 中支持兩種消息模式：

1. **Core NATS**: 用於實時、輕量級的消息傳遞
   - 發佈/訂閱模式
   - 請求/響應模式
   - 隊列組模式

2. **JetStream**: 用於需要持久化和高可靠性的消息
   - 流式存儲
   - 消息重放
   - 消費者確認機制

## 實現細節

### Producer 實現

Producer 負責向 NATS 發送消息，支持以下特性：

```go
type Producer struct {
    nc     nats.Conn
    js     nats.JetStreamContext
    closed bool
    mu     sync.RWMutex
}

func (p *Producer) SendMessage(ctx context.Context, topic string, message []byte) error {
    // 支持 Core NATS 和 JetStream 兩種模式
    if p.js != nil {
        // JetStream 模式：支持消息持久化
        _, err := p.js.Publish(topic, message)
        return err
    } else {
        // Core NATS 模式：輕量級發佈
        return p.nc.Publish(topic, message)
    }
}
```

### Consumer 實現

Consumer 負責從 NATS 接收和處理消息：

```go
func (c *Consumer) RegisterConsumer(serverURL, topic, group string, handler ConsumerHandler) error {
    // 根據配置選擇 JetStream 或 Core NATS
    if c.useJetStream {
        return c.startJetStreamConsumer(ctx, topic, group, handler)
    } else {
        return c.startCoreConsumer(ctx, topic, group, handler)
    }
}
```

#### JetStream Consumer 特性

- **消息確認**: 支持手動確認機制，確保消息處理成功
- **重試機制**: 失敗消息自動重試，支持指數退避
- **順序處理**: 單條消息處理，避免批處理帶來的複雜性
- **流控制**: 精確的消息流控制，防止消費者過載

#### Core NATS Consumer 特性

- **隊列組**: 支持負載均衡的消息分發
- **輕量級**: 無持久化開銷，適合實時消息處理
- **高性能**: 極低的消息處理延遲

## 配置說明

### 環境變量配置

在 `docker/.env.example` 中添加以下 NATS 相關配置：

```bash
# Backend Event Bus
export COZE_MQ_TYPE="nats"  # 設置消息隊列類型爲 NATS
export MQ_NAME_SERVER="nats:4222"  # NATS 服務器地址

# NATS 特定配置
# NATS_SERVER_URL: NATS 服務器連接 URL，支持 nats:// 和 tls:// 協議
# 集羣模式使用逗號分隔的 URL: "nats://nats1:4222,nats://nats2:4222"
# TLS 連接: "tls://nats:4222"
export NATS_SERVER_URL="nats://nats:4222"

# NATS_JWT_TOKEN: NATS JWT 認證令牌（留空表示無認證）
export NATS_JWT_TOKEN=""

# NATS_NKEY_SEED: NATS NKey 認證種子文件路徑（可選）
export NATS_NKEY_SEED=""

# NATS_USERNAME: NATS 用戶名認證（可選）
export NATS_USERNAME=""

# NATS_PASSWORD: NATS 密碼認證（可選）
export NATS_PASSWORD=""

# NATS_TOKEN: NATS 令牌認證（可選）
export NATS_TOKEN=""

# NATS_STREAM_REPLICAS: JetStream 流的副本數量（默認: 1）
export NATS_STREAM_REPLICAS="1"

# NATS_USE_JETSTREAM: 啓用 JetStream 模式以獲得消息持久化和可靠性（默認: false）
export NATS_USE_JETSTREAM="true"
```

### Docker Compose 配置

在 `docker-compose.yml` 中的 NATS 服務配置：

```yaml
nats:
  image: nats:2.10.24-alpine
  container_name: nats
  restart: unless-stopped
  command:
    - "--jetstream"              # 啓用 JetStream
    - "--store_dir=/data"        # 數據存儲目錄
    - "--max_memory_store=1GB"   # 內存存儲限制
    - "--max_file_store=10GB"    # 文件存儲限制
  ports:
    - "4222:4222"   # 客戶端連接端口
    - "8222:8222"   # HTTP 監控端口
    - "6222:6222"   # 集羣通信端口
  volumes:
    - ./volumes/nats:/data
  networks:
    - coze-network
  healthcheck:
    test: ["CMD", "wget", "--no-verbose", "--tries=1", "--spider", "http://localhost:8222/"]
    interval: 30s
    timeout: 10s
    retries: 3
    start_period: 40s
```

### 應用程序配置

在 MooMoo Station 應用中，通過環境變量配置 NATS：

```go
// 從環境變量讀取配置
mqType := os.Getenv("COZE_MQ_TYPE")
natsURL := os.Getenv("NATS_SERVER_URL")
jwtToken := os.Getenv("NATS_JWT_TOKEN")
seedFile := os.Getenv("NATS_NKEY_SEED")
streamReplicas := os.Getenv("NATS_STREAM_REPLICAS")

// 創建 NATS EventBus
if mqType == "nats" {
    config := &nats.Config{
        ServerURL:      natsURL,
        JWTToken:       jwtToken,
        SeedFile:       seedFile,
        StreamReplicas: streamReplicas,
    }
    
    eventBus, err := nats.NewProducer(config)
    if err != nil {
        log.Fatal("Failed to create NATS producer:", err)
    }
}
```

## 部署指南

### Docker 部署

1. **配置環境變量**：
   ```bash
   cp docker/.env.example docker/.env
   # 編輯 .env 文件，設置 COZE_MQ_TYPE="nats"
   ```

2. **啓動服務**：
   ```bash
   cd docker
   docker-compose up -d nats
   ```

3. **驗證部署**：
   ```bash
   # 檢查 NATS 服務狀態
   docker-compose ps nats
   
   # 查看 NATS 監控界面
   curl http://localhost:8222/varz
   ```

### Kubernetes 部署

使用官方 Helm Chart 部署 NATS：

```bash
# 添加 NATS Helm 倉庫
helm repo add nats https://nats-io.github.io/k8s/helm/charts/

# 安裝 NATS
helm install nats nats/nats --set nats.jetstream.enabled=true
```

### 生產環境配置

對於生產環境，建議進行以下配置優化：

1. **集羣部署**：
   ```yaml
   nats:
     cluster:
       enabled: true
       replicas: 3
   ```

2. **持久化存儲**：
   ```yaml
   nats:
     jetstream:
       fileStore:
         pvc:
           size: 100Gi
           storageClassName: fast-ssd
   ```

3. **資源限制**：
   ```yaml
   nats:
     resources:
       limits:
         cpu: 2000m
         memory: 4Gi
       requests:
         cpu: 500m
         memory: 1Gi
   ```

4. **安全配置**：
   ```yaml
   nats:
     auth:
       enabled: true
       token: "your-secure-token"
     tls:
       enabled: true
   ```

## 監控和運維

### 監控指標

NATS 提供豐富的監控指標，可通過 HTTP 端點獲取：

- **服務器信息**: `GET /varz`
- **連接信息**: `GET /connz`
- **訂閱信息**: `GET /subsz`
- **JetStream 信息**: `GET /jsz`

### 關鍵監控指標

1. **性能指標**：
   - 消息吞吐量 (messages/sec)
   - 消息延遲 (latency)
   - 連接數 (connections)

2. **資源指標**：
   - 內存使用量 (memory usage)
   - CPU 使用率 (cpu usage)
   - 磁盤使用量 (disk usage)

3. **JetStream 指標**：
   - 流數量 (streams)
   - 消費者數量 (consumers)
   - 存儲使用量 (storage usage)

### 日誌管理

NATS 支持多種日誌級別和輸出格式：

```bash
# 啓用調試日誌
nats-server --debug

# 日誌輸出到文件
nats-server --log /var/log/nats.log

# JSON 格式日誌
nats-server --logtime --log_size_limit 100MB
```

## 性能優化

### 連接池優化

```go
// 配置連接選項
opts := []nats.Option{
    nats.MaxReconnects(10),
    nats.ReconnectWait(2 * time.Second),
    nats.Timeout(5 * time.Second),
}

nc, err := nats.Connect(serverURL, opts...)
```

### JetStream 優化

```go
// 配置 JetStream 選項
jsOpts := []nats.JSOpt{
    nats.PublishAsyncMaxPending(1000),
    nats.PublishAsyncErrHandler(func(js nats.JetStream, originalMsg *nats.Msg, err error) {
        log.Printf("Async publish error: %v", err)
    }),
}

js, err := nc.JetStream(jsOpts...)
```

### 消費者優化

```go
// 配置消費者選項
consumerOpts := []nats.SubOpt{
    nats.Durable("coze-consumer"),
    nats.MaxDeliver(3),
    nats.AckWait(30 * time.Second),
    nats.MaxAckPending(100),
}

sub, err := js.PullSubscribe(topic, "coze-group", consumerOpts...)
```

## 故障排查

### 常見問題

1. **連接失敗**：
   - 檢查 NATS 服務是否啓動
   - 驗證網絡連通性
   - 確認端口配置正確

2. **消息丟失**：
   - 檢查 JetStream 是否啓用
   - 驗證消息確認機制
   - 查看錯誤日誌

3. **性能問題**：
   - 監控資源使用情況
   - 檢查消息積壓
   - 優化消費者配置

### 調試工具

NATS 提供了豐富的調試工具：

```bash
# NATS CLI 工具
nats server info
nats stream list
nats consumer list

# 監控消息流
nats sub "coze.>"
nats pub "coze.test" "hello world"
```

## 最佳實踐

### 主題命名規範

建議使用層次化的主題命名：

```
coze.workflow.{workflow_id}.{event_type}
coze.agent.{agent_id}.{action}
coze.knowledge.{kb_id}.{operation}
```

### 錯誤處理

實現完善的錯誤處理機制：

```go
func (c *Consumer) handleMessage(msg *nats.Msg) {
    defer func() {
        if r := recover(); r != nil {
            log.Printf("Message processing panic: %v", r)
            msg.Nak() // 拒絕消息，觸發重試
        }
    }()
    
    if err := c.processMessage(msg.Data); err != nil {
        log.Printf("Message processing error: %v", err)
        msg.Nak()
        return
    }
    
    msg.Ack() // 確認消息處理成功
}
```

### 資源管理

正確管理 NATS 連接和資源：

```go
func (p *Producer) Close() error {
    p.mu.Lock()
    defer p.mu.Unlock()
    
    if p.closed {
        return nil
    }
    
    p.closed = true
    
    if p.nc != nil {
        p.nc.Close()
    }
    
    return nil
}
```

## 總結

NATS 作爲 MooMoo Station 的 EventBus 解決方案，提供了輕量級、高性能、易於部署的消息傳遞能力。通過 JetStream 擴展，NATS 還能提供企業級的消息持久化和流處理功能。

選擇 NATS 的主要優勢：
- **簡單性**: 部署和維護成本低
- **性能**: 極高的消息處理性能
- **雲原生**: 完美適配容器化和 Kubernetes 環境
- **可靠性**: JetStream 提供消息持久化和確認機制
- **擴展性**: 支持集羣部署和水平擴展

NATS 特別適合以下場景：
- 微服務架構的服務間通信
- 實時數據流處理
- 雲原生應用的消息傳遞
- 需要低延遲的消息系統
- 資源受限的部署環境