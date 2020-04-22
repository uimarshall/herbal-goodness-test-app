import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/" component={Dashboard} />
					<Route exact path="/signup" component={Register} />
					<Route exact path="/login" component={Login} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
