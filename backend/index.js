const express = require('express')
const {morganLogger} = require('./middleware')

// models
const CarModel = require('./models/carmodel')

const app = express()

// middleware
app.use(express.json())
app.use(morganLogger)

app.get('/', (req, res) => {
    res.send('Hello from MotoRent API!').end()
})

app.get('/api/car-models', async (req, res) => {
    const carModels = await CarModel.find({})
    res.json(carModels)
})

app.get('/api/car-models/:id', (req, res) => {
    const id = +req.params.id
    CarModel.findById(id).then(carModel => {
        res.json(carModel)
    })
})


app.post('/api/car-models', (req, res) => {
    const body = req.body
    const carModel = new CarModel({
        manufacturer: body.manufacturer,
        name: body.name,
        img_url: body.img_url,
        person_capacity: body.person_capacity,
        trunk_capacity: body.person_capacity,
        avg_fuel_consumption: body.avg_fuel_consumption,
        length: body.length,
        width: body.width,
        height: body.height,
        drive_cat: body.drive_cat
    })
    carModel.save().then(savedCarModel => {
        res.json(savedCarModel)
    })
})

app.get('/api/cars', (req, res) => {
    res.json({'msg': 'car instances here'})
})

app.listen(process.env.PORT || 3001, () => {
    console.log(`Server running on port ${process.env.PORT || 3001}`)
})