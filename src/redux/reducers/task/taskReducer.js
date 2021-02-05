import { ADD_TASK, LIST_TASK, REMOVE_TASK, FILTER_TASK } from "../../constants";

const listsOfTasks = [
	{
		id: 1,
		title: "Task 01",
		description: "Description task 01",
		status: 1
	}, {
		id: 2,
		title: "Task 02",
		description: "Description task 02",
		status: 2
	}, {
		id: 3,
		title: "Task 03",
		description: "Description task 03",
		status: 1
	}
];

const initialState = {
	tasks: listsOfTasks,
	lastUpdated: Date.now()
};

const syncData = (id) => {
	const pos = listsOfTasks.findIndex(item => item.id === id);
	listsOfTasks.splice(pos, 1);
};


export default (state = initialState, action) => {
	switch (action.type) {
    case REMOVE_TASK:
			syncData(action.payload);
			return {
				...state,
				tasks: state.tasks.filter(item => item.id !== action.payload),
				lastUpdated: Date.now()
			};
		case LIST_TASK:
			state.tasks = listsOfTasks;
			return {
				...state,
				tasks: action.payload === 0 ? listsOfTasks : state.tasks.filter(item => item.status === action.payload),
				lastUpdated: Date.now()
			};
		case ADD_TASK:
			let pos = state.tasks.findIndex(item => item.id === action.newObj.id);
			if(pos != -1) {
				state.tasks[pos] = action.newObj;
				return state;
			} else {
				return Object.assign({}, state, {
					tasks: state.tasks.concat(action.newObj),
					lastUpdated: Date.now()
				});
			}
    default:
      return state;
	}
};
