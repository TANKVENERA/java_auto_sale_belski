import React, {Component} from 'react';
import {RadioGroup, RadioButton} from '../../../node_modules/react-custom-radio';

class Transmission extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTransmission: 'mechanical'
        }
    }

    handleTransmissionChange = (selectedTransmission) => {
        this.setState({selectedTransmission: selectedTransmission});
        console.log('Selected selectedTransmission:',selectedTransmission);
    }

    render() {
        return (
            <RadioGroup
                selectedValue={this.state.selectedTransmission}
                onChange={this.handleTransmissionChange}
            >
                <RadioButton value="mechanical" className="radio-button-left"
                             disabled={this.state.selectedTransmission === 'mechanical'}>
                   Механика
                </RadioButton>
                <RadioButton value="automatic" className="radio-button-right"
                             disabled={this.state.selectedTransmission === 'automatic'}>
                    Автомат
                </RadioButton>
            </RadioGroup>
        )
}

}

export default Transmission;