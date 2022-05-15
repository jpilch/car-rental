const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const User = require('../models/user')
const {usersInDb} = require("./testHelper");
const api = supertest(app)

beforeEach(async () => {
    await User.deleteMany({})
    const sampleUser = new User({
        username: 'sample',
        passwordHash: 'notARealHash'
    })
    await sampleUser.save()
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
    delete response.body.id
    expect(response.body).toEqual({
        username: user.username,
        full_name: user.full_name
    })
    const users = await usersInDb()
    expect(users).toHaveLength(2)
})

afterAll(() => {
    mongoose.connection.close()
})