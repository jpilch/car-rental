const agreementsRouter = require('express').Router()
const Agreement = require('../models/agreement')
const Car = require('../models/car')
const User = require('../models/user')

agreementsRouter.get('/', async (req, res) => {
    const agreements = await Agreement.find({})
    res.json(agreements)
})

agreementsRouter.get('/:id', async (req, res) => {
    const agreement = await Agreement.findById(req.params.id)
    if (!agreement) {
        return res.status(404).send({
            err: 'Agreement does not exist'
        })
    }
    res.status(200).json(agreement)
})

agreementsRouter.post('/', async (req, res) => {
    const { car_id, starts_on, ends_on } = req.body
    if (!car_id || !starts_on || !ends_on) {
        return res.status(400).send({
            err: 'Agreement attributes \'car_id\', \'starts_on\', \'ends_on\' are required'
        })
    }
    const car = await Car.findById(car_id)
    const user = await User.findById(req.user.id)
    if (!car || !user) {
        return res.status(404).send({
            err: 'Agreement attribute does not exist'
        })
    }
    const rentalPeriodMs = new Date(ends_on) - new Date(starts_on)
    const rentalPeriodDays = Math.ceil(rentalPeriodMs / (1000 * 60**2 * 24))
    if (rentalPeriodDays > 9 || rentalPeriodDays < 2) {
        return res.status(400).send({
            err: 'Rental period must be between 2 to 9 days'
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
    res.status(201).json(savedAgreement)
})

agreementsRouter.delete('/:id', async (req, res) => {
    const agreement = await Agreement.findById(req.params.id)
    if (!agreement) {
        return res.status(404).send({
            err: 'Agreement does not exist'
        })
    }
    if (agreement.user_id.toString() !== req.user.id) {
        return res.status(403).send({
            err: 'Agreement owned by different user'
        })
    }
    await Agreement.findByIdAndRemove(req.params.id)
    res.status(204).end()
})

module.exports = agreementsRouter