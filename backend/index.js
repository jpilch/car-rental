const express = require('express')
const {carModels} = require('./_data')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello from MotoRent API!').end()
})

app.get('/api/car-models', (req, res) => {
    console.log(carModels, typeof carModels)
    res.json(carModels)
})

app.get('/api/car-models/:id', (req, res) => {
    const id = +req.params.id
    const carModel = carModels.find(cm => cm.id === id)
    if (!carModel) {
        return res.status(404).end()
    }
    res.status(200).json(carModel)
})

app.delete('/api/car-models/:id', (req, res) => {
    const id = +req.params.id
    const carModel = carModels.find(cm => cm.id === id)
    if (!carModel) {
        return res.status(404).end()
    }
    carModels.filter(cm => cm.id !== id)
    res.status(201).end()
})

app.post('/api/car-models', (req, res) => {
    const carModel = req.body
    carModels.concat(carModel)
    res.json(carModel)
})

app.get('/api/cars', (req, res) => {
    res.json({'msg': 'car instances here'})
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})