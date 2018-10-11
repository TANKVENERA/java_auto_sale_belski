import {render} from 'react-dom';
import React from 'react';
import main from './components/views/main';
import createAd from './components/views/createAd';
import {BrowserRouter as Router, Route} from '../node_modules/react-router-dom';


render(
    <Router>
        <div>
            <Route path='/' exact component={main}/>
            <Route path='/createAd'  component={createAd}/>
        </div>
    </Router>,
    document.getElementById('root')
)