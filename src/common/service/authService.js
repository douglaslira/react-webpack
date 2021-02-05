import config from 'config';

export const AuthService = {
    login,
    logout,
    checkAuth
};

function logout() {
    localStorage.removeItem('user');
}

function login(username, password) {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`${config.apiUrl}/users/authenticate`, requestOptions).then(handleResponse).then(user => {
        if (user) {
            user.status = true;
            user.authdata = window.btoa(username + ':' + password);
            localStorage.setItem('user', JSON.stringify(user));
        }
        return user;
    });

}

function checkAuth(){
	const user = {
		isLogged: window.localStorage.getItem('user') ? true : false,
		userInfo: JSON.parse(window.localStorage.getItem('user'))
	};
	return user;
}

function handleResponse(obj) {

    return obj.result().then((response) => {
        const data = response && JSON.parse(response);
        if (!obj.ok) {
            if (obj.status === 401) {
                logout();
                location.reload(true);
            }
            const error = (data && data.message) || obj.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}
