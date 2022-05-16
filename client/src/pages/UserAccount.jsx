import '../css/UserAccount.css'
import Button from "../components/Button";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from 'react-router-dom'
import Loading from "../components/Loading";
import {notify} from "../reducers/notificationSlice";
import {logout} from "../reducers/authSlice";
import useAuth from "../hooks/useAuth";

const UserAccount = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useAuth()

    if (!user) {
        return (
            <Loading />
        )
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