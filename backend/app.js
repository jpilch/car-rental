const express = require('express')
require('express-async-errors')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')
const carModelsRouter = require('./controllers/carModels')
const carsRouter = require('./controllers/cars')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const agreementsRouter = require('./controllers/agreements')
const rentalsRouter = require('./controllers/rentals')
const paymentsRouter = require('./controllers/chekouts')

mongoose.connect(`${config.MONGODB_URI}`)
    .then(() => {
        logger.info('Connected to MongoDB')
    })
    .catch(err => {
        logger.info('MongoDB connection fail')
        logger.error(err)
    })

app.use(cors())
app.use(express.json())
if (config.NODE_ENV !== 'test') {
    app.use(middleware.morganLogger)
}
app.use(middleware.tokenExtractor)
app.use(middleware.userExtractor)

app.use('/api/car-models', carModelsRouter)
app.use('/api/cars', carsRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)
app.use('/api/agreements', agreementsRouter)
app.use('/api/rentals', rentalsRouter)
app.use('/api', paymentsRouter)

app.use(middleware.errorHandler)
app.use(middleware.unknownEndpoint)

module.exports = app