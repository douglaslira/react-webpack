export function FakeBackend() {

	let users = [{ id: 1, username: 'admin', password: 'admin', firstName: 'Douglas', lastName: 'Lira', mail: 'douglas.lira.web@gmail.com' }];
	let realFetch = window.fetch;
	let todoList = [];

	window.fetch = function (url, opts) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {

				// TASKS ------------------------------------------------------------
				if (url.endsWith('/tasks') && opts.method === 'GET') {
					let responseJson = todoList;
					resolve({ ok: true, result: () => Promise.resolve(JSON.stringify(responseJson)) });
					return;
				}

				if (url.endsWith('/tasks') && opts.method === 'PUT') {
					let params = JSON.parse(opts.body);
					if (params.title || params.description || params.id) {
						let indexOfTask = todoList.findIndex((obj)=>{
							return obj.id === params.id;
						});
						let responseJson = {
							id: parseInt(params.id),
							title: params.title,
							description: params.description,
							status: parseInt(params.status)
						};
						todoList[indexOfTask] = responseJson;
						resolve({ ok: true, result: () => Promise.resolve(JSON.stringify(responseJson)) });
					} else {
						reject('Task is incorrect');
					}
					return;
				}

				if (url.endsWith('/tasks') && opts.method === 'POST') {
					let params = JSON.parse(opts.body);
					if (params.title || params.description) {
						let responseJson = {
							id: todoList.length + 1,
							title: params.title,
							description: params.description,
							status: parseInt(params.status)
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
							isLogged: true,
							userInfo: {
								id: user.id,
								username: user.username,
								firstName: user.firstName,
								lastName: user.lastName,
								mail: user.mail
							}
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
