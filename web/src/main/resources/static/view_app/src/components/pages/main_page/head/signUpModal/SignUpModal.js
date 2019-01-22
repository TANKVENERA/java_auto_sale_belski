import React, {Component} from 'react'
import Modal from '../../../../../../node_modules/react-responsive-modal'
import SubmitButton from './SubmitButton'
import './styles/signUpModal.css'
import {updateLogin, updatePassword, updateEmail, updateConfirmPassword} from '../../actions/signUpActions/actions'
import {FormErrors} from './FormErrors'
import {connect} from '../../../../../../node_modules/react-redux';

const MapStateToProps = (state) => {
    return {
        login: state.signUpParams.login,
        email: state.signUpParams.email,
        password: state.signUpParams.password,
        confirmPassword: state.signUpParams.confirmPassword,
        errorLogin: state.signUpErrors.errorLogin,
        errorEmail: state.signUpErrors.errorEmail,
        errorPassword: state.signUpErrors.errorPassword,
        errorConfirmPassword: state.signUpErrors.errorConfirmPassword
    }
};

const MapDispatchToProps = (dispatch) => {
    return {
        updateLogin: (login) => dispatch(updateLogin(login)),
        updateEmail: (email) => dispatch(updateEmail(email)),
        updatePassword: (password) => dispatch(updatePassword(password)),
        updateConfirmPassword: (confirmPassword) => dispatch(updateConfirmPassword(confirmPassword))
    }
};

const styles = {
    modal: {borderRadius: '10px', width: '300px'}
}

class SignUpModal extends Component {

    constructor() {
        super();
        this.state = {
            open: false
        }
    }

    onOpenModal = () => {
        this.setState({open: true});
    };

    onCloseModal = () => {
        this.setState({open: false});
    };

    handleLogin = (event) => {
        let volume = event.target.value;
        this.props.updateLogin(volume)
    };

    handleEmail = (event) => {
        let volume = event.target.value;
        console.log('CHECK', volume)
        this.props.updateEmail(volume)
    };

    handlePassword = (event) => {
        let volume = event.target.value;
        this.props.updatePassword(volume)
    };

    handleConfirmPassword = (event) => {
        let volume = event.target.value;
        this.props.updateConfirmPassword(volume)
    };

    render() {
        const open = this.state.open;
        var loginErr = this.props.errorLogin;
        var emailErr = this.props.errorEmail;
        var pwdErr = this.props.errorPassword;
        var confirmPwdErr = this.props.errorConfirmPassword;

        return (
            <div>
                <button onClick={this.onOpenModal}>Регистрация</button>
                <Modal open={open} onClose={this.onCloseModal}
                       showCloseIcon={false} styles={styles}>
                    <div>
                        <div className="sign_up_title">
                            <h2>Регистрация</h2>
                        </div>
                        <div className="sign_up_item">
                            <div className="sign_up_label">
                                <label>Логин</label>
                            </div>
                            <div>
                                <input value={this.props.login} onChange={this.handleLogin}
                                       className={loginErr === '' ? 'input_sign_up' : 'input_error' } />
                            </div>
                            <div>
                                <FormErrors error={loginErr}/>
                            </div>
                        </div>
                        <div className="sign_up_item">
                            <div className="sign_up_label">
                                <label>Почтовый адрес</label>
                            </div>
                            <div >
                                <input value={this.props.email} onChange={this.handleEmail}
                                       className={emailErr === '' ? 'input_sign_up' : 'input_error' } />
                            </div>
                            <div>
                                <FormErrors error={emailErr}/>
                            </div>
                        </div>
                        <div className="sign_up_item">
                            <div className="sign_up_label">
                                <label>Пароль</label>
                            </div>
                            <div>
                                <input value={this.props.password} onChange={this.handlePassword}
                                       className={pwdErr === '' ? 'input_sign_up' : 'input_error' } />
                            </div>
                            <div>
                                <FormErrors error={pwdErr}/>
                            </div>
                        </div>
                        <div className="sign_up_item">
                            <div className="sign_up_label">
                                <label>Повторите пароль</label>
                            </div>
                            <div>
                                <input value={this.props.confirmPassword} onChange={this.handleConfirmPassword}
                                       className={confirmPwdErr === '' ? 'input_sign_up' : 'input_error' } />
                            </div>
                            <div>
                                <FormErrors error={confirmPwdErr}/>
                            </div>
                        </div>
                        <SubmitButton/>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(SignUpModal);