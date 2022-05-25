import '../css/AgreementItem.css'
import carService from "../services/carService";
import rentalService from "../services/rentalService";
import SimpleButton from "./SimpleButton";
import {useEffect, useState} from "react";
import Loading from "./Loading";

const AgreementItem = ({ agreement }) => {
    const [car, setCar] = useState(null)
    const [carModel, setCarModel] = useState(null)
    const [rental, setRental] = useState(null)
    const status = agreement.active
        ? 'ACTIVE'
        : (agreement.planned ? 'PLANNED' : 'ARCHIVED')

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

    if (!agreement) {
        return <Loading />
    }

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
            <div className="agreement-status-actions">
                <div className="status">
                    <p className='status'>Status:</p>
                    <p className='status-value'>{status}</p>
                </div>
                <div className="action" style={{
                    display: agreement.archived ? 'none' : ''
                }}>
                    <SimpleButton
                        text={ agreement.active
                            ? 'Contact'
                            : 'Resign'}
                        bgColor={ agreement.active
                            ? 'var(--clr-green)'
                            : 'var(--clr-red)'}
                    />
                </div>
            </div>
        </div>
    )
}

export default AgreementItem