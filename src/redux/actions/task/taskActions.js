import { ADD_TASK, REMOVE_TASK, LIST_TASK, FILTER_TASK } from "../../constants/index";

export function removeTask(payload) {
	return { type: REMOVE_TASK, payload };
}

export function addTask(payload) {

  let newObj = {
    id: payload.id ? payload.id : new Date().getUTCMilliseconds(),
    title: payload.title,
    description: payload.description,
    status: parseInt(payload.status),
    date: new Date().toISOString()
  }

  return { type: ADD_TASK, newObj };
}

export function getTask(payload) {
  return { type: LIST_TASK, payload };
}

export function filterTask(payload) {
  return { type: FILTER_TASK, payload };
}

