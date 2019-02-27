import React, {Component} from 'react';
import StyledSelect from '../../../../../static/StyledReactSelect';
import {validateField} from '../../../../utils/util';
import {ErrorPrinter} from '../../../../utils/errorPrinter';
import {connect} from '../../../../../../node_modules/react-redux';
import {updateBodyStyle} from '../../actions/formActions/actions';

const error = 'Выберите кузов авто';

const MapStateToProps = (state) => {
    return {
        bodyStyles: state.staticData.dataObject.bodyStyles,
        bodyStyle: state.createAdParams.bodyStyle
    }
};

const MapDispatchToProps = (dispatch) => {
    return {
        updateBodyStyle: (bodyStyle) => dispatch(updateBodyStyle(bodyStyle))
    }
};

class BodyStyle extends Component {
    constructor() {
        super();
        this.state = {
            error: error,
        }
    }

    handleChange = (selectedStyle) => {
        this.props.updateBodyStyle(selectedStyle);
        const style = selectedStyle === null ? '' : selectedStyle.label;
        validateField.call(this, style, error);
    }

    render() {
        let styles = this.props.bodyStyles.map(function (style, index) {
            return {value: index, label: style};
        })
        return (
            <div className="form_item">
                <div className="form_item_label">
                    Кузов
                </div>
                <div className="form_item_field">
                    <StyledSelect large
                                  options={styles}
                                  onChange={this.handleChange}
                                  placeholder="Кузов"
                                  value={this.props.bodyStyle}
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

export default connect(MapStateToProps, MapDispatchToProps)(BodyStyle);