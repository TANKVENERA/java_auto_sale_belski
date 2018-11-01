import React, {Component} from 'react'
import StyledSelect from '../../static/StyledReactSelect';
import {retrieveData, validateField} from '../utils/util';
import {ErrorPrinter} from '../utils/errorPrinter';

const error = 'Выберите цвет';

class Color extends Component {

    constructor(props) {
        super(props)
        this.state = {
            colors: [],
            error: error,
            colorIsValid: false,
            selectedColor: ''
        }
    }

    handleChange = (selectedColor) => {
        this.setState({selectedColor: selectedColor})
        const color = selectedColor === null ? '' : selectedColor.label;
        validateField.call(this, color, error);
    }


    componentDidMount() {
        console.log('Request is sent to retrieve colors');
        retrieveData.call(this, 'colors', 'colors');
    }

    render() {
        const yearsOfIssue = this.state.colors.map(function (color, index) {
            return {value: index, label: color}
        });
        return (
            <div className="form_item">
                <div className="form_item_label">
                    Цвет
                </div>
                <div className="form_item_field">
                    <StyledSelect large
                                  onChange={this.handleChange}
                                  placeholder="Цвет"
                                  options={yearsOfIssue}
                                  value={this.state.selectedColor}
                                  backspaceRemoves={false}
                                  escapeClearsValue={false}
                                  deleteRemoves={false}
                    />
                </div>
                <div className="form_item_error">
                    <ErrorPrinter formErrors={this.state.error}/>
                </div>
            </div>

        )
    }

}

export default Color;