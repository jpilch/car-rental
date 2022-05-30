import axios from "axios";
import {sortDefault} from "../reducers/sortSlice";

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

const fetchCarModels = async (page, { defaultVal, priceAsc, priceDesc }) => {
    const sortParam = defaultVal
        ? 'sortDefault=1'
        : (priceAsc ? 'sortPriceAsc=1'
        : (priceDesc ? 'sortPriceDesc=1' : 'sortDefault=1'))
    const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/car-models` +
        `?page=${page}&limit=${process.env.REACT_APP_BASE_PAGE_LIMIT}` +
        `&${sortParam}`
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