package ru.mail.mina.web.util;

import ru.mail.mina.service.model.MarkDTO;

import java.util.List;

/**
 * Created by Mina on 13.11.2018.
 */
public class StaticDataEntity {

    private List<MarkDTO> marks;
    private List<String> yearsOfIssue;
    private List<String> prices;
    private List<String>  bodyStyles;
    private List<String> colors;
    private List<String> transmissions;

    public StaticDataEntity(List<MarkDTO> marks, List<String> yearsOfIssue,
                            List<String> prices, List<String> bodyStyles,
                            List<String> colors, List<String> transmissions) {
        this.marks = marks;
        this.yearsOfIssue = yearsOfIssue;
        this.prices = prices;
        this.bodyStyles = bodyStyles;
        this.colors = colors;
        this.transmissions = transmissions;
    }

    public List<MarkDTO> getMarks() {
        return marks;
    }

    public void setMarks(List<MarkDTO> marks) {
        this.marks = marks;
    }

    public List<String> getYearsOfIssue() {
        return yearsOfIssue;
    }

    public void setYearsOfIssue(List<String> yearsOfIssue) {
        this.yearsOfIssue = yearsOfIssue;
    }

    public List<String> getPrices() {
        return prices;
    }

    public void setPrices(List<String> prices) {
        this.prices = prices;
    }

    public List<String> getBodyStyles() {
        return bodyStyles;
    }

    public void setBodyStyles(List<String> bodyStyles) {
        this.bodyStyles = bodyStyles;
    }

    public List<String> getColors() {
        return colors;
    }

    public void setColors(List<String> colors) {
        this.colors = colors;
    }

    public List<String> getTransmissions() {
        return transmissions;
    }

    public void setTransmissions(List<String> transmissions) {
        this.transmissions = transmissions;
    }
}
