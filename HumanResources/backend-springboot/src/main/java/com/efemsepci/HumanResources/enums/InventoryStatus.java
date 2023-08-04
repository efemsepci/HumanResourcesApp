package com.efemsepci.HumanResources.enums;

import lombok.Getter;
import lombok.Setter;

public enum InventoryStatus {
    IN_STAFF("Personelde"),
    IN_THE_OFFICE("Ofiste"),
    IN_STORAGE("Depoda");

    @Getter
    @Setter
    private String name;

    InventoryStatus(String name){
        this.name = name;
    }
}
