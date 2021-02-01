import { combineReducers } from 'redux';
import bgReducer from './theme/bgReducer';
import colorReducer from './theme/colorReducer';
import authReducer from './auth/authReducer';

export default combineReducers({
	auth: authReducer,
	activeState: colorReducer,
  bgState: bgReducer
});