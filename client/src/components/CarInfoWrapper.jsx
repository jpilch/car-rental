import '../css/CarInfoWrapper.css'
import CarInfo from "./CarInfo";
import {useSelector} from "react-redux";
import Loading from "./Loading";
import React from "react";

const CarInfoWrapper = () => {
    const {carModel} = useSelector(state => state.offerReducer)

    if (!carModel) {
        return <Loading />
    }

    return (
        <section className="car-info-wrapper">
            <h2>Your Car</h2>
            <CarInfo carModel={carModel}/>
        </section>
    )
}

export default CarInfoWrapper