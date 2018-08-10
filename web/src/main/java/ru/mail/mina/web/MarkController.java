package ru.mail.mina.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import ru.mail.mina.service.dto.MarkService;

/**
 * Created by Администратор on 03.10.2017.
 */

@Controller
public class MarkController {

    private final MarkService markService;

    @Autowired
    public MarkController(MarkService markService) {
        this.markService = markService;
    }

//    @RequestMapping()
//    public String getAllMarks () {
//
//        return "";
//    }
}
