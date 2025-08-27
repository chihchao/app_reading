from fastapi import FastAPI, Form

app = FastAPI()

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


