const mongoose = require('mongoose')
const helper = require('./testHelper')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('cars are returned as json', async () => {
    await api.get('/api/cars')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

afterAll(() => {
    mongoose.connection.close()
})