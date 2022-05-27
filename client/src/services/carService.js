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

const fetchCarModels = async (page) => {
    const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/car-models` +
        `?page=${page}&limit=${process.env.REACT_APP_BASE_PAGE_LIMIT}`
    )
    return response
}

const countCarModels = async () => {
    return axios.get(
        `${process.env.REACT_APP_API_URL}/car-models/count`
    )
}

export default {
    fetchCarById,
    fetchCarModelById,
    fetchCarModels,
    countCarModels
}