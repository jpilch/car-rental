import '../css/RentalLocations.css'
import {mdiMapMarkerCircle} from '@mdi/js'
import Icon from '@mdi/react'
import React, {useEffect, useState} from "react";
import axios from "axios";

const RentalLocations = ({carModel, days}) => {
    const today = new Date()
    const pickupDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9)
    const returnDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9)
    pickupDate.setDate(pickupDate.getDate() + 1)
    returnDate.setDate(returnDate.getDate() + days)
    const [rentals, setRentals] = useState([])

    useEffect(async () => {
        const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/rentals`
        )
        setRentals(response.data)
    }, [])

    return (
        <section className="rental-locations">
            <h2>Start & Stop</h2>
            <div className="locations">
                <div className="graph">
                    <Icon
                        path={mdiMapMarkerCircle}
                        size={0.8}
                    />
                    <div className='line'></div>
                    <Icon
                        path={mdiMapMarkerCircle}
                        size={0.8}
                    />
                </div>
                <div className="addresses">
                    <div className="pickup">
                        <p className='date'>
                            {pickupDate && String(pickupDate).slice(0, 25)}
                        </p>
                        <select style={{fontSize: '0.7rem'}} name="start-loc" id="start-loc">
                            {carModel.cars && carModel.cars.map((car, index) => {
                                return (
                                    <option key={car.rental.id} value={`${index}`}>
                                        {car.rental.city_en}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="return">
                        <p className='date'>
                            {returnDate && String(returnDate).slice(0, 25)}
                        </p>
                        <select style={{fontSize: '0.7rem'}} name="start-loc" id="start-loc">
                            {rentals && rentals.map((rental, index) => {
                                return (
                                    <option key={rental.id} value={`${index}`}>
                                        {rental.city_en}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RentalLocations