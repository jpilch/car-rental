import React from 'react';
import ReactDOM from 'react-dom';

// Stylesheet imports
import './index.css';
import './util.css'
import './pages/CarList.css'
import './components/CarItem.css';
import './components/Navbar.css'
import './pages/Landing.css'
import './components/Footer.css'
import './pages/Register.css'
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<App/>
	</React.StrictMode>,
	document.getElementById('root')
);
