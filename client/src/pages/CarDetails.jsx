import '../css/CarDetails.css'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";

const CarDetails = () => {
    const {chosenCarId} = useSelector(state => state.carReducer)
    const carIdRef = useRef()

    useEffect(() => {
        carIdRef.current = chosenCarId
    }, [chosenCarId])

    console.log(chosenCarId)
    console.log(carIdRef)

    return (
        <main id="car-details">
            <h1>{chosenCarId}</h1>
        </main>
    )
}

export default CarDetails