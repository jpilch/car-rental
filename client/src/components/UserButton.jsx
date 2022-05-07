import '../css/UserButton.css'
import {useSelector} from "react-redux";
import {Link} from 'react-router-dom'

const UserButton = (props) => {
    const {user} = useSelector(state => state.authReducer)

    return (
        <Link to={user ? '' : '/login'}>
            <button className={'btn user-btn'}>
                {user ? 'My Account' : 'Login'}
            </button>
        </Link>
    )
}

export default UserButton