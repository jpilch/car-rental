from typing import List
from fastapi import APIRouter
from sqlalchemy.orm import Session
from fastapi import Depends, HTTPException

import crud
import schemas
from dependencies import get_db

router = APIRouter(
    prefix = "/manufacturers",
    tags=["manufacturers"]
)


@router.get("/", response_model=List[schemas.Manufacturer])
async def get_manufacturers(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud.get_manufacturers(db)


@router.get("/{manufacturer_id}", response_model=schemas.Manufacturer)
async def get_manufacturer(manufacturer_id: int, db: Session = Depends(get_db)):
    return crud.get_manufacturer(db, manufacturer_id)


@router.post("/", response_model=schemas.Manufacturer)
async def create_manufacturer(manufacturer: schemas.ManufacturerCreate, db: Session = Depends(get_db)):
    db_manufacturer = crud.get_manufacturer_by_name(db=db, name=manufacturer.name)
    if db_manufacturer:
        raise HTTPException(status_code=400, detail="Manufacturer already exists")
    return crud.create_manufacturer(db=db, manufacturer=manufacturer)


@router.delete("/{manufacturer_id}")
def delete_manufacturer(manufacturer_id: int, db: Session = Depends(get_db)):
    db_manufacturer = crud.get_manufacturer(db, manufacturer_id)
    if not db_manufacturer:
        raise HTTPException(status_code=404, detail="Manufacturer does not exist")
    return crud.delete_manufacturer(db, db_manufacturer)
