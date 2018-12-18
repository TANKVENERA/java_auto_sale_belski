package ru.mail.mina.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.FileCopyUtils;
import ru.mail.mina.repository.dao.AdEntityGenericHibernateDao;
import ru.mail.mina.repository.model.AdEntity;
import ru.mail.mina.service.dto.AdEntityService;
import ru.mail.mina.service.util.ImagesObject;

import java.io.*;
import java.util.Base64;
import java.util.List;

/**
 * Created by Администратор on 27.08.2017.
 */
@Service
public class AdEntityServiceImpl implements AdEntityService{


    private final AdEntityGenericHibernateDao genericHibernateDao;
    private Environment environment;

    @Autowired
    public AdEntityServiceImpl(AdEntityGenericHibernateDao genericHibernateDao,
                               Environment environment) {
        this.genericHibernateDao = genericHibernateDao;
        this.environment = environment;
    }

    @Override
    @Transactional
    public File getFileById(Long id) {
        AdEntity adEntity = genericHibernateDao.findById(Math.toIntExact(id));
        return new File(adEntity.getFilePath() + adEntity.getFileName());
    }

    @Override
    @Transactional
    public void saveImages(List<ImagesObject> images) throws IOException{

        for (ImagesObject img : images) {
            String base64ImgRaw = img.getBase64String();
            String base64 = base64ImgRaw.substring(base64ImgRaw.indexOf("base64,") + 7, base64ImgRaw.length());
            byte data[] = Base64.getMimeDecoder().decode(base64);
            FileCopyUtils.copy(data, new File(environment.getProperty("upload.adsLocation")+ img.getFileName() + "\\") );
        }
    }
}