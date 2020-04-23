import { GET_ERRORS } from "./actionTypes";
import axios from "axios";
// Register User
// 'userData' is coming from the 'Register.js' component when a user submit form
export const registerUser = (userData, history) => (dispatch) => {
	// Hit the backend and wait for data
	axios
		.post("/api/users/signup", userData)
		// redirect to login
		.then((res) => history.push("/login"))
		.catch((err) =>
			// Dispatch error to errorReducer
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			})
		);
};

// Login - User
export const loginUser = (userData, history) => (dispatch) => {
	axios
		.post("api/users/login", userData)
		.then((res) => {
			history.push("/orders");
		})
		.catch((err) =>
			// Dispatch error to errorReducer
			dispatch({
				type: GET_ERRORS,

				payload: err.response.data,
			})
		);
};
