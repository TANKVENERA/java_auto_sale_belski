import React, {Component} from 'react';
import {ErrorPrinter} from '../utils/errorPrinter';
import {validateField, addWhiteSpace} from '../utils/util'
import StyledSelect from '../../static/StyledReactSelect'

const errors = ['Укажите пробег авто',
                'Пробег превышает допустимый максимум']

class Mileage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            mileage: '',
            error: errors[0],
            selectedOption: ''
        }
    }

    handleMeasureChange = (selectedOption) => {
        this.setState({
            selectedOption: selectedOption
        })
    }

    handleChange = (event) => {
        let mileage = event.target.value
        if (mileage.includes(' ')) {
            mileage = mileage.split(' ').join('');
        }
        const regex = /^([1-9]{1})([0-9]{1,9})?$/;
        if (regex.test(mileage) || mileage === '') {
            if (mileage.length > 7) {
                validateField.call(this, mileage, errors[1]);
            }
            else {
                validateField.call(this, mileage, errors[0]);
            }
            this.setState({
                mileage: addWhiteSpace.call(this, mileage)
            })
        }
    }

    render() {
        const measureOptions = [{value: '1', label: 'км'},
                                {value: '2', label: 'мили'}]
        return (
            <div className="form_item">
                <div className="form_item_label">
                   <label>Пробег</label>
                </div>
                <div className="form_item_field">
                    <div style={{display: 'flex'}}>
                        <div>
                            <input value={this.state.mileage}
                                   className="form_item_input mileage"
                                   onChange={this.handleChange}
                                   placeholder="Пробег"
                                   size="10"
                            />
                        </div>
                        <div>
                            <StyledSelect currency_distance
                                          onChange={this.handleMeasureChange}
                                          options={measureOptions}
                                          value={this.state.selectedOption === '' ? measureOptions[0] : this.state.selectedOption}
                                          backspaceRemoves={false}
                                          escapeClearsValue={false}
                                          deleteRemoves={false}
                                          clearable={false}
                                          searchable={false}
                            />
                        </div>
                    </div>
                </div>
                <div className="form_item_error">
                    <ErrorPrinter formErrors={this.state.error}/>
                </div>
            </div>

        )
    }

}

export default Mileage;