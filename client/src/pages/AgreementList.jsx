import '../css/AgreementList.css'
import userService from "../services/userService";
import {useEffect, useState} from "react";
import useAuth from "../hooks/useAuth";
import AgreementItem from "../components/AgreementItem";

const AgreementList = () => {
    const { token } = useAuth()
    const [userAgreements, setUserAgreements] = useState(null)

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
            <h1>Your Agreements</h1>
            <div className="underline"></div>
            <section className="agreement-list">
                {userAgreements && userAgreements.map(agreement => {
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