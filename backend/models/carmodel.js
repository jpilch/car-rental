const mongoose = require('mongoose')
require('dotenv').config()

const carModelSchema = new mongoose.Schema({
    manufacturer: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    img_url: {
        type: String,
        required: true
    },
    person_capacity: {
        type: Number,
        required: true
    },
    trunk_capacity: {
        type: String,
        required: true
    },
    avg_fuel_consumption: {
        type: Number,
        required: true
    },
    length: {
        type: Number,
        required: true
    },
    width: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    drive_cat: {
        type: String,
        required: true
    }
})

carModelSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('CarModel', carModelSchema)