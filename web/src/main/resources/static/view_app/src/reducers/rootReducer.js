import {combineReducers} from '../../node_modules/redux';
import staticData from './staticData';
import mainFilterParams from '../components/pages/main_page/reducers/mainFilterParams';
import createAdParams from './createAdParams';
import signUpParams from '../components/pages/head/reducers/signUpParams'
import signUpErrors from '../components/pages/head/reducers/signUpErrors'

export default combineReducers({
    staticData,
    mainFilterParams,
    createAdParams,
    signUpParams,
    signUpErrors
})
