/**
 * Created by Mina on 18.09.2018.
 */

import React, {Component} from 'react'
import {CSSTransition} from '../../../node_modules/react-transition-group'
import StyledReactSelect from '../../static/StyledReactSelect';
import ArrowDown from '../../static/ArrowDown';
import {connect} from '../../../node_modules/react-redux';
import {updateYearOfIssueFrom, updateYearOfIssueON} from '../../actions/index';

const MapStateToProps = (state) => {
    return {
        yearsOfIssue: state.staticData.dataObject.yearsOfIssue,
        yearOfIssueFrom: state.mainFilterParams.yearOfIssueFrom,
        yearOfIssueOn: state.mainFilterParams.yearOfIssueOn
    }
};

const MapDispatchToProps = (dispatch) => {
    return {
        updateYearOfIssueFrom: (yearFrom) => dispatch(updateYearOfIssueFrom(yearFrom)),
        updateYearOfIssueOn: (yearOn) => dispatch(updateYearOfIssueON(yearOn))
    }
};

class PeriodFilter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: false,
        }
    }

    handleChangeYearFrom = (selectedYearFrom) => {
        this.props.updateYearOfIssueFrom(selectedYearFrom);
    }

    handleChangeYearOn = (selectedYearOn) => {
        this.props.updateYearOfIssueOn(selectedYearOn);
    }

    handleToggle() {
        this.setState({
            visible: !this.state.visible
        })
    }

    period(yearFrom, yearOn) {
        switch (true) {
            case ((yearFrom === '' && yearOn === '') || (yearFrom === null && yearOn === '')
                  || (yearFrom === '' && yearOn === null) || (yearFrom === null && yearOn === null)):
                return 'Год выпуска';
            case (yearFrom === null && yearOn !== null) || (yearFrom === '' && yearOn !== null ):
                return 'по ' + yearOn.label
            case (yearFrom !== null && yearOn === null) || (yearFrom !== null && yearOn === ''):
                return 'c ' + yearFrom.label;
            case (yearFrom !== null && yearOn !== null):
                return 'c ' + yearFrom.label + '  -  по ' + yearOn.label;
            default :
                return 'Год выпуска';
        }
    }

    disabledYearsFrom(yearOn) {
        let yearsFrom = this.props.yearsOfIssue.map(function (year, index) {
            if (yearOn === null) {
                return {value: index, label: year, disabled: false}
            }
            if (parseInt(yearOn.label, 10) > parseInt(year, 10) || yearOn === '') {
                return {value: index, label: year, disabled: false};
            }
            return {value: index, label: year, disabled: true};
        });
        return yearsFrom;
    }

    disabledYearsOn(yearFrom) {
        let yearsOn = this.props.yearsOfIssue.map(function (year, index) {
            if (yearFrom === null) {
                return {value: index, label: year, disabled: false}
            }
            if (parseInt(yearFrom.label, 10) < parseInt(year, 10) || yearFrom === '') {
                return {value: index, label: year, disabled: false};
            }
            return {value: index, label: year, disabled: true};
        });
        return yearsOn;
    }

    render() {
        const {visible} = this.state;
        const yearFrom = this.props.yearOfIssueFrom;
        const yearOn = this.props.yearOfIssueOn;
        return (
            <div className={visible === true ? 'rrs rrs--options-visible' : 'rrs'}>
                <div role="button"
                     className="rrs__button"
                     tabIndex="0"
                     onClick={this.handleToggle.bind(this)}
                >
                    <div className="rrs__label">
                        <span>{this.period(yearFrom, yearOn)}</span>
                        {ArrowDown}
                    </div>
                </div>
                <CSSTransition
                    in={visible}
                    timeout={300}
                    classNames="message"
                    unmountOnExit
                >
                    <div className='arrow_box'>
                        <div className="title">Год выпуска</div>
                        <div className="select_box">
                            <div>
                                <StyledReactSelect
                                    options={this.disabledYearsFrom(this.props.yearOfIssueOn)}
                                    placeholder="c"
                                    onChange={this.handleChangeYearFrom}
                                    value={this.props.yearOfIssueFrom}
                                    searchable={false}
                                />
                            </div>
                            <div >
                                <StyledReactSelect
                                    options={this.disabledYearsOn(this.props.yearOfIssueFrom)}
                                    placeholder="по"
                                    onChange={this.handleChangeYearOn}
                                    value={this.props.yearOfIssueOn}
                                    searchable={false}
                                />
                            </div>
                        </div>
                    </div>
                </CSSTransition>
            </div>
        )
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(PeriodFilter);