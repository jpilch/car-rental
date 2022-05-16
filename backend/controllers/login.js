const loginRouter = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../utils/config')

loginRouter.post('/', async (req, res) => {
    const { username, password } = req.body
    const user = await User.findOne({ username })
    const passwordCorrect = user
        ? await bcrypt.compare(password, user.passwordHash)
        : false
    if (!(user && passwordCorrect)) {
        return res.status(401).send({
            err: 'Username or password are incorrect'
        })
    }
    const userForToken = {
        username: user.username,
        id: user._id.toString()
    }
    const token = jwt.sign(userForToken, config.SECRET)
    res.status(200).send({
        token,
        username: user.username,
        full_name: user.full_name
    })
})

module.exports = loginRouter