import { combineReducers } from 'redux';

import authReducer from './auth/authReducer';
import taskReducer from './task/taskReducer';

export default combineReducers({
	authObj: authReducer,
	todoObj: taskReducer,
});

