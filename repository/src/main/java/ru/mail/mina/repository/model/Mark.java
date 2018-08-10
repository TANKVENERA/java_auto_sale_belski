package ru.mail.mina.repository.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

import static javax.persistence.GenerationType.IDENTITY;

/**
 * Created by Администратор on 03.10.2017.
 */

@Entity
@Table(name = "t_mark")
public class Mark implements Serializable{

    private static final long serialVersionUID = -4139721875408663348L;

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Integer id;

    private String markAuto;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "FK_Mark")
    private Set<Model> models = new HashSet<>();

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

    public Set<Model> getModels() {
        return models;
    }

    public void setModels(Set<Model> models) {
        this.models = models;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Mark mark = (Mark) o;
        return id == mark.id &&
                Objects.equals(markAuto, mark.markAuto) &&
                Objects.equals(models, mark.models);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, markAuto, models);
    }

    @Override
    public String toString() {
        return "Mark{" +
                "id=" + id +
                ", markAuto='" + markAuto + '\'' +
                ", models=" + models +
                '}';
    }
}
