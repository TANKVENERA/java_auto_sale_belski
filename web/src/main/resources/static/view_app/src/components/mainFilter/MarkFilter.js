import React, {Component} from 'react'
import Select from '../../../node_modules/react-responsive-select';
import ModelFilter from './ModelFilter'
import '../../static/markAndModel.css';
import  '../../../node_modules/react-responsive-select/dist/ReactResponsiveSelect.css';
import ArrowDown from '../../static/ArrowDown';
import {getMarks} from '../utils/retrieveMarks'

class MarkFilter extends Component {
    constructor() {
        super();
        this.state = {
            selectedMark: '',
            marks: []
        }
    };

    handleChange = (selectedMark) => {
        this.setState({selectedMark: selectedMark});
        console.log('Option selected:', selectedMark);
        this.props.onSelectMark(selectedMark);
    }

    handleModel = (modelValue) => {
        this.props.onSelectModel(modelValue);
        console.log('received  in mark controller ', modelValue);
    }

    componentWillMount() {
       getMarks.call(this);
    }

    render() {
        let marks = this.state.marks.map(function (mark) {
            return {value: mark.id, text: mark.markAuto};
        })
        console.log('received!!!  mark in MARK controller ', marks);
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
                    <ModelFilter passedMark={this.state.selectedMark} onSelectModelFromModelComp={this.handleModel}/>
                </div>
            </div>
        )
    }
}

export default MarkFilter;