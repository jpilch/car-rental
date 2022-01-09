from sqlalchemy.orm import Session
from sqlalchemy.sql.sqltypes import JSON
import models, schemas
from fastapi.responses import JSONResponse


def get_manufacturer(db: Session, manufacturer_id: int):
    return db.query(models.Manufacturer).filter(models.Manufacturer.id == manufacturer_id).first()


def get_manufacturers(db: Session):
    return db.query(models.Manufacturer).all()


def create_manufacturer(db: Session, manufacturer: schemas.ManufacturerCreate):
    db_manufacturer = models.Manufacturer(name=manufacturer.name)
    db.add(db_manufacturer)
    db.commit()
    db.refresh(db_manufacturer)
    return db_manufacturer


def delete_manufacturer(db: Session, db_manufacturer: schemas.Manufacturer):
    db.delete(db_manufacturer)
    db.commit()
    return JSONResponse(status_code=204, content={
        'msg': 'Successfully deleted manufacturer'
    })