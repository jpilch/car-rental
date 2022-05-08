import RegisterForm from "../components/RegisterForm";
import {Link} from "react-router-dom";
import '../css/Register.css'

const Register = () => {
	return (
		<main id="register">
				<RegisterForm />
				<p>Have an account?
					<span><Link to={'/login'}> Login</Link></span>
				</p>
		</main>
	)
}

export default Register