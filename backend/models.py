"""Модуль для моделей ДБ"""

# pylint: disable=too-few-public-methods

from sqlalchemy import Column, DateTime, ForeignKey, Integer, SmallInteger, String, Time
from sqlalchemy.ext.declarative import declarative_base

from backend.db import engine

Base = declarative_base()


class TypesOfTests(Base):
    """Таблица типов испытаний"""

    __tablename__ = "types_of_tests"

    id = Column(SmallInteger, primary_key=True, index=True, autoincrement=True)
    test_name = Column(String, unique=True)
    # templates = relationship("ProductTemplate", back_populates="types_of_tests")


class Product(Base):
    """Таблица изделий"""

    __tablename__ = "all_products"

    id = Column(SmallInteger, primary_key=True, index=True)
    product_name = Column(String, unique=True)


class ProductTemplate(Base):
    """Таблица шаблонов испытаний к изделию"""

    __tablename__ = "product_template"

    id = Column(SmallInteger, primary_key=True, index=True)
    product_id = Column(Integer, ForeignKey("all_products.id"))
    test_id = Column(Integer, ForeignKey("types_of_tests.id"))
    order_of_test = Column(Integer, nullable=False)
    total_time = Column(Time)


class ProductsInWork(Base):
    """Таблица изделий в работе"""

    __tablename__ = "products_in_work"
    id = Column(SmallInteger, primary_key=True, index=True)
    product_id = Column(Integer, ForeignKey("all_products.id"))
    test_id = Column(Integer, ForeignKey("types_of_tests.id"))
    order_of_test = Column(Integer, nullable=False)
    generation = Column(SmallInteger)
    year = Column(Integer)


class Notes(Base):
    """Таблица заметок к изделиям"""

    __tablename__ = "notes"

    id = Column(SmallInteger, primary_key=True, index=True)
    note = Column(String)
    product_id = Column(Integer, ForeignKey("all_products.id"), nullable=False)
    test_id = Column(Integer, ForeignKey("types_of_tests.id"))


class TestsInformation(Base):
    """Таблица данных по испытаниям"""

    __tablename__ = "test_information"

    id = Column(SmallInteger, primary_key=True, index=True)
    product_id = Column(Integer, ForeignKey("all_products.id"))
    test_id = Column(Integer, ForeignKey("types_of_tests.id"))
    start_time = Column(DateTime)
    end_time = Column(DateTime)


class TestTime(Base):
    """Таблица времени испытания для каждого изделия"""

    __tablename__ = "test_time"

    id = Column(SmallInteger, primary_key=True)
    product_id = Column(Integer, ForeignKey("all_products.id"))
    test_id = Column(Integer, ForeignKey("types_of_tests.id"))
    test_time = Column(Time)


# TestTime.__table__.drop(engine)
Base.metadata.create_all(bind=engine)
