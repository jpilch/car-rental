import '../css/AgreementList.css'
import userService from "../services/userService";
import {useEffect, useState} from "react";
import useAuth from "../hooks/useAuth";
import AgreementItem from "../components/AgreementItem";
import Modal from "../components/Modal";
import {useSelector, useDispatch} from "react-redux";
import {deleteAgreement} from "../reducers/agreementSlice";
import {notify} from "../reducers/notificationSlice";

const AgreementList = () => {
    const { token } = useAuth()
    const dispatch = useDispatch()
    const [userAgreements, setUserAgreements] = useState(null)
    const { chosenAgreementId } = useSelector(state => state.agreementReducer)

    useEffect(async () => {
        const fetchAgreements = async () => {
            const response = await userService.getLoggedInUser(token)
            setUserAgreements(response.data.agreements)
        }
        if (token) {
            await fetchAgreements()
        }
    }, [token])

    return (
        <main id="agreements">
            <Modal
                text={'This is a lengthy question. Do you Confirm?'}
                onConfirm={chosenAgreementId
                    ? () => {
                        dispatch(deleteAgreement(chosenAgreementId, token))
                    }
                    : () => {
                        dispatch(notify('No agreement id specified'))
                    }
                }
            />
            <h1>Your Agreements</h1>
            <div className="underline"></div>
            <section className="agreement-list">
                {userAgreements && userAgreements
                    .slice(0, 3)
                    .map(agreement => {
                    return (
                        <AgreementItem
                            key={agreement.id}
                            agreement={agreement}
                        />
                    )
                })}
            </section>
        </main>
    )
}

export default AgreementList