import React, {Component} from 'react'
import Modal from '../../../../../../../node_modules/react-responsive-modal'

class SignInModal extends Component {

    constructor () {
        super();
        this.state = {
            open: false
        }
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const open = this.state.open;
        return (
            <div>
                <button onClick={this.onOpenModal}>Войти</button>
                <Modal open={open} onClose={this.onCloseModal}>
                    <h2>Вход</h2>
                    <div>
                        <div>
                            <label>Логин</label>
                        </div>
                        <div>
                            <input value=""/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Пароль</label>
                        </div>
                        <div>
                            <input value=""/>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default SignInModal;