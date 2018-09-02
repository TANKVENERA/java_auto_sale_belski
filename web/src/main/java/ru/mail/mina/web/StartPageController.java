package ru.mail.mina.web;


import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import ru.mail.mina.repository.model.Mark;
import ru.mail.mina.service.dto.MarkService;
import ru.mail.mina.service.dto.ModelService;
import ru.mail.mina.service.dto.NewsService;
import ru.mail.mina.service.model.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Created by Администратор on 15.08.2017.
 */
@RestController
public class StartPageController {

    private final NewsService newsService;
    private final MarkService markService;
    private final ModelService modelService;

    @Autowired
    public StartPageController(NewsService newsService, MarkService markService, ModelService modelService) {
        this.newsService = newsService;
        this.markService = markService;
        this.modelService = modelService;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = {"/", "login"}, method = RequestMethod.GET)
    public List<MarkDTO> showStartPage() {
        List<MarkDTO> markDTOS = markService.getAll();

        return markDTOS;

//        Integer id = markId;
//        if (id == -1 ) {
//            return markDTOS;
//        }
//        MarkDTO currentMark = new MarkDTO();
//        List<ModelDTO> modelDTOS= new ArrayList<>();
//        for (MarkDTO mark : markDTOS) {
//            if (mark.getId() == id) {
//                modelDTOS = mark.getModels();
//                currentMark = mark;
//            }
//        }
//        model.addAttribute("current", currentMark);
//        model.addAttribute("models", modelDTOS);
//
//        return markDTOS;
    }

}
