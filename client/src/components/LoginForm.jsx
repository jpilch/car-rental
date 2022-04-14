import Button from "./Button";
import './AuthForm.css'
import {useContext} from "react";
import {AppContext} from "../AppContext";

const LoginForm = (props) => {
	const context = useContext(AppContext)

	return (
		<form onSubmit={(e) => context.handleLogin(e)}>
			<div>
				<label htmlFor="email">
					Email
				</label>
				<input type="email" id="email"
					   onChange={(e) => context.setEmail(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<input type="password" id="password"
					   onChange={(e) => context.setPassword(e.target.value)}
				/>
			</div>
			<Button text={'Login'}/>
		</form>
	)
}

export default LoginForm