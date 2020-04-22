import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Dashboard from "./components/pages/Dashboard";
import Register from "./components/Register";
import Login from "./components/Login";
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch>
					<Sidebar />
					<Route exact path="/" component={Dashboard} />

					<Route exact path="/signup" component={Register} />
					<Route exact path="/login" component={Login} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
