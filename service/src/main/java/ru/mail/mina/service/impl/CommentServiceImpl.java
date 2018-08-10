package ru.mail.mina.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.mail.mina.repository.dao.CommentGenericHibernateDao;
import ru.mail.mina.repository.model.Comment;
import ru.mail.mina.service.dto.CommentService;
import ru.mail.mina.service.model.CommentDTO;
import ru.mail.mina.service.util.CommentConverter;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Администратор on 05.09.2017.
 */
@Service
public class CommentServiceImpl implements CommentService {


    private final CommentGenericHibernateDao commentGenericHibernateDao;

    @Autowired
    public CommentServiceImpl(CommentGenericHibernateDao commentGenericHibernateDao) {
        this.commentGenericHibernateDao = commentGenericHibernateDao;
    }

    @Override
    @Transactional
    public void saveComment(CommentDTO commentsDTO) {
        Comment comment = CommentConverter.convert(commentsDTO);
        commentGenericHibernateDao.insert(comment);
    }

    @Override
    @Transactional
    public List<CommentDTO> getAll() {
        List<CommentDTO> commentDTOList = new ArrayList<>();
        List<Comment> commentList = commentGenericHibernateDao.findAll();
        for (Comment comment : commentList) {
            commentDTOList.add(CommentConverter.convert(comment));
        }
        return commentDTOList;
    }
}
