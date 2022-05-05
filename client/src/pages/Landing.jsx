import React from 'react'
import '../css/Landing.css'

export default function Landing() {
	return (
			<main className={'landing'}>
				<h1>We offer <span className={'number-highlight'}>400</span> cars from <span className={'number-highlight'}>8</span> manufacturers, in <span className={'number-highlight'}>20</span> different Cities!</h1>
				<div className={'search-wrapper'}>
					<form>
						<input type="text" name="search" id="search" placeholder={'Search for your City'}/>
					</form>
				</div>
				<div className="service-info">
					<p>Make the best choice with Us! <span>Read More</span></p>
				</div>
			</main>
	)
}
