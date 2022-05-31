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
    const agreements = response.data.agreements
    if (agreements.length) {
        response.data.agreements = agreements.map(agreement => {
            const startsOnDate = new Date(agreement.starts_on)
            const endsOnDate = new Date(agreement.ends_on)
            const now = new Date()
            return now < startsOnDate
                ? { ...agreement, planned: true }
                : (now > startsOnDate && now < endsOnDate
                    ? { ...agreement, active: true }
                    : { ...agreement, archived: true })
        })
    }
    return response
}

const register = async (data) => {
    const { fullName, username, password } = data
    return await axios.post(
        `${process.env.REACT_APP_API_URL}/users`,
        {fullName, username, password}
    )
}

export default { getLoggedInUser, register }