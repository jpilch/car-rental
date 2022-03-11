import React from 'react'
import {FaBurn} from 'react-icons/fa'
import {GiCarWheel} from 'react-icons/gi'
import {MdFamilyRestroom, MdLuggage} from 'react-icons/md'
import {IoMdResize} from 'react-icons/io'
import {AiFillStar} from 'react-icons/ai'

function CarItem({id, name, manufacturerName, img_url, drive_cat, person_capacity, trunk_capacity, height, length, width, avg_fuel_consumption}) {
  return (
    <div className='car-item'>
        <div className="content">
            <div className="car-info">
                <h2 className="model-name">{manufacturerName} {name}</h2>
                <div className="specs">
                    <div className="row">
                        <GiCarWheel /> {drive_cat}
                        <MdFamilyRestroom /> {person_capacity}
                        <MdLuggage /> {trunk_capacity}L
                        <FaBurn /> {avg_fuel_consumption}L/100km
                    </div>
                    <div className="row">
                        <IoMdResize /> {width}(W) x {length}(L) x {height}(H)
                        <AiFillStar /> 4.5/5
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