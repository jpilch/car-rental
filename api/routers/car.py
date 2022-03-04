from fastapi import APIRouter
from sqlalchemy.orm import Session
from fastapi import Depends, HTTPException

import crud
import schemas
from dependencies import get_db

router = APIRouter(
    prefix = "/cars",
    tags=["cars"]
)


@router.get("/")
async def get_cars(db: Session = Depends(get_db)):
    return crud.get_cars(db=db)


@router.get("/{car_id}")
async def get_car(car_id: int, db: Session = Depends(get_db)):
    return crud.get_car(db=db, car_id=car_id)


@router.post("/")
async def create_car(car: schemas.CarCreate, db: Session = Depends(get_db)):
    return crud.create_car(db=db, car=car)


@router.delete("/{car_id}", status_code=201)
async def delete_car(car_id: int, db: Session = Depends(get_db)):
    db_car = crud.get_car(db=db, car_id=car_id)
    if not db_car:
        raise HTTPException(status_code=404, detail="Car does not exist")
    return crud.delete_car(db=db, db_car=db_car)
    