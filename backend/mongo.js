const mongoose = require('mongoose')
console.log(process.env.MONGODB_URI)
mongoose.connect(
    `${process.env.MONGODB_URI}`
)

const carModelSchema = new mongoose.Schema({
    manufacturer: String,
    name: String,
    img_url: String,
    person_capacity: Number,
    trunk_capacity: Number,
    avg_fuel_consumption: Number,
    length: Number,
    width: Number,
    height: Number,
    drive_cat: String
})

const CarModel = mongoose.model('CarModel', carModelSchema)

const carModel = new CarModel({
    "manufacturer": "Toyota",
    "name": "Avalon",
    "img_url": "https://cdn.jdpower.com/JDPA_2020-Toyota-Avalon-XLE-Hybrid-Harbor-Gray-Front-Quarter.jpg",
    "person_capacity": 5,
    "trunk_capacity": 450,
    "avg_fuel_consumption": 7.5,
    "length": 4.98,
    "width": 1.85,
    "height": 1.44,
    "drive_cat": "FWD"
})

carModel.save()
console.log('saved')
mongoose.connection.close()