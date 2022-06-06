import CarSpec from "./CarSpec";
import '../css/CarInfo.css'
import {mdiBagChecked, mdiBagSuitcase, mdiCarShiftPattern, mdiSeatPassenger, mdiSpeedometer} from "@mdi/js";
import React, {useEffect} from "react";

const CarInfo = ({carModel}) => {
    const imgStyle = {
        maxWidth: '10rem',
        height: 'auto',
        borderRadius: '1rem'
    }

    return (
        <div className="car-info-container">
            <img style={imgStyle} src={carModel.img_url} alt=""/>
            <div className="car-info">
                <h3>{carModel.manufacturer} {carModel.name}</h3>
                <div className='underline'></div>
                <div className="car-specs">
                    <div className="car-spec-row">
                        <CarSpec
                            path={mdiCarShiftPattern}
                            specText={carModel.gearbox}
                            specValue={''}
                        />
                        <CarSpec
                            path={mdiSeatPassenger}
                            specText={'seats'}
                            specValue={carModel.person_capacity}
                        />
                    </div>
                    <div className="car-spec-row">
                        <CarSpec
                            path={mdiBagSuitcase}
                            specText={'large'}
                            specValue={carModel.baggage_large}
                        />
                        <CarSpec
                            path={mdiBagChecked}
                            specText={'small'}
                            specValue={carModel.baggage_small}
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
        </div>
    )
}

export default CarInfo