package com.efemsepci.HumanResources.enums;

import lombok.Getter;
import lombok.Setter;

public enum Job {
    SOFTWARE_DEVELOPER("Yazılım Gelistirme Uzmani"),
    ASSISTANT_DIRECTOR("Yardimci Yonetmen"),
    DIRECTOR("Yonetmen");

    @Getter
    @Setter
    private String name;

    Job(String name){
        this.name = name;
    }
}
