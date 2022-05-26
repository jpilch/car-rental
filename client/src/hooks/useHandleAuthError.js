import {notify} from "../reducers/notificationSlice";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {resetUserInfo} from "../reducers/authSlice";

const useHandleAuthError = (message) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return () => {
        dispatch(resetUserInfo())
        dispatch(notify(message, false))
        navigate('/')
    }
}

export default useHandleAuthError