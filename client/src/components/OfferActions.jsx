import '../css/OfferActions.css'
import SimpleButton from "./SimpleButton";
import React from "react";
import {useNavigate} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import {useSelector, useDispatch} from "react-redux";
import {createAgreement} from "../reducers/offerSlice";

const OfferActions = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {token} = useAuth()
    const data = useSelector(state => state.offerReducer)

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
                onClick={() => dispatch(createAgreement(data, token, navigate))}
            />
        </div>
    )
}

export default OfferActions