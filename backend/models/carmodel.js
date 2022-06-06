const mongoose = require('mongoose')
const {carSchema} = require('./car')
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
    },
    avg_fuel_consumption: {
        type: Number,
    },
    length: {
        type: Number,
    },
    width: {
        type: Number,
    },
    height: {
        type: Number,
    },
    drive_cat: {
        type: String,
    },
    cars: [carSchema],
    gearbox: {
        type: String,
        required: true
    },
    baggage_large: {
        type: Number,
        required: true
    },
    baggage_small: {
        type: Number,
        required: true
    },
    price_3: {
        required: true,
        type: Number
    },
    price_5: {
        required: true,
        type: Number
    },
    price_9: {
        required: true,
        type: Number
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