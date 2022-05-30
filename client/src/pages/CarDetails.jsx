import '../css/CarDetails.css'
import {useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {fetchCarModelInfo} from "../reducers/offerSlice";
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
    const dispatch = useDispatch()
    const mainRef = useRef(null)

    useEffect(() => {
        mainRef.current.scrollIntoView()
    }, [])

    useEffect(async () => {
        dispatch(fetchCarModelInfo(id))
    }, [dispatch])

    return (
        <main id="car-details" ref={mainRef}>
            <div className="offer-heading">
                <h1>Your Offer</h1>
                <div></div>
            </div>
            <CarInfoWrapper />
            <DayChoices />
            <RentalLocations />
            <WhatIsIncluded />
            <OfferSummary />
            <OfferActions />
            <SiteDisclaimer />
        </main>
    )
}

export default CarDetails