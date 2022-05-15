const mongoose = require('mongoose')
const helper = require('./testHelper')
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
    expect(response.body.length).toBe(mockData.carModels.length)
})

test('car model can be created', async () => {
    const newCarModel = {
        "manufacturer": "Volkswagen",
        "name": "Jetta",
        "img_url": "test",
        "person_capacity": 5,
        "trunk_capacity": 430,
        "avg_fuel_consumption": 8.0,
        "length": 4,
        "width": 1,
        "height": 1,
        "drive_cat": "FWD"
    }
    await api
        .post('/api/car-models')
        .send(newCarModel)
        .expect(201)
        .expect('Content-Type', /application\/json/)
    const response = await api.get('/api/car-models')
    const modelNames = response.body.map(carModel => carModel.name)
    expect(modelNames).toContain('Jetta')
    expect(response.body).toHaveLength(mockData.carModels.length + 1)
})

test('car model can be deleted', async () => {
    const carModelsBefore = await helper.carModelsInDb()
    const carModelId = carModelsBefore[0]._id.toString()
    expect(carModelId).toBeDefined()
    const response = await api.delete('/api/car-models/' + carModelId)
        .expect(204)
    const carModelsAfter = await helper.carModelsInDb()
    expect(carModelsAfter).toHaveLength(carModelsBefore.length - 1)

})


afterAll(() => {
    mongoose.connection.close()
})