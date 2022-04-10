const Register = (props) => {
	return (
		<div className="register">
			<div className="content">
				<h1>Sign-up</h1>
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
					<button className="btn">
						<a href="">Register</a>
					</button>
				</form>
				<p>Already have an account? <span>Log in</span></p>
			</div>
		</div>
	)
}

export default Register