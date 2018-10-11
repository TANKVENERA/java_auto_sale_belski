import React, {Component} from 'react';
import {Link} from '../../../node_modules/react-router-dom';
import '../../../node_modules/react-select-v1/dist/react-select.css';
import Mark from '../createAd/Mark';

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
            </div>
        );
    }
}

export default createAd;