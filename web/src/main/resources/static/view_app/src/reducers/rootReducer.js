import {combineReducers} from '../../node_modules/redux';
import staticData from './staticData';
import mainFilterParams from './mainFilterParams';
import createAdParams from './createAdParams';

export default combineReducers({
    staticData,
    mainFilterParams,
    createAdParams
})
