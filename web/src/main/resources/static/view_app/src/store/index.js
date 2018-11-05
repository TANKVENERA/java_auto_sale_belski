import {createStore} from '../../node_modules/redux';
import {rootReducer} from '../reducers/rootReducer';

export const store = createStore(rootReducer);


