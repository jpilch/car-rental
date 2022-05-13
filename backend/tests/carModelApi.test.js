const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const CarModel = require('../models/carmodel')
const mockData = require('../utils/_data')
const api = supertest(app)

beforeEach(async () => {
    await CarModel.deleteMany({})
    const objects = mockData.carModels.map(mockCarModel => new CarModel(mockCarModel))
    const promiseArray = objects.map(object => object.save())
    await Promise.all(promiseArray)
})

test('car models are returned as json', async () => {
    await api
        .get('/api/car-models')
        .expect(200)
        .expect('Content-Type' , /application\/json/)
}, 10000)

test('all car models are returned', async () => {
    const response = await api.get('/api/car-models').expect(200)
    console.log(response.body)
    expect(response.body.length).toBe(mockData.carModels.length)
})

afterAll(() => {
    mongoose.connection.close()
})