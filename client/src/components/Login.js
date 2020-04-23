import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { loginUser } from "../actions/authActions";
import PropTypes from "prop-types";

class Login extends Component {
	state = {
		email: "",
		password: "",
	};
	// Sync form inputs with state of component
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const { email, password } = this.state;
		const { loginUser, history } = this.props;
		// User inputs to form fields
		const userData = { email, password };

		loginUser(userData, history);
	};
	render() {
		return (
			<div className="row login">
				<div className="col-md-6 mx-auto">
					<div className="card">
						<div className="card-body">
							<h1 className="text-center pb-4 pt-3">
								<span className="text-primary">
									<i className="fa fa-lock fa-fw" aria-hidden="true"></i>
									Login
								</span>
							</h1>
							<form onSubmit={this.handleSubmit}>
								<div className="form-group">
									<label htmlFor="email">Email</label>
									<input
										type="email"
										className="form-control"
										name="email"
										required
										onChange={this.handleChange}
										value={this.state.email}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="password">Password</label>
									<input
										type="password"
										className="form-control"
										name="password"
										required
										onChange={this.handleChange}
										value={this.state.password}
									/>
								</div>
								<input
									type="submit"
									value="Login"
									className="btn btn-info btn-block"
								/>
							</form>
						</div>
					</div>
					<p className="signup">
						Don't have an account?{" "}
						<Link to="/signup">
							<span>Sign up!</span>
						</Link>
					</p>
				</div>
			</div>
		);
	}
}

Login.propTypes = {
	loginUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
