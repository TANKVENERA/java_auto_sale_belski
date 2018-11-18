import {MARK_IS_UPDATED, MODEL_IS_UPDATED,
        PREVMARK_IS_UPDATED, UPLOAD_STATIC_DATA,
        UPLOAD_MODELS, YEAR_OF_ISSUE_FROM_IS_UPDATED, YEAR_OF_ISSUE_ON_IS_UPDATED,
        PRICE_FROM_IS_UPDATED, PRICE_ON_IS_UPDATED, BODY_STYLE_IS_UPDATED,
        TRANSMISSION_IS_UPDATED, COLOR_IS_UPDATED, ENGINE_VALUE_IS_UPDATED} from  '../actions/action-types';
import {store} from '../store/index';


const initialState = {
    mark: '',
    model: '',
    models: [],
    previousMark: '',
    yearOfIssueFrom: '',
    bodyStyle: '',
    yearOfIssueOn: '',
    priceFrom: '',
    priceOn: '',
    transmission: '',
    color: '',
    engineValue: '',
    dataObject: {marks: [], colors: [], yearsOfIssue: [],
                 prices: [], bodyStyles: [], transmissions: []}

};

export  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case MARK_IS_UPDATED:
            console.log('LOLOLOLOL', action.mark, '  ', store.getState());
            return { ...state, mark: action.mark};
        case PREVMARK_IS_UPDATED:
            return {...state, previousMark: action.prevMark}
        case MODEL_IS_UPDATED:
            return { ...state, model: action.model};
        case UPLOAD_STATIC_DATA:
            console.log('DATAA', action.dataObject, '  ', store.getState());
            return { ...state, dataObject: action.dataObject};
        case UPLOAD_MODELS:
            console.log('MODELS', action.models, '  ', store.getState());
            return { ...state, models: action.models};
        case YEAR_OF_ISSUE_FROM_IS_UPDATED:
            return { ...state,  yearOfIssueFrom: action.yearOfIssueFrom};
        case YEAR_OF_ISSUE_ON_IS_UPDATED:
            return { ...state,  yearOfIssueOn: action.yearOfIssueOn};
        case PRICE_FROM_IS_UPDATED:
            return { ...state,  priceFrom: action.priceFrom};
        case PRICE_ON_IS_UPDATED:
            return { ...state,  priceOn: action.priceOn};
        case BODY_STYLE_IS_UPDATED:
            return { ...state,  bodyStyle: action.bodyStyle};
        case TRANSMISSION_IS_UPDATED:
            return { ...state,  transmission: action.transmission};
        case COLOR_IS_UPDATED:
            return { ...state,  color: action.color};
        case ENGINE_VALUE_IS_UPDATED:
            console.log('ENGINE IS ', action.engineValue);
            return { ...state,  engineValue: action.engineValue};
        default:
            return state;
    }
};
