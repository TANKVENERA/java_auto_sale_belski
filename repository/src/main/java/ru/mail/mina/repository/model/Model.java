package ru.mail.mina.repository.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

import static javax.persistence.GenerationType.IDENTITY;

/**
 * Created by Администратор on 03.10.2017.
 */

@Entity
@Table(name = "t_model_static")
public class Model implements Serializable {

    private static final long serialVersionUID = 8343060893941883159L;

    @Id
    @GeneratedValue(strategy = IDENTITY)
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Model model = (Model) o;
        return Objects.equals(id, model.id) &&
                Objects.equals(modelAuto, model.modelAuto);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, modelAuto);
    }

    @Override
    public String toString() {
        return "Model{" +
                "id='" + id +
                ", modelAuto='" + modelAuto + '\'' +
                "}";
    }
}
