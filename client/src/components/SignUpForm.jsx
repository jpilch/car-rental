import Button from "./Button";
import './AuthForm.css'
import {AppContext} from "../AppContext";
import {useContext} from "react";

const SignUpForm = (props) => {
	const {email, setEmail, password, setPassword, handleRegistration} = useContext(AppContext)

	return (
		<form onSubmit={(e) => handleRegistration(e)}>
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
				<input type="email" id="email" value={email}
					   onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<input type="text" id="password" value={password}
					   onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="password-confirm">Confirm Password</label>
				<input type="text" id="password-confirm"/>
			</div>
			<Button text={"Register"} handler={handleRegistration}/>
		</form>
	)
}

export default SignUpForm