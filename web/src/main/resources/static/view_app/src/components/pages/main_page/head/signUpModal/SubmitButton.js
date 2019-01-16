/**
 * Created by Mina on 15.01.2019.
 */
import React, {Component} from 'react'
import './styles/submitButton.css'

class SubmitButton extends Component {

    render() {
    return(
        <div>
            <button type="button"
                    className="sign-up-button"
                    onClick={this.sendRQWithAdData}>
                Зарегистрироваться
            </button>
        </div>
    )
}

}

export default SubmitButton;