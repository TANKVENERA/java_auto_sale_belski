package ru.mail.mina.service.model;

/**
 * Created by Mina on 15.08.2018.
 */
public class CarFeatureDTO {

    private Integer id;

    private String carFeature;

    private String carSign;

    public String getCarFeature() {
        return carFeature;
    }

    public void setCarFeature(String carFeature) {
        this.carFeature = carFeature;
    }

    public String getKey() {
        return carSign;
    }

    public void setKey(String key) {
        this.carSign = key;
    }
}
