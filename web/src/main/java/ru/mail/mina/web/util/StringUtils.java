package ru.mail.mina.web.util;

import java.util.regex.Pattern;

/**
 * Created by Mina on 06.02.2019.
 */
public class StringUtils {


    /**Returns true if the whole line matches the given pattern**/
    public static boolean matches (String regex, String str) {
        return Pattern.compile(regex).matcher(str).matches();
    }

    /**Returns true if  the line contains string that matches the given pattern**/
    public static boolean findMatch (String regex, String str) {
        return Pattern.compile(regex).matcher(str).find();
    }

    public static int numberOfCharOccurences (String str, String ch) {
        return org.springframework.util.StringUtils.countOccurrencesOf(str, ch);
    }
}
