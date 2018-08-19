package ru.mail.mina.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.mail.mina.repository.dao.CarFeatureGenericHibernateDao;
import ru.mail.mina.service.dto.CarFeatureService;

import java.util.List;

/**
 * Created by Mina on 15.08.2018.
 */

@Service
public class CarFeatureServiceImpl implements CarFeatureService {

    private final CarFeatureGenericHibernateDao carFeatureGenericHibernateDao;

    @Autowired
    public CarFeatureServiceImpl(CarFeatureGenericHibernateDao carFeatureGenericHibernateDao) {
        this.carFeatureGenericHibernateDao = carFeatureGenericHibernateDao;
    }

    @Override
    @Transactional
    public List<String> getFeaturesByKey(String key) {
        return carFeatureGenericHibernateDao.getFeaturesByKey(key);
    }
}
