import '../css/CarItem.css'
import React from 'react'
import CarSpec from "./CarSpec";
import CarOffer from "./CarOffer";
import {
    mdiCarShiftPattern,
    mdiSeatPassenger,
    mdiBagSuitcase,
    mdiBagChecked,
    mdiSpeedometer
} from '@mdi/js';
import { useNavigate } from "react-router-dom";

const CarItem = (props) => {
    const navigate = useNavigate()

    const seeOfferDetails = () => {
        navigate(`/cars/${props.car_id}`)
    }

    const imgStyle = {
        maxWidth: '10rem',
        height: 'auto',
        borderRadius: '1rem'
    }

    return (
        <div className='car-item'>
            <img style={imgStyle} src={props.img_url} alt=""/>
            <div className="car-info">
                <h2>{props.manufacturer} {props.name}</h2>
                <div className="car-specs">
                    <div className="car-spec-row">
                        <CarSpec
                            path={mdiCarShiftPattern}
                            specText={'Manual'}
                            specValue={''}
                        />
                        <CarSpec
                            path={mdiSeatPassenger}
                            specText={'seats'}
                            specValue={5}
                        />
                    </div>
                    <div className="car-spec-row">
                        <CarSpec
                            path={mdiBagSuitcase}
                            specText={'large'}
                            specValue={1}
                        />
                        <CarSpec
                            path={mdiBagChecked}
                            specText={'small'}
                            specValue={1}
                        />
                    </div>
                    <div className="car-spec-row">
                        <CarSpec
                            path={mdiSpeedometer}
                            specText={'no distance limit'}
                            specValue={''}
                        />
                    </div>
                </div>
            </div>
            <CarOffer
                seeOfferDetails={seeOfferDetails}
                priceThreeDays={200}
                detailsUrl={'/test'}
            />
        </div>
    )
}

export default CarItem