package ru.mail.mina.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import ru.mail.mina.repository.model.Mark;
import ru.mail.mina.service.dto.MarkService;
import ru.mail.mina.service.dto.ModelService;
import ru.mail.mina.service.dto.NewsService;
import ru.mail.mina.service.model.MarkDTO;
import ru.mail.mina.service.model.ModelDTO;
import ru.mail.mina.service.model.NewsDTO;
import ru.mail.mina.service.model.UserDTO;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Администратор on 15.08.2017.
 */
@Controller
public class StartPageController {

    private final NewsService newsService;
    private final MarkService markService;
    private final ModelService modelService;

    @Autowired
    public StartPageController(NewsService newsService, MarkService markService, ModelService modelService) {
        this.newsService = newsService;
        this.markService = markService;
        this.modelService= modelService;
    }

    @RequestMapping( value = {"/", "login"}, method = RequestMethod.GET)
    public String showStartPage(Model model, @RequestParam( required = false, value = "markId") Integer markId) {
        model.addAttribute("user", new UserDTO());
        List<MarkDTO> markDTOS = markService.getAll();
        model.addAttribute("marks", markDTOS);
        if (markId == null) {
            return "autosale";
        }
        Integer id = markId;
        if (id == -1 ) {
            return "autosale";
        }
        MarkDTO currentMark = new MarkDTO();
        List<ModelDTO> modelDTOS= new ArrayList<>();
        for (MarkDTO mark : markDTOS) {
            if (mark.getId() == id) {
                modelDTOS = mark.getModels();
                currentMark = mark;
            }
        }
        model.addAttribute("current", currentMark);
        model.addAttribute("models", modelDTOS);

        return "autosale";
    }
}
