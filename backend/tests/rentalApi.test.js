const mongoose = require('mongoose')
const app = require('../app')
const supertest = require('supertest')
const Rental = require('../models/rental')
const helper = require('../utils/helper')

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

test('specified rental can be accessed', async () => {
    const rentals = await helper.rentalsInDb()
    const response = await api
        .get(`/api/rentals/${rentals[0]._id.toString()}`)
        .expect(200)
    expect(response.body).toEqual(rentals[0].toJSON())
})

test('rentals can be deleted', async () => {
    const rentalsBefore = await helper.rentalsInDb()
    expect(rentalsBefore).toHaveLength(2)
    await api
        .delete(`/api/rentals/${rentalsBefore[0]._id.toString()}`)
        .expect(204)
    await api
        .get(`/api/rentals/${rentalsBefore[0]._id.toString()}`)
        .expect(404)
    const rentalsAfter = await helper.rentalsInDb()
    expect(rentalsAfter).toHaveLength(1)
})

afterAll(() => {
    mongoose.connection.close()
})