import '../css/CarListing.css'
import React, {useEffect, useRef, useState} from 'react'
import CarItem from "../components/CarItem";
import carService from "../services/carService";
import Pagination from "../components/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {setPageCount} from "../reducers/paginationSlice";
import Loading from "../components/Loading";
import Heading from "../components/Heading";

const CarListing = () => {
    const mainRef = useRef(null)
    const [carModels, setCarModels] = useState([])
    const {page} = useSelector(state => state.paginationReducer)
    const dispatch = useDispatch()

    useEffect(async () => {
        mainRef.current.scrollIntoView()
        const response = await carService
            .countCarModels()
        const pageCount = Math.ceil(
            response.data.count / process.env.REACT_APP_BASE_PAGE_LIMIT
        )
        dispatch(setPageCount(pageCount))
    }, [])

    useEffect(() => {
        setCarModels(null)
        setTimeout(async () => {
            const response = await carService
                .fetchCarModels(page)
            setCarModels(response.data)
        }, 200)
    }, [page])

    return (
        <main id="car-list" ref={mainRef}>
            <Heading
                size={1}
                text={'Our Car Offer'}
            />
            <div className="sort-by">
                <label htmlFor="sort">Sort by: </label>
                <select name="sort" id="sort">
                    <option value="price-desc">price descending</option>
                    <option value="price-asc">price ascending</option>
                    <option value="popularity">popularity</option>
                </select>
            </div>
            <section className='cars'>
                {!carModels && <Loading />}
                {
                    carModels && carModels.map(carModel => {
                        return (
                            <CarItem
                                key={carModel.id}
                                setResults={setCarModels}
                                carModel={carModel}
                            />
                        )
                    })
                }
            </section>
            <Pagination />
        </main>
    )
}

export default CarListing