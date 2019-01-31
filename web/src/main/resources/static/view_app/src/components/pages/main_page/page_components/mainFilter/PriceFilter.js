/**
 * Created by Mina on 18.09.2018.
 */

import React, {Component} from 'react'
import {CSSTransition} from '../../../../../../node_modules/react-transition-group'
import StyledReactSelect from '../../../../../static/StyledReactSelect';
import './styles/priceFilter.css';
import ArrowDown from '../../../../../static/ArrowDown';
import {RadioGroup, RadioButton} from '../../../../../../node_modules/react-custom-radio'
import {updatePriceFrom, updatePriceOn} from '../../../../../actions/index';
import {connect} from '../../../../../../node_modules/react-redux';

const MapStateToProps = (state) => {
    return {
        prices: state.staticData.dataObject.prices,
        priceFrom: state.mainFilterParams.priceFrom,
        priceOn: state.mainFilterParams.priceOn,
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        updatePriceFrom: (priceFrom) => dispatch(updatePriceFrom(priceFrom)),
        updatePriceOn: (priceFrom) => dispatch(updatePriceOn(priceFrom))
    }
};


class PriceFilter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            selectedCurrency: 'byn'
        }
    }

    handleCurrencyChange = (selectedCurrency) => {
        this.setState({selectedCurrency: selectedCurrency});
        this.props.onSelectCurrency(selectedCurrency);
    }

    handleChangePriceFrom = (selectedPriceFrom) => {
        this.props.updatePriceFrom(selectedPriceFrom);
    }

    handleChangePriceTo = (selectedPriceTo) => {
        this.props.updatePriceOn(selectedPriceTo);
    }

    handleToggle() {
        this.setState({
            visible: !this.state.visible
        })
    }

    priceLimit(priceFrom, priceTo) {
        switch (true) {
            case (priceFrom === '' && priceTo === '') || (priceFrom === null && priceTo === '')
                 || (priceFrom === '' && priceTo === null) || ( priceFrom === null && priceTo === null):
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

    disabledPricesFrom(priceTo) {
        let pricesFrom = this.props.prices.map(function (price, index) {
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
        let pricesTo = this.props.prices.map(function (price, index) {
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
        const priceFrom = this.props.priceFrom;
        const priceTo = this.props.priceOn;

        return (
            <div className={visible === true ? 'rrs rrs--options-visible' : 'rrs'}>
                <div role="button"
                     className="rrs__button"
                     tabIndex="0"
                     onClick={this.handleToggle.bind(this)}
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
                                <StyledReactSelect
                                    options={this.disabledPricesFrom(this.props.priceOn)}
                                    placeholder="от"
                                    onChange={this.handleChangePriceFrom}
                                    value={this.props.priceFrom}
                                    searchable={false}
                                />
                            </div>
                            <div >
                                <StyledReactSelect
                                    options={this.disabledPricesTo(this.props.priceFrom)}
                                    placeholder="до"
                                    onChange={this.handleChangePriceTo}
                                    value={this.props.priceOn}
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

export default connect(MapStateToProps, MapDispatchToProps)(PriceFilter);