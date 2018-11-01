import React, {Component} from 'react';
import {ErrorPrinter} from '../utils/errorPrinter';
import {validateField, addWhiteSpace} from '../utils/util'
import StyledSelect from '../../static/StyledReactSelect'

const errors = ['Укажите цену',
               'Цена превышает допустимый максимум']

class PriceAndCurrency extends Component {

    constructor() {
        super()
        this.state = {
            price: '',
            error: errors[0],
            selectedOption: ''
        }
    }

    handleCurrencyChange = (selectedOption) => {
        this.setState({
            selectedOption: selectedOption
        })
    }

    handleChange = (event) => {
        let price = event.target.value
        if (price.includes(' ')) {
            price = price.split(' ').join('');
        }
        const regex = /^([1-9]{1})([0-9]{1,9})?$/;
        if (regex.test(price) || price === '') {
            if (price.length > 6) {
                validateField.call(this, price, errors[1]);
            }
            else {
                validateField.call(this, price, errors[0]);
            }
            this.setState({
                price: addWhiteSpace.call(this, price)
            })
        }
    }

    render() {
        const currency = [{value: '1', label: 'usd'},
                          {value: '2', label: 'бел. руб.'}]
        return (
            <div className="form_item">
                <div className="form_item_label">
                    Цена
                </div>
                <div className="form_item_field">
                    <div style={{display: 'flex'}}>
                        <div>
                            <input value={this.state.price}
                                   className="form_item_input price"
                                   onChange={this.handleChange}
                                   placeholder="Цена"
                                   size="10"
                            />
                        </div>
                        <div>
                            <StyledSelect currency_distance
                                          onChange={this.handleCurrencyChange}
                                          options={currency}
                                          value={this.state.selectedOption === '' ? currency[0] : this.state.selectedOption}
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

export default PriceAndCurrency;