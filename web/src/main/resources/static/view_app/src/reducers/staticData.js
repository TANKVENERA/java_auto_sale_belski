import {UPLOAD_STATIC_DATA} from '../actions/action-types';

const initialState = {
    dataObject: {
        marks: [], colors: [], yearsOfIssue: [],
        prices: [], bodyStyles: [], transmissions: []
    }
};

export default function staticData(state = initialState, action) {
    switch (action.type) {
        case UPLOAD_STATIC_DATA:
            return {...state, dataObject: action.dataObject};
        default:
            return state;
    }
}