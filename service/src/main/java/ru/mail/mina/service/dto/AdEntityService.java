package ru.mail.mina.service.dto;

import ru.mail.mina.service.util.AdDataObject;
import ru.mail.mina.service.util.ImagesObject;

import java.io.File;
import java.io.IOException;
import java.util.List;

/**
 * Created by Администратор on 27.08.2017.
 */
public interface AdEntityService {

    File getFileById(Long id);

    void saveImages(List<ImagesObject> images) throws IOException;
}
