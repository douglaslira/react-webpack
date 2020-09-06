import { ADD_TASK, LIST_TASK } from "../constants/index";

export function addTask(payload) {

  let newObj = {
    id: payload.id ? payload.id : '',
    title: payload.title,
    description: payload.description,
    status: parseInt(payload.status),
    date: new Date().toISOString()
  }

  return { type: ADD_TASK, newObj };
}

export function getTask(payload) {

	let newObj = [];

  return { type: LIST_TASK, newObj };

}
