import axios from "axios";

const fetchRentalById = async (id) => {
    const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/rentals/${id}`
    )
    return response
}

export default { fetchRentalById }