from typing import List, Optional
from pydantic import BaseModel


class CarBase(BaseModel):
    pass


class CarCreate(CarBase):
    model_id: int


class Car(CarBase):
    id: int
    is_available: bool

    class Config:
        orm_mode = True


class ModelBase(BaseModel):
    name: str


class ModelCreate(ModelBase):
    pass


class Model(ModelBase):
    id: int
    manufacturer_id: int
    cars: List[Car] = []

    class Config:
        orm_mode = True


class ManufacturerBase(BaseModel):
    name: str


class ManufacturerCreate(ManufacturerBase):
    pass


class Manufacturer(ManufacturerBase):
    id: int
    models: List[Model] = []

    class Config:
        orm_mode = True


class User(BaseModel):
    email: Optional[str] = None
    full_name: Optional[str] = None
    is_active: Optional[bool] = True


class UserInDB(User):
    password: str
