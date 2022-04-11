import LoginForm from "../components/LoginForm";

const Login = (props) => {
	return (
		<div className="container">
			<div className="content">
				<h1>Login</h1>
				<LoginForm/>
				<p>First time here? <span>Sign up</span></p>
			</div>
		</div>
	)
}

export default Login