import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import { registerUser } from "../actions/authActions";

class Register extends Component {
	state = { name: "", email: "", password: "" };
	componentWillMount() {}
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

		const { registerUser, history } = this.props;
		const { name, email, password } = this.state;

		// Register User

		const newUser = { name, email, password };
		registerUser(newUser, history);
	};
	render() {
		return (
			<div className="row">
				<div className="col-md-6 mx-auto">
					<div className="card">
						<div className="card-body">
							<h1 className="text-center pb-4 pt-3">
								<span className="text-primary">
									<i className="fa fa-lock fa-fw" aria-hidden="true"></i>
									Register
								</span>
							</h1>
							<form onSubmit={this.handleSubmit}>
								<div className="form-group">
									<label htmlFor="email">Name</label>
									<input
										type="text"
										className="form-control"
										name="name"
										required
										onChange={this.handleChange}
										value={this.state.name}
									/>
								</div>
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
									value="Register"
									className="btn btn-info btn-block"
								/>
							</form>
						</div>
					</div>
					<p className="signup">
						Already have an account?{" "}
						<Link to="/login">
							<span>Login!</span>
						</Link>
					</p>
				</div>
			</div>
		);
	}
}

Register.propTypes = {
	registerUser: PropTypes.func.isRequired,
	register: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	register: state.auth,
	errors: state.errors,
});
export default connect(mapStateToProps, { registerUser })(withRouter(Register));
