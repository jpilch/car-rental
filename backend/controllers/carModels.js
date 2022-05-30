const carModelsRouter = require('express').Router()
const CarModel = require('../models/carmodel')
const middleware = require('../utils/middleware')

carModelsRouter.get('/',
    middleware.paginated,
    middleware.carModelSort,
    async (req, res) => {
    const page = req.page
    const limit = req.limit
    const options = {
        sort: req.sortDefault
            ? {}
            : {
                price_3: req.sortPriceDesc ? -1
                    : (req.sortPriceAsc ? 1 : 0)
            },
        skip: page * limit, limit
    }
    const carModels = await CarModel
        .find({}, {}, options)
        .populate({
            path: 'cars',
            populate: {
                path: 'rental'
            }
        })
    res.json(carModels)
})

carModelsRouter.get('/count', async (req, res) => {
    const count = await CarModel.countDocuments()
    res.json({ count })
})

carModelsRouter.post('/', async (req, res) => {
    const carModel = new CarModel(req.body)
    const saveCarModel = await carModel.save()
    res.status(201).json(saveCarModel)
})

carModelsRouter.get('/:id', async (req, res) => {
    const carModel = await CarModel.findById(req.params.id)
        .populate({
            path: 'cars',
            populate: {
                path: 'rental'
            }
        })
    if (carModel) {
        res.json(carModel)
    } else {
        res.status(404).end()
    }
})

carModelsRouter.delete('/:id', async (req, res) => {
    await CarModel.findByIdAndRemove(req.params.id)
    res.status(204).end()
})

carModelsRouter.put('/:id', async (req, res) => {
    const updatedCarModel = await CarModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(updatedCarModel)
})

module.exports = carModelsRouter