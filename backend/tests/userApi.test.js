const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const User = require('../models/user')
const { usersInDb } = require('./testHelper')
const api = supertest(app)

beforeEach(async () => {
    await User.deleteMany({})
    await api.post('/api/users').send({
        username: 'sample',
        full_name: 'sample',
        password: 'sample'
    })
})

test('users are returned as json', async () => {
    await api.get('/api/users')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

test('user creation succeeds', async () => {
    const user = {
        username: 'test',
        full_name: 'test',
        password: 'test'
    }
    const response = await api.post('/api/users').send(user)
    expect(response.status).toBe(201)
    expect(response.body.agreements).toEqual([])
    delete response.body.agreements
    expect(response.body.id).toBeDefined()
    delete response.body.id
    expect(response.body).toEqual({
        username: user.username,
        full_name: user.full_name
    })
    const users = await usersInDb()
    expect(users).toHaveLength(2)
})

test('user with duplicate username cannot be created', async () => {
    const response = await api.post('/api/users')
        .send({
            username: 'sample',
            password: 'test'
        })
        .expect(400)
    expect(response.body).toEqual({
        err: 'This username is already taken'
    })
})

test('existing user can successfully login', async () => {
    const response = await api
        .post('/api/login')
        .send({
            username: 'sample',
            password: 'sample'
        })
        .expect(200)
    expect(response.body.token).toBeDefined()
    delete response.body.token
    expect(response.body).toEqual({
        username: 'sample',
        full_name: 'sample'
    })
})

afterAll(() => {
    mongoose.connection.close()
})