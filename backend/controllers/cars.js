const carsRouter = require('express').Router()
const Car = require('../models/car')

carsRouter.get('', async (req, res) => {
    const cars = await Car.find({})
    res.json(cars)
})

carsRouter.get('/:id', async (req, res) => {
    const car = await Car.findById(req.params.id)
    if (car) {
        res.json(car)
    } else {
        res.status(404).end()
    }
})

carsRouter.put('/:id', async (req, res) => {
    const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(updatedCar)
})

carsRouter.delete('/:id', async (req, res) => {
    await Car.findByIdAndRemove(req.params.id)
    res.status(204).end()
})

module.exports = carsRouter