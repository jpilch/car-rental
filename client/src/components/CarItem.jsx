import '../css/CarItem.css'
import React from 'react'
import CarSpec from "./CarSpec";
import {
    mdiCarShiftPattern,
    mdiSeatPassenger,
    mdiBagSuitcase,
    mdiBagChecked,
    mdiCarSpeedLimiter,
    mdiSpeedometer
} from '@mdi/js';

const CarItem = (props) => {
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
                            specText={' no distance limit'}
                            specValue={''}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CarItem