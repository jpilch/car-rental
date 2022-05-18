const rentalsRouter = require('express').Router()
const Rental = require('../models/rental')

rentalsRouter.get('/', async (req, res) => {
    const rentals = await Rental.find({})
    res.json(rentals)
})

module.exports = rentalsRouter