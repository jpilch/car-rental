from os import name, stat
from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session
import uvicorn 

import models, schemas
from database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)
app = FastAPI()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
async def root():
    return {"message": "Hello from Rent-A-Ride!"}


@app.post("/manufacturers/", response_model=schemas.Manufacturer)
async def create_manufacturer(manufacturer: schemas.ManufacturerCreate, db: Session = Depends(get_db)):
    db_manufacturer = db.query(models.Manufacturer).filter(models.Manufacturer.name == manufacturer.name).first()
    if db_manufacturer:
        raise HTTPException(status_code=400, detail="Manufacturer already exists")
    db_manufacturer = models.Manufacturer(name=manufacturer.name)
    db.add(db_manufacturer)
    db.commit()
    db.refresh(db_manufacturer)
    return db_manufacturer


if __name__ == "__main__":
    uvicorn.run("main:app", host='0.0.0.0', port=8000, reload=True)
