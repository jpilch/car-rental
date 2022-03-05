from sqlalchemy.orm import Session
from database import engine

import models

session = Session(engine)

manufacturers = [
    {'name': 'Toyota'},
    {'name': 'Volkswagen'},
    {'name': 'Mercedes'},
    {'name': 'BMW'}
]

car_models = [
    {
        'manufacturer_id': 1,
        'name': 'Avalon'
    },
    {
        'manufacturer_id': 1,
        'name': 'Yaris'
    },
    {
        'manufacturer_id': 2,
        'name': 'Taos'
    },
    {
        'manufacturer_id': 2,
        'name': 'Jetta'
    },
    {
        'manufacturer_id': 3,
        'name': 'GLA SUV'
    },
    {
        'manufacturer_id': 3,
        'name': 'GLC SUV'
    },
    {
        'manufacturer_id': 4,
        'name': '3 Series Sedan'
    },
    {
        'manufacturer_id': 4,
        'name': 'M5 Sedan'
    },
]

cars = [
    {
        'model_id': 1,
        'is_available': True
    },
    {
        'model_id': 1,
        'is_available': True
    },
    {
        'model_id': 2,
        'is_available': True
    },
    {
        'model_id': 2,
        'is_available': True
    },
    {
        'model_id': 3,
        'is_available': True
    },
    {
        'model_id': 3,
        'is_available': True
    },
    {
        'model_id': 4,
        'is_available': True
    },
    {
        'model_id': 4,
        'is_available': True
    },
    {
        'model_id': 5,
        'is_available': True
    },
    {
        'model_id': 5,
        'is_available': True
    },
    {
        'model_id': 6,
        'is_available': True
    },
    {
        'model_id': 6,
        'is_available': True
    },
    {
        'model_id': 7,
        'is_available': True
    },
    {
        'model_id': 7,
        'is_available': True
    },
    {
        'model_id': 8,
        'is_available': True
    },
    {
        'model_id': 8,
        'is_available': True
    },
]

for manufacturer in manufacturers:
    manufacturer = models.Manufacturer(**manufacturer)
    session.add(manufacturer)
session.commit()

for car_model in car_models:
    car_model = models.Model(**car_model)
    session.add(car_model)
session.commit()

for car in cars:
    car = models.Car(**car)
    session.add(car)
session.commit()

session.close()
