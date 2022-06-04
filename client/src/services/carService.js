import axios from "axios";

const fetchCarById = async (id) => {
    return await axios.get(
        `${process.env.REACT_APP_API_URL}/cars/${id}`
    )
}

const fetchCarModelById = async (id) => {
    return await axios.get(
        `${process.env.REACT_APP_API_URL}/car-models/${id}`
    )
}

const fetchCarModels = async (page, { defaultVal, priceAsc, priceDesc }, city) => {
    const sortParam = defaultVal
        ? 'sortDefault=1'
        : (priceAsc ? 'sortPriceAsc=1'
        : (priceDesc ? 'sortPriceDesc=1' : 'sortDefault=1'))
    const cityParam = city ? `&city=${city}` : ''
    return await axios.get(
        `${process.env.REACT_APP_API_URL}/car-models` +
        `?page=${page}&limit=${process.env.REACT_APP_BASE_PAGE_LIMIT}` +
        `&${sortParam}` + `${cityParam}`
    )
}

const countCarModels = async (city) => {
    const url = city
        ? `${process.env.REACT_APP_API_URL}/car-models/count?city=${city}`
        : `${process.env.REACT_APP_API_URL}/car-models/count`
    return axios.get(
        url
    )
}

const countCars = async () => {
    const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/cars`
    )
    return response.data.length
}

const countManufacturers = async () => {
    const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/car-models?page=${0}&limit=${100}&sortDefault=1`
    )
    const manufacturerArray = [...response.data.map(carModelDoc => {
        return carModelDoc.manufacturer.toLowerCase()
    })]
    return [...new Set(manufacturerArray)].length
}

export default {
    fetchCarById,
    fetchCarModelById,
    fetchCarModels,
    countCarModels,
    countCars,
    countManufacturers
}