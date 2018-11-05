import {render} from 'react-dom';
import React from 'react';
import main from './components/views/main';
import createAd from './components/views/createAd';
import {BrowserRouter as Router, Route} from '../node_modules/react-router-dom';
import {Provider} from '../node_modules/react-redux';
import {store} from './store/index';

render(
    <Provider store={store}>
        <Router>
            <div>
                <Route path='/' exact component={main}/>
                <Route path='/createAd'  component={createAd}/>
            </div>
        </Router>
    </Provider>,
        document.getElementById('root')
)