const CarModel = require('../models/carmodel')
const Car = require('../models/car')
const {
    carModels
} = require('../utils/_data')

const carModelsInDb = async () => {
    const carModels = await CarModel.find({})
    return carModels
}

const populateCarModels = async () => {
    await CarModel.deleteMany({})
    const objects = carModels.map(carModel => new CarModel(carModel))
    const promiseArray = objects.map(object => object.save())
    await Promise.all(promiseArray)
}

const carsInDb = async () => {
    const cars = await Car.find({})
    return cars
}

const populateCars = async () => {
    await Car.deleteMany({})
    const carModels = await carModelsInDb()
    const carModelIds = carModels.map(carModel => carModel._id)
    const objects = carModelIds.map(carModelId => new Car({ carModel: carModelId }))
    const promiseArray = objects.map(object => object.save())
    await Promise.all(promiseArray)
}

module.exports = {
    carModelsInDb, populateCarModels,
    carsInDb, populateCars
}