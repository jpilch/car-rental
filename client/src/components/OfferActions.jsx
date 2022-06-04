import '../css/OfferActions.css'
import SimpleButton from "./SimpleButton";
import React, { useEffect } from "react";
import {useNavigate} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import {useSelector, useDispatch} from "react-redux";
import {createAgreement, reset} from "../reducers/offerSlice";
import Modal from "./Modal";
import {toggleModal} from "../reducers/modalSlice";
import useUserInfo from "../hooks/useUserInfo";
import Loading from "./Loading";
import { notify } from '../reducers/notificationSlice';

const OfferActions = ({city}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { userInfo } = useUserInfo()
    const { token } = useAuth()
    const data = useSelector(state => state.offerReducer)
    useEffect(() => {
        if (data.car === 'unavailable' && data.rental === 'unavailable') {
            dispatch(reset())
            navigate(city ? `/cars?city=${city}` : '/cars')
            dispatch(notify('This car is currently unavaiable. Try a different one.', false))
        }
    }, [data])
    
    if (!userInfo || data.car === 'unavailable') {
        return <Loading />
    }

    const userCanRent = () => {
        for (let agreement of userInfo.agreements) {
            if (agreement.active || agreement.planned) {
                return false
            }
        }
        return true
    }

    return (
        <>
            <Modal
                text={userCanRent()
                    ? 'Are you certain? You will have to pay once you continue.'
                    : 'You currently have a rented car. More details at your account\'s agreement page.'}
                onConfirm={userCanRent()
                    ? () => dispatch(createAgreement(data, token, navigate))
                    : () => null
                }
            />
            <div className="actions">
                <SimpleButton
                    text={'Pay'}
                    bgColor={'var(--clr-green)'}
                    onClick={() => dispatch(toggleModal())
                    }
                />
            </div>
        </>

    )
}

export default OfferActions