import config from 'config';

export const TodoService = {
    getTasks,
    createTasks,
    removeTasks
};

function createTasks(obj) {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    };

    return fetch(`${config.apiUrl}/tasks`, requestOptions).then(handleResponse).then(task => {
        let response = {};
        if(task){
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

function getTasks() {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    return fetch(`${config.apiUrl}/tasks`, requestOptions).then(handleResponse).then(todo => {
        return todo;
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
