# OceanBase 向量數據庫集成指南

## 概述

本文檔詳細介紹了 OceanBase 向量數據庫在 MooMoo Station 中的集成適配情況，包括架構設計、實現細節、配置說明和使用指南。

## 集成背景

### 爲什麼選擇 OceanBase？

1. **事務支持**: OceanBase 提供完整的 ACID 事務支持，確保數據一致性
2. **部署簡單**: 相比 Milvus 等專用向量數據庫，OceanBase 部署更簡單
3. **MySQL 兼容**: 兼容 MySQL 協議，學習成本低
4. **向量擴展**: 原生支持向量數據類型和索引
5. **運維友好**: 運維成本低，適閤中小規模應用

### 與 Milvus 的對比

| 特性                   | OceanBase      | Milvus                 |
| ---------------------- | -------------- | ---------------------- |
| **部署複雜度**   | 低（單機部署） | 高（需要 etcd、MinIO） |
| **事務支持**     | 完整 ACID      | 有限                   |
| **向量檢索速度** | 中等           | 更快                   |
| **存儲效率**     | 中等           | 更高                   |
| **運維成本**     | 低             | 高                     |
| **學習曲線**     | 平緩           | 陡峭                   |

## 架構設計

### 整體架構

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   MooMoo Station   │    │  OceanBase      │    │   Vector Store  │
│   Application   │───▶│   Client        │───▶│   Manager       │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                │
                                ▼
                       ┌─────────────────┐
                       │  OceanBase      │
                       │   Database      │
                       └─────────────────┘
```

### 核心組件

#### 1. OceanBase Client (`backend/infra/impl/oceanbase/`)

**主要文件**:

- `oceanbase.go` - 委託客戶端，提供向後兼容接口
- `oceanbase_official.go` - 核心實現，基於官方文檔
- `types.go` - 類型定義

**核心功能**:

```go
type OceanBaseClient interface {
    CreateCollection(ctx context.Context, collectionName string) error
    InsertVectors(ctx context.Context, collectionName string, vectors []VectorResult) error
    SearchVectors(ctx context.Context, collectionName string, queryVector []float64, topK int) ([]VectorResult, error)
    DeleteVector(ctx context.Context, collectionName string, vectorID string) error
    InitDatabase(ctx context.Context) error
    DropCollection(ctx context.Context, collectionName string) error
}
```

#### 2. Search Store Manager (`backend/infra/impl/document/searchstore/oceanbase/`)

**主要文件**:

- `oceanbase_manager.go` - 管理器實現
- `oceanbase_searchstore.go` - 搜索存儲實現
- `factory.go` - 工廠模式創建
- `consts.go` - 常量定義
- `convert.go` - 數據轉換
- `register.go` - 註冊函數

**核心功能**:

```go
type Manager interface {
    Create(ctx context.Context, collectionName string) (SearchStore, error)
    Get(ctx context.Context, collectionName string) (SearchStore, error)
    Delete(ctx context.Context, collectionName string) error
}
```

#### 3. 應用層集成 (`backend/application/base/appinfra/`)

**文件**: `app_infra.go`

**集成點**:

```go
case "oceanbase":
    // 構建 DSN
    dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local",
        user, password, host, port, database)

    // 創建客戶端
    client, err := oceanbaseClient.NewOceanBaseClient(dsn)

    // 初始化數據庫
    if err := client.InitDatabase(ctx); err != nil {
        return nil, fmt.Errorf("init oceanbase database failed, err=%w", err)
    }
```

## 配置說明

### 環境變量配置

#### 必需配置

```bash
# 向量存儲類型
VECTOR_STORE_TYPE=oceanbase

# OceanBase 連接配置
OCEANBASE_HOST=localhost
OCEANBASE_PORT=2881
OCEANBASE_USER=root
OCEANBASE_PASSWORD=coze123
OCEANBASE_DATABASE=test
```

#### 可選配置

```bash
# 性能優化配置
OCEANBASE_VECTOR_MEMORY_LIMIT_PERCENTAGE=30
OCEANBASE_BATCH_SIZE=100
OCEANBASE_MAX_OPEN_CONNS=100
OCEANBASE_MAX_IDLE_CONNS=10

# 緩存配置
OCEANBASE_ENABLE_CACHE=true
OCEANBASE_CACHE_TTL=300

# 監控配置
OCEANBASE_ENABLE_METRICS=true
OCEANBASE_ENABLE_SLOW_QUERY_LOG=true

# 重試配置
OCEANBASE_MAX_RETRIES=3
OCEANBASE_RETRY_DELAY=1
OCEANBASE_CONN_TIMEOUT=30
```

### Docker 配置

#### docker-compose-oceanbase.yml

```yaml
oceanbase:
  image: oceanbase/oceanbase-ce:latest
  container_name: coze-oceanbase
  environment:
    MODE: SLIM
    OB_DATAFILE_SIZE: 1G
    OB_SYS_PASSWORD: ${OCEANBASE_PASSWORD:-coze123}
    OB_TENANT_PASSWORD: ${OCEANBASE_PASSWORD:-coze123}
  ports:
    - '2881:2881'
  volumes:
    - ./data/oceanbase/ob:/root/ob
    - ./data/oceanbase/cluster:/root/.obd/cluster
  deploy:
    resources:
      limits:
        memory: 4G
      reservations:
        memory: 2G
```

## 使用指南

### 1. 快速啓動

```bash
# 克隆項目
git clone https://github.com/coze-dev/coze-studio.git
cd coze-studio

# 設置 OceanBase 環境文件
make oceanbase_env

# 啓動 OceanBase 調試環境
make oceanbase_debug
```

### 2. 驗證部署

```bash
# 檢查容器狀態
docker ps | grep oceanbase

# 測試連接
mysql -h localhost -P 2881 -u root -p -e "SELECT 1;"

# 查看數據庫
mysql -h localhost -P 2881 -u root -p -e "SHOW DATABASES;"
```

### 3. 創建知識庫

在 MooMoo Station 界面中：

1. 進入知識庫管理
2. 選擇 OceanBase 作爲向量存儲
3. 上傳文檔進行向量化
4. 測試向量檢索功能

### 4. 性能監控

```bash
# 查看容器資源使用
docker stats coze-oceanbase

# 查看慢查詢日誌
docker logs coze-oceanbase | grep "slow query"

# 查看連接數
mysql -h localhost -P 2881 -u root -p -e "SHOW PROCESSLIST;"
```

## Helm 部署指南（Kubernetes）

### 1. 環境準備

確保已安裝以下工具：

- Kubernetes 集羣（推薦使用 k3s 或 kind）
- Helm 3.x
- kubectl

### 2. 安裝依賴

#### 安裝 cert-manager

```bash
# 添加 cert-manager Helm 倉庫
helm repo add jetstack https://charts.jetstack.io
helm repo update

# 安裝 cert-manager
kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.16.2/cert-manager.yaml

# 等待 cert-manager 就緒
kubectl wait --for=condition=ready pod -l app.kubernetes.io/name=cert-manager -n cert-manager --timeout=300s
```

#### 安裝 ob-operator

```bash
# 添加 ob-operator Helm 倉庫
helm repo add ob-operator https://oceanbase.github.io/ob-operator/
helm repo update

# 安裝 ob-operator
helm install ob-operator ob-operator/ob-operator --set reporter=cozeAi --namespace=oceanbase-system --create-namespace

# 等待 ob-operator 就緒
kubectl wait --for=condition=ready pod -l control-plane=controller-manager -n oceanbase-system --timeout=300s
```

### 3. 部署 OceanBase

#### 使用集成 Helm Chart

```bash
# 部署完整的 MooMoo Station 應用（包含 OceanBase）
helm install coze-studio helm/charts/opencoze \
  --set oceanbase.enabled=true \
  --namespace coze-studio \
  --create-namespace

# 或者只部署 OceanBase 組件
helm install oceanbase-only helm/charts/opencoze \
  --set oceanbase.enabled=true \
  --set mysql.enabled=false \
  --set redis.enabled=false \
  --set minio.enabled=false \
  --set elasticsearch.enabled=false \
  --set milvus.enabled=false \
  --set rocketmq.enabled=false \
  --namespace oceanbase \
  --create-namespace
```

#### 自定義配置

創建 `oceanbase-values.yaml` 文件：

```yaml
oceanbase:
  enabled: true
  port: 2881
  targetPort: 2881
  clusterName: 'cozeAi'
  clusterId: 1
  image:
    repository: oceanbase/oceanbase-ce
    tag: 'latest'
  obAgentVersion: '4.2.2-100000042024011120'
  monitorEnabled: true
  storageClass: ''
  observerConfig:
    resource:
      cpu: 2
      memory: 8Gi
    storages:
      dataStorage: 10G
      redoLogStorage: 5G
      logStorage: 5G
  monitorResource:
    cpu: 100m
    memory: 256Mi
  generateUserSecrets: true
  userSecrets:
    root: 'coze123'
    monitor: 'coze123'
    operator: 'coze123'
    proxyro: 'coze123'
  topology:
    - zone: zone1
      replica: 1
  parameters:
    - name: system_memory
      value: '4G'
    - name: '__min_full_resource_pool_memory'
      value: '4294967296'
  annotations: {}
  backupVolumeEnabled: false
```

使用自定義配置部署：

```bash
helm install oceanbase-custom helm/charts/opencoze \
  -f oceanbase-values.yaml \
  --namespace oceanbase \
  --create-namespace
```

### 4. 驗證部署

```bash
# 檢查 OBCluster 狀態
kubectl get obcluster -n oceanbase

# 檢查 OceanBase pods
kubectl get pods -n oceanbase

# 檢查服務
kubectl get svc -n oceanbase

# 查看詳細狀態
kubectl describe obcluster -n oceanbase
```

### 5. 連接測試

#### 端口轉發

```bash
# 轉發 OceanBase 端口
kubectl port-forward svc/oceanbase-service -n oceanbase 2881:2881
```

#### 使用 obclient 連接

```bash
# 在集羣內連接
kubectl exec -it deployment/oceanbase-obcluster-zone1 -n oceanbase -- obclient -h127.0.0.1 -P2881 -uroot@test -pcoze123 -Dtest

# 從外部連接（需要端口轉發）
obclient -h127.0.0.1 -P2881 -uroot@test -pcoze123 -Dtest
```

#### 使用 MySQL 客戶端連接

```bash
# 使用 MySQL 客戶端
mysql -h127.0.0.1 -P2881 -uroot@test -pcoze123 -Dtest
```

### 6. 監控和管理

#### 查看日誌

```bash
# 查看 OceanBase 日誌
kubectl logs -f deployment/oceanbase-obcluster-zone1 -n oceanbase

# 查看 ob-operator 日誌
kubectl logs -f deployment/oceanbase-controller-manager -n oceanbase-system
```

#### 擴縮容

```bash
# 擴展副本數
kubectl patch obcluster oceanbase-obcluster -n oceanbase --type='merge' -p='{"spec":{"topology":[{"zone":"zone1","replica":2}]}}'

# 調整資源配置
kubectl patch obcluster oceanbase-obcluster -n oceanbase --type='merge' -p='{"spec":{"observer":{"resource":{"cpu":4,"memory":"16Gi"}}}}'
```

#### 備份和恢復

```bash
# 創建備份
kubectl apply -f - <<EOF
apiVersion: oceanbase.oceanbase.com/v1alpha1
kind: OBTenantBackupPolicy
metadata:
  name: backup-policy
  namespace: oceanbase
spec:
  obClusterName: oceanbase-obcluster
  tenantName: test
  backupType: FULL
  schedule: "0 2 * * *"
  destination:
    path: "file:///backup"
EOF
```

### 7. 故障排除

#### 常見問題

1. **OBCluster 創建失敗**

   ```bash
   # 檢查 ob-operator 狀態
   kubectl get pods -n oceanbase-system

   # 查看詳細錯誤
   kubectl describe obcluster -n oceanbase
   ```
2. **鏡像拉取失敗**

   ```bash
   # 檢查節點鏡像拉取能力
   kubectl describe node

   # 手動拉取鏡像
   docker pull oceanbase/oceanbase-cloud-native:4.3.5.3-103000092025080818
   ```
3. **存儲問題**

   ```bash
   # 檢查 PVC 狀態
   kubectl get pvc -n oceanbase

   # 檢查存儲類
   kubectl get storageclass
   ```

#### 日誌分析

```bash
# 查看所有相關日誌
kubectl logs -f deployment/oceanbase-controller-manager -n oceanbase-system
kubectl logs -f deployment/oceanbase-obcluster-zone1 -n oceanbase
kubectl logs -f deployment/cert-manager -n cert-manager
```

### 8. 卸載

```bash
# 卸載 OceanBase
helm uninstall oceanbase-custom -n oceanbase

# 刪除 namespace
kubectl delete namespace oceanbase

# 卸載 ob-operator
helm uninstall ob-operator -n oceanbase-system

# 卸載 cert-manager
kubectl delete -f https://github.com/cert-manager/cert-manager/releases/download/v1.16.2/cert-manager.yaml
```

## 適配特點

### 1. 設計原則

#### 架構兼容性設計

- 嚴格遵循 MooMoo Station 核心架構設計原則，確保 OceanBase 適配層與現有系統無縫集成
- 採用委託模式（Delegation Pattern）實現向後兼容，保證現有接口的穩定性和一致性
- 保持與現有向量存儲接口的完全兼容，確保系統平滑遷移和升級

#### 性能優先

- 使用 HNSW 索引實現高效的近似最近鄰搜索
- 批量操作減少數據庫交互次數
- 連接池管理優化資源使用

#### 易於部署

- 單機部署，無需複雜的集羣配置
- Docker 一鍵部署
- 環境變量配置，靈活易用

### 2. 技術亮點

#### 委託模式設計

```go
type OceanBaseClient struct {
    official *OceanBaseOfficialClient
}

func (c *OceanBaseClient) CreateCollection(ctx context.Context, collectionName string) error {
    return c.official.CreateCollection(ctx, collectionName)
}
```

#### 智能配置管理

```go
func DefaultConfig() *Config {
    return &Config{
        Host:     getEnv("OCEANBASE_HOST", "localhost"),
        Port:     getEnvAsInt("OCEANBASE_PORT", 2881),
        User:     getEnv("OCEANBASE_USER", "root"),
        Password: getEnv("OCEANBASE_PASSWORD", ""),
        Database: getEnv("OCEANBASE_DATABASE", "test"),
        // ... 其他配置
    }
}
```

#### 錯誤處理優化

```go
func (c *OceanBaseOfficialClient) setVectorParameters() error {
    params := map[string]string{
        "ob_vector_memory_limit_percentage": "30",
        "ob_query_timeout":                  "86400000000",
        "max_allowed_packet":                "1073741824",
    }

    for param, value := range params {
        if err := c.db.Exec(fmt.Sprintf("SET GLOBAL %s = %s", param, value)).Error; err != nil {
            log.Printf("Warning: Failed to set %s: %v", param, err)
        }
    }
    return nil
}
```

## 故障排查

### 1. 常見問題

#### 連接問題

```bash
# 檢查容器狀態
docker ps | grep oceanbase

# 檢查端口映射
docker port coze-oceanbase

# 測試連接
mysql -h localhost -P 2881 -u root -p -e "SELECT 1;"
```

#### 向量索引問題

```sql
-- 檢查索引狀態
SHOW INDEX FROM test_vectors;

-- 重建索引
DROP INDEX idx_test_embedding ON test_vectors;
CREATE VECTOR INDEX idx_test_embedding ON test_vectors(embedding)
WITH (distance=cosine, type=hnsw, lib=vsag, m=16, ef_construction=200, ef_search=64);
```

#### 性能問題

```sql
-- 調整內存限制
SET GLOBAL ob_vector_memory_limit_percentage = 50;

-- 查看慢查詢
SHOW VARIABLES LIKE 'slow_query_log';
```

### 2. 日誌分析

```bash
# 查看 OceanBase 日誌
docker logs coze-oceanbase

# 查看應用日誌
tail -f logs/coze-studio.log | grep -i "oceanbase\|vector"
```

## 總結

OceanBase 向量數據庫在 MooMoo Station 中的集成實現了以下目標：

1. **功能完整**: 支持完整的向量存儲和檢索功能
2. **性能良好**: 通過 HNSW 索引實現高效的向量搜索
3. **部署簡單**: 單機部署，無需複雜配置
4. **運維友好**: 低運維成本，易於監控和管理
5. **擴展性強**: 支持水平擴展和垂直擴展

通過這次集成，MooMoo Station 爲用戶提供了一個簡單、高效、可靠的向量數據庫解決方案，特別適合需要事務支持、部署簡單、運維成本低的場景。

## 相關鏈接

- [OceanBase 官方文檔](https://www.oceanbase.com/docs)
- [MooMoo Station 項目地址](https://github.com/coze-dev/coze-studio)
