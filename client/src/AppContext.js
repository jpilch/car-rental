import React from "react";
import {useState} from "react";
import axios from "axios";

export const AppContext = React.createContext(null)

export const ContextProvider = (props) => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleRegistration = (e) => {
		e.preventDefault()
		axios.post(
			`${process.env.REACT_APP_API_URL}/users`,
			{
				username: email,
				password: password
			}
		).then(result => {
			console.log(result)
		}).catch(err => console.log(err))
		setEmail('')
		setPassword('')
	}

	const handleLogin = (e) => {
		e.preventDefault()
		const data = new FormData()
		data.append('username', email)
		data.append('password', password)
		axios.post(
			`${process.env.REACT_APP_API_URL}/token`,
			data
		).then(result => console.log(result))
			.catch((err) => console.log(err))
	}

	return (
		<AppContext.Provider
			value={{
				email, setEmail,
				password, setPassword,
				handleRegistration, handleLogin
			}}>
			{props.children}
		</AppContext.Provider>
	)
}