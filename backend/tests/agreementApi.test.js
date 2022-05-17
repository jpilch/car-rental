const supertest = require('supertest')
const mongoose = require('mongoose')
const Agreement = require('../models/agreement')
const helper = require('./testHelper')
const User = require('../models/user')
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

test('agreements are not accessible for non logged in users', async () => {
    const response = await api
        .get('/api/agreements')
        .expect(401)
    expect(response.body.err).toBeDefined()
    expect(response.body.err.toLowerCase()).toBe('login required')
})

test('missing agreement attributes result in an error response', async () => {
    const token = await helper.getUserAuthToken(api)
    const response = await api
        .post('/api/agreements')
        .set('Authorization', `Bearer ${token}`)
        .send({})
        .expect(400)
    expect(response.body.err).toBeDefined()
    expect(response.body.err.toLowerCase()).toContain(
        '\'ends_on\' are required'
    )
})

test('cannot create agreement for non-existent users', async () => {
    const token = await helper.getUserAuthToken(api)
    await User.deleteMany({})
    const cars = await helper.carsInDb()
    const response = await api
        .post('/api/agreements')
        .set('Authorization', `Bearer ${token}`)
        .send({
            car_id: cars[0]._id.toString(),
            starts_on: new Date(),
            ends_on: new Date()
        })
        .expect(404)
    expect(response.body.err).toBeDefined()
    expect(response.body.err.toLowerCase()).toBe(
        'agreement attribute does not exist'
    )
})

afterAll(() => {
    mongoose.connection.close()
})