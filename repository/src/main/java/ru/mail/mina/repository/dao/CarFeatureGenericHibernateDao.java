package ru.mail.mina.repository.dao;

import ru.mail.mina.repository.model.CarFeature;

import java.util.List;

/**
 * Created by Mina on 15.08.2018.
 */
public interface CarFeatureGenericHibernateDao extends GenericHibernateDao<CarFeature, Integer> {

    List<String> getFeaturesByKey(String key);

}
