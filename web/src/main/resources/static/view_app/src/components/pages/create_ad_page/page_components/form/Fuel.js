import React, {Component} from 'react'
import {RadioGroup, RadioButton} from '../../../../../../node_modules/react-custom-radio';
import {updateFuelType} from '../../actions/formActions/actions';
import {connect} from '../../../../../../node_modules/react-redux';

const MapStateToProps = (state) => {
    return {
        fuelType: state.createAdParams.fuelType
    }
};

const MapDispatchToProps = (dispatch) => {
    return {
        updateFuelType: (fuelType) => dispatch(updateFuelType(fuelType))
    }
};

class Fuel extends Component {

    handleFuelTypeChange = (selectedFuelType) => {
        this.props.updateFuelType(selectedFuelType);
    }

    render() {
        return (
            <div className="form_item">
                <div className="form_item_label">
                    <label>Тип топлива</label>
                </div>
                <div className="form_item_field">
                    <RadioGroup
                        selectedValue={this.props.fuelType}
                        onChange={this.handleFuelTypeChange}
                    >
                        <RadioButton value="oil" className="radio-button-left fuel"
                                     disabled={this.props.fuelType === 'oil'}>
                            Бензин
                        </RadioButton>
                        <RadioButton value="diesel" className="radio-button-right fuel"
                                     disabled={this.props.fuelType === 'diesel'}>
                            Дизель
                        </RadioButton>
                    </RadioGroup>
                </div>
            </div>

        )
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(Fuel);