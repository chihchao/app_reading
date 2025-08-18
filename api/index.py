from fastapi import FastAPI, Form

# 創建一個 FastAPI 應用實例
app = FastAPI()

# 定義一個路由，當用戶訪問根路徑時，返回一個 JSON 響應
@app.get("/app/hello")
def hello():
    return {"Hello": "World"}

# 新增登入 API
@app.post("/app/login")
def login(username: str = Form(...), password: str = Form(...)):
    # 範例：帳號 admin 密碼 1234
    if username == "admin" and password == "1234":
        return {"success": True}
    return {"success": False, "msg": "帳號或密碼錯誤"}


