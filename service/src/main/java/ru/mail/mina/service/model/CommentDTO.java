package ru.mail.mina.service.model;

import ru.mail.mina.repository.model.Ad;
import ru.mail.mina.repository.model.User;

/**
 * Created by Администратор on 25.07.2017.
 */
public class CommentDTO {


    private Integer id;

    private String text;

    private AdDTO adDTO;

    private UserDTO userDTO;

    private User user;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }


    public AdDTO getAdDTO() {
        return adDTO;
    }

    public UserDTO getUserDTO() {
        return userDTO;
    }

    public void setUserDTO(UserDTO userDTO) {
        this.userDTO = userDTO;
    }

    public void setAdDTO(AdDTO adDTO) {
        this.adDTO = adDTO;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "CommentDTO{" +
                "id=" + id +
                ", text='" + text + '\'' +
                ", adDTO=" + adDTO +
                ", userDTO=" + userDTO +
                '}';
    }
}
