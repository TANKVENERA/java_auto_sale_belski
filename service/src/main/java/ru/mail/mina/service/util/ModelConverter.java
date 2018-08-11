package ru.mail.mina.service.util;

import ru.mail.mina.repository.model.Model;
import ru.mail.mina.service.model.ModelDTO;

/**
 * Created by Mina on 10.08.2018.
 */
public class ModelConverter {

    public static ModelDTO convert (Model model) {
        ModelDTO modelDTO = new ModelDTO();
        modelDTO.setId(model.getId());
        modelDTO.setModelAuto(model.getModelAuto());
        return modelDTO;
    }
}
