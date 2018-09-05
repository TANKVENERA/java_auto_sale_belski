package ru.mail.mina.service.impl;

import org.springframework.stereotype.Service;
import ru.mail.mina.repository.dao.ModelGenericHibernateDao;
import ru.mail.mina.service.dto.ModelService;


import java.util.List;

/**
 * Created by Mina on 11.08.2018.
 */

@Service
public class ModelServiceImpl implements ModelService {

    private final ModelGenericHibernateDao genericHibernateDao;

    public ModelServiceImpl(ModelGenericHibernateDao genericHibernateDao) {
        this.genericHibernateDao = genericHibernateDao;
    }

}
