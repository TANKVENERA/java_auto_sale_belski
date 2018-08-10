package ru.mail.mina.repository.impl;

import org.springframework.stereotype.Repository;
import ru.mail.mina.repository.dao.CommentGenericHibernateDao;
import ru.mail.mina.repository.model.Comment;

/**
 * Created by Администратор on 24.07.2017.
 */

@Repository
public class CommentGenericHibernateDaoImpl extends GenericHibernateDaoImpl<Comment, Integer> implements CommentGenericHibernateDao {

    public CommentGenericHibernateDaoImpl() {
        super(Comment.class);
    }
}
