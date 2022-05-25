import axios from "axios";

const fetchCarById = async (id) => {
    const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/cars/${id}`
    )
    return response
}

const fetchCarModelById = async (id) => {
    const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/car-models/${id}`
    )
    return response
}

export default { fetchCarById, fetchCarModelById }