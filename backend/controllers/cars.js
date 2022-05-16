const carsRouter = require('express').Router()
const Car = require('../models/car')
const CarModel = require('../models/carmodel')

carsRouter.get('/', async (req, res) => {
    const cars = await Car.find({}).populate('agreements')
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

carsRouter.post('/', async (req, res) => {
    const carModel = await CarModel.findById(req.body.car_model)
    const car = new Car({
        car_model: carModel._id
    })
    const savedCar = await car.save()
    carModel.cars = carModel.cars.concat(savedCar._id)
    await carModel.save()
    res.status(201).json(savedCar)
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