from typing import List
from fastapi import APIRouter
from sqlalchemy.orm import Session
from fastapi import Depends, HTTPException

import crud
import models
import schemas
from dependencies import get_db

router = APIRouter(
    prefix="/reviews",
    tags=["reviews"]
)


@router.get("/{review_id}")
async def get_review(review_id: int, db: Session = Depends(get_db)):
    return db.query(models.Review).filter_by(id = review_id)


@router.get("")
async def get_reviews(db: Session = Depends(get_db)):
    return db.query(models.Review).all()


@router.post("")
async def create_review(review: schemas.ReviewCreate, db: Session = Depends(get_db)):
    db_review = db.query(models.Review).filter_by(user_id = review.user_id, car_id = review.car_id)
    if db_review:
        raise HTTPException(status_code=400, detail="Review already exists")
    db_review = models.Review(**review.dict())
    db.add(db_review)
    db.commit()
    db.refresh(db_review)
    return db_review


@router.delete("/{review_id}")
async def delete_review(review_id: int, db: Session = Depends(get_db)):
    db_review = db.query(models.Review).filter_by(id = review_id)
    if not db_review:
        raise HTTPException(status_code=404, detail="Review does not exist")
    db.delete(db_review)
    db.commit()
    return {"msg": "Review deleted successfully"}

