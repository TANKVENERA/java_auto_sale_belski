/**
 * Created by Mina on 21.02.2019.
 */

import {MARK_IS_UPDATED_, MODEL_IS_UPDATED_,
    PREVMARK_IS_UPDATED, UPLOAD_MODELS, BODY_STYLE_IS_UPDATED,
    TRANSMISSION_IS_UPDATED, COLOR_IS_UPDATED, ENGINE_VALUE_IS_UPDATED,
    PRICE_IS_UPDATED, YEAR_OF_ISSUE_IS_UPDATED, FUEL_TYPE_IS_UPDATED,
    GEAR_BOX_TYPE_IS_UPDATED, MILEAGE_VALUE_IS_UPDATED,
    UNIT_OF_DISTANSE_MEASURE_IS_UPDATED, CURRENCY_TYPE_IS_UPDATED,
    DESCRIPTION_IS_UPDATED, IMAGES_ARE_UPDATED, IMAGE_IS_DELETED, PRIMARY_IMG_INDEX} from  './action-types';

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
})

export const uploadModels = models => ( {
    type: UPLOAD_MODELS,
    models: models
})

export const updateYearOfIssue = yearOfIssue => ({
    type: YEAR_OF_ISSUE_IS_UPDATED,
    yearOfIssue: yearOfIssue
});

export const updatePrice = price => ({
    type: PRICE_IS_UPDATED,
    price: price
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

export const updateFuelType = fuelType => ({
    type: FUEL_TYPE_IS_UPDATED,
    fuelType: fuelType
});

export const updateGearBoxType = gearBoxType => ({
    type: GEAR_BOX_TYPE_IS_UPDATED,
    gearBoxType: gearBoxType
});

export const updateMileage = mileage => ({
    type: MILEAGE_VALUE_IS_UPDATED,
    mileage: mileage
});

export const updateCurrencyType = currencyType => ({
    type: CURRENCY_TYPE_IS_UPDATED,
    currencyType: currencyType
});

export const updateUnitOfDistanceMeasure = unitOfDistanceMeasure => ({
    type: UNIT_OF_DISTANSE_MEASURE_IS_UPDATED,
    unitOfDistanceMeasure: unitOfDistanceMeasure
});

export const updateDescription = description => ({
    type: DESCRIPTION_IS_UPDATED,
    description: description
});

export const updateImages = (images) => ({
    type: IMAGES_ARE_UPDATED,
    images: images,
});

export const updatePrimaryImgIndex = (index) => ({
    type: PRIMARY_IMG_INDEX,
    index: index
});

export const imageDeleted = (index) => ({
    type: IMAGE_IS_DELETED,
    index: index
});