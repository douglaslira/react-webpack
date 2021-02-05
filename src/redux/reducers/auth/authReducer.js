import { AUTH_SUCCESS, LOGOUT_SUCCESS } from "../../constants";

const initialState = {
	isLogged: false,
	profileInfo: {}
};

export default (state = initialState, action) => {
	switch (action.type) {
    case AUTH_SUCCESS:
			return {
				...state,
				isLogged: action.payload.isLogged,
				profileInfo: action.payload.userInfo
			};
		case LOGOUT_SUCCESS:
			return {
				...state,
				isLogged: false,
				profileInfo: {}
			};
    default:
      return state;
	}
};
