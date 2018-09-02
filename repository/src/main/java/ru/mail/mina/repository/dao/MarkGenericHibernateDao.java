package ru.mail.mina.repository.dao;

import ru.mail.mina.repository.model.Mark;

import java.util.List;

/**
 * Created by Администратор on 03.10.2017.
 */
public interface MarkGenericHibernateDao extends GenericHibernateDao<Mark, Integer> {

    List<Mark> findAllMarks();
}
