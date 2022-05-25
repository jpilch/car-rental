import axios from "axios";

const getLoggedInUser = async (authToken) => {
    const config = {
        headers: {
            'Authorization': `Bearer ${authToken}`
        }
    }
    const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/users/me`,
        config
    )
    return response
}

export default { getLoggedInUser }