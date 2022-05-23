import axios from "axios";

export const createAgreement = async (data, authToken) => {
    const config = {
        headers: {
            'Authorization': `Bearer ${authToken}`
        }
    }
    const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/agreements`,
        data,
        config
    )
    return response
}