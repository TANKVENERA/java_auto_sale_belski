import React, {Component} from 'react';
import StyledSelect from '../../static/StyledReactSelect';
import {retrieveData, validateField} from '../utils/util';
import Model from './Model';
import {ErrorPrinter} from '../utils/errorPrinter';

const error = 'Введите марку авто';

class Mark extends Component {
    constructor() {
        super();
        this.state = {
            marks: [],
            selectedMark: '',
            error: error
        }
    }

    handleChange = (selectedMark) => {
        this.setState({selectedMark: selectedMark});
        const mark = selectedMark === null ? '' : selectedMark.label;
        validateField.call(this, mark, error)
    }

    componentDidMount() {
        retrieveData.call(this, 'marks', '');
    }

    render() {
        let marks = this.state.marks.map(function (mark) {
            return {value: mark.id, label: mark.markAuto};
        })
        console.log('received marks in create Ad', marks);
        return (
            <div>
                <div style={{display: 'flex'}}>
                    <div>
                        <StyledSelect large
                                      placeholder="Марка"
                                      options={marks}
                                      onChange={this.handleChange}
                                      value={this.state.selectedMark}
                                      backspaceRemoves={false}
                                      escapeClearsValue={false}
                                      deleteRemoves={false}
                        />

                    </div>
                    <div>
                        <ErrorPrinter formErrors={this.state.error}/>
                    </div>
                </div>
                <div>
                    <Model passedMark={this.state.selectedMark}/>
                </div>
            </div>
        );
    }
}

export default Mark;