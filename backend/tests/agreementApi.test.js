const supertest = require('supertest')
const mongoose = require('mongoose')
const Agreement = require('../models/agreement')
const helper = require('./testHelper')

const app = require('../app')

const api = supertest(app)

beforeAll(async () => {
    await helper.populateCarModels()
    await helper.populateCars()
    await helper.populateUsers(api)
})

beforeEach(async () => {
    await Agreement.deleteMany({})
    await helper.populateAgreements()
})

test('all agreements are returned as json', async () => {
    const token = await helper.getUserAuthToken(api)
    const response = await api
        .get('/api/agreements')
        .set('Authorization', `Bearer ${token}`)
        .expect(200)
        .expect('Content-Type', /application\/json/)
    expect(response.body).toHaveLength(2)
})

afterAll(() => {
    mongoose.connection.close()
})