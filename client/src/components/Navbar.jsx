import React from "react";
import '../css/Navbar.css'
import useWindowDimensions from "../hooks/useWindowDimensions";
import {useState, useEffect} from "react";
import Icon from '@mdi/react'
import { mdiMenu, mdiClose } from '@mdi/js';
import DropDown from "./DropDown";
import Button from "./Button";
import {Link} from 'react-router-dom'
import useAuth from "../hooks/useAuth";

function Navbar() {
	const {width} = useWindowDimensions()
	const [displayLinks, setDisplayLinks] = useState(true)
	const [displayDropdown, setDisplayDropdown] = useState(false)

	const {user} = useAuth()

	useEffect(() => {
		width <= 900
			? setDisplayLinks(false)
			: setDisplayLinks(true)
	}, [width])

	return (
		<>
			<header>
					<div>
						<Link to={'/'}>
							<h1><span>Moto</span>Rent</h1>
						</Link>
					</div>
					<nav>
						<ul className={!displayLinks ? 'none' : ''}>
							<li>
								<Link to={'/cars'}><a className={'link'}>Cars</a></Link>
							</li>
							<li><a className={'link'}>About</a></li>
							<li><a className={'link'}>Contact</a></li>
							<Link to={user ? '/my-account' : '/login'}>
								<Button text={user ? 'My Account' : 'Login'} />
							</Link>
						</ul>
						<ul className={displayLinks ? 'none' : ''}>
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