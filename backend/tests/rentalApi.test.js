const mongoose = require('mongoose')
const app = require('../app')
const supertest = require('supertest')
const Rental = require('../models/rental')
const helper = require("./testHelper")

const api = supertest(app)

beforeAll(async () => {
    await helper.clearAll()
})

beforeEach(async () => {
    await Rental.deleteMany({})
    await helper.populateRentals()
})

test('rentals are returned as json', async () => {
    const response = await api.get('/api/rentals')
        .expect(200)
        .expect('Content-Type', /application\/json/)
    expect(response.body).toHaveLength(2)
})

afterAll(() => {
    mongoose.connection.close()
})