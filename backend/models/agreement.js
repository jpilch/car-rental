const mongoose = require('mongoose')

const agreementSchema = new mongoose.Schema({
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
    }
})

agreementSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('agreement', agreementSchema)