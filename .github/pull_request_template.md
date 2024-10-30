### 迪普開發Team PR 說明
1. 檢查目標分支是否正確
  - 已上線專案為 release/YYYYMMDD
  - 未上限專案為 develop
2. PR標題、大綱請依下列說明撰寫
 - 標題 :
 請說明此PR主要修改內容，並加上前墜type。
 例:
    - **fix**:活動登錄新增活動尚未開始result code判別
    - **feat**:線上辦卡選擇卡片頁新增分類標籤邏輯
 - 大綱 :
 須包含以下三點
    - 本次修改項目
    - 異動項目
    - Teams測試報告連結 (後端不用檢附)

3. 大綱範例如下，請自行依PR內容自行修改

#### 以上看完請刪除，勿提交至PR中

------------



本次修改項目：
1. 調整滑動事件觸發邏輯
2. 修正日期選擇器版面位置
3. 新增圖片
4. 調整mock api sample

異動項目：
osprey-mock-service/examples/api_sample.json
src/app/application/a.ts
src/app/application/b.html
src/assets/pic.png

UT測報：
請放上Teams測試報告連結