import Button from "./Button";
import './AuthForm.css'

const LoginForm = (props) => {
	return (
		<form>
			<div>
				<label htmlFor="email">Email</label>
				<input type="email" id="email"/>
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<input type="password" id="password"/>
			</div>
			<Button text={'Login'}/>
		</form>
	)
}

export default LoginForm