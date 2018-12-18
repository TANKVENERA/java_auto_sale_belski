package ru.mail.mina.service.util;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Mina on 05.12.2018.
 */
public class AdDataObject {

    private String mark;
    private String model;
    private String yearOfIssue;
    private String price;
    private String bodyStyle;
    private String transmission;
    private String color;
    private String engineValue;
    private String fuelType;
    private String gearBoxType;
    private String mileage;
    private String currencyType;
    private String unitOfDistanceMeasure;
    private String description;
    private String primaryImgIndex;
    private List<ImagesObject> images = new ArrayList<>();

    public AdDataObject() {
    }

    public List<ImagesObject> getImages() {
        return images;
    }

    public void setImages(List<ImagesObject> images) {
        this.images = images;
    }

    public String getMark() {
        return mark;
    }

    public void setMark(String mark) {
        this.mark = mark;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getYearOfIssue() {
        return yearOfIssue;
    }

    public void setYearOfIssue(String yearOfIssue) {
        this.yearOfIssue = yearOfIssue;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getBodyStyle() {
        return bodyStyle;
    }

    public void setBodyStyle(String bodyStyle) {
        this.bodyStyle = bodyStyle;
    }

    public String getTransmission() {
        return transmission;
    }

    public void setTransmission(String transmission) {
        this.transmission = transmission;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getEngineValue() {
        return engineValue;
    }

    public void setEngineValue(String engineValue) {
        this.engineValue = engineValue;
    }

    public String getFuelType() {
        return fuelType;
    }

    public void setFuelType(String fuelType) {
        this.fuelType = fuelType;
    }

    public String getGearBoxType() {
        return gearBoxType;
    }

    public void setGearBoxType(String gearBoxType) {
        this.gearBoxType = gearBoxType;
    }

    public String getMileage() {
        return mileage;
    }

    public void setMileage(String mileage) {
        this.mileage = mileage;
    }

    public String getCurrencyType() {
        return currencyType;
    }

    public void setCurrencyType(String currencyType) {
        this.currencyType = currencyType;
    }

    public String getUnitOfDistanceMeasure() {
        return unitOfDistanceMeasure;
    }

    public void setUnitOfDistanceMeasure(String unitOfDistanceMeasure) {
        this.unitOfDistanceMeasure = unitOfDistanceMeasure;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPrimaryImgIndex() {
        return primaryImgIndex;
    }

    public void setPrimaryImgIndex(String primaryImgIndex) {
        this.primaryImgIndex = primaryImgIndex;
    }

    @Override
    public String toString() {
        return "AdDataObject{" +
                "mark='" + mark + '\'' +
                ", model='" + model + '\'' +
                ", yearOfIssue='" + yearOfIssue + '\'' +
                ", price='" + price + '\'' +
                ", bodyStyle='" + bodyStyle + '\'' +
                ", transmission='" + transmission + '\'' +
                ", color='" + color + '\'' +
                ", engineValue='" + engineValue + '\'' +
                ", fuelType='" + fuelType + '\'' +
                ", gearBoxType='" + gearBoxType + '\'' +
                ", mileage='" + mileage + '\'' +
                ", currencyType='" + currencyType + '\'' +
                ", unitOfDistanceMeasure='" + unitOfDistanceMeasure + '\'' +
                ", description='" + description + '\'' +
                ", primaryImgIndex='" + primaryImgIndex + '\'' +
                ", images=" + images +
                '}';
    }
}
