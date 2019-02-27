import {
    PREVMARK_IS_UPDATED, UPLOAD_MODELS,
    YEAR_OF_ISSUE_FROM_IS_UPDATED,
    YEAR_OF_ISSUE_ON_IS_UPDATED, PRICE_FROM_IS_UPDATED, PRICE_ON_IS_UPDATED, CURRENCY_TYPE_IS_UPDATED
} from '../actions/mainFilterActions/action-types';

import {store} from '../../../../store/index';

const initialState = {
    mark: '',
    model: '',
    models: [],
    previousMark: '',
    yearOfIssueFrom: '',
    yearOfIssueOn: '',
    priceFrom: '',
    priceOn: '',
    currencyType: ''
};

export default function mainFilterParams(state = initialState, action) {
    switch (action.type) {
        case 'MARK_IS_UPDATED_MAIN_FILTER':
            return {...state, mark: action.mark};
        case PREVMARK_IS_UPDATED:
            return {...state, previousMark: action.prevMark}
        case 'MODEL_IS_UPDATED_MAIN_FILTER':
            return {...state, model: action.model};
        case UPLOAD_MODELS:
            return {...state, models: action.models};
        case YEAR_OF_ISSUE_FROM_IS_UPDATED:
            return {...state, yearOfIssueFrom: action.yearOfIssueFrom};
        case YEAR_OF_ISSUE_ON_IS_UPDATED:
            return {...state, yearOfIssueOn: action.yearOfIssueOn};
        case PRICE_FROM_IS_UPDATED:
            return {...state, priceFrom: action.priceFrom};
        case PRICE_ON_IS_UPDATED:
            return {...state, priceOn: action.priceOn};
        case CURRENCY_TYPE_IS_UPDATED:
            console.log('MAINFILTERPARAMS', action.currencyType, 'STORE', store.getState());
            return {...state, currencyType: action.currencyType};
        default:
            return state;
    }
}