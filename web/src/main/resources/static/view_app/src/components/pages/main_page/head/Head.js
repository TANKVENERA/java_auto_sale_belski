import React, {Component} from 'react';
import SignUpModal from './signUpModal/SignUpModal'
import SignInModal from './signInModal/SignInModal'

class Head extends Component {

    render() {
        return (
            <div>
                <div>
                    <SignInModal/>
                </div>
                <div>
                    <SignUpModal/>
                </div>
            </div>
        );
    }
}

export default Head;