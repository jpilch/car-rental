const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
    car_model: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CarModel'
    },
    rental: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rental'
    },
    city_en: {
        type: String,
        required: true
    },
    city_pl: {
        type: String,
        required: true
    },
    agreements: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Agreement'
        }
    ]
})

carSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const CarInstanceModel = mongoose.model('CarInstanceModel', carSchema)

module.exports = {
    carSchema,
    CarInstanceModel
}