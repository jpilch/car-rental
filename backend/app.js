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

app.use('/api/car-models', carModelsRouter)
app.use('/api/cars', carsRouter)

app.use(middleware.errorHandler)
app.use(middleware.unknownEndpoint)

module.exports = app