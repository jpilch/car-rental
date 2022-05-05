import React from "react";
import '../css/Navbar.css'
import useWindowDimensions from "../hooks";
import {useState, useEffect} from "react";
import Icon from '@mdi/react'
import { mdiMenu, mdiClose } from '@mdi/js';

import DropDown from "./DropDown";

function Navbar() {
	const {width} = useWindowDimensions()
	const [displayLinks, setDisplayLinks] = useState(true)
	const [displayDropdown, setDisplayDropdown] = useState(false)


	useEffect(() => {
		width <= 400
			? setDisplayLinks(false)
			: setDisplayLinks(true)
	}, [width])

	return (
		<>
			<header>
					<div>
						<h1><span>Moto</span>Rent</h1>
					</div>
					<nav>
						<ul className={!displayLinks && 'none'}>
							<li><a className={'link'}>Cars</a></li>
							<li><a className={'link'}>About</a></li>
							<li><a className={'link'}>Contact</a></li>
							<button
								id='account-button'
							>
							 Login
							</button>
						</ul>
						<ul className={displayLinks && 'none'}>
							<li onClick={() => setDisplayDropdown(!displayDropdown)}>
								{
									!displayDropdown
										? <Icon path={mdiMenu} size={1.5}/>
										: <Icon path={mdiClose} size={1.5}/>
								}
							</li>
						</ul>
					</nav>
			</header>
			{displayDropdown && <DropDown />}
		</>
	);
}

export default Navbar