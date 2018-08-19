package ru.mail.mina.repository.model;

import javax.persistence.*;
import java.io.Serializable;

import static javax.persistence.GenerationType.IDENTITY;

/**
 * Created by Mina on 15.08.2018.
 */
@Entity
@Table(name = "t_carFeature_static")
public class CarFeature implements Serializable {


    private static final long serialVersionUID = 8275333110897317640L;

    @Id
    @GeneratedValue(strategy = IDENTITY )
    private Integer id;

    private String feature;

    private String carSign;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFeature() {
        return feature;
    }

    public void setFeature(String feature) {
        this.feature = feature;
    }

    public String getCarSign() {
        return carSign;
    }

    public void setCarSign(String carSign) {
        this.carSign = carSign;
    }
}
