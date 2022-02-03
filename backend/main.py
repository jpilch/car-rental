from fastapi import FastAPI
import uvicorn

import models
from database import engine
from routers import car, location, city, manufacturer, model, auth, rental, agreement

models.Base.metadata.create_all(bind=engine)
app = FastAPI()

app.include_router(manufacturer.router)
app.include_router(model.router)
app.include_router(car.router)
app.include_router(auth.router)
app.include_router(location.router)
app.include_router(city.router)
app.include_router(rental.router)
app.include_router(agreement.router)


@app.get("/")
async def root():
    return {"message": "Hello from Rent-A-Ride!"}


if __name__ == "__main__":
    uvicorn.run("main:app", host='0.0.0.0', port=8000, reload=True)
