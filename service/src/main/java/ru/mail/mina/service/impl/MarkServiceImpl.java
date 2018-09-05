package ru.mail.mina.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.mail.mina.repository.dao.MarkGenericHibernateDao;
import ru.mail.mina.repository.model.Mark;
import ru.mail.mina.repository.model.Model;
import ru.mail.mina.service.dto.MarkService;
import ru.mail.mina.service.model.MarkDTO;
import ru.mail.mina.service.model.ModelDTO;
import ru.mail.mina.service.util.MarkConverter;
import ru.mail.mina.service.util.ModelConverter;

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
        List<Mark> markList = markGenericHibernateDao.findAll("id", "markAuto");
        for (Mark element : markList) {
            markDTOS.add(MarkConverter.convert(element));
        }
        return markDTOS;
    }

    @Override
    @Transactional
    public List<ModelDTO> findMarkByKey(Integer fk_key) {
        List<ModelDTO> modelDTOS = new ArrayList<>();
        List<Model> models = markGenericHibernateDao.findMarkByKey(fk_key);
        for (Model model : models) {
            modelDTOS.add(ModelConverter.convert(model));
        }
        return modelDTOS;
    }
}
