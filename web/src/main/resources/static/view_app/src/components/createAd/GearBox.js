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
        console.log('Selected selectedGearBox:', selectedGearBox);
    }

    render() {
        return (
            <div className="form_item">
                <div className="form_item_label">
                    <label>Коробка передач</label>
                </div>
                <div className="form_item_field">
                    <RadioGroup
                        selectedValue={this.state.selectedGearBox}
                        onChange={this.handleTransmissionChange}
                    >
                        <RadioButton value="mechanical" className="radio-button-left gear-box"
                                     disabled={this.state.selectedGearBox === 'mechanical'}>
                            Механика
                        </RadioButton>
                        <RadioButton value="automatic" className="radio-button-right gear-box"
                                     disabled={this.state.selectedGearBox === 'automatic'}>
                            Автомат
                        </RadioButton>
                    </RadioGroup>
                </div>
            </div>

        )
    }

}

export default Transmission;