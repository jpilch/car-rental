import React from 'react'

const CarOffer = ({ priceThreeDays, detailsUrl }) => {
    return (
        <div className="car-offer">
            <div className="price">
                <p>Price for x days:</p>
                <h3>{priceThreeDays} pln</h3>
            </div>
            <button>See offer</button>
        </div>
    )
}

export default CarOffer