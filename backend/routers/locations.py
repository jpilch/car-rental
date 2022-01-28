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


@router.get("/cities/{city_id}")
async def get_city(city_id: int, db: Session = Depends(get_db)):
    return crud.get_city(db=db, city_id=city_id)


@router.get("/addresses/{address_id}")
async def get_address(address_id: int, db: Session = Depends(get_db)):
    return crud.get_location(db=db, address_id=address_id)


@router.get("/cities")
async def get_cities(db: Session = Depends(get_db)):
    return crud.get_cities(db=db)


@router.get("/addresses")
async def get_addresses(db: Session = Depends(get_db)):
    return crud.get_locations(db)


@router.post("/cities")
async def create_city(city: schemas.CityCreate, db: Session = Depends(get_db)):
    return crud.create_city(db=db, city=city)


@router.post("/addresses")
async def create_location(location: schemas.LocationCreate, db: Session = Depends(get_db)):
    db_city = crud.get_city(db=db, city_id=location.city_id)
    if not db_city:
        raise HTTPException(status_code=404, detail="City does not exist")
    return crud.create_location(db=db, location=location)
