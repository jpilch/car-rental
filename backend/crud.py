from sqlalchemy.orm import Session
from sqlalchemy.sql.expression import null
from sqlalchemy.sql.sqltypes import JSON
import models
import schemas
from fastapi.responses import JSONResponse


def get_manufacturer(db: Session, manufacturer_id: int):
    return db.query(models.Manufacturer).filter(models.Manufacturer.id == manufacturer_id).first()


def get_manufacturer_by_name(db: Session, name: str):
    return db.query(models.Manufacturer).filter(models.Manufacturer.name == name).first()


def get_manufacturers(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Manufacturer).offset(skip).limit(limit).all()


def create_manufacturer(db: Session, manufacturer: schemas.ManufacturerCreate):
    db_manufacturer = models.Manufacturer(name=manufacturer.name)
    db.add(db_manufacturer)
    db.commit()
    db.refresh(db_manufacturer)
    return db_manufacturer


def delete_manufacturer(db: Session, db_manufacturer: schemas.Manufacturer):
    db.delete(db_manufacturer)
    db.commit()
    return JSONResponse(status_code=204)


def get_model(db: Session, model_id: int):
    return db.query(models.Model).filter(models.Model.id == model_id).first()


def get_models(db: Session):
    return db.query(models.Model).all()


def get_model_by_name(db: Session, name: str):
    return db.query(models.Model).filter(models.Model.name == name).first()


def create_model(db: Session, model: schemas.ModelCreate, manufacturer_id: int):
    db_model = models.Model(**model.dict(), manufacturer_id=manufacturer_id)
    db.add(db_model)
    db.commit()
    db.refresh(db_model)
    return db_model


def delete_model(db: Session, db_model):
    db.delete(db_model)
    db.commit()
    return JSONResponse(status_code=204)


def get_car(db: Session, car_id: int):
    return db.query(models.Car).filter(models.Car.id == car_id).first()


def get_cars(db: Session):
    return db.query(models.Car).all()


def create_car(db: Session, car: schemas.CarCreate):
    db_car = models.Car(**car.dict())
    db.add(db_car)
    db.commit()
    db.refresh(db_car)
    return db_car


def delete_car(db: Session, db_car: schemas.Car):
    db.delete(db_car)
    db.commit()
    return {"detail": "Car deleted successfully"}


def create_user(db: Session, user: schemas.UserInDB):
    db_user = models.User(**user.dict())
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def get_cities(db: Session):
    return db.query(models.City).all()