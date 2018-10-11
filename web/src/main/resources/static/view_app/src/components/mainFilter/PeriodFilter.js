/**
 * Created by Mina on 18.09.2018.
 */

import React, {Component} from 'react'
import {CSSTransition} from '../../../node_modules/react-transition-group'
import StyledReactSelect from '../../static/StyledReactSelect';
import ArrowDown from '../../static/ArrowDown';

class PeriodFilter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            yearOfIssue: [],
            visible: false,
            selectedYearFrom: '',
            selectedYearOn: '',
            index: 1
        }
    }

    handleChangeYearFrom = (selectedYearFrom) => {
        this.setState({selectedYearFrom: selectedYearFrom});
        console.log('Selected year from:', selectedYearFrom);
        this.props.onSelectYearFrom(selectedYearFrom);
    }

    handleChangeYearOn = (selectedYearOn) => {
        this.setState({selectedYearOn: selectedYearOn});
        console.log('Selected year on:', selectedYearOn);
        this.props.onSelectYearOn(selectedYearOn);
    }

    handleToggle() {
        this.setState({
            visible: !this.state.visible
        })
    }

    period(yearFrom, yearOn) {
        switch (true) {
            case ((yearFrom === '' && yearOn === '') || (yearFrom === null && yearOn === '') || (yearFrom === '' && yearOn === null)):
                return 'Год выпуска';
            case yearFrom === null && yearOn === null :
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

    componentDidMount() {
        console.log('Request is sent to retrieve years');
        fetch('http://localhost:8080/years')
            .then(result => {
                return result.json();
            })
            .then(data => this.setState({yearOfIssue: data}));
    }

    disabledYearsFrom(yearOn) {
        let yearsFrom = this.state.yearOfIssue.map(function (year, index) {
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
        let yearsOn = this.state.yearOfIssue.map(function (year, index) {
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
        const yearFrom = this.state.selectedYearFrom
        const yearOn = this.state.selectedYearOn
        return (
            <div className={visible === true ? 'rrs rrs--options-visible' : 'rrs'}>
                <div role="button"
                     className="rrs__button"
                     tabIndex="0"
                     onClick={this.handleToggle.bind(this)}
                   //  onBlur={() => this.setState({visible: false})}
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
                                    options={this.disabledYearsFrom(this.state.selectedYearOn)}
                                    placeholder="c"
                                    onChange={this.handleChangeYearFrom}
                                    value={this.state.selectedYearFrom}
                                    searchable={false}
                                />
                            </div>
                            <div >
                                <StyledReactSelect
                                    options={this.disabledYearsOn(this.state.selectedYearFrom)}
                                    placeholder="по"
                                    onChange={this.handleChangeYearOn}
                                    value={this.state.selectedYearOn}
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

export default PeriodFilter;