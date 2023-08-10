package com.efemsepci.HumanResources.enums;

import lombok.Getter;
import lombok.Setter;

public enum Role {
    ADMIN("Admin"),
    HR_MANAGEMENT("IK Yonetimi"),
    INVENTORY_MANAGEMENT("Envanter Yonetimi");

    @Getter
    @Setter
    private String name;

    Role(String name){
        this.name = name;
    }
}
