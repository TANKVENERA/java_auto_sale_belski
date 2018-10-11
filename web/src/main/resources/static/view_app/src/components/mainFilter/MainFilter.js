import React, {Component} from 'react';
import MarkFilter from './MarkFilter';
import PeriodFilter from './PeriodFilter';
import PriceFilter from './PriceFilter'
import '../../static/mainFilter.css';

class MainFilter extends Component {
    constructor() {
        super();
        this.state = {
           mark: '',
           model: '',
            yearFrom: '',
            yearOn: '',
            priceFrom: '',
            priceTo: '',
            currency: ''
        }
    };


    handleMark = (markValue) => {
        this.setState({mark: markValue.text});
    }

    handleModel = (modelValue) => {
        this.setState({model: modelValue.text});
    }

    handleYearFrom = (yearFrom) => {
        this.setState({yearFrom: yearFrom === null ? null : yearFrom.label})
    }

    handleYearOn = (yearOn) => {
        this.setState({yearOn: yearOn === null ? null : yearOn.label})
    }

    handlePriceFrom = (priceFrom) => {
        this.setState({priceFrom: priceFrom === null ? null : priceFrom.label})
    }

    handlePriceTo = (priceTo) => {
        this.setState({priceTo: priceTo === null ? null : priceTo.label})
    }

    handleCurrency = (currency) => {
        this.setState({currency: currency === null ? null : currency})
    }

    render() {
        return (
            <div className="main_filter_box">

                <div className="mark_box">
                    <MarkFilter onSelectMark={this.handleMark} onSelectModel={this.handleModel}/>
                </div>
                <div className="container_box">
                   <PeriodFilter onSelectYearFrom={this.handleYearFrom} onSelectYearOn={this.handleYearOn}/>
                </div>
                <div className="container_box">
                    <PriceFilter onSelectPriceFrom={this.handlePriceFrom}
                                 onSelectPriceTo={this.handlePriceTo}
                                 onSelectCurrency={this.handleCurrency}/>
                </div>
            </div>
        )
    }
}

export default MainFilter;