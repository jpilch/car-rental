import React from 'react'
import { useState, useEffect } from 'react'


function CarList() {
    const [models, setModels] = useState([])
    const [manufacturers, setManufacturers] = useState([])
    
    const fetchData = async () => {
        let response = await fetch(
            `${process.env.REACT_APP_API_URL}/models`, {
            crossDomain:true
        })
        let data = await response.json()
        setModels(data)
        console.log(data)
        response = await fetch(
            `${process.env.REACT_APP_API_URL}/manufacturers`
        )
        data = await response.json()
        setManufacturers(data)
        console.log(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
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
                            const {name, id, manufacturer_id} = model
                            const manufacturerName = manufacturers.find(m => m.id === manufacturer_id).name
                            return (
                                <div key={id} className='car-item'>
                                    <div className="content">
                                        <h1>{manufacturerName} {name}</h1>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </main>
    )
}

export default CarList