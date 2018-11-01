import React, {Component} from 'react'
import {RadioGroup, RadioButton} from '../../../node_modules/react-custom-radio';

class Fuel extends Component {
    constructor(){
        super()
        this.state = {
            selectedFuelType: 'oil'
        }
    }

    handleFuelTypeChange = (selectedFuelType) => {
        this.setState({selectedFuelType: selectedFuelType});
    }

    render() {
        return (
            <div className="form_item">
                <div className="form_item_label">
                    <label>Тип топлива</label>
                </div>
                <div className="form_item_field">
                    <RadioGroup
                        selectedValue={this.state.selectedFuelType}
                        onChange={this.handleFuelTypeChange}
                    >
                        <RadioButton value="oil" className="radio-button-left fuel"
                                     disabled={this.state.selectedFuelType === 'oil'}>
                            Бензин
                        </RadioButton>
                        <RadioButton value="diesel" className="radio-button-right fuel"
                                     disabled={this.state.selectedFuelType === 'diesel'}>
                            Дизель
                        </RadioButton>
                    </RadioGroup>
                </div>
            </div>

        )
    }
}

export default Fuel