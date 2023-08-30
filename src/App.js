//import react
import React from "react";
import { HashRouter } from 'react-router-dom';

//import components
import AllRoutes from "./route/AllRoutes";

//import style sheet
import "./App.css";

function App() {
	return (
		<div className="App">
			<HashRouter>
				<AllRoutes />
			</HashRouter>
		</div>
	);
}

export default App;
