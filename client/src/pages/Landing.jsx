import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Landing.css'
import { chooseCity } from '../reducers/offerSlice'
import { useDispatch } from 'react-redux'
import rentalService from '../services/rentalService'

const Landing = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	useEffect(async () => {
		const response = await rentalService.countCities()
		console.log(response)
	})

	return (
		<main className={'landing'}>
			<div className={'heading'}>
				<p><span className={'number-highlight'}>400</span> Cars</p>
				<p><span className={'number-highlight'}>8</span> Manufacturers</p>
				<p><span className={'number-highlight'}>20</span> Cities</p>
			</div>
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