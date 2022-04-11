import Button from "./Button";
import './AuthForm.css'

const SignUpForm = (props) => {
	return (
		<form>
			<div>
				<label htmlFor="first-name">First Name</label>
				<input type="text" id="first-name"/>
			</div>
			<div>
				<label htmlFor="last-name">Last Name</label>
				<input type="text" id="last-name"/>
			</div>
			<div>
				<label htmlFor="email">Email</label>
				<input type="email" id="email"/>
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<input type="text" id="password"/>
			</div>
			<div>
				<label htmlFor="password-confirm">Confirm Password</label>
				<input type="text" id="password-confirm"/>
			</div>
			<Button text={"Register"}/>
		</form>
	)
}

export default SignUpForm