import React from "react";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AppContext} from "../AppContext";
import '../css/Navbar.css'

function Navbar() {
	const {user} = useContext(AppContext)

	const navigate = useNavigate()

	return (
		<header>
				<div>
					<h1><a href="" onClick={() => navigate('/')}><span >Moto</span>Rent</a></h1>
				</div>
				<nav>
					<ul>
						<li><a className={'link'} onClick={() => navigate('/cars')}>Cars</a></li>
						<li><a className={'link'}>About</a></li>
						<li><a className={'link'}>Contact</a></li>
						<button
							id='account-button'
							onClick={() => navigate(user ? '/account' : 'login')}
						>
							{user ? 'My Account' : 'Login'}
						</button>
					</ul>
				</nav>
		</header>
	);
}

export default Navbar