const express = require('express')
const {
    morganLogger,
    errorHandler,
    unknownEndpoint
} = require('./middleware')

const CarModel = require('./models/carmodel')

const app = express()

app.use(express.json())
app.use(morganLogger)

app.get('/', (req, res) => {
    res.send('Hello from MotoRent API!').end()
})

app.get('/api/car-models', async (req, res) => {
    const carModels = await CarModel.find({})
    res.json(carModels)
})

app.get('/api/car-models/:id', (req, res, next) => {
    CarModel.findById(req.params.id)
        .then(carModel => {
            if (carModel) {
                res.json(carModel)
            } else {
                res.status(404).end()
            }
        })
        .catch(err => next(err))
})

app.post('/api/car-models', (req, res, next) => {
    const carModel = new CarModel(req.body)
    carModel.save()
        .then(savedCarModel => {
            res.json(savedCarModel)
        })
        .catch(err => next(err))
})

app.put('/api/car-models/:id', (req, res, next) => {
    CarModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(updatedCarModel => res.json(updatedCarModel))
        .catch(err => next(err))
})

app.delete('/app/car-models/:id', (req, res, err, next) => {
    CarModel.findByIdAndRemove(req.params.id)
        .then(() => {
            res.status(204).end()
        })
        .catch(err => next(err))
})

app.get('/api/cars', (req, res) => {
    res.json({ msg: 'car instances here' })
})

app.use(errorHandler)
app.use(unknownEndpoint)

app.listen(process.env.PORT || 3001, () => {
    console.log(`Server running on port ${process.env.PORT || 3001}`)
})