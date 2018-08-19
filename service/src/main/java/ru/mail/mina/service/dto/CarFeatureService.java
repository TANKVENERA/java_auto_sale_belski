package ru.mail.mina.service.dto;

import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Mina on 15.08.2018.
 */

public interface CarFeatureService  {

    List<String> getFeaturesByKey (String key);
}
