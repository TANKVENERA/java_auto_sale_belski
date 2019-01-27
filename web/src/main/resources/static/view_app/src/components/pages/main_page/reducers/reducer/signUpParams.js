/**
 * Created by Mina on 16.01.2019.
 */

import '../../actions/signUpActions/action-types';

const initialState = {
    login: '',
    email: '',
    password: '',
    confirmPassword: ''
};

export default function signUpParams(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_IS_UPDATED':
            console.log('FROM_REDUCER', action.login)
            return {...state, login: action.login}
        case 'EMAIL_IS_UPDATED':
            return {...state, email: action.email}
        case 'PASSWORD_IS_UPDATED':
            return {...state, password: action.password}
        case 'CONFIRM_PASSWORD_IS_UPDATED':
            return {...state, confirmPassword: action.confirmPassword}
        case 'CLEAR_USER_PARAMS':
            return {state : initialState}
        default:
            return state;
    }
}