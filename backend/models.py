from sqlalchemy import Column, ForeignKey, Integer, String, Boolean
from sqlalchemy.orm import relationship

from database import Base


class Manufacturer(Base):
    __tablename__ = "manufacturer"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(32))

    models = relationship("Model", back_populates="manufacturer")


class Model(Base):
    __tablename__ = "model"

    id = Column(Integer, primary_key=True, index=True)
    manufacturer_id = Column(Integer, ForeignKey("manufacturer.id"))
    name = Column(String(32))

    manufacturer = relationship("Manufacturer", back_populates="models")
    cars = relationship("Car", back_populates="model")


class Car(Base):
    __tablename__ = "car"

    id = Column(Integer, primary_key=True, index=True)
    model_id = Column(Integer, ForeignKey("model.id"))
    is_avaiable = Column(Boolean, default=True)

    model = relationship("Model", back_populates="cars")


class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True)
    full_name = Column(String(32))
    email = Column(String(32))
    password = Column(String(64))
    is_active = Column(Boolean, default=True)
