package ru.mail.mina.service.dto;

import ru.mail.mina.service.model.CommentDTO;

import java.util.List;

/**
 * Created by Администратор on 05.09.2017.
 */
public interface CommentService {

    void saveComment(CommentDTO commentsDTO);

    List<CommentDTO> getAll();
}
