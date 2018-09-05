package ru.mail.mina.service.model;


import com.fasterxml.jackson.annotation.JsonView;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Mina on 10.08.2018.
 */
public class MarkDTO {

    public interface mark {
    }

    @JsonView(MarkDTO.mark.class)
    private Integer id;

    @JsonView(MarkDTO.mark.class)
    private String markAuto;

    @JsonView(MarkDTO.mark.class)
    private List<ModelDTO> models = new ArrayList<>();

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @JsonView(MarkDTO.mark.class)
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


    @Override
    public String toString() {
        return "MarkDTO{" +
                "id='" + id +
                ",markAuto='" + markAuto + '\'' +
                ",models'" + models +
                "}";
    }
}
