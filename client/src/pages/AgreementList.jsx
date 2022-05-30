import '../css/AgreementList.css'
import useAuth from "../hooks/useAuth";
import AgreementItem from "../components/AgreementItem";
import Modal from "../components/Modal";
import {useSelector, useDispatch} from "react-redux";
import {deleteAgreement} from "../reducers/agreementSlice";
import {notify} from "../reducers/notificationSlice";
import useUserInfo from "../hooks/useUserInfo";
import Loading from "../components/Loading";
import {useNavigate} from "react-router-dom";
import Heading from "../components/Heading";
import {useEffect, useRef} from "react";

const AgreementList = () => {
    const mainRef = useRef(null)
    const { token } = useAuth()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {
        chosenAgreementId,
        userAgreements
    } = useSelector(state => state.agreementReducer)
    const { userInfo } = useUserInfo()

    useEffect(() => {
        if (mainRef.current) {
            mainRef.current.scrollIntoView()
        }
    }, [mainRef.current])

    if (!userInfo) {
        return <Loading fullPageLoading={true}/>
    }

    return (
        <main id="agreements" ref={mainRef}>
            <Modal
                text={'Do you want to delete selected agreement?'}
                onConfirm={chosenAgreementId
                    ? () => {
                        const { planned, archived, active } = userAgreements
                            .find(agreement => agreement.id === chosenAgreementId)
                        if (planned || archived) {
                            dispatch(deleteAgreement(chosenAgreementId, token))
                        } else {
                            navigate('/contact')
                        }
                    }
                    : () => {
                        dispatch(notify('No agreement id specified'))
                    }
                }
            />
            <Heading text={'Your Agreements'}/>
            <div className="underline"></div>
            <section className="agreement-list">
                {userAgreements ? userAgreements
                    .slice(0, 3)
                    .map(agreement => {
                    return (
                        <AgreementItem
                            key={agreement.id}
                            agreement={agreement}
                        />
                    )
                }) : <Loading />}
                {!userAgreements.length && <p>You do not have any agreements yet.</p>}
            </section>
        </main>
    )
}

export default AgreementList