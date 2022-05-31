import Button from "./Button";
import '../css/Form.css'
import {register} from "../reducers/authSlice";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {notify} from "../reducers/notificationSlice";

const RegisterForm = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleSubmit = (e) => {
		e.preventDefault()
		const data = {
			fullName: e.target.firstName.value
				+ ' ' + e.target.lastName.value,
			username: e.target.username.value,
			password: e.target.password.value,
			passwordConfirm: e.target.passwordConfirm.value
		}
		if (data.password === '' || data.password !== data.passwordConfirm) {
			return dispatch(notify('Passwords are empty or do not match', false))
		} else if (data.username === '') {
			return dispatch('Username cannot be empty')
		}
		e.target.lastName.value = ''
		e.target.firstName.value = ''
		e.target.username.value = ''
		e.target.password.value = ''
		e.target.passwordConfirm.value = ''
		dispatch(
			register(data.fullName, data.username, data.password, navigate)
		)
	}

	return (
		<div className="form-container">
			<form onSubmit={(e) => handleSubmit(e)}>
				<h1>Register</h1>
				<div>
					<label htmlFor="first-name">First Name</label>
					<input type="text" id="first-name" name={'firstName'}
					/>
				</div>
				<div>
					<label htmlFor="last-name">Last Name</label>
					<input type="text" id="last-name" name={'lastName'}
					/>
				</div>
				<div>
					<label htmlFor="username">Username</label>
					<input type="username" id="username" name={'username'}
					/>
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input type="password" id="password" name={'password'}
					/>
				</div>
				<div>
					<label htmlFor="password-confirm">Confirm Password</label>
					<input type="password" id="password-confirm" name={'passwordConfirm'}
					/>
				</div>
				<Button text={"Submit"}/>
			</form>
		</div>

	)
}

export default RegisterForm