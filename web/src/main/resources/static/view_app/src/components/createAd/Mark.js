import React, {Component} from 'react';
import StyledSelect from '../../static/StyledReactSelect';
import {getMarks} from '../utils/retrieveMarks';

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

    componentWillMount(){
        getMarks.call(this)
    }

    render() {
        let marks = this.state.marks.map(function (mark) {
            return {value: mark.id, label: mark.markAuto};
        })
        console.log('received marks in create Ad', marks);
        return (
            <div>
                <StyledSelect large
                    options={marks}
                    onChange={this.handleChange}
                    placeholder="Марка"
                    value={this.state.selectedMark}
                    searchable={false}
                />
            </div>
        );
    }
}

export default Mark;