import React from "react";
import {useState} from "react";

export const AppContext = React.createContext(null)

export const ContextProvider = (props) => {
	const [test, setTest] = useState('test')
	return (
		<AppContext.Provider
			value={{test, setTest}}
		>
			{props.children}
		</AppContext.Provider>
	)
}