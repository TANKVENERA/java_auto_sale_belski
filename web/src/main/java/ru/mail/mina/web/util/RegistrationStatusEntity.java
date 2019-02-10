package ru.mail.mina.web.util;

import com.fasterxml.jackson.annotation.JsonInclude;
import org.springframework.http.HttpStatus;

/**
 * Created by Mina on 29.01.2019.
 */

@JsonInclude(JsonInclude.Include.NON_NULL)
public class RegistrationStatusEntity {

    private HttpStatus status;
    private String message;
    private String usernameMsg;
    private String emailMsg;
    private String pswMsg;
    private String confirmPswMsg;

    public RegistrationStatusEntity() {
    }

    public void refreshErrors() {
        this.setUsernameMsg(null).setEmailMsg(null).setPswMsg(null).setConfirmPswMsg(null);
    }
    public HttpStatus getStatus() {
        return status;
    }

    public RegistrationStatusEntity setStatus(HttpStatus status) {
        this.status = status;
        return this;
    }

    public String getMessage() {
        return message;
    }

    public RegistrationStatusEntity setMessage(String message) {
        this.message = message;
        return this;
    }

    public String getUsernameMsg() {
        return usernameMsg;
    }

    public RegistrationStatusEntity setUsernameMsg(String usernameMsg) {
        this.usernameMsg = usernameMsg;
        return this;
    }

    public String getEmailMsg() {
        return emailMsg;
    }

    public RegistrationStatusEntity setEmailMsg(String emailMsg) {
        this.emailMsg = emailMsg;
        return this;
    }

    public String getPswMsg() {
        return pswMsg;
    }

    public RegistrationStatusEntity setPswMsg(String pswMsg) {
        this.pswMsg = pswMsg;
        return this;
    }

    public String getConfirmPswMsg() {
        return confirmPswMsg;
    }

    public RegistrationStatusEntity setConfirmPswMsg(String confirmPswMsg) {
        this.confirmPswMsg = confirmPswMsg;
        return this;
    }
}
