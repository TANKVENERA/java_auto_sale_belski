import React, {Component} from 'react'
import Modal from '../../../../../../node_modules/react-responsive-modal'
import SubmitButton from './SubmitButton'
import './styles/signUpModal.css'
import {updateLogin, updatePassword, updateEmail, updateConfirmPassword} from '../../actions/signUpActions/actions'
import {connect} from '../../../../../../node_modules/react-redux';

const MapStateToProps = (state) => {
    return {
        login: state.signUpParams.login,
        email: state.signUpParams.email,
        password: state.signUpParams.password,
        confirmPassword: state.signUpParams.confirmPassword
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
                            <input value={this.props.login} onChange={this.handleLogin} className="input_sign_up"/>
                        </div>
                    </div>
                    <div className="sign_up_item">
                        <div className="sign_up_label">
                            <label>Почтовый адрес</label>
                        </div>
                        <div >
                            <input value={this.props.email} onChange={this.handleEmail} className="input_sign_up"/>
                        </div>
                    </div>
                    <div className="sign_up_item">
                        <div className="sign_up_label">
                            <label>Пароль</label>
                        </div>
                        <div>
                            <input value={this.props.password} onChange={this.handlePassword} className="input_sign_up"/>
                        </div>
                    </div>
                    <div className="sign_up_item">
                        <div className="sign_up_label">
                            <label>Повторите пароль</label>
                        </div>
                        <div>
                            <input value={this.props.confirmPassword} onChange={this.handleConfirmPassword} className="input_sign_up"/>
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