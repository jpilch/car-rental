const carModelsRouter = require('express').Router()
const CarModel = require('../models/carmodel')

carModelsRouter.get('/', async (req, res) => {
    const carModels = await CarModel.find({})
    res.json(carModels)
})

carModelsRouter.post('/', async (req, res) => {
    const carModel = new CarModel(req.body)
    const saveCarModel = await carModel.save()
    res.status(201).json(saveCarModel)
})

carModelsRouter.get('/:id', async (req, res) => {
    const carModel = await CarModel.findById(req.params.id)
    if (carModel) {
        res.json(carModel)
    } else {
        res.status(404).end()
    }
})

carModelsRouter.delete('/:id', async (req, res) => {
    await CarModel.findByIdAndRemove(req.params.id)
    res.status(204).end()
})

carModelsRouter.put('/:id', async (req, res) => {
    const updatedCarModel = await CarModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(updatedCarModel)
})

module.exports = carModelsRouter