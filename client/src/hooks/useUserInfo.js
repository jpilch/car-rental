import {useState, useEffect} from "react";
import useAuth from "./useAuth";
import userService from "../services/userService";
import useHandleAuthError from "./useHandleAuthError";

const useUserInfo = () => {
    const [userInfo, setUserInfo] = useState(null)
    const { token } = useAuth()
    const handleAuthError = useHandleAuthError('Your token expired. Login in again.')

    useEffect(async () => {
        const fetchUserInfo = async () => {
            try {
                const response = await userService.getLoggedInUser(token)
                setUserInfo(response.data)
            } catch (e) {
                handleAuthError()
            }
        }
        if (token) {
            await fetchUserInfo()
        }
    }, [token])

    return {userInfo}
}

export default useUserInfo