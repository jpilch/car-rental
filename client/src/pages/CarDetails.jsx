import '../css/CarDetails.css'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import React from "react";
import CarInfo from "../components/CarInfo";

const CarDetails = () => {
    const { id } = useParams()
    const [carModel, setCarModel] = useState({})

    useEffect(async () => {
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
            <section className="rental-locations">
                <h1>locations</h1>
            </section>
            <section className="what-is-included">
                <h1>what is included</h1>
            </section>
            <section className="order-summary">
                <h1>summary</h1>
            </section>
        </main>
    )
}

export default CarDetails