import { useState, useEffect } from 'react';
import {checkValidityOf, setToken, setTokenChecked, setUser} from "../reducers/authSlice";
import {useDispatch, useSelector} from "react-redux";

const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

export const useAuth = () => {
    const {tokenValid} = useSelector(state => state.authReducer)
    const dispatch = useDispatch()
    const savedUserData = JSON.parse(window.localStorage.getItem(
        `${process.env.REACT_APP_LOGGED_IN_USER}`
    ))
    useEffect(() => {
        const validate = () => {
            if (savedUserData.token !== null) {
                dispatch(checkValidityOf(savedUserData.token))
                dispatch(setTokenChecked(true))
            }
            if (tokenValid) {
                dispatch(setUser(savedUserData.user))
                dispatch(setToken(savedUserData.token))
            }
        }
        if (savedUserData) {
            validate()
        }
    }, [tokenValid])
}

export default useWindowDimensions