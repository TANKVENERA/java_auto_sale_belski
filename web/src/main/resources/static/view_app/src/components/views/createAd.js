import React, {Component} from 'react';
import {Link} from '../../../node_modules/react-router-dom';
import '../../../node_modules/react-select-v1/dist/react-select.css';
import Mark from '../createAd/Mark';
import YearOfIssue from '../createAd/YearOfIssue';
import Description from '../createAd/Description';
import BodyStyle from '../createAd/BodyStyle';
import GearBox from '../createAd/GearBox';
import Transmission from '../createAd/Transmission';
import Color from '../createAd/Color';
import PriceAndCurrency from '../createAd/PriceAndCurrency';
import Fuel from '../createAd/Fuel';
import Mileage from '../createAd/Mileage';
import Engine from '../createAd/Engine';
import '../../static/createAd.css'

document.body.style = 'background: #eff2f3';

// const wrapper = {
//     backgroundColor: "#fff",
//     width: '92%',
//     position: 'absolute',
//     left: '4%',
//     -webkit-box-shadow: '10px 10px 21px -10px rgba(0,0,0,0.75)',
//     moz_box_shadow: '10px 10px 21px -10px rgba(0,0,0,0.75)',
//     box_shadow: '10px 10px 21px -10px rgba(0,0,0,0.75)'
// };

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
                <h2>
                    <Link to='/'>Home Page</Link>
                </h2>
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
            </div>
        );
    }
}

export default createAd;