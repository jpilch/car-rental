from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

import models
from database import engine
from routers import car, location, city, manufacturer, model, auth, rental, agreement, review

# models.Base.metadata.create_all(bind=engine)
app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(manufacturer.router)
app.include_router(model.router)
app.include_router(car.router)
app.include_router(auth.router)
app.include_router(location.router)
app.include_router(city.router)
app.include_router(rental.router)
app.include_router(agreement.router)
app.include_router(review.router)


@app.get("/")
async def root():
    return {"message": "Hello from MotoRent!"}


if __name__ == "__main__":
    uvicorn.run("main:app", host='0.0.0.0', port=8000, reload=True)
