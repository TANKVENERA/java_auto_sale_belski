import React, {Component} from 'react';
import Head from './head/Head';
import MainFilter from './mainFilter/MainFilter'

class main extends Component {

    render() {
        return (
            <div>
                <div>
                    <Head/>
                </div>
                <div>
                    <MainFilter/>
                </div>
            </div>
        );
    }
}

export default main;