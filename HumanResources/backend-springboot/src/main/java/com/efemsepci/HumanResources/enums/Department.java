package com.efemsepci.HumanResources.enums;

import lombok.Getter;
import lombok.Setter;

public enum Department {
    SOFTWARE_DEVELOPMENT("Yazılım Gelistirme"),
    RESEARCH_DEVELOPMENT("Arge");

    @Getter
    @Setter
    private String name;

    Department(String name){
        this.name = name;
    }
}
