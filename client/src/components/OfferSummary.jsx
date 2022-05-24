import '../css/OfferSummary.css'
import React from "react";
import {useSelector} from "react-redux";
import Loading from "./Loading";

const OfferSummary = () => {
    const { price } = useSelector(state => state.offerReducer)

    if (!price) {
        return <Loading />
    }

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