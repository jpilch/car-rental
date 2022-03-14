import React from 'react'
import {FaBurn} from 'react-icons/fa'
import {GiCarWheel} from 'react-icons/gi'
import {MdFamilyRestroom, MdLuggage} from 'react-icons/md'
import {IoMdResize} from 'react-icons/io'
import {AiFillStar} from 'react-icons/ai'
import {FaMoneyBillWaveAlt} from 'react-icons/fa'
function CarItem({id, name, manufacturerName, img_url, drive_cat, person_capacity, trunk_capacity, height, length, width, avg_fuel_consumption}) {
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
                             {drive_cat}
                        </div>
                        <div className="spec-item">
                            <div className="icon">
                                <MdFamilyRestroom />
                            </div>
                             {person_capacity}
                        </div>
                        <div className="spec-item">
                            <div className="icon">
                                <MdLuggage />
                            </div>
                            {trunk_capacity}L
                        </div>
                        <div className="spec-item">
                            <div className="icon">
                                <FaBurn />
                            </div>
                             {avg_fuel_consumption}L/100km
                        </div>
                    </div>
                    <div className="row">
                        <div className="spec-item">
                            <div className="icon">
                                <IoMdResize />
                            </div> {width}(W) x {length}(L) x {height}(H)
                        </div>
                        <div className="spec-item">
                            <div className="icon">
                                <AiFillStar />
                            </div>
                             4.5/5
                        </div>
                        <div className="spec-item">
                            <div className="icon">
                                <FaMoneyBillWaveAlt />
                            </div>
                            See pricing
                        </div>
                    </div>
                </div>
                <div className="actions">
                    read more / rent now
                </div>
            </div>
            <div className="car-img">
                <img src={img_url} alt="model picture here" />
            </div>
        </div>
    </div>
  )
}

export default CarItem