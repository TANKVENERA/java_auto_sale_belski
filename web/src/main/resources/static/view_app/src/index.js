import {render} from 'react-dom';
import React from 'react';
import main from './components/pages/main_page/page_components/main';
import StaticDataUpload from '../src/components/utils/StaticDataUpload';
import createAd from './components/pages/create_ad_page/createAd';
import {BrowserRouter as Router, Route} from '../node_modules/react-router-dom';
import {Provider} from '../node_modules/react-redux';
import {store} from './store/index';

render(
    <Provider store={store}>
        <Router>
            <div>
                <Route component={StaticDataUpload}/>
                <Route path='/' exact component={main}/>
                <Route path='/createAd'  component={createAd}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);