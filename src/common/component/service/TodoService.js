import config from 'config';

export const TodoService = {
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

    return fetch(`${config.apiUrl}/tasks`, requestOptions).then(handleResponse).then(task => {
        let response = {};
        if(task){
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

function getTasks(id) {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    return fetch(`${config.apiUrl}/tasks`, requestOptions).then(handleResponse).then(todo => {
        let newList = [];
        if(id) {
            newList = todo.filter((item)=>{
                return item.id === parseInt(id)
            })
        } else {
            newList = todo;
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
