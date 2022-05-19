import '../css/CarDetails.css'
import {useParams} from "react-router-dom";

const CarDetails = () => {
    const { id } = useParams()

    return (
        <main id="car-details">
            <h1>{id}</h1>
        </main>
    )
}

export default CarDetails