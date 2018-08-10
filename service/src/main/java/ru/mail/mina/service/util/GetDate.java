package ru.mail.mina.service.util;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by Администратор on 05.09.2017.
 */
public class GetDate {

    public static String currentDate () {
        Date  date = new Date();
        SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy HH-mm");
        String currentDate = dateFormat.format(date);
        return currentDate;
    }
}
