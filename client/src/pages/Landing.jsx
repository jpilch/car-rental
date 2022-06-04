import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Landing.css'
import { chooseCity } from '../reducers/offerSlice'
import { useDispatch } from 'react-redux'
import rentalService from '../services/rentalService'
import carService from '../services/carService'

const Landing = () => {
	const [fetchingSummary, setFetchingSummary] = useState(true)
	const [cityCount, setCityCount] = useState(0)
	const [carCount, setCarCount] = useState(0)
	const [manufacturerCount, setManufacturerCount] = useState(0)
	const navigate = useNavigate()

	useEffect(async () => {
		const response = [
			await rentalService.countCities(),
			await carService.countCars(),
			await carService.countManufacturers()
		]
		setCityCount(response[0])
		setCarCount(response[1])
		setManufacturerCount(response[2])
		setFetchingSummary(false)
	})

	return (
		<main className={'landing'}>
			{!fetchingSummary && <div className={'heading'}>
				<p><span className={'number-highlight'}>{carCount}</span> Cars</p>
				<p><span className={'number-highlight'}>{manufacturerCount}</span> Manufacturers</p>
				<p><span className={'number-highlight'}>{cityCount}</span> Cities</p>
			</div>}
			<div className={'item'}>
				<div className='search-wrapper'>
					<form onSubmit={(e) => {
						e.preventDefault()
						const city = e.target.search.value
						if (!city.replace(/\W/g, '').length) {
							navigate(`/cars`)
						}
						navigate(`cars?city=${city}`)
					}}>
						<input type="text" name="search" id="search" placeholder={'Search for your City'}/>
					</form>
				</div>
				<div className="service-info">
					<p>Make the best choice with Us! <span>Read More</span></p>
				</div>
			</div>
		</main>
	)
}

export default Landing