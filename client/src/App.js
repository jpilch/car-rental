import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './pages/Landing';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from "./pages/Login";
// import CarList from './pages/CarList';
import Register from "./pages/Register";
// import UserAccount from "./pages/UserAccount";



function App() {
	return (
		<>
			<Router>
				<Navbar/>
				<Routes>
					<Route path='/' element={<Landing/>}/>
					<Route path='/login' element={<Login/>}/>
					<Route path='/register' element={<Register />}/>
				</Routes>
				<Footer/>
				< /Router>
		</>
	);
}

export default App;
