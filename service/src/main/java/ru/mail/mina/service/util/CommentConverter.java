package ru.mail.mina.service.util;

import ru.mail.mina.repository.model.Comment;
import ru.mail.mina.service.model.CommentDTO;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Администратор on 05.09.2017.
 */
public class CommentConverter {

    public static CommentDTO convert(Comment comment) {
        CommentDTO commentDTO = new CommentDTO();
        commentDTO.setId(comment.getId());
        commentDTO.setText(comment.getText());
        commentDTO.setAdDTO(AdConverter.convert(comment.getAd()));
        return commentDTO;
    }

    public static CommentDTO convertFromDataBase(Comment comment) {
        CommentDTO commentDTO = new CommentDTO();
        commentDTO.setId(comment.getId());
        commentDTO.setText(comment.getText());
       commentDTO.setUser(comment.getUser());
       commentDTO.setUserDTO(UserConverter.convert(comment.getUser()));
        System.out.println(commentDTO.getUser().toString());
        return commentDTO;
    }

    public static List<CommentDTO> convertFromDataBase(List<Comment> commentList) {
        List<CommentDTO> commentDTOS = new ArrayList<>();
        for (Comment comment : commentList) {
            commentDTOS.add(convertFromDataBase(comment));
        }
        return commentDTOS;
    }

    public static Comment convert(CommentDTO commentDTO) {
        Comment comment = new Comment();
        comment.setId(comment.getId());
        comment.setText(commentDTO.getText());
        comment.setAd(AdConverter.convert(commentDTO.getAdDTO()));
        comment.setUser(UserConverter.convert(commentDTO.getUserDTO()));
        return comment;
    }

    public static List<CommentDTO> convertToDTO(List<Comment> commentList) {
        List<CommentDTO> commentDTOS = new ArrayList<>();
        for (Comment comment : commentList) {
            commentDTOS.add(convert(comment));
        }
        return commentDTOS;
    }

    public static List<Comment> convert(List<CommentDTO> commentDTOS) {
        List<Comment> comments = new ArrayList<>();
        for (CommentDTO commentDTO : commentDTOS) {
            comments.add(convert(commentDTO));
        }
        return comments;
    }
}
