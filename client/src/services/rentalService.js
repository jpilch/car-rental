import axios from "axios";

const fetchRentalById = async (id) => {
    const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/rentals/${id}`
    )
    return response
}

const countCities = async () => {
    const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/rentals`
    )
    const citiesArray = [...response.data.map(rentalDoc => {
        return rentalDoc.city_en.toLowerCase()
    })]
    return [...new Set(citiesArray)].length
}

export default { 
    fetchRentalById,
    countCities
}