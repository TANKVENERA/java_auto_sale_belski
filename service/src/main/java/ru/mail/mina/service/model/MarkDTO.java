package ru.mail.mina.service.model;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Mina on 10.08.2018.
 */
public class MarkDTO {

    private Integer id;
    private String markAuto;
    private List<ModelDTO> models = new ArrayList<>();

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getMarkAuto() {
        return markAuto;
    }

    public void setMarkAuto(String markAuto) {
        this.markAuto = markAuto;
    }

    public List<ModelDTO> getModels() {
        return models;
    }

    public void setModels(List<ModelDTO> models) {
        this.models = models;
    }
}
