from sqlalchemy import Column, SmallInteger, Date, ForeignKey, Integer, String, Boolean, Float
from sqlalchemy.orm import relationship

from database import Base


class Manufacturer(Base):
    __tablename__ = "manufacturer"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(32))

    models = relationship("Model", back_populates="manufacturer")


class Model(Base):
    __tablename__ = "model"

    id = Column(Integer, primary_key=True, index=True)
    manufacturer_id = Column(Integer, ForeignKey("manufacturer.id"))
    name = Column(String(32))
    img_url = Column(String(512))
    person_capacity = Column(Integer)
    trunk_capacity = Column(Integer)
    avg_fuel_consumption = Column(Float)
    height = Column(Float)
    width = Column(Float)
    length = Column(Float)
    drive_cat = Column(String(3))

    manufacturer = relationship("Manufacturer", back_populates="models")
    cars = relationship("Car", back_populates="model")


class Car(Base):
    __tablename__ = "car"

    id = Column(Integer, primary_key=True, index=True)
    model_id = Column(Integer, ForeignKey("model.id"))
    rental_id = Column(Integer, ForeignKey("rental.id"))
    is_available = Column(Boolean, default=True)

    model = relationship("Model", back_populates="cars")
    rental = relationship("Rental", back_populates="cars")
    reviews = relationship("Review", back_populates="car")
    agreements = relationship("Agreement", back_populates="car")


class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True)
    full_name = Column(String(32))
    email = Column(String(32))
    password = Column(String(64))
    is_active = Column(Boolean, default=True)

    reviews = relationship(
        "Review", back_populates="author",
        cascade="delete, all, delete-orphan"
    )
    agreements = relationship("Agreement", back_populates="customer")


class City(Base):
    __tablename__ = "city"

    id = Column(Integer, primary_key=True)
    name = Column(String(32), unique=True)

    locations = relationship("Location", back_populates="city")


class Location(Base):
    __tablename__ = "location"

    id = Column(Integer, primary_key=True)
    city_id = Column(Integer, ForeignKey("city.id"))
    street_name = Column(String(64))
    building_no = Column(Integer)

    city = relationship("City", back_populates="locations")
    rental = relationship("Rental", back_populates="location",  uselist=False)


class Rental(Base):
    __tablename__ = "rental"

    id = Column(Integer, primary_key=True)
    location_id = Column(Integer, ForeignKey("location.id"))

    location = relationship("Location", back_populates="rental")
    cars = relationship("Car", back_populates="rental")


class Review(Base):
    __tablename__ = "review"

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("user.id"))
    car_id = Column(Integer, ForeignKey("car.id"))
    score = Column(SmallInteger)
    content = Column(String(256))

    author = relationship("User", back_populates="reviews")
    car = relationship("Car", back_populates="reviews")


class Agreement(Base):
    __tablename__ = "agreement"

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("user.id"))
    car_id = Column(Integer, ForeignKey("car.id"))
    start = Column(Date)
    end = Column(Date)

    customer = relationship("User", back_populates="agreements")
    car = relationship("Car", back_populates="agreements")
