import '../css/AgreementList.css'
import useAuth from "../hooks/useAuth";
import AgreementItem from "../components/AgreementItem";
import Modal from "../components/Modal";
import {useSelector, useDispatch} from "react-redux";
import {deleteAgreement} from "../reducers/agreementSlice";
import {notify} from "../reducers/notificationSlice";
import useUserInfo from "../hooks/useUserInfo";
import Loading from "../components/Loading";

const AgreementList = () => {
    const { token } = useAuth()
    const dispatch = useDispatch()
    const { chosenAgreementId } = useSelector(state => state.agreementReducer)
    const { userInfo } = useUserInfo()

    if (!userInfo) {
        return <Loading />
    }

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
                {userInfo.agreements && userInfo.agreements
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