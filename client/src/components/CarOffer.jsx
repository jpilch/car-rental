import '../css/CarOffer.css'
import React from 'react'
import CustomButton from "./CustomButton";

const CarOffer = ({ priceThreeDays, seeOfferDetails }) => {
    return (
        <div className="car-offer">
            <div className="price">
                <p>Price for 5 days:</p>
                <h3>{priceThreeDays} pln</h3>
            </div>
            <CustomButton
                onClick={seeOfferDetails}
                bgHover={'var(--clr-highlight'}
                colorNormal={'var(--clr-dark)'}
                colorHover={'var(--clr-dark)'}
                text={'See offer'}
            />
        </div>
    )
}

export default CarOffer