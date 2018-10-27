import React, {Component} from 'react';
import {ErrorPrinter} from '../utils/errorPrinter';
import {validateField, addWhiteSpace} from '../utils/util'
import StyledSelect from '../../static/StyledReactSelect'

const errors = ['Укажите пробег авто',
                'Пробег превышает допустимый максимум']

class Mileage extends Component {

    constructor() {
        super()
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
            <div style={{display: 'flex'}}>
                <div style={{display: 'flex'}}>
                    <div>
                        <input value={this.state.mileage}
                               onChange={this.handleChange}
                               placeholder="Пробег"
                               style={{height: '34px'}}
                               size="10"
                        />
                    </div>
                   <div>
                       <StyledSelect large
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
                <div>
                    <ErrorPrinter formErrors={this.state.error}/>
                </div>
            </div>

        )
    }

}

export default Mileage;