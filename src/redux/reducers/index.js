import { ADD_TASK } from "../constants";

const initialState = {
    tasks: [{id: 1, title: 'Task 01', description: 'Description task 01', status: 1, date: new Date()}]
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_TASK) {
      return Object.assign({}, state, {
        tasks: state.tasks.concat(action.newObj)
      });
    }
    return state;
  }

export default rootReducer;