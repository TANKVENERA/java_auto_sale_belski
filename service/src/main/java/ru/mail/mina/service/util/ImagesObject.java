package ru.mail.mina.service.util;

/**
 * Created by Mina on 09.12.2018.
 */
public class ImagesObject {

    private Integer index;
    private String base64String;
    private String fileName;

    public ImagesObject() {
    }

    public Integer getIndex() {
        return index;
    }

    public void setIndex(Integer index) {
        this.index = index;
    }

    public String getBase64String() {
        return base64String;
    }

    public void setBase64String(String base64String) {
        this.base64String = base64String;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    @Override
    public String toString() {
        return "ImagesObject{" +
                "index=" + index +
                ", base64String='" + base64String + '\'' +
                ", fileName='" + fileName + '\'' +
                '}';
    }
}
