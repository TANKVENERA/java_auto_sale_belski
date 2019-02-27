import React, {Component} from 'react';
import {StyledTextArea} from '../../../../../static/StyledTextArea';
import {validateField} from '../../../../utils/util'
import {ErrorPrinter} from '../../../../utils/errorPrinter';
import {connect} from '../../../../../../node_modules/react-redux';
import {updateDescription} from '../../actions/formActions/actions';

const error = ['Опишите ваш автомобиль']

const MapStateToProps = (state) => {
    return {
        description: state.createAdParams.description,

    }
};

const MapDispatchToProps = (dispatch) => {
    return {
        updateDescription: (description) => dispatch(updateDescription(description)),

    }
};

class Description extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: error
        }
    }

    handleChange = (event) => {
        let descr = event.target.value;
       this.props.updateDescription(descr)
        validateField.call(this, descr, error)
    }

    render() {
        return (
            <div className="form_item">
                <div className="form_item_label">
                    <label>Описание</label>
                </div>
                <div className="form_item_field">
                    <StyledTextArea
                        placeholder='Описание...'
                        minRows={5}
                        value={this.props.description}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form_item_error">
                    <ErrorPrinter formErrors={this.state.error}/>
                </div>
            </div>

        )
    }

}

export default connect(MapStateToProps, MapDispatchToProps)(Description);