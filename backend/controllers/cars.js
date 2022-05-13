const carsRouter = require('express').Router()
const Car = require('../models/car')

carsRouter.get('/cars', (req, res, next) => {
    Car.find({})
        .then(result => res.json(result))
        .catch(err => next(err))
})

carsRouter.get('/cars/:id', (req, res, next) => {
    Car.findById(req.params.id)
        .then(car => {
            if(car) {
                res.json(car)
            } else {
                res.status(404).end()
            }
        })
        .catch(err => next(err))
})

carsRouter.put('/cars/:id', (req, res, next) => {
    Car.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(updatedCar => res.json(updatedCar))
        .catch(err => next(err))
})

carsRouter.delete('/cars/:id', (req, res, next) => {
    Car.findByIdAndRemove(req.params.id)
        .then(() => res.status(204).end())
        .catch(err => next(err))
})

module.exports = carsRouter