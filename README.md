# 蕉個朋友｜旗山蕉鄉好日子

這是一個無建置步驟的響應式靜態網站，首頁包含散客選購、企業與批發詢價、蕉農故事、產地履歷、互動熟成指南，以及旗山在地體驗導覽。

## 本機預覽

直接用瀏覽器開啟 `index.html` 即可。網站圖片與字體目前透過 Unsplash 和 Google Fonts 載入，因此需要網路連線才能顯示完整視覺。

## 部署到 Vercel

1. 將這個資料夾推送到你自己的 GitHub repository。
2. 在 Vercel 匯入該 repository。
3. Framework Preset 選 **Other**，Build Command 和 Output Directory 留空，部署即可。

專案根目錄的 `index.html` 是網站入口，不需要 Node.js 或建置命令。

## 正式上線前請更新

- `index.html` 裡的「蕉個朋友」名稱、聯絡信箱、零售訂購連結、農友介紹與產地資訊。目前人物、產地履歷文案與 `hello@jiao-friend.tw` 是示意內容，請換成已確認的真實資訊。
- 合作表單目前以 `mailto:` 開啟訪客的郵件程式寄信。若希望網站直接收件，請接上 Formspree、表單服務或自有 API，再更新 `script.js` 的表單送出處理。
- 零售 CTA 目前也是預填郵件連結；請替換成實際的商店或訂購流程。
- 請確認遠端圖片的使用權與實際產地形象一致，正式版可以換成蕉園和農友的授權照片。
