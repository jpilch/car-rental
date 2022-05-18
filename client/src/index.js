import React from 'react';
import ReactDOM from 'react-dom';
// import {ContextProvider} from "./AppContext";
import {store} from "./store";
import {Provider} from "react-redux";

// Stylesheet imports
import './css/index.css';
import './css/util.css'

import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App/>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
