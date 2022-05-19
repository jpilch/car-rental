import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './pages/Landing';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Notification from "./components/Notification";
import UserAccount from "./pages/UserAccount";
import CarListing from "./pages/CarListing";
import CarDetails from "./pages/CarDetails";

function App() {
	return (
		<>
			<Router>
				<Navbar/>
				<Notification />
				<Routes>
					<Route path='/' element={<Landing/>}/>
					<Route path='/login' element={<Login/>}/>
					<Route path='/register' element={<Register />}/>
					<Route path='/my-account' element={<UserAccount />}/>
					<Route path='/cars' element={<CarListing />}/>
					<Route path='/car-details' element={<CarDetails />}/>
				</Routes>
				<Footer/>
				< /Router>
		</>
	);
}

export default App;
