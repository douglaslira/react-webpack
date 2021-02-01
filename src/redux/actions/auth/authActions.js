import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../../constants/index";

export function loginAction(payload) {
  return { type: LOGIN_SUCCESS, payload };
}

export function logoutAction(payload) {
	return { type: LOGOUT_SUCCESS, payload };
}