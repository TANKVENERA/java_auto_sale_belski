package ru.mail.mina.web.util;

import org.springframework.http.HttpStatus;

/**
 * Created by Mina on 29.01.2019.
 */
public class RegistrationStatusEntity {

    private HttpStatus status;
    private String message;

    public RegistrationStatusEntity(HttpStatus status, String message) {
        this.status = status;
        this.message = message;
    }

    public HttpStatus getStatus() {
        return status;
    }

    public void setStatus(HttpStatus status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
