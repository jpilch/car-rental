const CarModel = require('../models/carmodel')
const Car = require('../models/car')
const User = require('../models/user')
const Agreement = require('../models/agreement')
const Rental = require('../models/rental')

const {
    carModels,
    rentals,
    users
} = require('./_data')

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
    const objects = carModelIds.map(carModelId => new Car({ car_model: carModelId }))
    const promiseArray = objects.map(object => object.save())
    await Promise.all(promiseArray)
}

const usersInDb = async () => {
    const users = await User.find({})
    return users
}

const populateUsers = async (api) => {
    for (let user of users) {
        await api.post('/api/users')
            .send(user)
    }
}

const getUserAuthToken = async (api) => {
    const response = await api.post('/api/login').send({
        username: 'firstUser',
        password: 'secret'
    })
    return response.body.token
}

const agreementsInDb = async () => {
    const agreements = await Agreement.find({})
    return agreements
}

const populateAgreements = async () => {
    await Agreement.deleteMany({})
    const today = new Date()
    const currentMonth = today.getMonth() + 1
    const currentYear = today.getFullYear()
    const users = await usersInDb()
    const cars = await carsInDb()
    const firstAgreement = new Agreement({
        user_id: users[0]._id.toString(),
        car_id: cars[0]._id.toString(),
        starts_on: new Date(currentYear, currentMonth, 1),
        ends_on: new Date(currentYear, currentMonth, 3)
    })
    const secondAgreement = new Agreement({
        user_id: users[1]._id.toString(),
        car_id: cars[1]._id.toString(),
        starts_on: new Date(currentYear, currentMonth, 3),
        ends_on: new Date(currentYear, currentMonth, 6)
    })
    await firstAgreement.save()
    await secondAgreement.save()
}

const rentalsInDb = async () => {
    return Rental.find({})
}

const populateRentals = async () => {
    for (let rental of rentals) {
        await new Rental(rental).save()
    }
}

const clearAll = async () => {
    await CarModel.deleteMany({})
    await Car.deleteMany({})
    await User.deleteMany({})
    await Agreement.deleteMany({})
    await Rental.deleteMany({})
}

module.exports = {
    carModelsInDb, populateCarModels,
    carsInDb, populateCars,
    usersInDb, populateUsers, getUserAuthToken,
    agreementsInDb, populateAgreements,
    rentalsInDb, populateRentals,
    clearAll
}