import React from 'react'
import { useState, useEffect } from 'react'


function CarList() {
    const [cars, setCars] = useState([])
    
    const fetchModels = async () => {
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}/models`, {
            crossDomain:true
        })
        const data = await response.json()
        console.log(data)
        setCars(data)
    }

    useEffect(() => {
        fetchModels()
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
                    
                </div>
            </div>
        </main>
    )
}

export default CarList