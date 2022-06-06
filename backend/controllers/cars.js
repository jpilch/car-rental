const carsRouter = require('express').Router()
const {CarInstanceModel} = require('../models/car')
const CarModel = require('../models/carmodel')
const Rental = require('../models/rental')
const middleware = require('../utils/middleware')

carsRouter.get('/', async (req, res) => {
    const cars = await CarInstanceModel.find({}, 'car_model rental agreements')
        .populate('car_model', {
            manufacturer: 1,
            name: 1,
        })
        .populate('rental', {
            city_en: 1,
            city_pl: 1,
            address: 1,
        })
        .populate('agreements')
    res.json(cars)
})

carsRouter.get('/:id', async (req, res) => {
    const car = await CarInstanceModel
        .findById(req.params.id)
        .populate('agreements')
    if (car) {
        res.json(car)
    } else {
        res.status(404).end()
    }
})

carsRouter.post('/', middleware.loginRequired, middleware.adminOnly, async (req, res) => {
    const carModel = await CarModel.findById(req.body.car_model)
    const rental = await Rental.findById(req.body.rental)
    if (!carModel || !rental) {
        return res.status(404).send({
            err: 'Car attribute does not exist'
        })
    }
    const car = new CarInstanceModel({
        car_model: carModel._id,
        rental: rental._id
    })
    const savedCar = await car.save()
    carModel.cars = carModel.cars.concat(savedCar)
    rental.cars = rental.cars.concat(savedCar._id)
    await rental.save()
    await carModel.save()
    res.status(201).json(savedCar)
})

carsRouter.put('/:id', middleware.loginRequired, middleware.adminOnly, async (req, res) => {
    const updatedCar = await CarInstanceModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(updatedCar)
})

carsRouter.delete('/:id', middleware.loginRequired, middleware.adminOnly, async (req, res) => {
    await CarInstanceModel.findByIdAndRemove(req.params.id)
    res.status(204).end()
})

module.exports = carsRouter