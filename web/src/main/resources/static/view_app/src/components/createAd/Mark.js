import React, {Component} from 'react';
import StyledSelect from '../../static/StyledReactSelect';
import {getMarks} from '../utils/retrieveMarks';
import Model from './Model';

class Mark extends Component {
    constructor() {
        super();
        this.state = {
            marks: [],
            selectedMark: ''
        }
    }

    handleChange = (selectedMark) => {
        this.setState({selectedMark: selectedMark});
    }

    componentDidMount(){
        getMarks.call(this)
    }

    render() {
        let marks = this.state.marks.map(function (mark) {
            return {value: mark.id, label: mark.markAuto};
        })
        console.log('received marks in create Ad', marks);
        return (
            <div>
            <div>
                <StyledSelect large
                    options={marks}
                    onChange={this.handleChange}
                    placeholder="Марка"
                    value={this.state.selectedMark}
                    searchable={false}
                />
            </div>
                <div>
                    <Model passedMark={this.state.selectedMark}/>
                </div>
            </div>
        );
    }
}

export default Mark;