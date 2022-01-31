from typing import List
from fastapi import APIRouter
from sqlalchemy.orm import Session
from fastapi import Depends, HTTPException

import crud
import schemas
from dependencies import get_db

router = APIRouter(
    prefix="/rentals",
    tags=["rentals"]
)


@router.get("/{rental_id}")
async def get_rental(rental_id: int, db: Session = Depends(get_db)):
    return crud.get_rental(db=db, rental_id=rental_id)


@router.get("/")
async def get_rentals(db: Session = Depends(get_db)):
    return crud.get_rentals(db=db)


@router.post("/")
async def create_rental(rental: schemas.RentalCreate, db: Session = Depends(get_db)):
    db_location = crud.get_location(location_id=rental.location_id, db=db)
    if not db_location:
        raise HTTPException(status_code=404, detail="Location does not exist")
    return crud.create_rental(rental=rental, db=db)


@router.delete("/{rental_id}")
async def delete_rental(rental_id: int, db: Session = Depends(get_db)):
    return crud.delete_rental(db=db, rental_id=rental_id)
