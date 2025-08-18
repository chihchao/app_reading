from fastapi import FastAPI

# 創建一個 FastAPI 應用實例
app = FastAPI()

# 定義一個路由，當用戶訪問根路徑時，返回一個 JSON 響應
@app.get("/app/hello")
def hello():
    return {"Hello": "World"}


