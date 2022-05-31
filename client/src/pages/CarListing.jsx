import '../css/CarListing.css'
import React, {useEffect, useRef, useState} from 'react'
import CarItem from "../components/CarItem";
import carService from "../services/carService";
import Pagination from "../components/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {setPageCount} from "../reducers/paginationSlice";
import Loading from "../components/Loading";
import Heading from "../components/Heading";
import Select from "../components/Select";
import {useSearchParams} from "react-router-dom";

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
    }, [])

    useEffect(() => {
        setCarModels(null)
        setTimeout(async () => {
            const response = await carService
                .fetchCarModels(page, sortOptions, city)
            setCarModels(response.data)
        }, 200)
    }, [page, sortOptions])

    return (
        <main id="car-list" ref={mainRef}>
            <Heading
                underline={true}
                size={1}
                text={'Check out our cars'}
            />
            <div className="sort-by">
                <Select>
                    <p>Default sorting</p>
                    <p>Price descending</p>
                    <p>Price ascending</p>
                </Select>
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