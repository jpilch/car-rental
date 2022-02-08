from typing import List
from fastapi import APIRouter
from sqlalchemy.orm import Session
from fastapi import Depends, HTTPException

import crud
import schemas
import models
from dependencies import get_db

router = APIRouter(
    prefix="/agreements",
    tags=["agreements"]
)

@router.get("/")
async def get_agreements(db: Session = Depends(get_db)):
    return db.query(models.Agreement).all()


@router.get("/{agreement_id}")
async def get_agreement(agreement_id: int, db: Session = Depends(get_db)):
    return db.query(models.Agreement).filter_by(id=agreement_id).first()


@router.post("/")
async def create_agreement(agreement: schemas.AgreementCreate, db: Session = Depends(get_db)):
    db_agreement = models.Agreement(**agreement.dict())
    db.add(db_agreement)
    db.commit()
    db.refresh(db_agreement)
    return db_agreement


@router.delete("/")
async def delete_agreement(agreement_id:int, db: Session = Depends(get_db)):
    db_agreement = get_agreement(agreement_id, db)
    if not db_agreement:
        raise HTTPException(status_code=404, detail="Agreement does not exist")
    db.delete(db_agreement)
    db.commit()
    return {"msg": "Agreement deleted successfully"}