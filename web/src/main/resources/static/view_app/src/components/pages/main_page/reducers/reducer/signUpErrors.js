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
            return {...state, errorLogin: action.errorLogin}
        case 'EMAIL_ERROR_IS_UPDATED' :
            console.log('EMAIL)ERR', action.errorEmail)
            return {...state, errorEmail: action.errorEmail}
        case 'PASSWORD_ERROR_IS_UPDATED' :
            console.log('FRMOPASSW', action.errorPassword)
            return {...state, errorPassword: action.errorPassword}
        case 'CONFIRM_PASSWORD_ERROR_IS_UPDATED' :
            console.log('CONFIRM', action.errorConfirmPassword)
            return {...state, errorConfirmPassword: action.errorConfirmPassword}
        default:
            return state;
    }

}