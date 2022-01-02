export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type' : 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password})
    }).then(res => res.json())
};

export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type' : 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password})
    }).then(res => res.json())
};

export const addToFavoriteMovie = (userName, id) => {
    return fetch(`api/users/${userName}/favourites`, {
        headers: {
            'Content-Type' : 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ userName: userName, id: id})
    }).then(res => res.json())
}