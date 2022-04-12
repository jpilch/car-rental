import React from 'react';
import ReactDOM from 'react-dom';
import {ContextProvider} from "./AppContext";

// Stylesheet imports
import './index.css';
import './util.css'
import './pages/CarList.css'
import './components/CarItem.css';
import './components/Navbar.css'
import './pages/Landing.css'
import './components/Footer.css'
import './components/Button.css'

import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<ContextProvider>
			<App/>
		</ContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
