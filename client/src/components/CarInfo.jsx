import CarSpec from "./CarSpec";
import '../css/CarInfo.css'
import {mdiBagChecked, mdiBagSuitcase, mdiCarShiftPattern, mdiSeatPassenger, mdiSpeedometer} from "@mdi/js";
import React, {useEffect} from "react";
import Loading from "./Loading";

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
        </div>
    )
}

export default CarInfo