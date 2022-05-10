import React from 'react'
import {FaBurn} from 'react-icons/fa'
import {GiCarWheel} from 'react-icons/gi'
import {MdFamilyRestroom, MdLuggage} from 'react-icons/md'
import {IoMdResize} from 'react-icons/io'
import {AiFillStar} from 'react-icons/ai'
import {FaMoneyBillWaveAlt} from 'react-icons/fa'
import {GiCarDoor} from 'react-icons/gi'

function CarItem({id, name, manufacturerName, img_url, drive_cat, person_capacity, trunk_capacity, height, length, width, avg_fuel_consumption}) {

    const carImgStyle = {
        background: `url(${img_url}) center center/contain no-repeat`
    }

    return (
    <div className='car-item'>
        <div className="content">
            <div className="car-info">
                <h2 className="model-name">{manufacturerName} {name}</h2>
                <div className="specs">
                    <div className="row">
                        <div className="spec-item">
                            <div className="icon">
                                <GiCarWheel />
                            </div>
                            <p>
                                {drive_cat}
                            </p>
                        </div>
                        <div className="spec-item">
                            <div className="icon">
                                <MdFamilyRestroom />
                            </div>
                            <p>
                                {person_capacity}
                            </p>
                        </div>
                        <div className="spec-item">
                            <div className="icon">
                                <MdLuggage />
                            </div>
                            <p>
                                {trunk_capacity}L
                            </p>
                        </div>
                        <div className="spec-item">
                            <div className="icon">
                                <FaBurn />
                            </div>
                            <p>
                                {avg_fuel_consumption}L/100km
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="spec-item">
                            <div className="icon">
                                <IoMdResize />
                            </div>
                            <p>
                                {width} x {length} x {height}
                            </p>
                        </div>
                        <div className="spec-item">
                            <div className="icon">
                                <GiCarDoor />
                            </div>
                            <p>
                                5
                            </p>
                        </div>
                        <div className="spec-item">
                            <div className="icon">
                                <AiFillStar />
                            </div>
                            <p>
                                4.5/5
                            </p>
                        </div>
                        <div className="spec-item">
                            <div className="icon">
                                <FaMoneyBillWaveAlt />
                            </div>
                            <p>
                                See pricing
                            </p>
                        </div>
                    </div>
                </div>
                <div className="actions">
                    read more / rent now
                </div>
            </div>
            <div className="car-img" style={carImgStyle}>
                {/*<img src={img_url} alt="model picture here" />*/}
            </div>
        </div>
    </div>
  )
}

export default CarItem