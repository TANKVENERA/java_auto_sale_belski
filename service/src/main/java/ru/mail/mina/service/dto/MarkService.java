package ru.mail.mina.service.dto;

import ru.mail.mina.repository.model.Mark;

import java.util.List;

/**
 * Created by Администратор on 03.10.2017.
 */
public interface MarkService {

    List<Mark> getAll();
}
