import React from "react";
import {useNavigate, useLocation} from "react-router-dom";
import Radium from 'radium'
import {AiTwotoneCar, AiOutlineCar} from 'react-icons/ai'

function Navbar() {
	const navigate = useNavigate()

	const accountButtonStyle = {
		padding: '5px 20px',
		borderRadius: '10px',
		border: '2px solid #fff',
		color: '#fff',
		fontSize: '1rem',
		fontWeight: 'bold',
		backgroundColor: 'rgba(0,0,0,0)',
		transitionProperty: 'background-color, color',
		transitionDuration: '0.25s',
		transitionTimingFunction: 'ease-out',
		':hover': {
			cursor: 'pointer',
			backgroundColor: 'rgba(255, 255, 255, 1)',
			color: '#000'
		}
	}

	return (
		<header id="navbar">
			<div className="content">
				<div className="logo company-name">
					<h1>
						<a href="" onClick={() => navigate('/')}>

							<span>
              <AiOutlineCar/>Moto
            </span>
							Rent
						</a>
					</h1>
				</div>
				<nav>
					<ul>
						<li>
							<a href="#" onClick={() => navigate('/cars')}>Cars</a>
						</li>
						<li>
							<a href="#">About</a>
						</li>
						<li>
							<a href="#">Contact</a>
						</li>
						<button style={accountButtonStyle}>Account</button>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Radium(Navbar)