import React from "react";
import { Link, withRouter } from "react-router-dom";

const Navbar = () => {
	return (
		<React.Fragment>
			<nav className="main-nav navbar navbar-expand-sm navbar-dark fixed-top flex-md-nowrap p-0 shadow">
				<Link className="navbar-brand col-sm-3 col-md-2 mr-0" to="/">
					Herbal Pro
				</Link>

				<button
					className="navbar-toggler d-lg-none"
					type="button"
					data-toggle="collapse"
					data-target="#collapsibleNavId">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="collapsibleNavId">
					<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
						<li className="nav-item">
							<Link className="nav-link nav-menu" to="/dashboard">
								Dashboard
							</Link>
						</li>
					</ul>

					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link to="/login" className="nav-link nav-menu">
								Login
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/signup" className="nav-link nav-menu">
								Signup
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</React.Fragment>
	);
};

export default withRouter(Navbar);
