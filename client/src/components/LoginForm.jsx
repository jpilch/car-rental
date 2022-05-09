import Button from "./Button";
import '../css/Form.css'
import {useDispatch, useSelector} from "react-redux";
import {login} from "../reducers/authSlice";
import {useEffect} from "react";
import {useNavigate} from 'react-router-dom'

const LoginForm = () => {

	const dispatch = useDispatch()
	const {user, token} = useSelector(state => state.authReducer)
	const navigate = useNavigate()

	const handleSubmit = async e => {
		e.preventDefault()
		const email = e.target.email.value
		const password = e.target.password.value
		e.target.email.value = ''
		e.target.password.value = ''
		dispatch(login(email, password))
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
					<label htmlFor="email">
						Email
					</label>
					<input
						type="email"
						id="email"
						name={'email'}
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