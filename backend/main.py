from typing import List
from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session
import uvicorn 

from dependencies import get_db
import models, schemas, crud
from database import engine
from routers import car

models.Base.metadata.create_all(bind=engine)
app = FastAPI()
app.include_router(car.router)


@app.get("/")
async def root():
    return {"message": "Hello from Rent-A-Ride!"}


@app.get("/manufacturers/", response_model=List[schemas.Manufacturer])
async def get_manufacturers(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud.get_manufacturers(db)


@app.get("/manufacturers/{manufacturer_id}", response_model=schemas.Manufacturer)
async def get_manufacturer(manufacturer_id: int, db: Session = Depends(get_db)):
    return crud.get_manufacturer(db, manufacturer_id)


@app.post("/manufacturers/", response_model=schemas.Manufacturer)
async def create_manufacturer(manufacturer: schemas.ManufacturerCreate, db: Session = Depends(get_db)):
    db_manufacturer = crud.get_manufacturer_by_name(db=db, name=manufacturer.name)
    if db_manufacturer:
        raise HTTPException(status_code=400, detail="Manufacturer already exists")
    return crud.create_manufacturer(db=db, manufacturer=manufacturer)


@app.delete("/manufacturers/{manufacturer_id}")
def delete_manufacturer(manufacturer_id: int, db: Session = Depends(get_db)):
    db_manufacturer = crud.get_manufacturer(db, manufacturer_id)
    if not db_manufacturer:
        raise HTTPException(status_code=404, detail="Manufacturer does not exist")
    return crud.delete_manufacturer(db, db_manufacturer)


@app.get("/models/", response_model=List[schemas.Model])
async def get_models(db: Session = Depends(get_db)):
    return crud.get_models(db=db)


@app.get("/models/{model_id}", response_model=schemas.Model)
async def get_model(model_id: int, db: Session = Depends(get_db)):
    return crud.get_model(db=db, model_id=model_id)


@app.post("/models/", response_model=schemas.Model)
async def create_model(model: schemas.ModelCreate, manufacturer_id: int, db: Session = Depends(get_db)):
    db_model = crud.get_model_by_name(db=db, name=model.name)
    if db_model:
        raise HTTPException(status_code=400, detail="Model already exists")
    db_model = crud.create_model(db=db, model=model, manufacturer_id=manufacturer_id)
    db.add(db_model)
    db.commit()
    db.refresh(db_model)
    return db_model


@app.delete("/models/{model_id}")
async def delete_model(model_id: int, db: Session = Depends(get_db)):
    db_model = crud.get_model(db=db, model_id=model_id)
    if not db_model:
        raise HTTPException(status_code=404, detail="Model does not exist")
    return crud.delete_model(db=db, db_model=db_model)


if __name__ == "__main__":
    uvicorn.run("main:app", host='0.0.0.0', port=8000, reload=True)
