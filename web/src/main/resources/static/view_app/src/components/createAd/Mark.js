import React, {Component} from 'react';
import StyledSelect from '../../static/StyledReactSelect';
import {validateField} from '../utils/util';
import Model from './Model';
import {ErrorPrinter} from '../utils/errorPrinter';
import {updateMark} from '../../actions/index';
import {connect} from '../../../node_modules/react-redux';
import {store} from '../../store/index';

const error = 'Введите марку авто';
console.log('EEEEEEE', store.getState());

const MapStateToProps = (state) => {
        return {
            receivedMark: state.mark,
            marks: state.dataObject.marks
        }
}

const MapDispatchToProps = (dispatch) => {
    return {
        updateMark: (mark) => dispatch(updateMark(mark))
    };
};

class Mark extends Component {
    constructor() {
        super();
        this.state = {
            error: error
        }
    }

    handleChange = (selectedMark) => {
        const mark = selectedMark === null ? '' : selectedMark.label;
        this.props.updateMark(selectedMark);
        validateField.call(this, mark, error)
    }

    render() {
        let marks = this.props.marks.map(function (mark) {
            return {value: mark.id, label: mark.markAuto};
        })
        return (
            <div>
                <div className="form_item">
                    <div className="form_item_label">
                        Макра автомобиля
                    </div>
                    <div className="form_item_field">
                        <StyledSelect large
                                      placeholder="Марка"
                                      options={marks}
                                      onChange={this.handleChange}
                                      value={this.props.receivedMark}
                                      backspaceRemoves={false}
                                      escapeClearsValue={false}
                                      deleteRemoves={false}
                        />
                    </div>
                    <div className="form_item_error">
                        <ErrorPrinter formErrors={this.state.error}/>
                    </div>
                </div>
                <div>
                    <Model/>
                </div>
            </div>
        );
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(Mark);