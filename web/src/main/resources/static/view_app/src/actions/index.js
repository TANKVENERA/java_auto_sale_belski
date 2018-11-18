import {MARK_IS_UPDATED, MODEL_IS_UPDATED,
        PREVMARK_IS_UPDATED, UPLOAD_STATIC_DATA,
        UPLOAD_MODELS, YEAR_OF_ISSUE_FROM_IS_UPDATED, YEAR_OF_ISSUE_ON_IS_UPDATED,
        PRICE_FROM_IS_UPDATED, PRICE_ON_IS_UPDATED, BODY_STYLE_IS_UPDATED,
        TRANSMISSION_IS_UPDATED, COLOR_IS_UPDATED, ENGINE_VALUE_IS_UPDATED} from  './action-types';

export const updateMark = mark => ({
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

export const uploadStaticData = data => ( {
    type: UPLOAD_STATIC_DATA,
    dataObject: data
})

export const uploadModels = models => ( {
    type: UPLOAD_MODELS,
    models: models
})

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

export const updateBodyStyle = bodyStyle => ({
    type: BODY_STYLE_IS_UPDATED,
    bodyStyle: bodyStyle
});

export const updateTransmission = transmission => ({
    type: TRANSMISSION_IS_UPDATED,
    transmission: transmission
});

export const updateColor = color => ({
    type: COLOR_IS_UPDATED,
    color: color
});

export const updateEngineValue = engineValue => ({
    type: ENGINE_VALUE_IS_UPDATED,
    engineValue: engineValue
});