const CarModel = require('../models/carmodel')
const {CarInstanceModel} = require('../models/car')
const User = require('../models/user')
const Agreement = require('../models/agreement')
const Rental = require('../models/rental')
const {
    EXPRESS_APP_ADMIN_USERNAME,
    EXPRESS_APP_ADMIN_FULLNAME,
    EXPRESS_APP_ADMIN_PASSWORD,
    NODE_ENV
} = require('./config')
const axios = require('axios')

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
    return await CarInstanceModel.find({})
}

const saveCar = async (carModelId) => {
    const carModel = await CarModel.findById(carModelId.toString())
    const rentals = await rentalsInDb()
    const rentalId =
        rentals[Math.floor(Math.random() * rentals.length)]._id
    const rental = await Rental.findById(rentalId.toString())
    const car = new CarInstanceModel({
        car_model: carModelId,
        city_en: rental.city_en,
        city_pl: rental.city_pl,
        rental: rentalId
    })
    const savedCar = await car.save()
    carModel.cars = carModel.cars.concat(savedCar)
    rental.cars = rental.cars.concat(savedCar._id)
    await carModel.save()
    await rental.save()
}

const populateCars = async () => {
    await CarInstanceModel.deleteMany({})
    const carModels = await carModelsInDb()
    const carModelIds = carModels.map(carModel => carModel._id)
    for (let carModelId of carModelIds) {
        await saveCar(carModelId)
        await saveCar(carModelId)
    }
}

const usersInDb = async () => {
    return await User.find({})
}

const populateUsers = async (api) => {
    if (NODE_ENV !== 'test') {
        for (let user of users) {
            await axios.post(
                'http://localhost:3001/api/users',
                user)
        }
        await axios.post(
            'http://localhost:3001/api/users',
            {
                username: EXPRESS_APP_ADMIN_USERNAME,
                full_name: EXPRESS_APP_ADMIN_FULLNAME,
                password: EXPRESS_APP_ADMIN_PASSWORD
            })
        return
    }
    for (let user of users) {
        await api.post('/api/users')
            .send(user)
    }
    await api.post('/api/users')
        .send({
            username: EXPRESS_APP_ADMIN_USERNAME,
            full_name: EXPRESS_APP_ADMIN_FULLNAME,
            password: EXPRESS_APP_ADMIN_PASSWORD
        })
}

const getUserAuthToken = async (api) => {
    const response = await api.post('/api/login').send({
        username: 'firstUser',
        password: 'secret'
    })
    return response.body.token
}

const agreementsInDb = async () => {
    return await Agreement.find({})
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
        rental_id: cars[0].rental.toString(),
        starts_on: new Date(currentYear, currentMonth, 1),
        ends_on: new Date(currentYear, currentMonth, 3)
    })
    const secondAgreement = new Agreement({
        user_id: users[1]._id.toString(),
        car_id: cars[1]._id.toString(),
        rental_id: cars[1].rental.toString(),
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
    await Rental.deleteMany({})
    const objects = rentals.map(rental => new Rental(rental))
    const promiseArray = objects.map(object => object.save())
    await Promise.all(promiseArray)
}

const clearAll = async () => {
    await CarModel.deleteMany({})
    await CarInstanceModel.deleteMany({})
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