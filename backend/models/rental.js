const mongoose = require('mongoose')

const rentalSchema = new mongoose.Schema({
    city_en: {
        required: true,
        type: String
    },
    city_pl: {
        required: true,
        type: String
    },
    address: {
        required: true,
        type: String
    },
    cars: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Car'
        }
    ],
    agreements: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Agreement'
        }
    ]
})

rentalSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Rental', rentalSchema)