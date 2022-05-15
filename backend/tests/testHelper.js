const CarModel = require('../models/carmodel')

const carModelsInDb = async () => {
    const carModels = await CarModel.find({})
    return carModels
}

module.exports = {
    carModelsInDb
}