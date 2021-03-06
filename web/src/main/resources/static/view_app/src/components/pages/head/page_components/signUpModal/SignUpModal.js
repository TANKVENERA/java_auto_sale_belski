import React, {Component} from 'react'
import Modal from '../../../../../../node_modules/react-responsive-modal'
import {Link} from '../../../../../../node_modules/react-router-dom';
import SubmitButton from './SubmitButton'
import './styles/signUpModal.css'
import {updateLogin, updatePassword, updateEmail, updateConfirmPassword,
        clearUserParams, updateOpenRegistrationSuccessModal, updateOpenModalFlag} from '../../actions/signUpActions/actions'
import {clearErrors} from '../../actions/signUpErrors/actions'
import {FormErrors} from './FormErrors'
import isOk from  '../../../../../static/icons/isOk.png'
import {connect} from '../../../../../../node_modules/react-redux';

const MapStateToProps = (state) => {
    return {
        username: state.signUpParams.username,
        email: state.signUpParams.email,
        password: state.signUpParams.password,
        confirmPassword: state.signUpParams.confirmPassword,
        modalIsOpen: state.signUpParams.modalIsOpen,
        regSuccessModalIsOpen: state.signUpParams.regSuccessModalIsOpen,
        errorLogin: state.signUpErrors.errorLogin,
        errorEmail: state.signUpErrors.errorEmail,
        errorPassword: state.signUpErrors.errorPassword,
        errorConfirmPassword: state.signUpErrors.errorConfirmPassword

    }
};

const MapDispatchToProps = (dispatch) => {
    return {
        updateLogin: (username) => dispatch(updateLogin(username)),
        updateEmail: (email) => dispatch(updateEmail(email)),
        updatePassword: (password) => dispatch(updatePassword(password)),
        updateConfirmPassword: (confirmPassword) => dispatch(updateConfirmPassword(confirmPassword)),
        clearUserParams: () => dispatch(clearUserParams()),
        clearErrors: () => dispatch(clearErrors()),
        updateOpenModalFlag: (modalIsOpen) => dispatch(updateOpenModalFlag(modalIsOpen)),
        updateOpenRegistrationSuccessModal: regSuccessModalIsOpen => dispatch(updateOpenRegistrationSuccessModal(regSuccessModalIsOpen))
    }
};

const styles = {
    modal: {borderRadius: '10px', width: '300px', background: '#eff2f3'}
}

class SignUpModal extends Component {

    onCloseRegSuccessModal = () => {
        this.props.updateOpenRegistrationSuccessModal(false);
    }

    onOpenModal = () => {
        this.props.updateOpenModalFlag(true);
    };

    onCloseModal = () => {
        this.props.updateOpenModalFlag(false);
        this.props.clearUserParams();
        this.props.clearErrors();
    };

    handleLogin = (event) => {
        let volume = event.target.value;
        this.props.updateLogin(volume)
    };

    handleEmail = (event) => {
        let volume = event.target.value;
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
        const open = this.props.modalIsOpen;
        var loginErr = this.props.errorLogin;
        var emailErr = this.props.errorEmail;
        var pwdErr = this.props.errorPassword;
        var confirmPwdErr = this.props.errorConfirmPassword;
         console.log('LOGIN',  this.props.regSuccessModalIsOpen)
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
                            <div className="sign_up_field">
                                <input value={this.props.username} onChange={this.handleLogin}
                                       className={loginErr === 'ok' ? 'input_sign_up' : 'input_error' } />
                            </div>
                            <div>
                                <FormErrors error={loginErr}/>
                            </div>
                        </div>
                        <div className="sign_up_item">
                            <div className="sign_up_label">
                                <label>Почтовый адрес</label>
                            </div>
                            <div className="sign_up_field">
                                <input value={this.props.email} onChange={this.handleEmail}
                                       className={emailErr === 'ok' ? 'input_sign_up' : 'input_error' } />
                            </div>
                            <div>
                                <FormErrors error={emailErr}/>
                            </div>
                        </div>
                        <div className="sign_up_item">
                            <div className="sign_up_label">
                                <label>Пароль</label>
                            </div>
                            <div className="sign_up_field">
                                <input value={this.props.password} onChange={this.handlePassword}
                                       className={pwdErr === 'ok' ? 'input_sign_up' : 'input_error' } />
                            </div>
                            <div>
                                <FormErrors error={pwdErr}/>
                            </div>
                        </div>
                        <div className="sign_up_item">
                            <div className="sign_up_label">
                                <label>Повторите пароль</label>
                            </div>
                            <div className="sign_up_field">
                                <input value={this.props.confirmPassword} onChange={this.handleConfirmPassword}
                                       className={confirmPwdErr === 'ok' ? 'input_sign_up' : 'input_error' } />
                            </div>
                            <div>
                                <FormErrors error={confirmPwdErr}/>
                            </div>
                        </div>
                        <SubmitButton/>
                    </div>
                </Modal>
                <Modal open={this.props.regSuccessModalIsOpen} onClose={this.onCloseRegSuccessModal}
                       showCloseIcon={false}>
                    <div className="reg_success_block">
                        <div className="reg_success_img">
                            <img alt="" src={isOk} className=""/>
                        </div>
                        <div className="reg_success_txt">
                             <text>Вы успешно зарегестрировались! </text>
                            <Link to="" onClick={this.onCloseRegSuccessModal}>Вернуться на главную</Link>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(SignUpModal);