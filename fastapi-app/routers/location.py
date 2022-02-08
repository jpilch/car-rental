from typing import List
from fastapi import APIRouter
from sqlalchemy.orm import Session
from fastapi import Depends, HTTPException

import crud
import schemas
from dependencies import get_db

router = APIRouter(
    prefix="/locations",
    tags=["locations"]
)


@router.get("/{location_id}")
async def get_location(location_id: int, db: Session = Depends(get_db)):
    return crud.get_location(db=db, location_id=location_id)


@router.get("/")
async def get_locations(db: Session = Depends(get_db)):
    return crud.get_locations(db)


@router.post("/")
async def create_location(location: schemas.LocationCreate, db: Session = Depends(get_db)):
    db_city = crud.get_city(db=db, city_id=location.city_id)
    if not db_city:
        raise HTTPException(status_code=404, detail="City does not exist")
    return crud.create_location(db=db, location=location)


@router.delete("/{location_id}")
async def delete_location(location_id: int, db: Session = Depends(get_db)):
    db_location = crud.get_location(db=db, location_id=location_id)
    if not db_location:
        raise HTTPException(status_code=404, detail="Location does not exist")
    return crud.delete_location(db=db, db_location=db_location)
