package com.efemsepci.HumanResources.enums;

import lombok.Getter;
import lombok.Setter;

public enum GraduationStatus {
    UNDER_GRADUATE("Lisans"),
    ASSOCIATE_DEGREE("Onlisans"),
    POST_GRADUATE("Yuksek lisans"),
    DOCTORATE("Doktora");

    @Getter
    @Setter
    private String name;

    GraduationStatus(String name){
        this.name = name;
    }
}
