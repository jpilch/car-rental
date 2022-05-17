const agreementsRouter = require('express').Router()
const Agreement = require('../models/agreement')
const Car = require('../models/car')
const User = require('../models/user')

agreementsRouter.get('/', async (req, res) => {
    const agreements = await Agreement.find({})
    res.json(agreements)
})

agreementsRouter.post('/', async (req, res) => {
    const { car_id, starts_on, ends_on } = req.body
    const car = await Car.findById(car_id)
    const user = await User.findById(req.user.id)
    if (!car || !user) {
        return res.status(404).send({
            err: 'Specified car/user do not exist'
        })
    }
    const agreement = new Agreement({
        car_id,
        starts_on,
        ends_on,
        user_id: req.user.id
    })
    const savedAgreement = await agreement.save()
    user.agreements = user.agreements.concat(savedAgreement._id)
    car.agreements = car.agreements.concat(savedAgreement._id)
    await user.save()
    await car.save()
    console.log(car)
    res.status(201).json(savedAgreement)
})

module.exports = agreementsRouter