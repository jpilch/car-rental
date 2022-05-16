import Button from "./Button";
import '../css/Form.css'
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import {login} from "../reducers/authSlice";

const LoginForm = () => {

	const dispatch = useDispatch()
	const {user, token} = useAuth()
	const navigate = useNavigate()

	const handleSubmit = async e => {
		e.preventDefault()
		const username = e.target.username.value
		const password = e.target.password.value
		e.target.username.value = ''
		e.target.password.value = ''
		dispatch(login(username, password))
		navigate('/')
	}

	useEffect(() => {
		if (user && token) {
			navigate('/')
		}
	}, [user, token])

	return (
		<div className="form-container">
			<form onSubmit={e => handleSubmit(e)}>
				<h1>Login Form</h1>
				<div>
					<label htmlFor="username">
						Username
					</label>
					<input
						type="text"
						id="username"
						name={'username'}
					/>
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						name={'password'}
					/>
				</div>
				<Button text={'Submit'} />
			</form>
		</div>
	)
}

export default LoginForm