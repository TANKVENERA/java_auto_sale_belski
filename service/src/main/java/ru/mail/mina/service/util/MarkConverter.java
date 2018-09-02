package ru.mail.mina.service.util;

import ru.mail.mina.repository.model.Mark;
import ru.mail.mina.repository.model.Model;
import ru.mail.mina.service.model.MarkDTO;
import ru.mail.mina.service.model.ModelDTO;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Mina on 10.08.2018.
 */
public class MarkConverter {

    public static MarkDTO convert (Mark mark) {

        MarkDTO markDTO  = new MarkDTO();
        markDTO.setId(mark.getId());
        markDTO.setMarkAuto(mark.getMarkAuto());
//        List<ModelDTO> modelDTOS = new ArrayList<>();
//        for ( Model modelList :  mark.getModels() ) {
//            modelDTOS.add(ModelConverter.convert(modelList));
//        }
//        markDTO.setModels(modelDTOS);

        return markDTO;
    }
}
