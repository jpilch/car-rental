const usersRouter = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/user')
const middleware = require('../utils/middleware')

usersRouter.get('/', middleware.loginRequired, middleware.adminOnly, async (req, res) => {
    const users = await User.find({}).populate('agreements')
    res.json(users)
})

usersRouter.get('/me', async (req, res) => {
    const userMe = await User.findById(req.user.id).populate('agreements')
    if (!userMe) {
        return res.status(404).send({
            err: 'User does not exist'
        })
    }
    res.json(userMe)
})

usersRouter.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id).populate('agreements')
    if (!user) {
        return res.status(404).send({
            err: 'User does not exist'
        })
    }
    res.status(200).json(user)
})

usersRouter.post('/', async (req, res) => {
    const { username, full_name, password } = req.body
    const existingUser = await User.findOne({ username })
    if (existingUser) {
        return res.status(400).send({
            err: 'This username is already taken'
        })
    }
    const passwordHash = await bcrypt.hash(password, 10)
    const user = new User({
        username,
        full_name,
        passwordHash
    })
    const savedUser = await user.save()
    res.status(201).json(savedUser)
})

module.exports = usersRouter