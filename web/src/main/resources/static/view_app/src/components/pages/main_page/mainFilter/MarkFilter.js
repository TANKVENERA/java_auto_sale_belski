import React, {Component} from 'react'
import Select from '../../../../../node_modules/react-responsive-select';
import ModelFilter from './ModelFilter'
import './styles/markFilter.css';
import  '../../../../../node_modules/react-responsive-select/dist/ReactResponsiveSelect.css';
import ArrowDown from '../../../../static/ArrowDown';
import {updateMark} from '../../../../actions/index'
import {connect} from '../../../../../node_modules/react-redux';

const MapStateToProps = (state) => {
    return {
        receivedMark: state.mainFilterParams.mark,
        marks: state.staticData.dataObject.marks
    }
};

const MapDispatchToProps = (dispatch) => {
    return {
        updateMark: (mark) => dispatch(updateMark(mark, 'main_filter'))
    }
};

class MarkFilter extends Component {
    constructor() {
        super();
        this.state = {
            selectedMark: ''
        }
    };

    handleChange = (selectedMark) => {
        this.props.updateMark(selectedMark);
    };

    handleModel = (modelValue) => {
        this.props.onSelectModel(modelValue);
        console.log('received  in mark controller ', modelValue);
    };

    render() {
         let marks = this.props.marks.map( (mark) => {
                return {value: mark.id, text: mark.markAuto};
            });
        return (
            <div className="mark_model_box">
                <div className="container_box">
                    <Select
                        noSelectionLabel="Марка"
                        onChange={this.handleChange}
                        isClearable
                        options={marks}
                        caretIcon={ArrowDown}
                    />
                </div>
                <div className="container_box">
                    <ModelFilter/>
                </div>
            </div>
        )
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(MarkFilter);