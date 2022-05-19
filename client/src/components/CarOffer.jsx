import '../css/CarOffer.css'
import React from 'react'
import CustomButton from "./CustomButton";
import {Link} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {chooseCar} from "../reducers/carSlice";

const CarOffer = ({ priceThreeDays, seeOfferDetails }) => {
    const dispatch = useDispatch()

    return (
        <div className="car-offer">
            <div className="price">
                <p>Price for 5 days:</p>
                <h3>{priceThreeDays} pln</h3>
            </div>
            <Link to='/car-details'>
                <CustomButton
                    onClick={seeOfferDetails}
                    bgHover={'var(--clr-highlight'}
                    colorNormal={'var(--clr-dark)'}
                    colorHover={'var(--clr-dark)'}
                    text={'See offer'}
                />
            </Link>
        </div>
    )
}

export default CarOffer