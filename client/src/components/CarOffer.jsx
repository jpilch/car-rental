import '../css/CarOffer.css'
import React from 'react'
import SimpleButton from "./SimpleButton";

const CarOffer = ({ priceThreeDays, seeOfferDetails }) => {
    return (
        <div className="car-offer">
            <div className="price">
                <p>Price for 5 days:</p>
                <h3>{priceThreeDays} pln</h3>
            </div>
            <SimpleButton
                onClick={seeOfferDetails}
                bgColor={'var(--clr-green)'}
                text={'Details'}
            />
        </div>
    )
}

export default CarOffer