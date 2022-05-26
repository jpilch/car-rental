import '../css/CarItem.css'
import React from 'react'
import CarInfo from "./CarInfo";
import CarOffer from "./CarOffer";
import { useNavigate } from "react-router-dom";

const CarItem = ({carModel}) => {
    const navigate = useNavigate()

    return (
        <div className='car-item'>
            <CarInfo carModel={carModel}/>
            <CarOffer
                seeOfferDetails={() => navigate(`/cars/${carModel.id}`)}
                priceThreeDays={carModel.price_3}
            />
        </div>
    )
}

export default CarItem