from fastapi import FastAPI
import backend.models

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}
