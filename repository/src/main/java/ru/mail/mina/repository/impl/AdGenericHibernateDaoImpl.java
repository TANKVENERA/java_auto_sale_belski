package ru.mail.mina.repository.impl;

import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;
import ru.mail.mina.repository.dao.AdGenericHibernateDao;
import ru.mail.mina.repository.model.Ad;
import javax.persistence.Query;
import java.util.List;

/**
 * Created by Администратор on 14.07.2017.
 */
@Repository
public class AdGenericHibernateDaoImpl extends GenericHibernateDaoImpl<Ad, Integer> implements AdGenericHibernateDao {


    public AdGenericHibernateDaoImpl() {
        super(Ad.class);
    }


    public List<Ad> filter(String mark, String model, String yearFrom, String yearTo, String priceFrom,
                           String priceTo) {

        Criteria criteria = getSession().createCriteria(Ad.class);
        if (!model.equals("Model")) {
            criteria.add(Restrictions.eq("modelAuto", model));
        }
        if (!mark.equals("Any")) {
            criteria.add(Restrictions.eq("markAuto", mark));
        }
        if (!yearFrom.isEmpty()) {
            criteria.add(Restrictions.ge("yearOfIssue", Integer.valueOf(yearFrom)));
        }
        if (!yearTo.isEmpty()) {
            criteria.add(Restrictions.le("yearOfIssue", Integer.valueOf(yearTo)));
        }
        if (!priceFrom.isEmpty()) {
            criteria.add(Restrictions.ge("price", Integer.valueOf(priceFrom)));
        }
        System.out.println(priceTo);
        if (!priceTo.isEmpty()) {
            criteria.add(Restrictions.le("price", Integer.valueOf(priceTo)));
        }
        List<Ad> list = criteria.list();
        return list;
    }

    @Override
    public List<Ad> getAdsByUserName(String userName) {
        List<Ad> list = null;
        try {
            String hql = "From Ad  ad where ad.user.username=:userName";
            Query query = getSession().createQuery(hql);
            query.setParameter("userName", userName);
           list =  query.getResultList();
        } catch (Exception e) {
        }
        return list;
    }


    @Override
    public List<Ad> getAll(Integer page) {
        int limit = 3;
        Query query = getSession().createQuery("from Ad");
        query.setFirstResult((page-1)*limit);
        query.setMaxResults(limit);
        return (List<Ad>) query.getResultList();
    }
}
