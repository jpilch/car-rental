const mongoose = require('mongoose')
const helper = require('./testHelper')
const supertest = require('supertest')
const app = require('../app')
const Car = require('../models/car')
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
})

test('all cars are returned', async () => {
    const response = await api.get('/api/cars')
    expect(response.body).toHaveLength(mockData.carModels.length)
})

afterAll(() => {
    mongoose.connection.close()
})