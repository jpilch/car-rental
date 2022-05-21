import '../css/OfferActions.css'
import SimpleButton from "./SimpleButton";
import React from "react";
import {useNavigate} from "react-router-dom";

const OfferActions = () => {
    const navigate = useNavigate()

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
                onClick={() => navigate('my-account')}
            />
        </div>
    )
}

export default OfferActions