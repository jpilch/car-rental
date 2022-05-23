const supertest = require('supertest')
const mongoose = require('mongoose')
const Agreement = require('../models/agreement')
const helper = require('../utils/helper')
const User = require('../models/user')
const app = require('../app')

const api = supertest(app)

beforeAll(async () => {
    await helper.clearAll()
    await helper.populateRentals()
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

// test('agreements are not accessible for non logged in users', async () => {
//     const response = await api
//         .get('/api/agreements')
//         .expect(401)
//     expect(response.body.err).toBeDefined()
//     expect(response.body.err.toLowerCase()).toBe('login required')
// })

test('agreement is accessible by id', async () => {
    const token = await helper.getUserAuthToken(api)
    const agreements = await helper.agreementsInDb()
    const response = await api
        .get(`/api/agreements/${agreements[0].toJSON().id}`)
        .set('Authorization', `Bearer ${token}`)
        .expect(200)
    expect(response.body.starts_on)
        .toEqual(agreements[0].starts_on.toISOString())
    expect(response.body.ends_on)
        .toEqual(agreements[0].ends_on.toISOString())
    expect(response.body).toEqual(agreements[0].toJSON())
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
    await helper.populateUsers(api)
    expect(response.body.err).toBeDefined()
    expect(response.body.err.toLowerCase()).toBe(
        'agreement attribute does not exist'
    )
})

test('rental period must be between 2 to 9 days', async () => {
    const token = await helper.getUserAuthToken(api)
    const cars = await helper.carsInDb()
    const rentals = await helper.rentalsInDb()
    const response = await api
        .post('/api/agreements')
        .set('Authorization', `Bearer ${token}`)
        .send({
            car_id: cars[0]._id.toString(),
            starts_on: '01-01-2022',
            ends_on: '01-11-2022',
            start_loc: rentals[0]._id,
            end_loc: rentals[1]._id
        })
        .expect(400)
    expect(response.body.err).toBeDefined()
    expect(response.body.err.toLowerCase()).toBe(
        'rental period must be between 2 to 9 days'
    )
})

test('agreements are created', async () => {
    const token = await helper.getUserAuthToken(api)
    const cars = await helper.carsInDb()
    const users = await helper.usersInDb()
    const rentals = await helper.rentalsInDb()
    const response = await api
        .post('/api/agreements')
        .set('Authorization', `Bearer ${token}`)
        .send({
            car_id: cars[0]._id.toString(),
            starts_on: '01-01-2022',
            ends_on: '01-8-2022',
            start_loc: rentals[0]._id,
            end_loc: rentals[1]._id
        })
        .expect(201)
        .expect('Content-Type', /application\/json/)
    expect(response.body.id).toBeDefined()
    const rentalsAfter = await helper.rentalsInDb()
    expect(rentalsAfter[0].agreements).toHaveLength(1)
    expect(rentalsAfter[0].agreements[0]._id.toString())
        .toBe(response.body.id)
    delete response.body.id
    expect(response.body).toEqual({
        car_id: cars[0]._id.toString(),
        user_id: users[0]._id.toString(),
        starts_on: new Date('01-01-2022').toISOString(),
        ends_on: new Date('01-8-2022').toISOString(),
        start_loc: rentals[0]._id.toString(),
        end_loc: rentals[1]._id.toString()
    })
})

test('user cannot delete someone else\'s agreement', async () => {
    const agreements = await helper.agreementsInDb()
    const token = await helper.getUserAuthToken(api)
    const response = await api
        .delete(`/api/agreements/${agreements[1]._id.toString()}`)
        .set('Authorization', `Bearer ${token}`)
        .expect(403)
    expect(response.body).toEqual({
        err: 'Agreement owned by different user'
    })
})

test('user can delete his/her agreements', async () => {
    const agreements = await helper.agreementsInDb()
    const token = await helper.getUserAuthToken(api)
    const response = await api
        .delete(`/api/agreements/${agreements[0]._id.toString()}`)
        .set('Authorization', `Bearer ${token}`)
        .expect(204)
    expect(response.body).toEqual({})
})

afterAll(() => {
    mongoose.connection.close()
})