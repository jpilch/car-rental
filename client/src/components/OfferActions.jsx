import '../css/OfferActions.css'
import SimpleButton from "./SimpleButton";
import React from "react";
import {useNavigate} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import {useSelector, useDispatch} from "react-redux";
import {createAgreement} from "../services/agreementService";
import {notify} from "../reducers/notificationSlice";

const OfferActions = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {token} = useAuth()
    const {
        car,
        rental,
        startDate,
        endDate
    } = useSelector(state => state.offerReducer)

    return (
        <div className="actions">
            <SimpleButton
                bgColor={'var(--clr-red)'}
                text={'Cancel'}
                onClick={() => navigate('/')}
            />
            <SimpleButton
                text={'Pay'}
                bgColor={'var(--clr-green)'}
                onClick={async () => {
                    const response = await createAgreement({
                        car_id: car.id,
                        rental_id: rental.id,
                        starts_on: startDate,
                        ends_on: endDate
                    }, token)
                    console.log(response.status, response.data)
                    if (response.status === 201) {
                        dispatch(notify('Successfully created an agreement', true))
                        navigate('/my-account')
                    }
                }}
            />
        </div>
    )
}

export default OfferActions