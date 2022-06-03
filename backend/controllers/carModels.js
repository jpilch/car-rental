const carModelsRouter = require('express').Router()
const CarModel = require('../models/carmodel')
const middleware = require('../utils/middleware')
const { CarInstanceModel } = require('../models/car')

carModelsRouter.get('/', middleware.paginated, middleware.carModelSort, async (req, res) => {
    const page = req.page
    const limit = req.limit
    const city = req.query.city
    const options = {
        sort: req.sortDefault
            ? {}
            : {
                price_3: req.sortPriceDesc
                    ? -1
                    : (req.sortPriceAsc ? 1 : 0)
            },
        skip: page * limit, limit
    }
    const filter = city
        ? { 'cars.city_en': city.charAt(0).toUpperCase() + city.slice(1).toLowerCase() }
        : {}
    const carModels = await CarModel
        .find(filter, {}, options)
        .populate({
            path: 'cars',
            populate: {
                path: 'rental',
                model: 'Rental'
            }
        })
        .populate({
            path: 'cars',
            populate: {
                path: 'agreements',
                model: 'Agreement'
            }
        })
    res.json(carModels)
})

carModelsRouter.get('/count', async (req, res) => {
    const city = req.query.city
    const filter = city 
    ? {'cars.city_en':  city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()} 
    : {}
    const count = await CarModel.countDocuments(filter)
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

carModelsRouter.get('/:id/cars', async (req, res) => {
    const carModelInstances = await CarInstanceModel
        .find({
            car_model: req.params.id
        })
        .populate('agreements rental')
    const today = new Date(req.body.today)
    const results = carModelInstances.map(carModelInstance => {
        const agreements = carModelInstance.agreements
        if (!agreements.length) {
            return {...carModelInstance.toJSON(), available: true}
        } else if (agreements[agreements.length - 1].ends_on < today) {
            return {...carModelInstance.toJSON(), available: true}
        }
        return {...carModelInstance.toJSON(), available: false}
    })
    res.send(results)    
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