import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Dashboard from "./components/pages/Dashboard";
import Register from "./components/Register";
import Login from "./components/Login";

import Navbar from "./components/layout/Navbar";
import Orders from "./components/pages/Orders";
import Home from "./components/pages/Home";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />

				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/dashboard" component={Dashboard} />
					<Route exact path="/orders" component={Orders} />

					<Route exact path="/signup" component={Register} />
					<Route exact path="/login" component={Login} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
