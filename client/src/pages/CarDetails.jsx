import '../css/CarDetails.css'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const CarDetails = () => {
    const { id } = useParams()
    const [car, setCar] = useState({})
    useEffect(async () => {
        const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/car-models/${id}`
        )
        setCar(response.data)
    }, [])

    return (
        <main id="car-details">
            <h1>{id}</h1>
            <h1>{car.manufacturer} {car.name}</h1>
        </main>
    )
}

export default CarDetails