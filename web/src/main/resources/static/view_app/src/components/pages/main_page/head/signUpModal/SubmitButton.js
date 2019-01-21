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
        updateLoginError: (loginError) => dispatch(updateLoginError(loginError)),
        updateEmailError: (emailError) => dispatch(updateEmailError(emailError)),
        updatePasswordError: (passwordError) => dispatch(updatePasswordError(passwordError)),
        updateConfirmPasswordError: (confirmPasswordError) => dispatch(updateConfirmPasswordError(confirmPasswordError))
    }
};

class SubmitButton extends Component {

    handelLoginErrors =() => {
        var login = this.props.login;
        const latinSymbolRegex = /^[a-zA-Z0-9]+$/;
        if (!latinSymbolRegex.test(login)) {
            this.props.updateLoginError('Используйте латиницу и римские цифры')
        }
        else if (login.length < 5 || login.length > 10) {
            console.log('TRUE');
            this.props.updateLoginError('Длина логина должна быть не менее 5 и не более 10 символов')
        }
        else {
            this.props.updateLoginError('')
        }
    };

    handelEmailErrors = () => {
        var email = this.props.email;
    };

    handelPasswordErrors = () => {
        var password = this.props.password;
    };

    handelConfirmPasswordErrors = () => {
        var login = this.props.login;
    };

    sendRQWithSignUpParams = () => {
        this.handelLoginErrors()
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