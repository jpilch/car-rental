import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './pages/Landing';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CarList from './pages/CarList';
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/cars' element={<CarList />}/>
          <Route path='/sign-up' element={<SignUp />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
