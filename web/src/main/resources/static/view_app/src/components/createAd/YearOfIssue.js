import React, {Component} from 'react'
import StyledSelect from '../../static/StyledReactSelect';
import {retrieveData, validateField} from '../utils/util';
import {ErrorPrinter} from '../utils/errorPrinter';

const error = 'Выберите год выпуска';

class YearOfIssue extends Component {

    constructor(props) {
        super(props)
        this.state = {
            yearsOfIssue: [],
            error: error,
            selectedYear: ''
        }
    }

    handleChange = (selectedYear) => {
        this.setState({selectedYear: selectedYear})
        const yearOfIssue = selectedYear === null ? '' : selectedYear.label;
        validateField.call(this, yearOfIssue, error);
    }

    componentDidMount() {
        console.log('Request is sent to retrieve yearsOF');
        retrieveData.call(this, 'yearsOfIssue', 'years');
    }

    render() {
        const yearsOfIssue = this.state.yearsOfIssue.map(function (year, index) {
            return {value: index, label: year}
        });
        return (
            <div className="form_item">
                <div className="form_item_label">
                    Год выпуска
                </div>
                <div className="form_item_field" style={{paddingRight: '150px'}}>
                    <StyledSelect large
                                  style={{width: '180px'}}
                                  menuContainerStyle={{width: '180px'}}
                                  onChange={this.handleChange}
                                  placeholder="Год выпуска"
                                  options={yearsOfIssue}
                                  value={this.state.selectedYear}
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

export default YearOfIssue;