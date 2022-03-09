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
        'name': 'Avalon',
        'img_url': 'https://img-optimize.toyota-europe.com/resize/ccis/680x680/zip/pl/product-token/29905d6b-5079-4648-a605-cea0f4cc21ef/vehicle/8718abb8-324e-41b9-b843-2ac7e6feb700/image-quality/70/hero-exterior-4_2rz.png',
        'person_capacity': 4,
        'trunk_capacity': 280,
        'avg_fuel_consumption': 7.0,
        'length': 4.42,
        'width': 1.73,
        'height': 1.49,
        'drive_cat': 'fwd'
    },
    # {
    #     'manufacturer_id': 1,
    #     'name': 'Yaris'
    # },
    # {
    #     'manufacturer_id': 2,
    #     'name': 'Taos'
    # },
    # {
    #     'manufacturer_id': 2,
    #     'name': 'Jetta'
    # },
    # {
    #     'manufacturer_id': 3,
    #     'name': 'GLA SUV'
    # },
    # {
    #     'manufacturer_id': 3,
    #     'name': 'GLC SUV'
    # },
    # {
    #     'manufacturer_id': 4,
    #     'name': '3 Series Sedan'
    # },
    # {
    #     'manufacturer_id': 4,
    #     'name': 'M5 Sedan'
    # },
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
    # {
    #     'model_id': 2,
    #     'is_available': True
    # },
    # {
    #     'model_id': 2,
    #     'is_available': True
    # },
    # {
    #     'model_id': 3,
    #     'is_available': True
    # },
    # {
    #     'model_id': 3,
    #     'is_available': True
    # },
    # {
    #     'model_id': 4,
    #     'is_available': True
    # },
    # {
    #     'model_id': 4,
    #     'is_available': True
    # },
    # {
    #     'model_id': 5,
    #     'is_available': True
    # },
    # {
    #     'model_id': 5,
    #     'is_available': True
    # },
    # {
    #     'model_id': 6,
    #     'is_available': True
    # },
    # {
    #     'model_id': 6,
    #     'is_available': True
    # },
    # {
    #     'model_id': 7,
    #     'is_available': True
    # },
    # {
    #     'model_id': 7,
    #     'is_available': True
    # },
    # {
    #     'model_id': 8,
    #     'is_available': True
    # },
    # {
    #     'model_id': 8,
    #     'is_available': True
    # },
]

for items, type in zip(
    (manufacturers, car_models, cars),
    (models.Manufacturer, models.Model, models.Car)
    ):
    for item in items:
        print(f"Adding {item} of type {type}")
        item = type(**item)
        session.add(item)
    session.commit()

session.close()
