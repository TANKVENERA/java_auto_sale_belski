package ru.mail.mina.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AnonymousAuthenticationToken;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import ru.mail.mina.service.dto.CarFeatureService;
import ru.mail.mina.service.dto.NewsService;
import ru.mail.mina.service.dto.UserService;
import ru.mail.mina.service.model.AdDTO;
import ru.mail.mina.service.model.AppUserPrincipal;
import ru.mail.mina.service.model.NewsDTO;
import ru.mail.mina.service.model.UserDTO;
import ru.mail.mina.web.util.RegistrationStatusEntity;
import ru.mail.mina.web.validator.UserValidator;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Locale;

/**
 * Created by Администратор on 15.08.2017.
 */
@RestController
public class UserController {

    public static final String Body_Style = "кузов";
    public static final String Transmission = "трансмиссия";
    public static final String Color = "цвет";

    private final UserService userService;
    private final UserValidator userValidator;
    private final NewsService newsService;
    private final CarFeatureService featureService;

    @Autowired
    private MessageSource messageSource;

    @Autowired
    private RegistrationStatusEntity statusEntity;

    @Autowired
    public UserController(UserService userService, UserValidator userValidator,
                          NewsService newsService, CarFeatureService featureService) {
        this.userService = userService;
        this.userValidator = userValidator;
        this.newsService = newsService;
        this.featureService = featureService;
    }

    @RequestMapping(value = {"/close"}, method = RequestMethod.GET)
    public String showRegisterBlank(Model model) {
        model.addAttribute("user", new UserDTO());
        List<NewsDTO> newsDTOList = newsService.findAll();
        model.addAttribute("news", newsDTOList);
        return "autosale";
    }

    @RequestMapping(value = {"/new_ad"}, method = RequestMethod.GET)
    public String showAdBlank(Model model) {
        model.addAttribute("user", new UserDTO());
        model.addAttribute("ad", new AdDTO());
        model.addAttribute("bodyStyle", featureService.getFeaturesByKey(Body_Style));
        model.addAttribute("transmission", featureService.getFeaturesByKey(Transmission));
        model.addAttribute("color", featureService.getFeaturesByKey(Color));
        return "createAd";
    }

    @RequestMapping(value = {"/signUp"}, method = RequestMethod.POST)
    public RegistrationStatusEntity signUpNewUser(@RequestBody UserDTO newUser, BindingResult result) {
        /** Need validations**/
        System.out.println("RESULT" + " " +  statusEntity.getUsernameMsg() + " :" + statusEntity.getUsernameMsg());
        statusEntity.refreshErrors();
        userValidator.validate(newUser, result);
        if (result.hasErrors()) {
            if ( result.hasFieldErrors("username")){
                System.out.println("USER_DATA_ " + result.getFieldErrors("username").size());
                statusEntity.setUsernameMsg(messageSource.getMessage(result.getFieldError("username"), null));
            }
            if (result.hasFieldErrors("email")) {
                System.out.println("EMAIL_DATA_ " + result.getFieldErrors("email").size());
                statusEntity.setEmailMsg(messageSource.getMessage(result.getFieldError("email"), null));
            }
            if (result.hasFieldErrors("password")) {
                statusEntity.setPswMsg(messageSource.getMessage(result.getFieldError("password"), null));
            }
            if (result.hasFieldErrors("confirmPassword")) {
                statusEntity.setConfirmPswMsg(messageSource.getMessage(result.getFieldError("confirmPassword"), null));
            }
            statusEntity.setStatus(HttpStatus.BAD_REQUEST).setMessage("unsuccess");
        }
        else {
            statusEntity.setStatus(HttpStatus.OK).setMessage("success");
        }
        //userService.saveUser(newUser);
        return statusEntity;
    }

    @RequestMapping(value = "/profile", method = RequestMethod.GET)
    public String profile(Model model) {
        model.addAttribute("user", new UserDTO());
        return "profile";
    }


    @RequestMapping(value = "/updateBlank", method = RequestMethod.GET)
    public String showUpdateBlank(Model model) {
        model.addAttribute("user", new UserDTO());
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (!(auth instanceof AnonymousAuthenticationToken)) {
            UserDTO userDTO = userService.getByUserName(auth.getName());
            model.addAttribute("user", userDTO);
        }
        return "updateUser";
    }

    @RequestMapping(value = "autosale/updateUser", method = RequestMethod.POST)
    public String updateUser(@ModelAttribute("user") UserDTO userDTO,
                             HttpServletRequest request) {
        String newPassword = request.getParameter("newPassword");
        String confirmPassword = request.getParameter("confirmPassword");
        if (newPassword.equals(confirmPassword) && !newPassword.isEmpty() && !confirmPassword.isEmpty()) {
            userDTO.setPassword(newPassword);
            userService.update(userDTO, true);
        } else {
            userService.update(userDTO, false);
        }
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        AppUserPrincipal principal = (AppUserPrincipal) authentication.getPrincipal();
        principal.setUserName(userDTO.getUsername());
        return "redirect:/profile";
    }


    @RequestMapping(value = "/filter", method = RequestMethod.GET)
    public ModelAndView profileUser(Model model, HttpServletRequest request) {
        model.addAttribute("user", new UserDTO());
        // System.out.println( new SecurityContextHolderAwareRequestWrapper(request, "ROLE").isUserInRole("ROLE_USER"));
        return new ModelAndView("autosale");
    }


}
