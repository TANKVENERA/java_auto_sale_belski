package ru.mail.mina.repository.impl;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import ru.mail.mina.repository.dao.CarFeatureGenericHibernateDao;
import ru.mail.mina.repository.model.CarFeature;

import javax.persistence.Query;
import javax.persistence.criteria.CriteriaBuilder;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Mina on 15.08.2018.
 */

@Repository
public class CarFeatureGenericHibernateDaoImpl extends GenericHibernateDaoImpl<CarFeature, Integer> implements CarFeatureGenericHibernateDao {

    public CarFeatureGenericHibernateDaoImpl() {
        super(CarFeature.class);
    }

    @Override
    public List<String> getFeaturesByKey(String carSign) {
        System.out.println("RRRRRRR" + carSign);
        List<String> features = new ArrayList<>();
        try {
            String hql = "SELECT car.feature From CarFeature car where car.carSign=:carSign";
                    Query query = getSession().createQuery(hql);
                    query.setParameter("carSign", carSign);
                 features = query.getResultList();
        }catch (Exception e ) {

        }
       return features;
    }

}
