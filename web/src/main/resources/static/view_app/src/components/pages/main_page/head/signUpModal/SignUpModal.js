import React, {Component} from 'react'
import Modal from '../../../../../../node_modules/react-responsive-modal'

class SignUpModal extends Component {

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
                <button onClick={this.onOpenModal}>Зарегестрироваться</button>
                 <Modal open={open} onClose={this.onCloseModal}>
                     <h2>Регистрация</h2>
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
                             <label>Почтовый адрес</label>
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
                     <div>
                         <div>
                             <label>Повторите пароль</label>
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

export default SignUpModal;