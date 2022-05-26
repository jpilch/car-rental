import '../css/OfferActions.css'
import SimpleButton from "./SimpleButton";
import React from "react";
import {useNavigate} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import {useSelector, useDispatch} from "react-redux";
import {createAgreement} from "../reducers/offerSlice";
import Modal from "./Modal";
import {toggleModal} from "../reducers/modalSlice";
import useUserInfo from "../hooks/useUserInfo";
import Loading from "./Loading";

const OfferActions = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { userInfo } = useUserInfo()
    const { token } = useAuth()
    const data = useSelector(state => state.offerReducer)

    if (!userInfo) {
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
                text={'You currently have a rented car. More details at your account\'s agreement page.'}
                onConfirm={() => console.log('hello')}
            />
            <div className="actions">
                <SimpleButton
                    text={'Pay'}
                    bgColor={'var(--clr-green)'}
                    onClick={userCanRent()
                        ? () => dispatch(createAgreement(data, token, navigate))
                        : () => dispatch(toggleModal())
                    }
                />
            </div>
        </>

    )
}

export default OfferActions