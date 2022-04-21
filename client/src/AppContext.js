import React from "react";
import {useState} from "react";
import axios from "axios";

export const AppContext = React.createContext(null)

export const ContextProvider = (props) => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [passwordConfirm, setPasswordConfirm] = useState('')
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')

	const handleRegistration = async (e) => {
		e.preventDefault()
		const data = {
			full_name: `${firstName} ${lastName}`,
			email: email,
			password: password
		}
		try {
			const response = await axios.post(`${process.env.REACT_APP_API_URL}/users`, data)
			console.log(response)
			console.log(response.detail)
			console.log(response.data)
		} catch (err) {
			console.log('err')
			console.log(err)
		}
		setEmail('')
		setPassword('')
		setPasswordConfirm('')
		setFirstName('')
		setLastName('')
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
				firstName, setFirstName,
				lastName, setLastName,
				passwordConfirm, setPasswordConfirm,
				handleRegistration, handleLogin
			}}>
			{props.children}
		</AppContext.Provider>
	)
}