const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
    car_model: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CarModel'
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

module.exports = mongoose.model('Car', carSchema)