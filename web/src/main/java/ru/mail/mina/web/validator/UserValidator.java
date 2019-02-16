package ru.mail.mina.web.validator;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.FieldError;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;
import ru.mail.mina.service.model.UserDTO;
import ru.mail.mina.web.util.StringUtils;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by Администратор on 18.08.2017.
 */
@Component
public class UserValidator implements Validator {

    @Autowired
    private UserDetailsService userDetailsService;

    @Override
    public boolean supports(Class<?> aClass) {
        return UserDTO.class.equals(aClass);
    }

    @Override
    public void validate(Object o, Errors errors) {
        UserDTO user = (UserDTO) o;
        ValidationUtils.rejectIfEmpty(errors, "username", "error.username.empty");
        if (user.getUsername().length() < 5 || user.getUsername().length() > 10) {
            errors.rejectValue("username", "error.username.length");
        }
        if (StringUtils.matches("[0-9]+", user.getUsername())) {
            errors.rejectValue("username", "error.username.onlyNumbers");
        }
        if (!StringUtils.matches("[a-zA-Z0-9]+", user.getUsername())) {
            errors.rejectValue("username", "error.username.symbols");
        }
        ValidationUtils.rejectIfEmpty(errors, "email", "error.useremail.empty");
        if (!user.getEmail().contains("@")) {
            errors.rejectValue("email", "error.useremail.dogSmb");
        }
        if (!StringUtils.findMatch(".{1,10}(?=@)", user.getEmail())) {
            errors.rejectValue("email", "error.useremail.beforeDogSmb");
        }
        if (!StringUtils.findMatch("(?<=@).{1,10}", user.getEmail())) {
            errors.rejectValue("email", "error.useremail.afterDogSmb");
        }
        if (StringUtils.numberOfCharOccurences(user.getEmail(), "@") > 1) {
            errors.rejectValue("email", "error.useremail.numberOfDogSmb");
        }
        String afterDogSmblString = user.getEmail().substring(user.getEmail().indexOf('@') + 1);
        if (StringUtils.findMatch("[^.a-zA-Z0-9]+", afterDogSmblString)) {
            Matcher m = Pattern.compile("[^.a-zA-Z0-9]+").matcher(afterDogSmblString);
            m.find();
            errors.rejectValue("email", null, "Часть адреса после символа '@' не должна содержать символ " +
                    "'" + m.group(0).charAt(0) + "' !");
        }
        ValidationUtils.rejectIfEmpty(errors, "password", "error.userpassword.empty");
        if (user.getPassword().length() < 6 || user.getUsername().length() > 12) {
            errors.rejectValue("password", "error.userpassword.length");
        }
        if (StringUtils.matches("[а-яА-Я]+", user.getPassword())) {
            errors.rejectValue("password", "error.userpassword.cyrillic");
        }
        ValidationUtils.rejectIfEmpty(errors, "confirmPassword", "error.userConfirmPassword.empty");
        if (!user.getPassword().equals(user.getConfirmPassword())) {
            errors.rejectValue("confirmPassword", "error.userConfirmPassword.mismatch");
        }
        errors.rejectValue("username", "error.username.exist");
    }
}


