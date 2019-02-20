import {MARK_IS_UPDATED_, MODEL_IS_UPDATED_,
        PREVMARK_IS_UPDATED,
        UPLOAD_MODELS, YEAR_OF_ISSUE_FROM_IS_UPDATED, YEAR_OF_ISSUE_ON_IS_UPDATED,
        PRICE_FROM_IS_UPDATED, PRICE_ON_IS_UPDATED, CURRENCY_TYPE_IS_UPDATED} from  './action-types';

export const updateMark = (mark, param) => ({
    type: MARK_IS_UPDATED_ + param.toUpperCase(),
    mark: mark,
    });

export const updateModel = (model, param) => ({
    type: MODEL_IS_UPDATED_ + param.toUpperCase(),
    model: model
});

export const updatePrevMark = prevMark => ({
    type: PREVMARK_IS_UPDATED,
    prevMark: prevMark
});

export const uploadModels = models => ( {
    type: UPLOAD_MODELS,
    models: models
});

export const updateYearOfIssueFrom = yearOfIssueFrom => ({
    type: YEAR_OF_ISSUE_FROM_IS_UPDATED,
    yearOfIssueFrom: yearOfIssueFrom
});

export const updateYearOfIssueON = yearOfIssueOn => ({
    type: YEAR_OF_ISSUE_ON_IS_UPDATED,
    yearOfIssueOn: yearOfIssueOn
});

export const updatePriceFrom = priceFrom => ({
    type: PRICE_FROM_IS_UPDATED,
    priceFrom: priceFrom
});

export const updatePriceOn = priceOn => ({
    type: PRICE_ON_IS_UPDATED,
    priceOn: priceOn
});

export const updateCurrencyType = currencyType => ({
    type: CURRENCY_TYPE_IS_UPDATED,
    currencyType: currencyType
});