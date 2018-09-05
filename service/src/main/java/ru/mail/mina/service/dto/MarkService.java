package ru.mail.mina.service.dto;

import org.springframework.stereotype.Service;
import ru.mail.mina.repository.model.Mark;
import ru.mail.mina.repository.model.Model;
import ru.mail.mina.service.model.MarkDTO;
import ru.mail.mina.service.model.ModelDTO;

import java.util.List;

/**
 * Created by Администратор on 03.10.2017.
 */
@Service
public interface MarkService {

    List<MarkDTO> getAll();

    List<ModelDTO> findMarkByKey(Integer fk_key);
}
