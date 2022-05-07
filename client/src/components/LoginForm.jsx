import Button from "./Button";
import '../css/Form.css'

const LoginForm = () => {

	return (
		<div className="form-container">
			<form>
				<h1>Login Form</h1>
				<div>
					<label htmlFor="email">
						Email
					</label>
					<input type="email" id="email"
					/>
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input type="password" id="password"
					/>
				</div>
				<Button text={'Submit'} />
			</form>
		</div>
	)
}

export default LoginForm