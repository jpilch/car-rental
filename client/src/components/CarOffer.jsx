import '../css/CarOffer.css'
import React from 'react'
import Button from "./Button";

const CarOffer = ({ priceThreeDays, detailsUrl }) => {
    return (
        <div className="car-offer">
            <div className="price">
                <p>Price for x days:</p>
                <h3>{priceThreeDays} pln</h3>
            </div>
            <Button
                dark={true}
                text={'See offer'}
            />
        </div>
    )
}

export default CarOffer