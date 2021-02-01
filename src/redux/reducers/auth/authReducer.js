import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../../constants/index";

const initialState = {
	isLogged: false,
	profileInfo: {}
};

export default (state = initialState, action) => {
	switch (action.type) {
    case LOGIN_SUCCESS:
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
