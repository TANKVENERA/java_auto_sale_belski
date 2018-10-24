import React, {Component} from 'react';
import {RadioGroup, RadioButton} from '../../../node_modules/react-custom-radio';

class Transmission extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedGearBox: 'mechanical'
        }
    }

    handleTransmissionChange = (selectedGearBox) => {
        this.setState({selectedGearBox: selectedGearBox});
        console.log('Selected selectedGearBox:',selectedGearBox);
    }

    render() {
        return (
            <RadioGroup
                selectedValue={this.state.selectedGearBox}
                onChange={this.handleTransmissionChange}
            >
                <RadioButton value="mechanical" className="radio-button-left"
                             disabled={this.state.selectedGearBox === 'mechanical'}>
                   Механика
                </RadioButton>
                <RadioButton value="automatic" className="radio-button-right"
                             disabled={this.state.selectedGearBox === 'automatic'}>
                    Автомат
                </RadioButton>
            </RadioGroup>
        )
}

}

export default Transmission;