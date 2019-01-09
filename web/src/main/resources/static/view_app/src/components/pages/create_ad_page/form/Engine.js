import React, {Component} from 'react';
import {ErrorPrinter} from '../../../utils/errorPrinter';
import {validateField, addWhiteSpace} from '../../../utils/util'
import {updateEngineValue} from '../../../../actions/index';
import {connect} from '../../../../../node_modules/react-redux';

const errors = ['Укажите объём двигателя',
                'Объём превышает допустимый максимум']

const volumeCalc = {
    verticalAlign: '-10px',
    fontSize: '18px',
    fontFamily: 'Arial',
    paddingRight: '10px',
};

const MapStateToProps = (state) => {
    return {
        engineValue: state.createAdParams.engineValue
    }
};

const MapDispatchToProps = (dispatch) => {
    return {
        updateEngineValue: (engineValue) => dispatch(updateEngineValue(engineValue))
    }
};

class Engine extends Component {

    constructor() {
        super()
        this.state = {
            error: errors[0]
        }
    }

    handleChange = (event) => {
        let volume = event.target.value;
        if (volume.includes(' ')) {
            volume = volume.split(' ').join('');
        }
        const regex = /^([1-9]{1})([0-9]{1,9})?$/;
        if (regex.test(volume) || volume === '') {
            if (volume.length > 5) {
                validateField.call(this, volume, errors[1]);
            }
            else {
                validateField.call(this, volume, errors[0]);
            }
           this.props.updateEngineValue(addWhiteSpace.call(this, volume))
        }
    }

    render() {
        return (
            <div className="form_item">
                <div className="form_item_label">
                    Объём двигатля
                </div>
                <div className="form_item_field" style={{paddingRight: '98px'}}>
                    <input value={this.props.engineValue}
                           className="form_item_input"
                           onChange={this.handleChange}
                           placeholder="Объём двигателя"
                           size="10"
                    />
                </div>
                <div className="form_item_error">
                    <div  style={{display: 'flex'}}>
                        <div>
                            <label style={volumeCalc}>
                                ({Number((this.props.engineValue.split(' ').join('')/1000).toFixed(1) )} л.)
                            </label>
                        </div>
                        <div>
                            <ErrorPrinter formErrors={this.state.error}/>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

export default connect(MapStateToProps, MapDispatchToProps)(Engine);