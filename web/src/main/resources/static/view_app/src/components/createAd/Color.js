import React, {Component} from 'react'
import StyledSelect from '../../static/StyledReactSelect';
import {validateField} from '../utils/util';
import {ErrorPrinter} from '../utils/errorPrinter';
import {connect} from '../../../node_modules/react-redux';
import {updateColor} from '../../actions/index';


const error = 'Выберите цвет';

const MapStateToProps = (state) => {
    return {
        colors: state.dataObject.colors,
        color: state.color
    }
};

const MapDispatchToProps = (dispatch) => {
    return {
        updateColor: (color) => dispatch(updateColor(color))
    }
};

class Color extends Component {

    constructor(props) {
        super(props)
        this.state = {
            error: error,
        }
    }

    handleChange = (selectedColor) => {
        this.props.updateColor(selectedColor);
        const color = selectedColor === null ? '' : selectedColor.label;
        validateField.call(this, color, error);
    }

    render() {
        const colors = this.props.colors.map(function (color, index) {
            return {value: index, label: color}
        });
        return (
            <div className="form_item">
                <div className="form_item_label">
                    Цвет
                </div>
                <div className="form_item_field">
                    <StyledSelect large
                                  onChange={this.handleChange}
                                  placeholder="Цвет"
                                  options={colors}
                                  value={this.props.color}
                                  backspaceRemoves={false}
                                  escapeClearsValue={false}
                                  deleteRemoves={false}
                    />
                </div>
                <div className="form_item_error">
                    <ErrorPrinter formErrors={this.state.error}/>
                </div>
            </div>

        )
    }

}

export default connect(MapStateToProps, MapDispatchToProps)(Color);