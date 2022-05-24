const mongoose = require('mongoose')

const agreementSchema = new mongoose.Schema({
    price: Number,
    user_id: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    car_id: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car'
    },
    starts_on: {
        type: Date,
        required: true
    },
    ends_on: {
        type: Date,
        required: true
    },
    rental_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rental'
    }
})

agreementSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        returnedObject.starts_on = returnedObject.starts_on.toISOString()
        returnedObject.ends_on = returnedObject.ends_on.toISOString()
        returnedObject.user_id = returnedObject.user_id.toString()
        returnedObject.car_id = returnedObject.car_id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Agreement', agreementSchema)