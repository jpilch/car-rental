import '../css/CarListing.css'
import React, {useEffect, useState} from 'react'
import CarItem from "../components/CarItem";
import axios from "axios";
import Modal from "../components/Modal";

const CarListing = () => {
    const [carModels, setCarModels] = useState([])
    useEffect(async () => {
        const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/car-models`
        )
        setCarModels(response.data)
    }, [])

    return (
        <main id="car-list">
            <h1>Check out our offer</h1>
            <div className="sort-by">
                <label htmlFor="sort">Sort by: </label>
                <select name="sort" id="sort">
                    <option value="price-desc">price descending</option>
                    <option value="price-asc">price ascending</option>
                    <option value="popularity">popularity</option>
                </select>
            </div>
            <section className='cars'>
                <aside className='filters'>
                    <p>filters</p>
                </aside>
                <div>
                    {
                        carModels.map(carModel => {
                            return (
                                <CarItem
                                    key={carModel.id}
                                    carModel={carModel}
                                />
                            )
                        })
                    }
                </div>
            </section>
        </main>
    )
}

export default CarListing