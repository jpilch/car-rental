import '../css/RentalLocations.css'
import {mdiMapMarkerCircle} from '@mdi/js'
import Icon from '@mdi/react'
import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import Loading from "./Loading";
import {chooseEndDate, chooseStartDate} from "../reducers/offerSlice";

const RentalLocations = () => {
    const dispatch = useDispatch()
    const {
        rental,
        days,
        startDate,
        endDate
    } = useSelector(state => state.offerReducer)

    const today = new Date()
    const pickupDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9)
    const returnDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9)

    useEffect(() => {
        pickupDate.setDate(today.getDate() + 1)
        returnDate.setDate(today.getDate() + 1 + days)
        dispatch(chooseStartDate(pickupDate.toString()))
        dispatch(chooseEndDate(returnDate.toString()))
    }, [dispatch, days])

    if (!days || !rental || !startDate || !endDate) {
        return <Loading />
    }

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
                            {startDate && String(startDate).slice(0, 25)}
                        </p>
                        <p>{rental.city_en  + ' (' + rental.address + ')'}</p>
                    </div>
                    <div className="return">
                        <p className='date'>
                            {endDate && String(endDate).slice(0, 25)}
                        </p>
                        <p>{rental.city_en + ' (' + rental.address + ')'}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RentalLocations