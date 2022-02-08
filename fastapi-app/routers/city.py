from typing import List
from fastapi import APIRouter
from sqlalchemy.orm import Session
from fastapi import Depends, HTTPException

import crud
import schemas
from dependencies import get_db

router = APIRouter(
    prefix="/cities",
    tags=["cities"]
)


@router.get("/{city_id}")
async def get_city(city_id: int, db: Session = Depends(get_db)):
    return crud.get_city(db=db, city_id=city_id)


@router.get("/")
async def get_cities(db: Session = Depends(get_db)):
    return crud.get_cities(db=db)


@router.post("/")
async def create_city(city: schemas.CityCreate, db: Session = Depends(get_db)):
    return crud.create_city(db=db, city=city)


@router.delete("/{city_id}")
async def delete_city(city_id: int, db: Session = Depends(get_db)):
    db_city = crud.get_city(db=db, city_id=city_id)
    if not db_city:
        raise HTTPException(status_code=404, detail="City does not exist")
    return crud.delete_city(db=db, db_city=db_city)
