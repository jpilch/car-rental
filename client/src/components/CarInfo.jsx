import CarSpec from "./CarSpec";
import '../css/CarInfo.css'
import {mdiBagChecked, mdiBagSuitcase, mdiCarShiftPattern, mdiSeatPassenger, mdiSpeedometer} from "@mdi/js";
import React from "react";

const CarInfo = ({carModel}) => {
    return (
        <div className="car-info">
            <h2>{carModel.manufacturer} {carModel.name}</h2>
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
    )
}

export default CarInfo