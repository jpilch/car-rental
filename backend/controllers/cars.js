const carsRouter = require('express').Router()
const Car = require('../models/car')
const CarModel = require('../models/carmodel')
const Rental = require('../models/rental')

carsRouter.get('/', async (req, res) => {
    const cars = await Car.find({}, 'car_model rental')
        .populate('car_model', {
            manufacturer: 1,
            name: 1,
        })
        .populate('rental', {
            city_en: 1,
            city_pl: 1,
            address: 1
        })
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
    const rental = await Rental.findById(req.body.rental)
    if (!carModel || !rental) {
        return res.status(404).send({
            err: 'Car attribute does not exist'
        })
    }
    const car = new Car({
        car_model: carModel._id,
        rental: rental._id
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