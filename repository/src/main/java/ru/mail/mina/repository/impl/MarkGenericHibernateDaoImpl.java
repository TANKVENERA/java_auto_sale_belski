package ru.mail.mina.repository.impl;

import org.springframework.stereotype.Repository;
import ru.mail.mina.repository.dao.GenericHibernateDao;
import ru.mail.mina.repository.dao.MarkGenericHibernateDao;
import ru.mail.mina.repository.model.Ad;
import ru.mail.mina.repository.model.Mark;

import javax.persistence.Query;
import java.util.List;

/**
 * Created by Администратор on 03.10.2017.
 */
@Repository
public class MarkGenericHibernateDaoImpl extends GenericHibernateDaoImpl<Mark, Integer> implements MarkGenericHibernateDao {

    public MarkGenericHibernateDaoImpl() {
        super(Mark.class);
    }

    @Override
    public List<Mark> findAllMarks() {
        List<Mark> list = null;
        try {
            String hql = " From Mark";
            Query query = getSession().createQuery(hql);
            list =  query.getResultList();
        } catch (Exception e) {

        }
        return list;
    }
}
