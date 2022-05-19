import '../css/CarItem.css'
import React from 'react'
import CarInfo from "./CarInfo";
import CarOffer from "./CarOffer";
import { useNavigate } from "react-router-dom";

const CarItem = ({carModel}) => {
    const navigate = useNavigate()

    const imgStyle = {
        maxWidth: '10rem',
        height: 'auto',
        borderRadius: '1rem'
    }

    return (
        <div className='car-item'>
            <img style={imgStyle} src={carModel.img_url} alt=""/>
            <CarInfo carModel={carModel}/>
            <CarOffer
                seeOfferDetails={() => navigate(`/cars/${carModel.id}`)}
                priceThreeDays={200}
            />
        </div>
    )
}

export default CarItem