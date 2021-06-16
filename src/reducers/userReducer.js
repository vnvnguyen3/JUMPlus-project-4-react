import { LOGIN, LOGOUT, SIGNUP, UPDATE_USER, FETCH_USERS } from '../actions/types';

const initialState = {
    users: [],
    user: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload
            };
        case LOGOUT:
            return {
                ...state,
                user: action.payload
            }
        case SIGNUP:
            return {
                ...state,
                user: action.payload,
                users: [...state.users, action.payload]
            };
        case UPDATE_USER:
            return {
                ...state,
                user: action.payload,
            };
        case FETCH_USERS:
            return {
                ...state,
                users: action.payload
            };
        default:
            return state;
    }
}