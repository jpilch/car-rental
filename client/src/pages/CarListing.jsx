import '../css/CarListing.css'
import React, {useEffect, useState} from 'react'
import CarItem from "../components/CarItem";
import carService from "../services/carService";
import Pagination from "../components/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {setPageCount} from "../reducers/paginationSlice";

const CarListing = () => {
    const [carModels, setCarModels] = useState([])
    const {page} = useSelector(state => state.paginationReducer)
    const dispatch = useDispatch()

    useEffect(async () => {
        const response = await carService
            .countCarModels()
        const pageCount = Math.ceil(
            response.data.count / process.env.REACT_APP_BASE_PAGE_LIMIT
        )
        dispatch(setPageCount(pageCount))
    }, [])

    useEffect(async () => {
        const response = await carService
            .fetchCarModels(page)
        setCarModels(response.data)
    }, [page])

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
            <Pagination />
        </main>
    )
}

export default CarListing