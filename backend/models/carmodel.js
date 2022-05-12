const mongoose = require('mongoose')
require('dotenv').config()
const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(`${url}`)
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch(err => {
        console.log('Connecting to MongoDB failed', err)
    })

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

carModelSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('CarModel', carModelSchema)