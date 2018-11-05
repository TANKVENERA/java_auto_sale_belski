import {MARK_IS_UPDATED, MODEL_IS_UPDATED, PREVMARK_IS_UPDATED} from  '../actions/action-types';
import {store} from '../store/index';

const initialState = {
    mark: '',
    model: '',
    previousMark: ''
};

export  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case MARK_IS_UPDATED:
            console.log('LOLOLOLOL', action.mark, '  ', store.getState());
            return { ...state, mark: action.mark};
        case PREVMARK_IS_UPDATED:
            console.log('PREVIOUS MARK SET VALUE', action.prevMark, '  ', store.getState());
            return {...state, previousMark: action.prevMark}
        case MODEL_IS_UPDATED:
            return { ...state, model: action.model};
        default:
            return state;
    }
};
