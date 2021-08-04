# URL Shortener
利用 Node.js、Express 和 mongoose 打造一個簡單的短網址產生器。

## 基本功能
使用者可以在表單輸入原始網址，送出表單之後，畫面會回傳格式化後的短網址。

使用者可以在瀏覽器的網址列，輸入短網址，瀏覽器就會導向原本的網站。

使用者可以按 Copy 來複製縮短後的網址。

## 專案畫面
![img](https://github.com/issueyh/url-shortener/blob/main/public/img/url-shortener.jpg)

## 安裝流程
1. 打開你的 terminal，Clone 此專案至本機電腦
```
$ git clone https://github.com/issueyh/url-shortener.git
```
2. 安裝 npm 套件
```
$ npm install
```
3. 執行程式
```
$ npm run dev
```
4. 當 terminal 出現以下字樣，表示伺服器與資料庫已啟動並成功連結
```
Express is running on http://localhost:3000
```
5. 開啟任一瀏覽器瀏覽器輸入
```
http://localhost:3000
```

## 環境建置
* Node.js: 10.15.0
* Express: 4.17.1
* Express-Handlebars: 5.3.2
* Express-Validator: 6.12.1
* mongoose: 5.13.4