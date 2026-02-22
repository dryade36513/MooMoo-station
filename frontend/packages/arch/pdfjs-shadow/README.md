# @coze-arch/pdfjs-shadow

## Description

原始的 pdfjs-dist 包兼容性過低，需要重新編譯，增加 polyfill 之後才能正常運行，因此設計該 package，主要作用：

1. 收斂 pdfjs-dist 調用，避免 bot 環境中多出定義 pdfjs-dist 版本；
2. 收斂 worker src url 的計算邏輯。

注意，該 package 僅供 coze 消費。
