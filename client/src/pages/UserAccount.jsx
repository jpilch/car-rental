import '../css/UserAccount.css'
import Button from "../components/Button";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from 'react-router-dom'
import {useEffect} from "react";
import {notify} from "../reducers/notificationSlice";

const UserAccount = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const {user} = useSelector(state => state.authReducer)

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
                <Button text={'logout'} dark={true}/>
            </div>
        </main>
    )
}

export default UserAccount