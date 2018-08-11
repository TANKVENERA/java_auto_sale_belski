package ru.mail.mina.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.mail.mina.repository.dao.MarkGenericHibernateDao;
import ru.mail.mina.repository.model.Mark;
import ru.mail.mina.service.dto.MarkService;
import ru.mail.mina.service.model.MarkDTO;
import ru.mail.mina.service.util.MarkConverter;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Администратор on 03.10.2017.
 */
@Service
public class MarkServiceImpl implements MarkService {


    private final MarkGenericHibernateDao markGenericHibernateDao;

    @Autowired
    public MarkServiceImpl(MarkGenericHibernateDao markGenericHibernateDao) {
        this.markGenericHibernateDao = markGenericHibernateDao;
    }

    @Override
    @Transactional
    public List<MarkDTO> getAll() {
        List<MarkDTO> markDTOS = new ArrayList<>();
        List<Mark> markList = markGenericHibernateDao.findAll();
        for (Mark element : markList) {
            markDTOS.add(MarkConverter.convert(element));
        }
        return markDTOS;
    }
}
