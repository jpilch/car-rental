import '../css/UserAccount.css'
import Button from "../components/Button";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from 'react-router-dom'
import {useAuth} from "../hooks";
import Loading from "../components/Loading";
import {notify} from "../reducers/notificationSlice";
import {logout} from "../reducers/authSlice";

const UserAccount = () => {
    useAuth()
    const {user, tokenChecked, tokenValid, isLoggedOut} = useSelector(state => state.authReducer)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    if (!user) {
        return (
            <Loading />
        )
    }

    if (!tokenValid && tokenChecked) {
        dispatch(notify('You must login before accessing this page', false))
        navigate('/login')
    }

    return (
        <main id="account">
            <div className="container">
                <section className="greeting">
                    <h1>Hi there{user.full_name && `, ${user.full_name}`}</h1>
                </section>
                <section className="manage">
                    <Link to={'/my-account/orders'}>
                        <p>Manage Orders</p>
                    </Link>
                    <Link to={'/my-account/settings'}>
                        <p>Account Settings</p>
                    </Link>
                </section>
                <div onClick={() => {
                    navigate('/')
                    dispatch(notify('Successfully logged out', true))
                    dispatch(logout())
                }}>
                    <Button text={'Logout'} dark={true}/>
                </div>
            </div>
        </main>
    )
}

export default UserAccount