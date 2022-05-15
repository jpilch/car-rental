const CarModel = require('../models/carmodel')
const Car = require('../models/car')

const carModelsInDb = async () => {
    const carModels = await CarModel.find({})
    return carModels
}

const carsInDb = async () => {
    const cars = await Car.find({})
    return cars
}

module.exports = {
    carModelsInDb,
    carsInDb
}