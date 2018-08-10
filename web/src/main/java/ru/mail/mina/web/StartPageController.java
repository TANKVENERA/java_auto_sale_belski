package ru.mail.mina.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import ru.mail.mina.repository.model.Mark;
import ru.mail.mina.service.dto.MarkService;
import ru.mail.mina.service.dto.NewsService;
import ru.mail.mina.service.model.NewsDTO;
import ru.mail.mina.service.model.UserDTO;

import java.util.List;

/**
 * Created by Администратор on 15.08.2017.
 */
@Controller
public class StartPageController {

    private final NewsService newsService;
    private final MarkService markService;

    @Autowired
    public StartPageController(NewsService newsService, MarkService markService) {
        this.newsService = newsService;
        this.markService = markService;
    }

    @RequestMapping( value = {"/", "login"}, method = RequestMethod.GET)
    public String showStartPage(Model model) {
        List<NewsDTO> newsDTOList = newsService.findAll();
        model.addAttribute("user", new UserDTO());
        model.addAttribute("news", newsDTOList);
        List<Mark> marks = markService.getAll();
        model.addAttribute("marksOfAutos", marks);
        return "autosale";
    }
}
