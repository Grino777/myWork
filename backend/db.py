"""Модуль подключения к ДБ"""

import os

from sqlalchemy import create_engine

DB_LOGIN = os.environ.get("DB_LOGIN")
DB_PASS = os.environ.get("DB_PASS")

SQLALCHEMY_DATABASE_URL = f"postgresql://{DB_LOGIN}:{DB_PASS}@127.0.0.1:5432/work"

# создание движка
engine = create_engine(SQLALCHEMY_DATABASE_URL)

