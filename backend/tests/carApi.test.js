const mongoose = require('mongoose')
const helper = require('./testHelper')
const supertest = require('supertest')
const app = require('../app')
const mockData = require('../utils/_data')
const api = supertest(app)
const Car = require('../models/car')

beforeAll(async () => {
    await helper.clearAll()
    await helper.populateRentals()
    await helper.populateCarModels()
})

beforeEach(async () => {
    await Car.deleteMany({})
    await helper.populateCars()
})

test('cars are returned as json', async () => {
    await api.get('/api/cars')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

test('all cars are returned', async () => {
    const response = await api.get('/api/cars')
    expect(response.body).toHaveLength(mockData.carModels.length)
})

test('car can be created and are referenced by car model and rental', async () => {
    const carModels = await helper.carModelsInDb()
    const rentals = await helper.rentalsInDb()
    expect(carModels[0].cars).toHaveLength(0)
    await api.post('/api/cars')
        .send({
            car_model: carModels[0]._id.toString(),
            rental: rentals[0]._id.toString()
        })
        .expect(201)
        .expect('Content-Type', /application\/json/)
    const cars = await helper.carsInDb()
    expect(cars).toHaveLength(carModels.length + 1)
    expect(cars[0]._id).toBeDefined()
    expect(cars.at(-1).car_model).toEqual(carModels[0]._id)
    const carModelsAfter = await helper.carModelsInDb()
    const rentalsAfter = await helper.rentalsInDb()
    expect(rentalsAfter[0].cars).toHaveLength(1)
    expect(carModelsAfter[0].cars).toHaveLength(1)
})

afterAll(() => {
    mongoose.connection.close()
})