import '../css/CarDetails.css'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import React from "react";
import WhatIsIncluded from "../components/WhatIsIncluded";
import RentalLocations from "../components/RentalLocations";
import OfferSummary from "../components/OfferSummary";
import DayChoices from "../components/DayChoices";
import CarInfoWrapper from "../components/CarInfoWrapper";
import OfferActions from "../components/OfferActions";
import SiteDisclaimer from "../components/SiteDisclaimer";

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
            <CarInfoWrapper
                carModel={carModel}
            />
            <DayChoices
                days={days}
                setDays={setDays}
            />
            <RentalLocations
                carModel={carModel}
                days={days}
            />
            <WhatIsIncluded />
            <OfferSummary
                carModel={carModel}
                days={days}
            />
            <OfferActions />
            <SiteDisclaimer />
        </main>
    )
}

export default CarDetails