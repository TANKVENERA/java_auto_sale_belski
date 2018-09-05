package ru.mail.mina.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.mail.mina.service.dto.MarkService;
import ru.mail.mina.service.dto.ModelService;
import ru.mail.mina.service.dto.NewsService;
import ru.mail.mina.service.model.*;
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


    @RequestMapping(value = {"/", "login"}, method = RequestMethod.GET)
    public List<MarkDTO> showStartPage() {
        List<MarkDTO> markDTOS = markService.getAll();
        return markDTOS;
    }

    @RequestMapping(value = "/models", params = {"mid"}, method = RequestMethod.GET)
    @CrossOrigin
    public List<ModelDTO> loadModels( @RequestParam(value = "mid") Integer fk_key) {
        List<ModelDTO> modelDTOS = markService.findMarkByKey(fk_key);

        return modelDTOS;
    }

}
