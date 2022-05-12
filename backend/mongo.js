const mongoose = require('mongoose')

const username = process.argv[2]
const password = process.argv[3]

try {
    mongoose.connect(
        `mongodb+srv://${username}:${password}@cluster0.mulf6.mongodb.net/MotoRent?retryWrites=true&w=majority`
    )
} catch (e) {
    console.log('error', e)
    process.exit(1)
}


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

carModel.save().then(result => {
    mongoose.connection.close()
})
