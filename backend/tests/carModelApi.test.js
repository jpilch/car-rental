const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('car models are returned as json', async () => {
    await api
        .get('/api/car-models')
        .expect(200)
        .expect('Content-Type' , /application\/json/)
}, 10000)

afterAll(() => {
    mongoose.connection.close()
})