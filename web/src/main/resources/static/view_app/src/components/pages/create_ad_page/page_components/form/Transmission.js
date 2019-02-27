import React, {Component} from 'react';
import StyledSelect from '../../../../../static/StyledReactSelect';
import {validateField} from '../../../../utils/util';
import {ErrorPrinter} from '../../../../utils/errorPrinter';
import {connect} from '../../../../../../node_modules/react-redux';
import {updateTransmission} from '../../actions/formActions/actions';

const error = 'Выберите тип привода';

const MapStateToProps = (state) => {
    return {
        transmissions: state.staticData.dataObject.transmissions,
        transmission: state.createAdParams.transmission
    }
};

const MapDispatchToProps = (dispatch) => {
    return {
        updateTransmission: (transmission) => dispatch(updateTransmission(transmission))
    }
};

class Transmission extends Component {
    constructor() {
        super();
        this.state = {
            error: error
        }
    }

    handleChange = (selectedTransmission) => {
        this.props.updateTransmission(selectedTransmission);
        const transmission = selectedTransmission === null ? '' : selectedTransmission.label;
        validateField.call(this, transmission, error);
    }

    render() {
        let transmissions = this.props.transmissions.map(function (transmission, index) {
            return {value: index, label: transmission};
        });
        return (
            <div className="form_item">
                <div className="form_item_label">
                    Привод
                </div>
                <div className="form_item_field">
                    <StyledSelect large
                                  options={transmissions}
                                  onChange={this.handleChange}
                                  placeholder="Привод"
                                  value={this.props.transmission}
                                  backspaceRemoves={false}
                                  escapeClearsValue={false}
                                  deleteRemoves={false}
                    />
                </div>
                <div className="form_item_error">
                    <ErrorPrinter formErrors={this.state.error}/>
                </div>
            </div>
        );
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(Transmission);