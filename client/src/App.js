import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './pages/Landing';
import Navbar from './components/Navbar';
import CarList from './pages/CarList';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/cars' element={<CarList />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
