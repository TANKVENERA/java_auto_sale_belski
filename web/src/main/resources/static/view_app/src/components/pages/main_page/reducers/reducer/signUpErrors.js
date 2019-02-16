/**
 * Created by Mina on 21.01.2019.
 */


import '../../actions/signUpErrors/action-types';

const initialState = {
    errorLogin: 'ok',
    errorEmail: 'ok',
    errorPassword: 'ok',
    errorConfirmPassword: 'ok'
};

export default function signUpErrors(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_ERROR_IS_UPDATED' :
            return {...state, errorLogin: action.errorLogin}
        case 'EMAIL_ERROR_IS_UPDATED' :
            return {...state, errorEmail: action.errorEmail}
        case 'PASSWORD_ERROR_IS_UPDATED' :
            return {...state, errorPassword: action.errorPassword}
        case 'CONFIRM_PASSWORD_ERROR_IS_UPDATED' :
            return {...state, errorConfirmPassword: action.errorConfirmPassword}
        case 'CLEAR_ERRORS':
            return {...state = initialState}
        default:
            return state;
    }

}