import { createStore } from "redux";
import rootReducer from "../reducers/index";

const store = createStore(
	rootReducer,
	{
		bgState: {
			bgColor: "black"
		},
		activeState: 
		{
			activeColor: "info"
		}
	},
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;