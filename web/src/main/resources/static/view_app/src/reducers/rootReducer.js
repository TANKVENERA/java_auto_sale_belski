import {combineReducers} from '../../node_modules/redux';
import staticData from './staticData';
import mainFilterParams from '../components/pages/main_page/reducers/mainFilterParams';
import createAdParams from '../components/pages/create_ad_page/reducers/createAdParams';
import signUpParams from '../components/pages/head/reducers/signUpParams'
import signUpErrors from '../components/pages/head/reducers/signUpErrors'
import changeTab from '../components/pages/head/reducers/changeTab'

export default combineReducers({
    staticData,
    mainFilterParams,
    createAdParams,
    signUpParams,
    signUpErrors,
    changeTab
})
