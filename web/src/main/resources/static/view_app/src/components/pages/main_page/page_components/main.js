import React, {Component} from 'react';
import Head from '../../head/page_components/head';
import MainFilter from './mainFilter/MainFilter'

class main extends Component {

    render() {
        return (
            <div>
                <div>
                    <Head />
                </div>
                <div>
                    <MainFilter />
                </div>
            </div>
        );
    }
}

export default main;