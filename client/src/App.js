import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './pages/Landing';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CarList from './pages/CarList';
import Register from "./pages/Register";

function App() {
	return (
		<>
			<Router>
				<Navbar/>
				<Routes>
					<Route path='/' element={<Landing/>}/>
					<Route path='/cars' element={<CarList/>}/>
					<Route path='/sign-up' element={<Register/>}/>
				</Routes>
				<Footer/>
			</Router>
		</>
	);
}

export default App;
