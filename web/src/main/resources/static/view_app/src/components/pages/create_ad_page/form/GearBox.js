import React, {Component} from 'react';
import {RadioGroup, RadioButton} from '../../../../../node_modules/react-custom-radio';
import {updateGearBoxType} from '../../../../actions/index';
import {connect} from '../../../../../node_modules/react-redux';

const MapStateToProps = (state) => {
    return {
        gearBoxType: state.createAdParams.gearBoxType
    }
};

const MapDispatchToProps = (dispatch) => {
    return {
        updateGearBoxType: (gearBoxType) => dispatch(updateGearBoxType(gearBoxType))
    }
};

class GearBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedGearBox: 'mechanical'
        }
    }

    handleTransmissionChange = (selectedGearBox) => {
        this.props.updateGearBoxType(selectedGearBox);
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
                        selectedValue={this.props.gearBoxType}
                        onChange={this.handleTransmissionChange}
                    >
                        <RadioButton value="mechanical" className="radio-button-left gear-box"
                                     disabled={this.props.gearBoxType === 'mechanical'}>
                            Механика
                        </RadioButton>
                        <RadioButton value="automatic" className="radio-button-right gear-box"
                                     disabled={this.props.gearBoxType === 'automatic'}>
                            Автомат
                        </RadioButton>
                    </RadioGroup>
                </div>
            </div>

        )
    }

}

export default connect(MapStateToProps, MapDispatchToProps)(GearBox);