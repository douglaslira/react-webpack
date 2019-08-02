import { ADD_TASK } from "../constants/index";

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