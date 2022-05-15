const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const User = require('../models/user')

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

afterAll(() => {
    mongoose.connection.close()
})