import '../css/CarDetails.css'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import React from "react";
import CarInfo from "../components/CarInfo";
import WhatIsIncluded from "../components/WhatIsIncluded";
import RentalLocations from "../components/RentalLocations";
import OfferSummary from "../components/OrderSummary";

const CarDetails = () => {
    const { id } = useParams()
    const [carModel, setCarModel] = useState({})

    useEffect(async () => {
        console.log(`${process.env.REACT_APP_API_URL}/car-models/${id}`)
        const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/car-models/${id}`
        )
        setCarModel(response.data)
    }, [])

    return (
        <main id="car-details">
            <section className="car-info">
                <img src={carModel.img_url} alt=""/>
                <CarInfo
                    carModel={carModel}
                />
            </section>
            <RentalLocations carModel={carModel}/>
            <WhatIsIncluded />
            <OfferSummary />
        </main>
    )
}

export default CarDetails