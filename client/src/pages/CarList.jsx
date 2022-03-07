import React from 'react'
import { useState, useEffect } from 'react'
import { Bars } from 'react-loading-icons'
import CarItem from '../components/CarItem'

function CarList() {
    const [models, setModels] = useState([])
    const [manufacturers, setManufacturers] = useState([])

    const fetchModels = async () => {
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}/models`, {
            crossDomain:true
        })
        const data = await response.json()
        setModels(data)
    }

    const fetchManufacturers = async () => {
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}/manufacturers`, {
            crossDomain:true
        })
        const data = await response.json()
        setManufacturers(data)
    }

    useEffect(() => {
        fetchModels()
        fetchManufacturers()
    }, [])

    return ( (models.length && manufacturers.length) ? 
        <main>
            <div className="header main-header">
                <div className="content">
                    <h1>Our Cars</h1>
                    <p>Choose from over 10 world className manufacturers. Make the most convenient choice by checking the avaiability of your car. Bill is too high? Try setting price bounds to be less hard on your wallet.</p>
                </div>
            </div>
            <div className="filters">
                <div className="content">
                    <button className="btn-filter">
                        Order <i className="fa-solid fa-angle-down"></i>
                    </button>
                    <button className="btn-filter">
                        Price <i className="fa-solid fa-angle-down"></i>
                    </button>
                    <button className="btn-filter">
                        Manufacturer <i className="fa-solid fa-angle-down"></i>
                    </button>
                    <button className="btn-filter">
                        Availability <i className="fa-solid fa-angle-down"></i>
                    </button>
                </div>
            </div>
            <div className="car-list">
                <div className="content" id="car-list-content">
                    {
                        models.map((model) => {
                            let {name, id, manufacturer_id} = model
                            const manufacturerName = manufacturers.find(m => m.id == manufacturer_id).name
                            return (
                                <CarItem key={id} {...model} manufacturerName={manufacturerName}/>
                            )
                        })
                    }
                </div>
            </div>
        </main> 
        : (
            <div>
                <h1>Loading</h1>
                {console.log('loading')}
            </div>
        )
    )
}

export default CarList