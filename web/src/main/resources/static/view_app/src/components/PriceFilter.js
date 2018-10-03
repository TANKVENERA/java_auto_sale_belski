/**
 * Created by Mina on 18.09.2018.
 */

import React, {Component} from 'react'
import {CSSTransition} from '../../node_modules/react-transition-group'
import Select from '../../node_modules/react-select-v1'
import '../../node_modules/react-select-v1/dist/react-select.css';
import '../static/arrowBox.css'
import ArrowDown from '../static/ArrowDown';
// import ButtonGroup from '../../node_modules/react-bootstrap/lib/ButtonGroup'
// import Button from '../../node_modules/react-bootstrap/lib/Button'
import {RadioGroup, RadioButton} from '../../node_modules/react-custom-radio'

class PriceFilter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            prices: [],
            visible: false,
            selectedPriceFrom: '',
            selectedPriceTo: '',
            selectedCurrency: ''
        }
    }

    handleCurrencyChange = (selectedCurrency) => {
        this.setState({selectedCurrency: selectedCurrency});
        console.log('Selected currency:', selectedCurrency);
    }

    handleChangePriceFrom = (selectedPriceFrom) => {
        this.setState({selectedPriceFrom: selectedPriceFrom});
        console.log('Selected price from:', selectedPriceFrom);
    }

    handleChangePriceTo = (selectedPriceTo) => {
        this.setState({selectedPriceTo: selectedPriceTo});
        console.log('Selected price to:', selectedPriceTo);
    }

    handleToggle() {
        this.setState({
            visible: !this.state.visible
        })
    }

    priceLimit(priceFrom, priceTo) {
        switch (true) {
            case (priceFrom === '' && priceTo === '') || (priceFrom === null && priceTo === '') || (priceFrom === '' && priceTo === null):
                return 'Цена';
            case priceFrom === null && priceTo === null :
                return 'Цена';
            case (priceFrom === null && priceTo !== null) || (priceFrom === '' && priceTo !== null ):
                return 'до ' + priceTo.label
            case (priceFrom !== null && priceTo === null) || (priceFrom !== null && priceTo === ''):
                return 'от ' + priceFrom.label;
            case (priceFrom !== null && priceTo !== null):
                return 'от ' + priceFrom.label + '  -  до ' + priceTo.label;
            default :
                return 'Цена';
        }
    }

    componentDidMount() {
        console.log('Request is sent to retrieve prices');
        fetch('http://localhost:8080/prices')
            .then(result => {
                return result.json();
            })
            .then(data => this.setState({prices: data}));
    }

    disabledPricesFrom(priceTo) {
        let pricesFrom = this.state.prices.map(function (price, index) {
            if (priceTo === null) {
                return {value: index, label: price, disabled: false}
            }
            if (parseInt(priceTo.label, 10) > parseInt(price, 10) || priceTo === '') {
                return {value: index, label: price, disabled: false};
            }
            return {value: index, label: price, disabled: true};
        });
        return pricesFrom;
    }

    disabledPricesTo(priceFrom) {
        let pricesTo = this.state.prices.map(function (price, index) {
            if (priceFrom === null) {
                return {value: index, label: price, disabled: false}
            }
            if (parseInt(priceFrom.label, 10) < parseInt(price, 10) || priceFrom === '') {
                return {value: index, label: price, disabled: false};
            }
            return {value: index, label: price, disabled: true};
        });
        return pricesTo;
    }

    render() {
        const {visible} = this.state;
        const priceFrom = this.state.selectedPriceFrom;
        const priceTo = this.state.selectedPriceTo;

        return (
            <div className={visible === true ? 'rrs rrs--options-visible' : 'rrs'}>
                <div role="button"
                     className="rrs__button"
                     tabIndex="0"
                     onClick={this.handleToggle.bind(this)}
                    //  onBlur={() => this.setState({visible: false})}
                >
                    <div className="rrs__label">
                        <span>{this.priceLimit(priceFrom, priceTo)}</span>
                        {ArrowDown}
                    </div>
                </div>
                <CSSTransition
                    in={visible}
                    classNames="message"
                    timeout={300}
                    unmountOnExit
                >
                    <div className='arrow_box'>
                        <div className="head">
                            <div className="title" >Цена</div>
                            <div className="radio_buttons_currency">
                                <RadioGroup
                                    name="car"
                                    selectedValue={this.state.selectedCurrency}
                                    onChange={this.handleCurrencyChange}
                                >
                                    <RadioButton value="byn" className="radio-button-left"
                                                 disabled={this.state.selectedCurrency === 'byn'}>
                                        BYN
                                    </RadioButton>
                                    <RadioButton value="usd" className="radio-button-right"
                                                 disabled={this.state.selectedCurrency === 'usd'}>
                                        USD
                                    </RadioButton>
                                </RadioGroup>
                            </div>
                        </div>
                        <div className="select_box">
                            <div>
                                <Select
                                    options={this.disabledPricesFrom(this.state.selectedPriceTo)}
                                    placeholder="от"
                                    onChange={this.handleChangePriceFrom}
                                    value={this.state.selectedPriceFrom}
                                    searchable={false}
                                />
                            </div>
                            <div >
                                <Select
                                    options={this.disabledPricesTo(this.state.selectedPriceFrom)}
                                    placeholder="до"
                                    onChange={this.handleChangePriceTo}
                                    value={this.state.selectedPriceTo}
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

export default PriceFilter;