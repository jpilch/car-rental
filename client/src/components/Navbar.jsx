import React from "react";
import {useNavigate, useLocation} from "react-router-dom";
import {AiTwotoneCar, AiOutlineCar} from 'react-icons/ai'

export default function Navbar() {
	const navigate = useNavigate()

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
					</ul>
				</nav>
			</div>
		</header>
	);
}
