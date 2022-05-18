const rentalsRouter = require('express').Router()
const Rental = require('../models/rental')

rentalsRouter.get('/', async (req, res) => {
    const rentals = await Rental.find({})
    res.json(rentals)
})

rentalsRouter.post('/', async (req, res) => {
    const { city_en, city_pl, address } = req.body
    const rental = new Rental({
        city_en,
        city_pl,
        address
    })
    const savedRental = await rental.save()
    res.json(savedRental)
})

rentalsRouter.delete('/:id', async (req, res) => {
    const rental = await Rental.findById(req.params.id)
    if (!rental) {
        return res.status(404).send({
            err: 'Rental does not exist'
        })
    }
    await Rental.findByIdAndRemove(req.params.id)
    res.status(204).end()
})

module.exports = rentalsRouter