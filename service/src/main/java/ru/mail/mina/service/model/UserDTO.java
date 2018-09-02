package ru.mail.mina.service.model;

import ru.mail.mina.repository.model.*;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * Created by Администратор on 25.07.2017.
 */
public class UserDTO {

    private Integer id;

    private String username;

    private String email;

    private String password;

    private Role role;

    public UserDTO() {

    }

    public UserDTO(String username, String email) {
        this.username = username;
        this.email = email;
    }

    private Set<AdDTO> ads = new HashSet<>();

    private Set<NewsDTO> news = new HashSet<>();

    private Basket basket;

    private List<CommentDTO> comments = new ArrayList<>();

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<AdDTO> getAds() {
        return ads;
    }

    public void setAds(Set<AdDTO> ads) {
        this.ads = ads;
    }

    public Set<NewsDTO> getNews() {
        return news;
    }

    public void setNews(Set<NewsDTO> news) {
        this.news = news;
    }

    public Basket getBasket() {
        return basket;
    }

    public void setBasket(Basket basket) {
        this.basket = basket;
    }

    public List<CommentDTO> getComments() {
        return comments;
    }

    public void setComments(List<CommentDTO> comments) {
        this.comments = comments;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    @Override
    public String toString() {
        return "UserDTO{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", role=" + role +
                ", ads=" + ads +
                ", comments=" + comments +
                '}';
    }
}
