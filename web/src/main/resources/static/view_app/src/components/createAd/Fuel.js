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
        console.log('Selected selectedFuelType:',selectedFuelType);
    }

    render() {
        return (
            <RadioGroup
                selectedValue={this.state.selectedFuelType}
                onChange={this.handleFuelTypeChange}
            >
                <RadioButton value="oil" className="radio-button-left"
                             disabled={this.state.selectedFuelType === 'oil'}>
                    Бензин
                </RadioButton>
                <RadioButton value="diesel" className="radio-button-middle"
                             disabled={this.state.selectedFuelType === 'diesel'}>
                    Дизель
                </RadioButton>
                <RadioButton value="gas" className="radio-button-right"
                             disabled={this.state.selectedFuelType === 'gas'}>
                    Газ
                </RadioButton>
            </RadioGroup>
        )
    }
}

export default Fuel