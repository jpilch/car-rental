import '../css/UserAccount.css'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom'
import Loading from "../components/Loading";
import {notify} from "../reducers/notificationSlice";
import {resetUserInfo} from "../reducers/authSlice";
import useAuth from "../hooks/useAuth";
import SimpleButton from "../components/SimpleButton";

const UserAccount = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useAuth()

    const logout = () => {
        navigate('/')
        dispatch(resetUserInfo())
        dispatch(notify('Successfully logged out', true))
    }

    if (!user) {
        return (
            <Loading />
        )
    }

    return (
        <main id="account">
            <div className="container">
                <section className="greeting">
                    <h1>Hi there{user.username && `, ${user.username}`}</h1>
                </section>
                <div className='underline'></div>
                <section className="manage">
                    <SimpleButton
                        text={'Agreements'}
                        bgColor={'var(--clr-dark)'}
                        onClick={() => navigate('/my-account/agreements')}
                    />
                </section>
                <div>
                    <SimpleButton
                        text={'Logout'}
                        bgColor={'var(--clr-red)'}
                        onClick={() => logout()}
                    />
                </div>
            </div>
        </main>
    )
}

export default UserAccount