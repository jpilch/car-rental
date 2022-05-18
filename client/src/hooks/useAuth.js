import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {extractUserAndToken} from "../reducers/authSlice";

const useAuth = () => {
    const {user, token} = useSelector(state => state.authReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(extractUserAndToken())
    }, [dispatch])

    return {user, token}
}

export default useAuth