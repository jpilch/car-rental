import '../css/CarListing.css'
import React, {useEffect, useRef, useState} from 'react'
import CarItem from "../components/CarItem";
import carService from "../services/carService";
import Pagination from "../components/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {setPageCount} from "../reducers/paginationSlice";
import Loading from "../components/Loading";
import Heading from "../components/Heading";
import {useSearchParams} from "react-router-dom";
import ListOptions from '../components/ListOptions';

const CarListing = () => {
    const mainRef = useRef(null)
    const [carModels, setCarModels] = useState(null)
    const {page} = useSelector(state => state.paginationReducer)
    const sortOptions = useSelector(state => state.sortReducer)
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams()
    const city = searchParams.get('city')

    useEffect(async () => {
        mainRef.current.scrollIntoView()
        const response = await carService
            .countCarModels(city)
        const pageCount = Math.ceil(
            response.data.count / process.env.REACT_APP_BASE_PAGE_LIMIT
        )
        dispatch(setPageCount(pageCount))
    }, [searchParams])

    useEffect(() => {
        setCarModels(null)
        setTimeout(async () => {
            const response = await carService
                .fetchCarModels(page, sortOptions, city)
            setCarModels(response.data)
        }, 200)
    }, [page, sortOptions, searchParams])

    return (
        <main id="car-list" ref={mainRef}>
            <Heading
                underline={true}
                size={1}
                text={'Check out our cars'}
            />
            <ListOptions 
                city={city}
                setSearchParams={setSearchParams}
            />
            <section className='cars'>
                {!carModels && <Loading />}
                {carModels && (!carModels.length && (
                    <div className='empty-query'>
                        <p>No cars matching the query</p>
                    </div>
                ))}
                {
                    carModels && carModels.map(carModel => {
                        return (
                            <CarItem
                                key={carModel.id}
                                setResults={setCarModels}
                                carModel={carModel}
                                city={city}
                            />
                        )
                    })
                }
            </section>
            {carModels && (carModels.length && <Pagination />)}
        </main>
    )
}

export default CarListing