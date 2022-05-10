import React from 'react'
import '../css/Landing.css'
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setUser, setToken, checkValidityOf} from "../reducers/authSlice";

export default function Landing() {
	const {tokenValid} = useSelector(state => state.authReducer)
	const dispatch = useDispatch()

	useEffect(() => {
		const {token, user} = JSON.parse(
			window.localStorage.getItem(
				`${process.env.REACT_APP_LOGGED_IN_USER}`
			)
		)
		if (token !== null) {
			dispatch(checkValidityOf(token))
		}
		if (tokenValid) {
			dispatch(setUser(user))
			dispatch(setToken(token))
		}
	}, [tokenValid])

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
