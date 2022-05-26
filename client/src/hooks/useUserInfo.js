import {useState, useEffect} from "react";
import useAuth from "./useAuth";
import userService from "../services/userService";

const useUserInfo = () => {
    const [userInfo, setUserInfo] = useState(null)
    const { token } = useAuth()

    useEffect(async () => {
        const fetchUserInfo = async () => {
            const response = await userService.getLoggedInUser(token)
            setUserInfo(response.data)
        }
        if (token) {
            await fetchUserInfo()
        }
    }, [token])

    return {userInfo}
}

export default useUserInfo