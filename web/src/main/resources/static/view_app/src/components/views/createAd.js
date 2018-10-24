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

class createAd extends Component {
    constructor(){
        super()
        this.state = {
            marks: ''
        }
    };

    render() {
        return (
            <div>
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
                    <Description/>
                </div>
            </div>
        );
    }
}

export default createAd;