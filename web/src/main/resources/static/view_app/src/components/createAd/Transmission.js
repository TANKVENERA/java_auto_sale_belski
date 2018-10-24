import React, {Component} from 'react';
import StyledSelect from '../../static/StyledReactSelect';
import {retrieveData, validateField} from '../utils/util';
import {ErrorPrinter} from '../utils/errorPrinter';

const error = 'Выберите тип привода';

class Transmission extends Component {
    constructor() {
        super();
        this.state = {
            transmissions: [],
            selectedTransmission: '',
            error: error
        }
    }

    handleChange = (selectedTransmission) => {
        this.setState({selectedTransmission: selectedTransmission});
        const transmission = selectedTransmission === null ? '' : selectedTransmission.label;
        validateField.call(this, transmission, error);
    }

    componentDidMount(){
        retrieveData.call(this, 'transmissions', 'transm');
    }

    render() {
        let transmissions = this.state.transmissions.map(function (transmission, index) {
            return {value: index, label: transmission};
        })
        return (
            <div style={{display : 'flex'}}>
                <div>
                    <StyledSelect large
                                  options={transmissions}
                                  onChange={this.handleChange}
                                  placeholder="Привод"
                                  value={this.state.selectedTransmission}
                                  backspaceRemoves={false}
                                  escapeClearsValue={false}
                                  deleteRemoves={false}
                    />
                </div>
                <div>
                    <ErrorPrinter formErrors={this.state.error}/>
                </div>
            </div>
        );
    }
}

export default Transmission;