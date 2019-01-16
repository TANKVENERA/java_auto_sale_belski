import {combineReducers} from '../../node_modules/redux';
import staticData from './staticData';
import mainFilterParams from './mainFilterParams';
import createAdParams from './createAdParams';
import signUpParams from '../components/pages/main_page/reducers/reducer/signUpParams'

export default combineReducers({
    staticData,
    mainFilterParams,
    createAdParams,
    signUpParams
})
