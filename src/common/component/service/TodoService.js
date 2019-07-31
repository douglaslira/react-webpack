import config from 'config';

export const TodoService = {
    getTasks,
    removeTasks
};

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
