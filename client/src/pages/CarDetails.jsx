import '../css/CarDetails.css'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import React from "react";
import CarInfo from "../components/CarInfo";
import OfferBenefit from "../components/OfferBenefit";
import RentalLocations from "../components/RentalLocations";

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
            <section className="what-is-included">
                <h2>Great choice!</h2>
                <div className="benefits">
                    <ul>
                        <OfferBenefit text={'No additional fees!'}/>
                        <OfferBenefit text={'Free to cancel anytime!'}/>
                    </ul>
                    <ul>
                        <OfferBenefit text={'Short to no queues'}/>
                        <OfferBenefit text={'Dedicated parking space'}/>
                    </ul>
                </div>
            </section>
            <section className="order-summary">
                <h1>summary</h1>
            </section>
        </main>
    )
}

export default CarDetails