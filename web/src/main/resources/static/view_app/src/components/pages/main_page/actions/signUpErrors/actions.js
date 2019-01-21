/**
 * Created by Mina on 16.01.2019.
 */

import {LOGIN_ERROR_IS_UPDATED, EMAIL_ERROR_IS_UPDATED, PASSWORD_ERROR_IS_UPDATED,
        CONFIRM_PASSWORD_ERROR_IS_UPDATED} from './action-types'

export const updateLoginError = errorLogin => ({
    type: LOGIN_ERROR_IS_UPDATED,
    errorLogin: errorLogin
});

export const updateEmailError= errorEmail => ({
    type: EMAIL_ERROR_IS_UPDATED,
    errorEmail: errorEmail
});

export const updatePasswordError = errorPassword => ({
    type: PASSWORD_ERROR_IS_UPDATED,
    errorPassword: errorPassword
});

export const updateConfirmPasswordError = errorConfirmPassword => ({
    type: CONFIRM_PASSWORD_ERROR_IS_UPDATED,
    errorConfirmPassword: errorConfirmPassword
});