import '../css/OfferSummary.css'
import React from "react";

const OfferSummary = () => {
    return (
        <section className="order-summary">
            <h2>Summary</h2>
            <div className="offer-services">
                <p>Car rental</p>
                <p>239$</p>
            </div>
            <div className="total">
                <p>Total:</p>
                <p>239$</p>
            </div>
        </section>
    )
}

export default OfferSummary