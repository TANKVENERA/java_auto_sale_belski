/**
 * Created by Mina on 25.02.2019.
 */

import '../actions/changeTabAction/action-types'

const initialState = {
    index: 0
};

export default function signUpParams(state = initialState, action) {
    switch (action.type) {
        case 'TAB_IS_CHANGED':
            console.log('TAB_IS_CHANGED', action.index)
            return {...state, index: action.index}
        default:
            return state;
    }
}