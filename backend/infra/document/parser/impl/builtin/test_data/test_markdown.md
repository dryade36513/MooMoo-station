# 1. 歡迎使用 Cmd Markdown 編輯閱讀器
<!-- TOC -->

- [1. 歡迎使用 Cmd Markdown 編輯閱讀器](#1-歡迎使用-cmd-markdown-編輯閱讀器)
    - [1.1. markdown擴展需求](#11-markdown擴展需求)
        - [1.1.1. 一、各種流程圖](#111-一各種流程圖)
        - [1.1.2. [Windows/Mac/Linux 全平臺客戶端](https://www.zybuluo.com/cmd/)](#112-windowsmaclinux-全平臺客戶端httpswwwzybuluocomcmd)
    - [1.2. 什麼是 Markdown](#12-什麼是-markdown)
        - [1.2.1. 製作一份待辦事宜 [Todo 列表](https://www.zybuluo.com/mdeditor?url=https://www.zybuluo.com/static/editor/md-help.markdown#13-待辦事宜-todo-列表)](#121-製作一份待辦事宜-todo-列表httpswwwzybuluocommdeditorurlhttpswwwzybuluocomstaticeditormd-helpmarkdown13-待辦事宜-todo-列表)
        - [1.2.2. 書寫一個質能守恆公式[^LaTeX]](#122-書寫一個質能守恆公式^latex)
        - [1.2.3. 高亮一段代碼[^code]](#123-高亮一段代碼^code)
        - [1.2.4. 高效繪製 [流程圖](https://www.zybuluo.com/mdeditor?url=https://www.zybuluo.com/static/editor/md-help.markdown#7-流程圖)](#124-高效繪製-流程圖httpswwwzybuluocommdeditorurlhttpswwwzybuluocomstaticeditormd-helpmarkdown7-流程圖)
        - [1.2.5. 高效繪製 [序列圖](https://www.zybuluo.com/mdeditor?url=https://www.zybuluo.com/static/editor/md-help.markdown#8-序列圖)](#125-高效繪製-序列圖httpswwwzybuluocommdeditorurlhttpswwwzybuluocomstaticeditormd-helpmarkdown8-序列圖)
        - [1.2.6. 繪製表格](#126-繪製表格)
        - [1.2.7. 更詳細語法說明](#127-更詳細語法說明)
    - [1.3. 什麼是 Cmd Markdown](#13-什麼是-cmd-markdown)
        - [1.3.1. 實時同步預覽](#131-實時同步預覽)
        - [1.3.2. 編輯工具欄](#132-編輯工具欄)
        - [1.3.3. 編輯模式](#133-編輯模式)
        - [1.3.4. 實時的雲端文稿](#134-實時的雲端文稿)
        - [1.3.5. 離線模式](#135-離線模式)
        - [1.3.6. 管理工具欄](#136-管理工具欄)
        - [1.3.7. 閱讀工具欄](#137-閱讀工具欄)
        - [1.3.8. 閱讀模式](#138-閱讀模式)
        - [1.3.9. 標籤、分類和搜索](#139-標籤分類和搜索)
        - [1.3.10. 文稿發佈和分享](#1310-文稿發佈和分享)

<!-- /TOC -->

 [ ]  dddd
 [x]  xxxx
第一行
第二行
------
> 一個快速筆記工具，可生成網頁快速分享。
## 1.1. markdown擴展需求
1. 目錄
2. 表情
3. 粘貼截圖
4. 流程圖、時序圖
5. 數學公式
6. 標籤
7. 簡單動畫



### 1.1.1. 一、各種流程圖
1. 時序圖

```seq
Alice->Bob: Hello Bob, how are you?
Note right of Bob: Bob thinks
Bob-->Alice: I am good thanks!
```

2. 流程圖

```flow
st=>start: Start
op=>operation: Your Operation
cond=>condition: Yes or No?
e=>end

st->op->cond
cond(yes)->e
cond(no)->op
```

3. 甘特圖

```gantt
    title 項目開發流程
    section 項目確定
        需求分析       :a1, 2016-06-22, 3d
        可行性報告     :after a1, 5d
        概念驗證       : 5d
    section 項目實施
        概要設計      :2016-07-05, 5d
        詳細設計      :2016-07-08, 10d
        編碼          :2016-07-15, 10d
        測試          :2016-07-22, 5d
    section 發佈驗收
        發佈: 2d
        驗收: 3d
```

4. Mermaid 流程圖

```graphLR
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
```

5. Mermaid 序列圖

```sequence
    Alice->John: Hello John, how are you?
    loop every minute
        John-->Alice: Great!
    end
```

我們理解您需要更便捷更高效的工具記錄思想，整理筆記、知識，並將其中承載的價值傳播給他人，**Cmd Markdown** 是我們給出的答案 —— 我們爲記錄思想和分享知識提供更專業的工具。 您可以使用 Cmd Markdown：

> * 整理知識，學習筆記

> * 發佈日記，雜文，所見所想
> * 撰寫發佈技術文稿（代碼支持）
> * 撰寫發佈學術論文（LaTeX 公式支持）

![cmd-markdown-logo](logo.png)

除了您現在看到的這個 Cmd Markdown 在線版本，您還可以前往以下網址下載：

### 1.1.2. [Windows/Mac/Linux 全平臺客戶端](https://www.zybuluo.com/cmd/)

> 請保留此份 Cmd Markdown 的歡迎稿兼使用說明，如需撰寫新稿件，點擊頂部工具欄右側的 <i class="icon-file"></i> **新文稿** 或者使用快捷鍵 `Ctrl+Alt+N`。

------

## 1.2. 什麼是 Markdown

Markdown 是一種方便記憶、書寫的純文本標記語言，用戶可以使用這些標記符號以最小的輸入代價生成極富表現力的文檔：譬如您正在閱讀的這份文檔。它使用簡單的符號標記不同的標題，分割不同的段落，**粗體** 或者 *斜體* 某些文字，更棒的是，它還可以

### 1.2.1. 製作一份待辦事宜 [Todo 列表](https://www.zybuluo.com/mdeditor?url=https://www.zybuluo.com/static/editor/md-help.markdown#13-待辦事宜-todo-列表)

- [ ] 支持以 PDF 格式導出文稿
- [ ] 改進 Cmd 渲染算法，使用局部渲染技術提高渲染效率
- [x] 新增 Todo 列表功能
- [x] 修復 LaTex 公式渲染問題
- [x] 新增 LaTex 公式編號功能

### 1.2.2. 書寫一個質能守恆公式[^LaTeX]

$$E=mc^2$$

### 1.2.3. 高亮一段代碼[^code]

```python
@requires_authorization
class SomeClass:
    pass

if __name__ == '__main__':
    # A comment
    print 'hello world'
```

### 1.2.4. 高效繪製 [流程圖](https://www.zybuluo.com/mdeditor?url=https://www.zybuluo.com/static/editor/md-help.markdown#7-流程圖)

```flow
st=>start: Start
op=>operation: Your Operation
cond=>condition: Yes or No?
e=>end

st->op->cond
cond(yes)->e
cond(no)->op
```

### 1.2.5. 高效繪製 [序列圖](https://www.zybuluo.com/mdeditor?url=https://www.zybuluo.com/static/editor/md-help.markdown#8-序列圖)

```seq
Alice->Bob: Hello Bob, how are you?
Note right of Bob: Bob thinks
Bob-->Alice: I am good thanks!
```

### 1.2.6. 繪製表格

| 項目        | 價格   |  數量  |
| --------   | -----:  | :----:  |
| 計算機     | \$1600 |   5     |
| 手機        |   \$12   |   12   |
| 管線        |    \$1    |  234  |

### 1.2.7. 更詳細語法說明

想要查看更詳細的語法說明，可以參考我們準備的 [Cmd Markdown 簡明語法手冊][1]，進階用戶可以參考 [Cmd Markdown 高階語法手冊][2] 瞭解更多高級功能。

總而言之，不同於其它 *所見即所得* 的編輯器：你只需使用鍵盤專注於書寫文本內容，就可以生成印刷級的排版格式，省卻在鍵盤和工具欄之間來回切換，調整內容和格式的麻煩。**Markdown 在流暢的書寫和印刷級的閱讀體驗之間找到了平衡。** 目前它已經成爲世界上最大的技術分享網站 GitHub 和 技術問答網站 StackOverFlow 的御用書寫格式。

---

## 1.3. 什麼是 Cmd Markdown

您可以使用很多工具書寫 Markdown，但是 Cmd Markdown 是這個星球上我們已知的、最好的 Markdown 工具——沒有之一 ：）因爲深信文字的力量，所以我們和你一樣，對流暢書寫，分享思想和知識，以及閱讀體驗有極致的追求，我們把對於這些訴求的回應整合在 Cmd Markdown，並且一次，兩次，三次，乃至無數次地提升這個工具的體驗，最終將它演化成一個 **編輯/發佈/閱讀** Markdown 的在線平臺——您可以在任何地方，任何系統/設備上管理這裏的文字。

### 1.3.1. 實時同步預覽

我們將 Cmd Markdown 的主界面一分爲二，左邊爲**編輯區**，右邊爲**預覽區**，在編輯區的操作會實時地渲染到預覽區方便查看最終的版面效果，並且如果你在其中一個區拖動滾動條，我們有一個巧妙的算法把另一個區的滾動條同步到等價的位置，超酷！

### 1.3.2. 編輯工具欄

也許您還是一個 Markdown 語法的新手，在您完全熟悉它之前，我們在 **編輯區** 的頂部放置了一個如下圖所示的工具欄，您可以使用鼠標在工具欄上調整格式，不過我們仍舊鼓勵你使用鍵盤標記格式，提高書寫的流暢度。

![tool-editor](toolbar-editor.png)

### 1.3.3. 編輯模式

完全心無旁騖的方式編輯文字：點擊 **編輯工具欄** 最右測的拉伸按鈕或者按下 `Ctrl + M`，將 Cmd Markdown 切換到獨立的編輯模式，這是一個極度簡潔的寫作環境，所有可能會引起分心的元素都已經被挪除，超清爽！

### 1.3.4. 實時的雲端文稿

爲了保障數據安全，Cmd Markdown 會將您每一次擊鍵的內容保存至雲端，同時在 **編輯工具欄** 的最右側提示 `已保存` 的字樣。無需擔心瀏覽器崩潰，機器掉電或者地震，海嘯——在編輯的過程中隨時關閉瀏覽器或者機器，下一次回到 Cmd Markdown 的時候繼續寫作。

### 1.3.5. 離線模式

在網絡環境不穩定的情況下記錄文字一樣很安全！在您寫作的時候，如果電腦突然失去網絡連接，Cmd Markdown 會智能切換至離線模式，將您後續鍵入的文字保存在本地，直到網絡恢復再將他們傳送至雲端，即使在網絡恢復前關閉瀏覽器或者電腦，一樣沒有問題，等到下次開啓 Cmd Markdown 的時候，她會提醒您將離線保存的文字傳送至雲端。簡而言之，我們盡最大的努力保障您文字的安全。

### 1.3.6. 管理工具欄

爲了便於管理您的文稿，在 **預覽區** 的頂部放置瞭如下所示的 **管理工具欄**：

通過管理工具欄可以：

<i class="icon-share"></i> 發佈：將當前的文稿生成固定鏈接，在網絡上發佈，分享
<i class="icon-file"></i> 新建：開始撰寫一篇新的文稿
<i class="icon-trash"></i> 刪除：刪除當前的文稿
<i class="icon-cloud"></i> 導出：將當前的文稿轉化爲 Markdown 文本或者 Html 格式，並導出到本地
<i class="icon-reorder"></i> 列表：所有新增和過往的文稿都可以在這裏查看、操作
<i class="icon-pencil"></i> 模式：切換 普通/Vim/Emacs 編輯模式

### 1.3.7. 閱讀工具欄

通過 **預覽區** 右上角的 **閱讀工具欄**，可以查看當前文稿的目錄並增強閱讀體驗。

工具欄上的五個圖標依次爲：

<i class="icon-list"></i> 目錄：快速導航當前文稿的目錄結構以跳轉到感興趣的段落
<i class="icon-chevron-sign-left"></i> 視圖：互換左邊編輯區和右邊預覽區的位置
<i class="icon-adjust"></i> 主題：內置了黑白兩種模式的主題，試試 **黑色主題**，超炫！
<i class="icon-desktop"></i> 閱讀：心無旁騖的閱讀模式提供超一流的閱讀體驗
<i class="icon-fullscreen"></i> 全屏：簡潔，簡潔，再簡潔，一個完全沉浸式的寫作和閱讀環境

### 1.3.8. 閱讀模式

在 **閱讀工具欄** 點擊 <i class="icon-desktop"></i> 或者按下 `Ctrl+Alt+M` 隨即進入獨立的閱讀模式界面，我們在版面渲染上的每一個細節：字體，字號，行間距，前背景色都傾注了大量的時間，努力提升閱讀的體驗和品質。

### 1.3.9. 標籤、分類和搜索

在編輯區任意行首位置輸入以下格式的文字可以標籤當前文檔：

標籤： 未分類

標籤以後的文稿在【文件列表】（Ctrl+Alt+F）裏會按照標籤分類，用戶可以同時使用鍵盤或者鼠標瀏覽查看，或者在【文件列表】的搜索文本框內搜索標題關鍵字過濾文稿，如下圖所示：

![file-list](file-list.png)

### 1.3.10. 文稿發佈和分享

在您使用 Cmd Markdown 記錄，創作，整理，閱讀文稿的同時，我們不僅希望它是一個有力的工具，更希望您的思想和知識通過這個平臺，連同優質的閱讀體驗，將他們分享給有相同志趣的人，進而鼓勵更多的人來到這裏記錄分享他們的思想和知識，嘗試點擊 <i class="icon-share"></i> (Ctrl+Alt+P) 發佈這份文檔給好友吧！

------

再一次感謝您花費時間閱讀這份歡迎稿，點擊 <i class="icon-file"></i> (Ctrl+Alt+N) 開始撰寫新的文稿吧！祝您在這裏記錄、閱讀、分享愉快！

作者 [@ghosert][3]     
2015 年 06月 15日    

[^LaTeX]: 支持 **LaTeX** 編輯顯示支持，例如：$\sum_{i=1}^n a_i=0$， 訪問 [MathJax][4] 參考更多使用方法。

[^code]: 代碼高亮功能支持包括 Java, Python, JavaScript 在內的，**四十一**種主流編程語言。

[1]: https://www.zybuluo.com/mdeditor?url=https://www.zybuluo.com/static/editor/md-help.markdown
[2]: https://www.zybuluo.com/mdeditor?url=https://www.zybuluo.com/static/editor/md-help.markdown#cmd-markdown-高階語法手冊
[3]: http://weibo.com/ghosert
[4]: http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference

