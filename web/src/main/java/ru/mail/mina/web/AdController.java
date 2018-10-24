package ru.mail.mina.web;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import ru.mail.mina.service.dto.AdService;
import ru.mail.mina.service.dto.CarFeatureService;
import ru.mail.mina.service.dto.CommentService;
import ru.mail.mina.service.dto.UserService;
import ru.mail.mina.service.model.AdDTO;
import ru.mail.mina.service.model.CommentDTO;
import ru.mail.mina.service.model.UserDTO;
import ru.mail.mina.service.util.GetDate;
import ru.mail.mina.web.util.Pagination;

import javax.servlet.http.HttpServletRequest;
import java.io.*;
import java.util.*;

/**
 * Created by Администратор on 15.08.2017.
 */

@RestController
public class AdController {

    private final static String  Year_Of_Issue = "year_of_issue";
    private final static String  Price = "price";
    private final static String Body_Style = "bodyStyle";
    private final static String Color = "color";
    private final static String Transmission = "transmission";

    final static Logger logger = Logger.getLogger(AdController.class);

    private final AdService adService;
    private final CommentService commentService;
    private final UserService userService;
    private final CarFeatureService featureService;


    @Autowired
    public AdController(AdService adService, CommentService commentService, UserService userService,
                        CarFeatureService featureService) {
        this.adService = adService;
        this.commentService = commentService;
        this.userService = userService;
        this.featureService = featureService;
    }

    @RequestMapping(value = "/search", method = RequestMethod.GET)
    public ModelAndView searchAds(Model model, @RequestParam( value = "markId") Integer markId,
                                  @RequestParam( value = "modelId") Integer modelId,
                                  @RequestParam( value = "YearOfIssueFrom") String yearFrom,
                                  @RequestParam( value = "YearOfIssueTo") String yearTo,
                                  @RequestParam( value = "PriceFrom") String priceFrom,
                                  @RequestParam( value = "PriceTo") String priceTo) {
        model.addAttribute("user", new UserDTO());
        List<AdDTO> listAds = adService.filterAd(markId.toString(), modelId.toString(), yearFrom, yearTo, priceFrom, priceTo);
        return new ModelAndView("selectAds", "listAds", listAds);
    }

    @RequestMapping(value = "/getAllAds", method = RequestMethod.GET)
    public ModelAndView getAllAds(ModelMap model, @RequestParam(required = false, value = "page") Integer page) {
        Integer startpage = Pagination.startPage((page == null) ? page = 0 : page);
        Integer size = adService.findAll().size();
        Integer endpage = (size % 3 == 0) ? (size / 3) : (size / 3 + 1);
        model.addAttribute("startpage", startpage);
        model.addAttribute("endpage", endpage);
        model.addAttribute("user", new UserDTO());
        List<AdDTO> listAds = adService.getAll(page);
        model.addAttribute("listAds", listAds);
        return new ModelAndView("selectAds", "listAds", listAds);
    }

    @RequestMapping(value = "/userAds", method = RequestMethod.GET)
    public ModelAndView getUserAds(Model model) {
        model.addAttribute("user", new UserDTO());
        List<AdDTO> userAds = adService.getAdsByUser();
        return new ModelAndView("userAds", "userAds", userAds);
    }

    @RequestMapping(value = "/deleteAd/{id}", method = RequestMethod.GET)
    public ModelAndView deleteAd(Model model, @PathVariable Integer id) {
        model.addAttribute("user", new UserDTO());
        adService.deleteAd(id);
        return new ModelAndView("redirect:/userAds");
    }

    @RequestMapping(value = "/updateAd", method = RequestMethod.POST)
    public String updateUserAd(@ModelAttribute("userAd") AdDTO adDTO,
                               HttpServletRequest request, Model model) throws IOException {
        adDTO.setCarDescription(request.getParameter("text"));
        model.addAttribute("user", new UserDTO());
        adService.updateAd(adDTO);
        return "profile";
    }

    @RequestMapping(value = "/updateComment", method = RequestMethod.POST)
    public String updateComment(@ModelAttribute("commentAd") CommentDTO commentDTO,
                                @RequestParam(required = false, value = "adId") Integer id,
                                @RequestParam(required = false, value = "username") String username,
                                Model model) throws IOException {
        model.addAttribute("user", new UserDTO());
        model.addAttribute("userAd", new AdDTO());
        AdDTO adDTO = adService.getById(id);
        UserDTO userDTO = userService.getByUserName(username);
        commentDTO.setAdDTO(adDTO);
        commentDTO.setUserDTO(userDTO);
        commentService.saveComment(commentDTO);
        return "redirect:/ad/" + id;
    }


    @RequestMapping(value = "/ad/{id}", method = RequestMethod.GET)
    public String showUserAd(Model model, @PathVariable Integer id) {
        AdDTO adDTO = adService.getById(id);
        model.addAttribute("user", new UserDTO());
        model.addAttribute("userAd", adDTO);
        model.addAttribute("commentAd", new CommentDTO());
        return "updateAd";
    }

    @RequestMapping(value = "/createAd", method = RequestMethod.POST)
    public String createAd(Model model, @ModelAttribute("ad") AdDTO adDTO, HttpServletRequest request) throws IOException {
        model.addAttribute("user", new UserDTO());
        adDTO.setDate(GetDate.currentDate());
        adDTO.setCarDescription(request.getParameter("carDescription"));
        adService.saveAd(adDTO);
        return "redirect:/userAds";
    }

    @RequestMapping(value = {"/years"}, method = RequestMethod.GET)
    public List<String> loadYears() {
        List<String> tableOfYears = featureService.getFeaturesByKey(Year_Of_Issue);
        return tableOfYears;
    }

    @RequestMapping(value = {"/prices"}, method = RequestMethod.GET)
    public List<String> loadPrices() {
        List<String> tableOfPrices = featureService.getFeaturesByKey(Price);
        return tableOfPrices;
    }

    @RequestMapping(value = {"/bodyStyles"}, method = RequestMethod.GET)
    public List<String> loadBodyStyles () {
        List<String> bodyStyles = featureService.getFeaturesByKey(Body_Style);
        return bodyStyles;
    }

    @RequestMapping(value = {"/colors"}, method = RequestMethod.GET)
    public List<String> loadColors () {
        List<String> colors = featureService.getFeaturesByKey(Color);
        return colors;
    }

    @RequestMapping(value = {"/transm"}, method = RequestMethod.GET)
    public List<String> loadTransmission () {
        List<String> transmissions = featureService.getFeaturesByKey(Transmission);
        return transmissions;
    }


}
