import '../css/CarDetails.css'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import React from "react";
import CarInfo from "../components/CarInfo";
import WhatIsIncluded from "../components/WhatIsIncluded";
import RentalLocations from "../components/RentalLocations";
import OfferSummary from "../components/OfferSummary";
import DayChoices from "../components/DayChoices";
import SimpleButton from "../components/SimpleButton";

const CarDetails = () => {
    const { id } = useParams()
    const [carModel, setCarModel] = useState({})
    const [days, setDays] = useState(3)
    const navigate = useNavigate()

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
                <SimpleButton
                    bgColor={'var(--clr-red)'}
                    text={'Cancel'}
                    onClick={() => navigate('/')}
                />
                <SimpleButton
                    text={'Pay'}
                    bgColor={'var(--clr-green)'}
                    onClick={() => navigate('my-account')}
                />
            </div>
        </main>
    )
}

export default CarDetails