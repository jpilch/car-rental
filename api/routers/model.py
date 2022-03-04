from typing import List
from fastapi import APIRouter
from sqlalchemy.orm import Session
from fastapi import Depends, HTTPException

import crud
import schemas
from dependencies import get_db

router = APIRouter(
    prefix = "/models",
    tags=["models"]
)


@router.get("/", response_model=List[schemas.Model])
async def get_models(db: Session = Depends(get_db)):
    return crud.get_models(db=db)


@router.get("/{model_id}", response_model=schemas.Model)
async def get_model(model_id: int, db: Session = Depends(get_db)):
    return crud.get_model(db=db, model_id=model_id)


@router.post("/", response_model=schemas.Model)
async def create_model(model: schemas.ModelCreate, manufacturer_id: int, db: Session = Depends(get_db)):
    db_model = crud.get_model_by_name(db=db, name=model.name)
    if db_model:
        raise HTTPException(status_code=400, detail="Model already exists")
    db_model = crud.create_model(db=db, model=model, manufacturer_id=manufacturer_id)
    db.add(db_model)
    db.commit()
    db.refresh(db_model)
    return db_model


@router.delete("/{model_id}")
async def delete_model(model_id: int, db: Session = Depends(get_db)):
    db_model = crud.get_model(db=db, model_id=model_id)
    if not db_model:
        raise HTTPException(status_code=404, detail="Model does not exist")
    return crud.delete_model(db=db, db_model=db_model)
