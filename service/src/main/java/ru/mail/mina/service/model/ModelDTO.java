package ru.mail.mina.service.model;

import javax.persistence.criteria.CriteriaBuilder;

/**
 * Created by Mina on 10.08.2018.
 */
public class ModelDTO {

    private Integer id;
    private String modelAuto;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getModelAuto() {
        return modelAuto;
    }

    public void setModelAuto(String modelAuto) {
        this.modelAuto = modelAuto;
    }
}
