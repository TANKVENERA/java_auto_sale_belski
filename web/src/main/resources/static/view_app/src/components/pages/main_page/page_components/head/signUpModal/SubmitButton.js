/**
 * Created by Mina on 15.01.2019.
 */
import React, {Component} from 'react'
import './styles/submitButton.css'
import {connect} from '../../../../../../../node_modules/react-redux'
import {
    updateLoginError,
    updateEmailError,
    updatePasswordError,
    updateConfirmPasswordError,
    clearErrors
} from '../../../actions/signUpErrors/actions'
import {updateOpenRegistrationSuccessModal, updateOpenModalFlag, clearUserParams} from '../../../actions/signUpActions/actions'

const MapStateToProps = state => {
    return {
        username: state.signUpParams.username,
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
        updateConfirmPasswordError: confirmPasswordError => dispatch(updateConfirmPasswordError(confirmPasswordError)),
        clearErrors: () => dispatch(clearErrors()),
        clearUserParams: () => dispatch(clearUserParams()),
        updateOpenModalFlag: modalIsOpen => dispatch(updateOpenModalFlag(modalIsOpen)),
        updateOpenRegistrationSuccessModal: regSuccessModalIsOpen => dispatch(updateOpenRegistrationSuccessModal(regSuccessModalIsOpen))
    }
};

class SubmitButton extends Component {

    handleLoginErrors = () => {
        var login = this.props.username;
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
        const beforeDogSymbolRegex = /.{1,10}(?=@)/;
        const afterDogSymbolRegex = /(?<=@).{1,10}/;
        const wrongSymbolRegex = /[^.a-zA-Z0-9]+/;
        const checkDogSmbNmbOfOccurrences = /@/g;
        var parseEmail;
        if (email === '') {
            this.props.updateEmailError('Введите email')
        }
        else if (!email.includes('@')) {
            this.props.updateEmailError('Email должен содержать символ "@"')
        }
        else if (!beforeDogSymbolRegex.test(email)) {
            this.props.updateEmailError('Введите часть Email, расположенного до символа "@"')
        }
        else if (!afterDogSymbolRegex.test(email)) {
            this.props.updateEmailError('Введите часть Email, расположенного после символа "@"')
        }
        else if ((email.match(checkDogSmbNmbOfOccurrences)).length > 1) {
            this.props.updateEmailError('Часть адреса после символа "@" не должна содержать символ "@"')
        }
        else if ((parseEmail = email.substring(email.indexOf('@') + 1, email.length)).match(wrongSymbolRegex) !== null) {
            var wrongCharIndex = parseEmail.match(wrongSymbolRegex).index;
            this.props.updateEmailError(`Часть адреса после символа "@" не должна содержать символ "${parseEmail[wrongCharIndex]}"`)
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

        fetch('http://localhost:8080/signUp', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.props.username,
                email: this.props.email,
                password: this.props.password,
                confirmPassword: this.props.confirmPassword
            })
        }).then(status => {
            return status.json()
        }).then(result => {
            if (result.message === 'successfull') {
                this.props.clearUserParams();
                this.props.clearErrors();
                this.props.updateOpenModalFlag(false)
                this.props.updateOpenRegistrationSuccessModal(true)
            }
        })
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