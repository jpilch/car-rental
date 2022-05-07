import LoginForm from "../components/LoginForm";
import '../css/Login.css'
import {Link} from 'react-router-dom'

const Login = () => {
	return (
		<main id={'login'}>
			<LoginForm />
			<p>First time here?
				<span><Link to={'/register'}> Register</Link></span>
			</p>
		</main>
	)
}

export default Login