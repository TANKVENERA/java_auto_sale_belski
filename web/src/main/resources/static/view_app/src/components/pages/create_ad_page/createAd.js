import React, {Component} from 'react';
import '../../../../node_modules/react-select-v1/dist/react-select.css';
import Mark from './form/Mark';
import YearOfIssue from './form/YearOfIssue';
import Description from './form/Description';
import BodyStyle from './form/BodyStyle';
import GearBox from './form/GearBox';
import Transmission from './form/Transmission';
import Images from './form/Images';
import Color from './form/Color';
import PriceAndCurrency from './form/PriceAndCurrency';
import Fuel from './form/Fuel';
import Mileage from './form/Mileage';
import Engine from './form/Engine';
import PrimaryButton from './form/PrimaryButton';
import '../../../static/createAd.css'

document.body.style = 'background: #eff2f3';

class createAd extends Component {
    constructor(){
        super()
        this.state = {
            marks: ''
        }
    };

    render() {
        return (
            <div className="main_wrapper">
                <div>
                    <Mark/>
                </div>
                <div>
                    <YearOfIssue/>
                </div>
                <div>
                    <BodyStyle/>
                </div>
                <div>
                    <GearBox/>
                </div>
                <div>
                    <Transmission/>
                </div>
                <div>
                    <Color/>
                </div>
                <div>
                    <Engine/>
                </div>
                <div>
                    <Fuel/>
                </div>
                <div>
                    <PriceAndCurrency/>
                </div>
                <div>
                    <Mileage/>
                </div>
                <div>
                    <Description/>
                </div>
                <div>
                    <Images/>
                </div>
                <div>
                    <PrimaryButton/>
                </div>
            </div>
        );
    }
}

export default createAd;