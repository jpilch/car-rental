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

module.exports = rentalsRouter