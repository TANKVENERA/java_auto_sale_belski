import React, {Component} from 'react';
import {ErrorPrinter} from '../utils/errorPrinter';
import {validateField, addWhiteSpace} from '../utils/util'
import StyledSelect from '../../static/StyledReactSelect'
import {updateMileage, updateUnitOfDistanceMeasure} from '../../actions/index';
import {connect} from '../../../node_modules/react-redux';

const errors = ['Укажите пробег авто',
    'Пробег превышает допустимый максимум']

const MapStateToProps = (state) => {
    return {
        mileage: state.createAdParams.mileage,
        unitOfDistanceMeasure: state.createAdParams.unitOfDistanceMeasure
    }
};

const MapDispatchToProps = (dispatch) => {
    return {
        updateMileage: (mileage) => dispatch(updateMileage(mileage)),
        updateUnitOfDistanceMeasure: (unitOfDistanceMeasure) =>
            dispatch(updateUnitOfDistanceMeasure(unitOfDistanceMeasure)),
    }
};

class Mileage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            error: errors[0]
        }
    }

    handleMeasureChange = (selectedOption) => {
        this.props.updateUnitOfDistanceMeasure(selectedOption)
    };

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
            this.props.updateMileage(addWhiteSpace.call(this, mileage))
        }
    };

    render() {
        const measureOptions = [{value: '1', label: 'км'},
                                {value: '2', label: 'мили'}];
        return (
            <div className="form_item">
                <div className="form_item_label">
                    <label>Пробег</label>
                </div>
                <div className="form_item_field">
                    <div style={{display: 'flex'}}>
                        <div>
                            <input value={this.props.mileage}
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
                                          value={this.props.unitOfDistanceMeasure === '' ? measureOptions[0]
                                              : this.props.unitOfDistanceMeasure}
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

export default connect(MapStateToProps, MapDispatchToProps)(Mileage);