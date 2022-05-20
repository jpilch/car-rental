const mongoose = require('mongoose')
const config = require('./utils/config')
const logger = require('./utils/logger')
const helper = require('./utils/helper')

const populate = async () => {
    await helper.clearAll()
    await helper.populateRentals()
    await helper.populateCarModels()
    await helper.populateCars()
}

mongoose.connect(`${config.MONGODB_URI}`)
    .then(() => {
        logger.info('Connected to MongoDB')
        populate()
            .then(() => {
                logger.info('Populating database succeeded')
                mongoose.connection.close()
            })
            .catch(err => logger.error(err))
    })
    .catch(err => {
        logger.info('MongoDB connection fail')
        logger.error(err)
    })