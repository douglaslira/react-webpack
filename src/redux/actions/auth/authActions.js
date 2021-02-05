import { AUTH_SUCCESS, LOGOUT_SUCCESS } from "../../constants/index";

export function authAction(payload) {
  return { type: AUTH_SUCCESS, payload };
}

export function checkAuthAction(payload) {
	const userInfo = window.localStorage.getItem('user');
  return { type: AUTH_SUCCESS, payload };
}

export function logoutAction(payload) {
	return { type: LOGOUT_SUCCESS, payload };
}
