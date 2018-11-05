import {MARK_IS_UPDATED, MODEL_IS_UPDATED, PREVMARK_IS_UPDATED} from  './action-types';

export const updateMark = (mark) => ({
    type: MARK_IS_UPDATED,
    mark: mark,
    });

export const updateModel = model => ({
    type: MODEL_IS_UPDATED,
    model: model
});

export const updatePrevMark = prevMark => ({
    type: PREVMARK_IS_UPDATED,
    prevMark: prevMark
})