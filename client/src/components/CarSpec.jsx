import '../css/CarSpec.css'
import Icon from "@mdi/react";
import React from "react";

const CarSpec = ({ path, specValue, specText }) => {
    return (
        <div className="car-spec">
            <Icon
                path={path}
                color={'var(--clr-dark)'}
                size={0.8}
            />
            <p>{specValue} {specText}</p>
        </div>
    )
}

export default CarSpec