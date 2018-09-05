package ru.mail.mina.repository.impl;

import org.springframework.stereotype.Repository;
import ru.mail.mina.repository.dao.GenericHibernateDao;
import ru.mail.mina.repository.dao.MarkGenericHibernateDao;
import ru.mail.mina.repository.model.Ad;
import ru.mail.mina.repository.model.Mark;
import ru.mail.mina.repository.model.Model;

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
    public List<Model> findMarkByKey(Integer fk_key) {
        List<Model> list = null;
        try {
            String hql = " SELECT mark.models From  Mark mark where mark.id=:fk_key";
            Query query = getSession().createQuery(hql);
            query.setParameter("fk_key", fk_key);
            list =  (List<Model>) query.getResultList();
        } catch (Exception e) {

        }
        return list;
    }
}
