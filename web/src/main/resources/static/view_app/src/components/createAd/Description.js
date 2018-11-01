import React, {Component} from 'react';
import {StyledTextArea} from '../../static/StyledTextArea';
import {validateField} from '../utils/util'
import {ErrorPrinter} from '../utils/errorPrinter';

const error = ['Опишите ваш автомобиль']

class Description extends Component {
    constructor(props) {
        super(props)
        this.state = {
            description: '',
            error: error
        }
    }

    handleChange = (event) => {
        let descr = event.target.value
        console.log('Descrip', descr)
        this.setState({
            description: descr
        })
        validateField.call(this, descr, error)
    }

    render() {
        return (
            <div className="form_item">
                <div className="form_item_label">
                    <label>Описание</label>
                </div>
                <div className="form_item_field">
                    <StyledTextArea
                        placeholder='Описание...'
                        minRows={5}
                        value={this.state.description}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form_item_error">
                    <ErrorPrinter formErrors={this.state.error}/>
                </div>
            </div>

        )
    }

}

export default Description;