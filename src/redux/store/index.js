import { createStore, compose, applyMiddleware } from "redux"
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from "../reducers/index";

import { AuthService } from '../../common/service/authService';
import { authAction } from '../actions/auth/authActions';

const middleWares = [thunk, logger];
const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(...middleWares),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

const checkUser = AuthService.checkAuth();
if(checkUser && checkUser.isLogged) {
	store.dispatch(authAction(checkUser));
}
export default store;
