package ru.mail.mina.repository.impl;


import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.ProjectionList;
import org.hibernate.criterion.Projections;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import ru.mail.mina.repository.dao.GenericHibernateDao;

import javax.persistence.criteria.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;


/**
 * Created by Администратор on 13.07.2017.
 */

@Repository
public abstract class GenericHibernateDaoImpl<T extends Serializable, ID extends Serializable> implements GenericHibernateDao<T, ID> {

    @Autowired
    protected SessionFactory sessionFactory;

    private Class<T> clazz;

    public GenericHibernateDaoImpl(Class<T> clazz) {
        this.clazz = clazz;
    }


    protected Session getSession() {
        return this.sessionFactory.getCurrentSession();
    }


    @Override
    public ID insert(T entity) {
        return (ID) getSession().save(entity);
    }

    @Override
    public void update(T entity) {
        try {
            getSession().update(entity);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public void saveOrUpdate(T entity) {
        getSession().saveOrUpdate(entity);
    }

    @Override
    public void delete(ID id) {
        try {
            T t = (T) getSession().get(clazz, id);
            getSession().delete(t);
        } catch (Exception e) {
        }
    }

    @Override
    public List<T> findAll(String ... parameters) {
        List<T> list = new ArrayList<T>();
        try {
            CriteriaBuilder builder = getSession().getCriteriaBuilder();
            CriteriaQuery<T> criteriaQuery = builder.createQuery(clazz);
            Root<T> root =   criteriaQuery.from(clazz);
            List<Selection<?>> selectionList = new ArrayList<>();
            for (String param : parameters) {
                selectionList.add(root.get(param));
            }
            criteriaQuery.multiselect(selectionList);
            list=getSession().createQuery(criteriaQuery).getResultList();

        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }


    @Override
    public T findById(ID id) {
        T t = null;
        try {
            t = (T) getSession().get(clazz, id);
            getSession().evict(t);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return t;
    }
}
