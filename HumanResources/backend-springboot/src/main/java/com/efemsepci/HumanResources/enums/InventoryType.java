package com.efemsepci.HumanResources.enums;

import lombok.Getter;
import lombok.Setter;

public enum InventoryType {
    MOUSE("Mouse"),
    COMPUTER("Bilgisayar"),
    DISK("Disk"),
    CAR("Araba");

    @Getter
    @Setter
    private String name;

    InventoryType(String name){
        this.name = name;
    }
}
