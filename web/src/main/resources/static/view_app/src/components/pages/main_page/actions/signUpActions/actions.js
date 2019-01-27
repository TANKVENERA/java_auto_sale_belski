/**
 * Created by Mina on 16.01.2019.
 */

import {LOGIN_IS_UPDATED, EMAIL_IS_UPDATED, PASSWORD_IS_UPDATED,
        CONFIRM_PASSWORD_IS_UPDATED, CLEAR_USER_PARAMS} from './action-types'

export const updateLogin = login => ({
    type: LOGIN_IS_UPDATED,
    login: login
});

export const updateEmail= email => ({
    type: EMAIL_IS_UPDATED,
    email: email
});

export const updatePassword = password => ({
    type: PASSWORD_IS_UPDATED,
    password: password
});

export const updateConfirmPassword = confirmPassword => ({
    type: CONFIRM_PASSWORD_IS_UPDATED,
    confirmPassword: confirmPassword
});

export const clearUserParams = () => ({
    type: CLEAR_USER_PARAMS
});