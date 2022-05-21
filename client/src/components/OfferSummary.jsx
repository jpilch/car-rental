import '../css/OfferSummary.css'
import React from "react";

const OfferSummary = ({carModel, days}) => {
    const price = days === 3
        ? carModel.price_3
        : (days === 5 ? carModel.price_5 : carModel.price_9)

    return (
        <section className="offer-summary">
            <h2>Summary</h2>
            <div className="offer-services">
                <p>Car rental</p>
                <p>{price}$</p>
            </div>
            <div className="total">
                <p>Total:</p>
                <p>{price}$</p>
            </div>
        </section>
    )
}

export default OfferSummary