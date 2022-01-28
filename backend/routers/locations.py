from typing import List
from fastapi import APIRouter
from sqlalchemy.orm import Session
from fastapi import Depends, HTTPException

import crud
import schemas
from dependencies import get_db

router = APIRouter(
    prefix = "/locations",
    tags=["locations"]
)

@router.get("/cities")
async def get_cities(db: Session = Depends(get_db)):
    return crud.get_cities(db)