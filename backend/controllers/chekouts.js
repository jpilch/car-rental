const CarModel = require('../models/carmodel')
const {CarInstanceModel} = require('../models/car')
const { STRIPE_KEY } = require('../utils/config')
const stripe = require('stripe')(STRIPE_KEY)
const paymentsRouter = require('express').Router()
const YOUR_DOMAIN = 'http://localhost:3000';

paymentsRouter.post('/create-checkout-session', async (req, res) => {
    const agreement = req.body
    console.log(agreement)
    const carInstance = await CarInstanceModel.findById(agreement.car_id)
    const carModel = await CarModel.findById(carInstance.car_model)
    const name = carModel.manufacturer.concat(' ', carModel.name)
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    currency: 'pln',
                    product_data: {
                        name
                    },
                    unit_amount: agreement.price*100
                },
                quantity: 1
            }
        ],
        mode: 'payment',
        payment_method_types: ['card'],
        success_url: `${YOUR_DOMAIN}/payment?success=true`,
        cancel_url: `${YOUR_DOMAIN}/payment?canceled=true`,
    });

    res.send({url: session.url});
});

module.exports = paymentsRouter