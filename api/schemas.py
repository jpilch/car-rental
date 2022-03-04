from typing import List, Optional
from pydantic import BaseModel
import datetime

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

    class Config:
        orm_mode = True


class UserInDB(User):
    password: str


class LocationBase(BaseModel):
    street_name: str
    building_no: int

    class Config:
        orm_mode = True


class LocationCreate(LocationBase):
    city_id: int


class Location(LocationBase):
    pass


class CityBase(BaseModel):
    name: str

    class Config:
        orm_mode = True


class CityCreate(CityBase):
    pass


class City(CityBase):
    id: int
    locations: List[Location] = []


class RentalBase(BaseModel):

    class Config:
        orm_mode = True


class RentalCreate(RentalBase):
    location_id: int


class Rental(RentalBase):
    id: int


class AgreementBase(BaseModel):
    start: datetime.date
    end: datetime.date

    class Config:
        orm_mode = True


class AgreementCreate(AgreementBase):
    car_id: int
    user_id: int


class Agreement(AgreementBase):
    id: int


class ReviewBase(BaseModel):
    score: int
    end: str

    class Config:
        orm_mode = True


class ReviewCreate(ReviewBase):
    car_id: int
    user_id: int


class Review(ReviewBase):
    id: int

