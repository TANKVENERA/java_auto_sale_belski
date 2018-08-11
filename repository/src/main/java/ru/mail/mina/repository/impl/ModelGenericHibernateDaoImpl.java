package ru.mail.mina.repository.impl;

import org.springframework.stereotype.Repository;
import ru.mail.mina.repository.dao.ModelGenericHibernateDao;
import ru.mail.mina.repository.model.Ad;
import ru.mail.mina.repository.model.Model;

import javax.persistence.Query;
import java.util.List;

/**
 * Created by Администратор on 03.10.2017.
 */

@Repository
public class ModelGenericHibernateDaoImpl extends GenericHibernateDaoImpl<Model, Integer> implements ModelGenericHibernateDao {

    public ModelGenericHibernateDaoImpl() {
        super(Model.class);
    }
}
