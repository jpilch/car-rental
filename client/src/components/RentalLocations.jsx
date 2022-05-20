import '../css/RentalLocations.css'
import {mdiMapMarkerCircle} from '@mdi/js'
import Icon from '@mdi/react'
import React from "react";

const RentalLocations = ({carModel}) => {
    return (
        <section className="rental-locations">
            <h2>Pickup & return</h2>
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
                        <p>{carModel.cars && carModel.cars[0].rental.city_en}</p>
                        <p>{carModel.cars && carModel.cars[0].rental.address}</p>
                    </div>
                    <div className="return">
                        <p>{carModel.cars && carModel.cars[0].rental.city_en}</p>
                        <p>{carModel.cars && carModel.cars[0].rental.address}</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default RentalLocations