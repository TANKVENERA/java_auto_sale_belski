package ru.mail.mina.repository.dao;

import ru.mail.mina.repository.model.Mark;
import ru.mail.mina.repository.model.Model;

import java.util.List;

/**
 * Created by Администратор on 03.10.2017.
 */
public interface MarkGenericHibernateDao extends GenericHibernateDao<Mark, Integer> {

    List<Model> findMarkByKey(Integer fk_key);
}
