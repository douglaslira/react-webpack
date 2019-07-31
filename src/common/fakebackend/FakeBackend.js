export function FakeBackend() {
    
    let users = [{ id: 1, username: 'admin', password: 'admin', firstName: 'Douglas', lastName: 'Lira' }];
    let realFetch = window.fetch;
    let todoList = [
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
    
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                // TASKS ------------------------------------------------------------
                if (url.endsWith('/tasks') && opts.method === 'GET') {
                    let responseJson = todoList;
                    resolve({ ok: true, result: () => Promise.resolve(JSON.stringify(responseJson)) });
                    return;
                }

                if (url.endsWith('/tasks') && opts.method === 'POST') {
                    let params = JSON.parse(opts.body);
                    if (params.title || params.description) {
                        let responseJson = {
                            id: todoList.length + 1,
                            title: params.title,
                            description: params.description,
                            status: params.status
                        };
                        todoList.push(responseJson);
                        resolve({ ok: true, result: () => Promise.resolve(JSON.stringify(responseJson)) });
                    } else {
                        reject('Task is incorrect');
                    }
                    return;
                }

                if (url.endsWith('/tasks') && opts.method === 'DELETE') {
                    let params = JSON.parse(opts.body);
                    let indexOfTask = todoList.findIndex((obj)=>{
                        return obj.id === params.id;
                    });
                    todoList.splice(indexOfTask, 1);
                    resolve({ ok: true, result: () => Promise.resolve(JSON.stringify(todoList)) });
                    return;
                }

                // AUTH -------------------------------------------------------------
                if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                    let params = JSON.parse(opts.body);
                    let filteredUsers = users.filter(user => {
                        return user.username === params.username && user.password === params.password;
                    });

                    if (filteredUsers.length) {
                        let user = filteredUsers[0];
                        let responseJson = {
                            id: user.id,
                            username: user.username,
                            firstName: user.firstName,
                            lastName: user.lastName
                        };
                        resolve({ ok: true, result: () => Promise.resolve(JSON.stringify(responseJson)) });
                    } else {
                        reject('Username or password is incorrect');
                    }

                    return;
                }

                realFetch(url, opts).then(response => resolve(response));
            }, 500);
        });
    }
}
