/**
 * Created by Mina on 21.01.2019.
 */


import '../../actions/signUpErrors/action-types';

const initialState = {
    errorLogin: '',
    errorEmail: '',
    errorPassword: '',
    errorConfirmPassword: ''
};

export default function signUpErrors(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_ERROR_IS_UPDATED' :
            console.log('FRMO', action.errorLogin)
            return {...state, errorLogin: action.errorLogin}
        case 'EMAIL_ERROR_IS_UPDATED' :
            return {...state, errorLogin: action.errorEmail}
        case 'PASSWORD_ERROR_IS_UPDATED' :
            return {...state, errorLogin: action.errorPassword}
        case 'CONFIRM_PASSWORD_ERROR_IS_UPDATED' :
            return {...state, errorLogin: action.errorConfirmPassword}
        default:
            return state;
    }

}