import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../../constants/index";

export function loginAction(payload) {
  return { type: LOGIN_SUCCESS, payload };
}

export function checkLoginAction(payload) {
	const userInfo = window.localStorage.getItem('user');
	console.log(userInfo, "OK");
  return { type: LOGIN_SUCCESS, payload };
}

export function logoutAction(payload) {
	return { type: LOGOUT_SUCCESS, payload };
}