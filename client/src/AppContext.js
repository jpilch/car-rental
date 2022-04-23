import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";

export const AppContext = React.createContext(null)

export const ContextProvider = (props) => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [passwordConfirm, setPasswordConfirm] = useState('')
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [user, setUser] = useState(null)

	useEffect(async () => {
		const saveUserInfo = JSON.parse(window.localStorage.getItem(
			`${process.env.REACT_APP_LOGGED_IN_USER_VARIABLE_NAME}`
		))
		if (saveUserInfo) {
			try {
				// check if login token has expired
				const loginResponse = await axios.get(
					`${process.env.REACT_APP_API_URL}/users/me`,
					{
						headers: {
							Authorization: `Bearer ${saveUserInfo.accessToken}`
						}
					}
				)
				setUser(saveUserInfo)
			} catch (e) {
				console.log('Error during context auth', 'deleting saveUserInfo')
				console.log(e)
				setUser(null)
				window.localStorage.removeItem(
					`${process.env.REACT_APP_LOGGED_IN_USER_VARIABLE_NAME}`
				)
			}
		}
	}, [])

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

	const handleLogin = async (e) => {
		e.preventDefault()
		const data = new FormData()
		data.append('username', email)
		data.append('password', password)
		try {
			const loginResponse = await axios.post(
				`${process.env.REACT_APP_API_URL}/token`,
				data
			)
			const userResponse = await axios.get(
				`${process.env.REACT_APP_API_URL}/users/me`,
				{
					headers: {
						Authorization: `Bearer ${loginResponse.data.access_token}`
					}
				}
			)
			console.log(userResponse, userResponse.data)
			userResponse.data.accessToken = loginResponse.data.access_token
			window.localStorage.setItem(
				`${process.env.REACT_APP_LOGGED_IN_USER_VARIABLE_NAME}`,
				JSON.stringify(userResponse.data)
			)
			setUser(userResponse.data)
		} catch (e) {
			console.log(e)
			console.log('Error during Login')
		}
	}

	const handleLogout = () => {
		window.localStorage.removeItem(
			`${process.env.REACT_APP_LOGGED_IN_USER_VARIABLE_NAME}`
		)
		setUser(null)
	}

	return (
		<AppContext.Provider
			value={{
				email, setEmail,
				password, setPassword,
				firstName, setFirstName,
				lastName, setLastName,
				passwordConfirm, setPasswordConfirm,
				user,
				handleRegistration, handleLogin, handleLogout
			}}>
			{props.children}
		</AppContext.Provider>
	)
}