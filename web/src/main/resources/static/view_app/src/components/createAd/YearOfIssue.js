import React, {Component} from 'react'
import StyledSelect from '../../static/StyledReactSelect';
import {validateField} from '../utils/util';
import {ErrorPrinter} from '../utils/errorPrinter';
import {connect} from '../../../node_modules/react-redux';
import {updateYearOfIssueFrom} from '../../actions/index';

const error = 'Выберите год выпуска';

const MapStateToProps = (state) => {
    return {
        years: state.dataObject.yearsOfIssue,
        yearOfIssue: state.yearOfIssueFrom
    }
};

const MapDispatchToProps = (dispatch) => {
    return {
        updateYearOfIssue: (year) => dispatch(updateYearOfIssueFrom(year))
    }
};

class YearOfIssue extends Component {

    constructor(props) {
        super(props)
        this.state = {
            error: error
        }
    }

    handleChange = (selectedYear) => {
        this.props.updateYearOfIssue(selectedYear)
        const yearOfIssue = selectedYear === null ? '' : selectedYear.label;
        validateField.call(this, yearOfIssue, error);
    };

    render() {
        const yearsOfIssue = this.props.years.map(function (year, index) {
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
                                  value={this.props.yearOfIssue}
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

export default connect(MapStateToProps, MapDispatchToProps)(YearOfIssue);