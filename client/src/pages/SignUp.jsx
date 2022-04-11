import SignUpForm from "../components/SignUpForm";

const Register = (props) => {
	return (
		<div className="register">
			<div className="content">
				<h1>Sign-up</h1>
				<SignUpForm/>
				<p>Already have an account? <span>Log in</span></p>
			</div>
		</div>
	)
}

export default Register