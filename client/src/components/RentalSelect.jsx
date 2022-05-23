import React, {useState} from "react";

const RentalSelect = ({carModel}) => {
    const [selected, setSelected] = useState()

    return (
        <select style={{fontSize: '0.7rem'}} id="start-loc">
            {carModel.cars && carModel.cars.map((car, index) => {
                return (
                    <option key={car.rental.id} value={`${index}`}>
                        {car.rental.city_en}
                    </option>
                )
            })}
        </select>
    )
}

export default RentalSelect