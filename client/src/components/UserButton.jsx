import '../css/UserButton.css'
import {useSelector} from "react-redux";

const UserButton = () => {
    const {user} = useSelector(state => state.authReducer)

    return (
        <button className={'btn user-btn'}>
            {user ? 'My Account' : 'Login'}
        </button>
    )
}

export default UserButton