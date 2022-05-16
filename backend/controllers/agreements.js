const agreementsRouter = require('express').Router()
const Agreement = require('../models/agreement')

agreementsRouter.get('/', async (req, res) => {
    const agreements = await Agreement.find({})
    res.json(agreements)
})

agreementsRouter.post('/', async (req, res) => {
    const agreement = new Agreement(req.body)
    const savedAgreement = await agreement.save()
    res.status(201).json(savedAgreement)
})

module.exports = agreementsRouter