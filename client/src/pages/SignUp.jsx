import SignUpForm from "../components/SignUpForm";

const SignUp = (props) => {
	return (
		<div className="container">
			<div className="content">
				<h1>Sign-up</h1>
				<SignUpForm/>
				<p>Already have an account? <span>Log in</span></p>
			</div>
		</div>
	)
}

export default SignUp