from os import name, stat
from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session
import uvicorn 

import models, schemas, crud
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
    db_manufacturer = crud.get_manufacturer(db, manufacturer)
    if db_manufacturer:
        raise HTTPException(status_code=400, detail="Manufacturer already exists")
    return crud.create_manufacturer(db=db, manufacturer=manufacturer)


@app.delete("/manufacturers/{manufacturer_id}")
def delete_manufacturer(manufacturer_id: int, db: Session = Depends(get_db)):
    db_manufacturer = crud.get_manufacturer(db, manufacturer_id)
    if not db_manufacturer:
        raise HTTPException(status_code=404, detail="Manufacturer does not exist")
    return crud.delete_manufacturer(db, db_manufacturer)
    

if __name__ == "__main__":
    uvicorn.run("main:app", host='0.0.0.0', port=8000, reload=True)
