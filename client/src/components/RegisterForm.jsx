import Button from "./Button";
import '../css/Form.css'


const RegisterForm = () => {
	return (
		<div className="form-container">
			<form>
				<h1>Register</h1>
				<div>
					<label htmlFor="first-name">First Name</label>
					<input type="text" id="first-name"
					/>
				</div>
				<div>
					<label htmlFor="last-name">Last Name</label>
					<input type="text" id="last-name"
					/>
				</div>
				<div>
					<label htmlFor="username">Email</label>
					<input type="username" id="username"
					/>
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input type="password" id="password"
					/>
				</div>
				<div>
					<label htmlFor="password-confirm">Confirm Password</label>
					<input type="password" id="password-confirm" />
				</div>
				<Button text={"Submit"}/>
			</form>
		</div>

	)
}

export default RegisterForm