import '../css/CarDetails.css'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import React from "react";
import CarInfo from "../components/CarInfo";
import WhatIsIncluded from "../components/WhatIsIncluded";
import RentalLocations from "../components/RentalLocations";
import OfferSummary from "../components/OfferSummary";
import DayChoices from "../components/DayChoices";
import CustomButton from "../components/CustomButton";
import Button from "../components/Button";

const CarDetails = () => {
    const { id } = useParams()
    const [carModel, setCarModel] = useState({})
    const [days, setDays] = useState(3)

    useEffect(async () => {
        const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/car-models/${id}`
        )
        setCarModel(response.data)
    }, [])

    return (
        <main id="car-details">
            <div className="offer-heading">
                <h1>Your Offer</h1>
                <div></div>
            </div>
            <section className="car-info">
                <img src={carModel.img_url} alt=""/>
                <CarInfo
                    carModel={carModel}
                />
                <DayChoices
                    days={days}
                    setDays={setDays}
                />
            </section>
            <RentalLocations carModel={carModel}/>
            <WhatIsIncluded />
            <OfferSummary
                carModel={carModel}
                days={days}
            />
            <div className="actions">
                <Button dark={true} text={'Cancel'}/>
                <CustomButton
                    text={'Pay'}
                />
            </div>
        </main>
    )
}

export default CarDetails