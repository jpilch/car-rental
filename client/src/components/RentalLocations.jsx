import '../css/RentalLocations.css'
import {mdiMapMarkerCircle} from '@mdi/js'
import Icon from '@mdi/react'
import React from "react";

const RentalLocations = ({carModel, days}) => {
    const today = new Date()
    const pickupDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9)
    const returnDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9)
    pickupDate.setDate(pickupDate.getDate() + 1)
    returnDate.setDate(returnDate.getDate() + days)

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
                            {pickupDate && pickupDate.toISOString()}
                        </p>
                        <p>{carModel.cars && carModel.cars[0].rental.city_en}</p>
                        <p>{carModel.cars && carModel.cars[0].rental.address}</p>
                    </div>
                    <div className="return">
                        <p className='date'>
                            {returnDate && returnDate.toISOString()}
                        </p>
                        <p>{carModel.cars && carModel.cars[0].rental.city_en}</p>
                        <p>{carModel.cars && carModel.cars[0].rental.address}</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default RentalLocations