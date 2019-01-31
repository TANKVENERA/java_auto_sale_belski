/**
 * Created by Mina on 16.01.2019.
 */

import '../../actions/signUpActions/action-types';

const initialState = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    modalIsOpen: false,
    regSuccessModalIsOpen: false
};

export default function signUpParams(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_IS_UPDATED':
            console.log('FROM_REDUCER', action.username)
            return {...state, username: action.username}
        case 'EMAIL_IS_UPDATED':
            return {...state, email: action.email}
        case 'PASSWORD_IS_UPDATED':
            return {...state, password: action.password}
        case 'CONFIRM_PASSWORD_IS_UPDATED':
            return {...state, confirmPassword: action.confirmPassword}
        case 'CLEAR_USER_PARAMS':
            return {...state = initialState}
        case 'MODAL_IS_OPEN':
            return {...state, modalIsOpen: action.modalIsOpen}
        case 'REGISTRATION_SUCCESS_MODAL_IS_OPEN':
            return {...state, regSuccessModalIsOpen: action.regSuccessModalIsOpen}
        default:
            return state;
    }
}