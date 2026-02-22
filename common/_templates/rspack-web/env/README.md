# 環境變量
## 配置
index.ts 文件中配置環境變量，可根據多環境（地區）的環境變量可分別設置相關變量。

# 注意事項
## dts 自動生成約定
- src/typings/env/index.d.ts 由腳本自動更新
- 類型來源：env/index.ts 文件中的 envs 變量，請確保新增的環境變量都作爲 envs 的一組 key-value

