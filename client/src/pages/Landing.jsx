import React from 'react'
import '../css/Landing.css'
import useWindowDimensions from "../hooks";

export default function Landing() {

	return (
			<main className={'landing'}>
				<div className={'heading'}>
					<p><span className={'number-highlight'}>400</span> Cars</p>
					<p><span className={'number-highlight'}>8</span> Manufacturers</p>
					<p><span className={'number-highlight'}>20</span> Cities</p>
				</div>
				<div className={'item'}>
					<div className='search-wrapper'>
						<form>
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
