import {
    PREVMARK_IS_UPDATED, UPLOAD_MODELS, YEAR_OF_ISSUE_IS_UPDATED,
    PRICE_IS_UPDATED, BODY_STYLE_IS_UPDATED, TRANSMISSION_IS_UPDATED,
    COLOR_IS_UPDATED, ENGINE_VALUE_IS_UPDATED, FUEL_TYPE_IS_UPDATED,
    GEAR_BOX_TYPE_IS_UPDATED, MILEAGE_VALUE_IS_UPDATED, UNIT_OF_DISTANSE_MEASURE_IS_UPDATED,
    CURRENCY_TYPE_IS_UPDATED, DESCRIPTION_IS_UPDATED
} from '../actions/action-types';

import {store} from '../store/index';

const initialState = {
    mark: '',
    model: '',
    models: [],
    previousMark: '',
    yearOfIssue: '',
    price: '',
    bodyStyle: '',
    transmission: '',
    color: '',
    engineValue: '',
    fuelType: 'oil',
    gearBoxType: 'mechanical',
    mileage: '',
    currencyType: {value: '1', label: 'usd'},
    unitOfDistanceMeasure: {value: '1', label: 'км'},
    description: ''
};

export default function createAdParams(state = initialState, action) {
    switch (action.type) {
        case 'MARK_IS_UPDATED_CREATE_AD':
            return { ...state, mark: action.mark};
        case PREVMARK_IS_UPDATED:
            return {...state, previousMark: action.prevMark}
        case 'MODEL_IS_UPDATED_CREATE_AD':
            console.log('MODEL_IS_UPDATED', action.model)
            return { ...state, model: action.model};
        case UPLOAD_MODELS:
            return { ...state, models: action.models};
        case YEAR_OF_ISSUE_IS_UPDATED:
            console.log('YEAROF', store.getState());
            return { ...state,  yearOfIssue: action.yearOfIssue};
        case PRICE_IS_UPDATED:
            console.log('PRICE_IS', store.getState());
            return { ...state,  price: action.price};
        case BODY_STYLE_IS_UPDATED:
            return {...state, bodyStyle: action.bodyStyle};
        case TRANSMISSION_IS_UPDATED:
            return {...state, transmission: action.transmission};
        case COLOR_IS_UPDATED:
            return {...state, color: action.color};
        case ENGINE_VALUE_IS_UPDATED:
            return {...state, engineValue: action.engineValue};
        case FUEL_TYPE_IS_UPDATED:
            return {...state, fuelType: action.fuelType};
        case GEAR_BOX_TYPE_IS_UPDATED:
            return {...state, gearBoxType: action.gearBoxType};
        case MILEAGE_VALUE_IS_UPDATED:
            return {...state, mileage: action.mileage};
        case CURRENCY_TYPE_IS_UPDATED:
            console.log('PCURRENCY', action.currency);
            return {...state, currencyType: action.currencyType};
        case UNIT_OF_DISTANSE_MEASURE_IS_UPDATED:
            return {...state, unitOfDistanceMeasure: action.unitOfDistanceMeasure};
        case DESCRIPTION_IS_UPDATED:
            return {...state, description: action.description};
        default:
            return state;
    }
}

