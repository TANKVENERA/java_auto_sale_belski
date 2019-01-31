import React, {Component} from 'react';
import SignUpModal from './signUpModal/SignUpModal'
import SignInModal from './signInModal/SignInModal'
import './head.css'

class Head extends Component {

    render() {
        return (
            <div className="head-block">
                <div className="head-element">
                    <SignInModal/>
                </div>
                <div className="head-element">
                    <SignUpModal/>
                </div>
            </div>
        );
    }
}

export default Head;