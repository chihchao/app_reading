
# app_reading 專案說明

`app_reading` 是一個結合 React + Vite 前端與 FastAPI 後端的全端範例專案，適合用於學習、展示或快速啟動全端架構。

## 專案架構

- **前端**：
	- 使用 React 框架，搭配 Vite 作為開發與建構工具。
	- 主要檔案：`src/App.jsx`（計數器範例）、`src/main.jsx`、`index.html`。
	- 樣式檔案：`src/App.css`、`src/index.css`。
	- 依賴管理：`package.json`。

- **後端**：
	- 使用 FastAPI 建立 API，範例路由 `/app/hello` 回傳 JSON。
	- 主要檔案：`api/index.py`。
	- 依賴管理：`requirements.txt`（fastapi、uvicorn）。

- **部署設定**：
	- `vercel.json` 設定 Vercel 路由，將 `/app/*` 請求導向 FastAPI，其他導向前端頁面。

- **開發工具**：
	- ESLint 設定檔（`eslint.config.js`）用於前端程式碼檢查。

## 如何啟動

### 前端
```bash
npm install
npm run dev
```

### 後端
```bash
pip install -r requirements.txt
uvicorn api.index:app --reload
```

## 主要功能

- 前端：展示 Vite + React 計數器範例，支援熱模組替換（HMR）。
- 後端：提供 `/app/hello` API，回傳 `{"Hello": "World"}`。
- 可部署於 Vercel，支援前後端分離架構。

## 適用對象

- 想學習 React + Vite 前端開發者
- 想快速體驗 FastAPI 後端 API
- 需要全端範例或快速啟動專案架構者
