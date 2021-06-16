import { LOGIN, LOGOUT, SIGNUP, UPDATE_USER, FETCH_USERS } from './types';

export const login = (user) => ({type: LOGIN, payload: user});

export const logout = () => ({type: LOGOUT, payload: {}});

export const signup = (userData) => dispatch => {
    fetch('http://localhost:8080/add/user', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(res => res.json())
        .then(user => dispatch({
            type: SIGNUP,
            payload: user
        }))
}

export const updateUser = (user) => dispatch => {
    fetch(`http://localhost:8080/update/user/${user.id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(dispatch({
            type: UPDATE_USER,
            payload: user
        }))
}

export const fetchUsers = () => dispatch => {
    fetch("http://localhost:8080/users")
        .then(res => res.json())
        .then(users => dispatch({
            type: FETCH_USERS,
            payload: users
    }));
};