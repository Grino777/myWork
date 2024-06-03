"""Main"""

import asyncio

from db import session
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from backend.models import Product

app = FastAPI()

origins = ["http://127.0.0.1", "http://127.0.0.1:3000", "http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {}


@app.get("/products")
async def get_products():
    """Получить все изделия"""
    result = session.query(Product).all()
    return result


@app.post("/add-product/{product_name}")
async def add_product(product_name: str):
    """Добавить новое изделие"""
    product = Product(product_name=product_name.upper())
    session.add(product)
    session.commit()
    return JSONResponse(
        status_code=201,
        content={"message": f"Product {product_name} added successfully"},
    )


@app.delete("/remove-product/{product_id}")
async def remove_product(product_id: int):
    """Удалить изделие"""
    product = session.query(Product).filter(Product.id == product_id).first()
    if product is None:
        return JSONResponse(status_code=404, content={"message": "Изделие не найдено"})

    session.delete(product)
    session.commit()
    return JSONResponse(
        status_code=200,
        content={"message": f"Product {product.product_name} remove successfully"},
    )
