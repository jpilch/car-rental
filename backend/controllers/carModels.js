const carModelsRouter = require('express').Router()
const CarModel = require('../models/carmodel')

carModelsRouter.get('/api/car-models', async (req, res) => {
    const carModels = await CarModel.find({})
    res.json(carModels)
})

carModelsRouter.get('/api/car-models/:id', (req, res, next) => {
    CarModel.findById(req.params.id)
        .then(carModel => {
            if (carModel) {
                res.json(carModel)
            } else {
                res.status(404).end()
            }
        })
        .catch(err => next(err))
})

carModelsRouter.post('/api/car-models', (req, res, next) => {
    const carModel = new CarModel(req.body)
    carModel.save()
        .then(savedCarModel => {
            res.json(savedCarModel)
        })
        .catch(err => next(err))
})

carModelsRouter.put('/api/car-models/:id', (req, res, next) => {
    CarModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(updatedCarModel => res.json(updatedCarModel))
        .catch(err => next(err))
})

carModelsRouter.delete('/carModelsRouter/car-models/:id', (req, res, err, next) => {
    CarModel.findByIdAndRemove(req.params.id)
        .then(() => {
            res.status(204).end()
        })
        .catch(err => next(err))
})

module.exports = carModelsRouter