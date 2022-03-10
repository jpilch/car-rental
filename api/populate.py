from sqlalchemy.orm import Session
from sqlalchemy import text
import json

from database import engine
import models



if __name__ == '__main__':
    session = Session(engine)

    for tablename in 'car', 'model', 'manufacturer':
        session.execute(
            text(f'ALTER SEQUENCE {tablename}_id_seq RESTART WITH 1')
        )
        session.execute(
            text(f'DELETE FROM {tablename}')
        )

    with open('./_data/data.json') as f:
        data = json.load(f)
        manufacturers = data['manufacturers']
        car_models = data['car_models']
        cars = data['cars']
    
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
