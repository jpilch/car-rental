import React from 'react';
import ReactDOM from 'react-dom';
import {ContextProvider} from "./AppContext";
import {BrowserRouter as Router} from "react-router-dom";

// Stylesheet imports
import './css/index.css';
import './css/util.css'
import './pages/CarList.css'
import './components/CarItem.css';
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
