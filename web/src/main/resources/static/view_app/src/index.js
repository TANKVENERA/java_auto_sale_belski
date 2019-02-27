import {render} from 'react-dom';
import React from 'react';
import Main from './components/pages/main_page/page_components/main';
import StaticDataUpload from '../src/components/utils/StaticDataUpload';
import CreateAd from './components/pages/create_ad_page/page_components/createAd';
import UserPage from './components/pages/user_page/page_components/userPage';
import {BrowserRouter as Router, Route} from '../node_modules/react-router-dom';
import {Provider} from '../node_modules/react-redux';
import {changeTabAction} from './components/pages/head/actions/changeTabAction/actions'
import {store} from './store/index';

render(
    <Provider store={store}>
        <Router>
            <div>
                <Route component={StaticDataUpload} />
                <Route path='/' component={Main} />
                <Route path='/createAd' component={() => {store.dispatch(changeTabAction(2)); return <CreateAd />}} />
                <Route path='/profile' component={() => {store.dispatch(changeTabAction(3)); return <UserPage />}} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);

