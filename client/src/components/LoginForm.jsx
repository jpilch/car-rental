import Button from "./Button";
import '../css/Form.css'
import {useDispatch} from "react-redux";
import {login} from "../reducers/authSlice";

const LoginForm = () => {

	const dispatch = useDispatch()

	const handleSubmit = e => {
		e.preventDefault()
		const email = e.target.email.value
		const password = e.target.password.value
		e.target.email.value = ''
		e.target.password.value = ''
		dispatch(login({email, password}))
	}

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