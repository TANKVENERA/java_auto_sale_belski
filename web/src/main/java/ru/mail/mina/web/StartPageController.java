package ru.mail.mina.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.mail.mina.service.dto.CarFeatureService;
import ru.mail.mina.service.dto.MarkService;
import ru.mail.mina.service.dto.ModelService;
import ru.mail.mina.service.dto.NewsService;
import ru.mail.mina.service.model.*;
import ru.mail.mina.web.util.StaticDataEntity;

import java.util.List;

/**
 * Created by Администратор on 15.08.2017.
 */
@RestController
public class StartPageController {

    private final static String  Year_Of_Issue = "year_of_issue";
    private final static String  Price = "price";
    private final static String Body_Style = "bodyStyle";
    private final static String Color = "color";
    private final static String Transmission = "transmission";
    private final NewsService newsService;
    private final MarkService markService;
    private final ModelService modelService;
    private final CarFeatureService featureService;

    @Autowired
    public StartPageController(NewsService newsService, MarkService markService,
                               ModelService modelService, CarFeatureService featureService) {
        this.newsService = newsService;
        this.markService = markService;
        this.modelService = modelService;
        this.featureService = featureService;
    }

    @RequestMapping(value = {"/", "login"}, method = RequestMethod.GET)
    public StaticDataEntity showStartPage() {
        List<MarkDTO> markDTOS = markService.getAll();
        List<String> tableOfYears = featureService.getFeaturesByKey(Year_Of_Issue);
        List<String> tableOfPrices = featureService.getFeaturesByKey(Price);
        List<String> bodyStyles = featureService.getFeaturesByKey(Body_Style);
        List<String> colors = featureService.getFeaturesByKey(Color);
        List<String> transmissions = featureService.getFeaturesByKey(Transmission);
        return new StaticDataEntity(markDTOS, tableOfYears, tableOfPrices, bodyStyles, colors, transmissions);
    }

    @RequestMapping(value = "/models", params = {"mid"}, method = RequestMethod.GET)
    @CrossOrigin
    public List<ModelDTO> loadModels( @RequestParam(value = "mid") Integer fk_key) {
        List<ModelDTO> modelDTOS = markService.findMarkByKey(fk_key);
        return modelDTOS;
    }

}
