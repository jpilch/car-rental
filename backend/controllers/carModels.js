const carModelsRouter = require('express').Router()
const CarModel = require('../models/carmodel')

carModelsRouter.get('/', async (req, res) => {
    const carModels = await CarModel.find({})
    res.json(carModels)
})

carModelsRouter.get('/:id', async (req, res, next) => {
    const carModel = await CarModel.findById(req.params.id)
    if (carModel) {
        res.json(carModel)
    } else {
        res.status(404).end()
    }
})

carModelsRouter.post('/', async (req, res, next) => {
    const carModel = new CarModel(req.body)
    const saveCarModel = await carModel.save()
    res.status(201).json(saveCarModel)
})

carModelsRouter.put('/:id', async (req, res, next) => {
    const updatedCarModel = await CarModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(updatedCarModel)
})

carModelsRouter.delete('/carModelsRouter/car-models/:id', async (req, res, err, next) => {
    await CarModel.findByIdAndRemove(req.params.id)
    res.status(204).end()
})

module.exports = carModelsRouter