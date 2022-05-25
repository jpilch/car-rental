import '../css/AgreementItem.css'
import carService from "../services/carService";
import rentalService from "../services/rentalService";
import SimpleButton from "./SimpleButton";
import {useEffect, useState} from "react";

const AgreementItem = ({ agreement }) => {
    const [car, setCar] = useState(null)
    const [carModel, setCarModel] = useState(null)
    const [rental, setRental] = useState(null)

    useEffect(async () => {
        const carApiResponse = await carService
            .fetchCarById(agreement.car_id)
        setCar(carApiResponse.data)
        const carModelApiResponse = await carService
            .fetchCarModelById(carApiResponse.data.car_model)
        setCarModel(carModelApiResponse.data)
        const rentalApiResponse = await rentalService
            .fetchRentalById(agreement.rental_id)
        setRental(rentalApiResponse.data)
    }, [])

    return (
        <div className="agreement">
            <div className="agreement-summary">
                <div className="labels">
                    <p className='label'>Car:</p>
                    <p className='label'>From:</p>
                    <p className='label'>Until:</p>
                    <p className='label'>Rental:</p>
                    <p className='label'>Price:</p>
                </div>
                <div className="values">
                    <p className='car'>{carModel && carModel.manufacturer + ' ' + carModel.name}</p>
                    <p className='from'>{agreement.starts_on.slice(0, 10)} {(agreement.starts_on.slice(11, 16))}</p>
                    <p className='until'>{agreement.ends_on.slice(0, 10)} {(agreement.ends_on.slice(11, 16))}</p>
                    <p className='rental'>{rental && (rental.city_en + ' (' + rental.address + ')')}</p>
                    <p className='price'>{agreement.price}$</p>
                </div>
            </div>
            <div className="agreement-actions">

            </div>
        </div>
    )
}

export default AgreementItem