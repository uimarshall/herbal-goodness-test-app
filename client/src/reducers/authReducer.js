import { REGISTER_USER } from "../actions/actionTypes";

const initState = {
	users: {},
};

export default function (state = initState, action) {
	switch (action.type) {
		case REGISTER_USER:
			return {
				...state,
				users: action.payload,
			};

		default:
			return state;
	}
}
