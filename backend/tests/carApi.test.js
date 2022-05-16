const mongoose = require('mongoose')
const helper = require('./testHelper')
const supertest = require('supertest')
const app = require('../app')
const mockData = require('../utils/_data')
const api = supertest(app)

beforeEach(async () => {
    await helper.populateCarModels()
    await helper.populateCars()
})

test('cars are returned as json', async () => {
    await api.get('/api/cars')
        .expect(200)
        .expect('Content-Type', /application\/json/)
}, 10000)

test('all cars are returned', async () => {
    const response = await api.get('/api/cars')
    expect(response.body).toHaveLength(mockData.carModels.length)
}, 10000)

test('car can be created and are referenced by car models', async () => {
    const carModels = await helper.carModelsInDb()
    expect(carModels[0].cars).toHaveLength(0)
    await api.post('/api/cars')
        .send({ car_model: carModels[0]._id.toString() })
        .expect(201)
        .expect('Content-Type', /application\/json/)
    const cars = await helper.carsInDb()
    expect(cars).toHaveLength(carModels.length + 1)
    expect(cars[0]._id).toBeDefined()
    expect(cars[0].car_model).toEqual(carModels[0]._id)
    expect(cars[0].car_model).toBeDefined()
    const carModelsAfter = await helper.carModelsInDb()
    expect(carModelsAfter[0].cars).toHaveLength(1)
}, 10000)

afterAll(() => {
    mongoose.connection.close()
})