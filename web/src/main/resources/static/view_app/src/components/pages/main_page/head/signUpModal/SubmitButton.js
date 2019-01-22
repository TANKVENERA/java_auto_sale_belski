/**
 * Created by Mina on 15.01.2019.
 */
import React, {Component} from 'react'
import './styles/submitButton.css'
import {connect} from '../../../../../../node_modules/react-redux'
import {
    updateLoginError,
    updateEmailError,
    updatePasswordError,
    updateConfirmPasswordError
} from '../../actions/signUpErrors/actions'

const MapStateToProps = state => {
    return {
        login: state.signUpParams.login,
        email: state.signUpParams.email,
        password: state.signUpParams.password,
        confirmPassword: state.signUpParams.confirmPassword

    }
};

const MapDispatchToProps = (dispatch) => {
    return {
        updateLoginError: loginError => dispatch(updateLoginError(loginError)),
        updateEmailError: errorEmail => dispatch(updateEmailError(errorEmail)),
        updatePasswordError: passwordError => dispatch(updatePasswordError(passwordError)),
        updateConfirmPasswordError: confirmPasswordError => dispatch(updateConfirmPasswordError(confirmPasswordError))
    }
};

class SubmitButton extends Component {

    handleLoginErrors = () => {
        var login = this.props.login;
        const latinSymbolRegex = /^[a-zA-Z0-9]+$/;
        const numberRegex = /^[0-9]+$/;
        if (login === '') {
            this.props.updateLoginError('Введите логин')
        }
        else if (numberRegex.test(login)) {
            this.props.updateLoginError('Логин не должен содержать только цифры')
        }
        else if (!latinSymbolRegex.test(login)) {
            this.props.updateLoginError('Используйте латиницу и римские цифры')
        }
        else if (login.length < 5 || login.length > 10) {
            this.props.updateLoginError('Длина логина должна быть не менее 5 и не более 10 символов')
        }
        else {
            this.props.updateLoginError('')
        }
    };

    handleEmailErrors = () => {
        var email = this.props.email;
        if (email === '') {
            this.props.updateEmailError('Введите email')
        }
        else if (!email.includes('@')) {
            this.props.updateEmailError('Email должен содержать символ "@"')
        }
        else {
            this.props.updateEmailError('')
        }
    };

    handlePasswordErrors = () => {
        var pwd = this.props.password;
        const cyrillicRegex = /[а-яА-Я]+/;
        if (pwd === '') {
            this.props.updatePasswordError('Введите пароль')
        }
        else if (pwd.length < 6 || pwd.length > 10) {
            this.props.updatePasswordError('Длина пароля должна быть не менее 6 и не более 10 символов')
        }
        else if (cyrillicRegex.test(pwd)) {
            this.props.updatePasswordError('Пароль не должен содержать кирилличных символов')
        }
        else {
            this.props.updatePasswordError('')
        }
    };

    handleConfirmPasswordErrors = () => {
        var confirmPwd = this.props.confirmPassword;
        if (confirmPwd === '') {
            this.props.updateConfirmPasswordError('Подтвердите пароль')
        }
        else if (this.props.password !== confirmPwd) {
            this.props.updateConfirmPasswordError('Пароли не совпадают')
        }
        else {
            this.props.updateConfirmPasswordError('')
        }
    };

    sendRQWithSignUpParams = () => {
        this.handleLoginErrors();
        this.handleEmailErrors();
        this.handlePasswordErrors();
        this.handleConfirmPasswordErrors();
    };


    render() {
        return (
            <div>
                <button type="button"
                        className="sign-up-button"
                        onClick={this.sendRQWithSignUpParams}>
                    Зарегистрироваться
                </button>
            </div>
        )
    }

}

export default connect(MapStateToProps, MapDispatchToProps)(SubmitButton);