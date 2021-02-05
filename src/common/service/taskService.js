import config from 'config';

export const TaskService = {
    getTasks,
    createTasks,
    updateTasks,
    removeTasks
};

function updateTasks(obj) {

	const requestOptions = {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(obj)
	};

	return fetch(`${config.apiUrl}/tasks`, requestOptions).then(handleResponse).then(tasks => {
		let response = {};
		if(tasks){
			response.status = true;
		}
		return response;
	});

}

function createTasks(obj) {

	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(obj)
	};

	return fetch(`${config.apiUrl}/tasks`, requestOptions).then(handleResponse).then(tasks => {
		let response = {};
		if(tasks){
			response.status = true;
		}
		return response;
	});

}

function removeTasks(obj) {

	const requestOptions = {
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(obj)
	};

	return fetch(`${config.apiUrl}/tasks`, requestOptions).then(handleResponse).then(todo => {
		return todo;
	});

}

function getTasks(id) {

	const requestOptions = {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' }
	};

	return fetch(`${config.apiUrl}/tasks`, requestOptions).then(handleResponse).then(response => {
		let newList = [];
		if(id) {
			newList = response.filter((item)=>{
				return item.id === parseInt(id);
			});
		} else {
			newList = response;
		}
		return newList;
	});

}

function handleResponse(obj) {
	return obj.result().then((response) => {
		const data = response && JSON.parse(response);
		if (!obj.ok) {
			const error = (data && data.message) || obj.statusText;
			return Promise.reject(error);
		}
		return data;
	});
}
