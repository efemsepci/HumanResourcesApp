package com.efemsepci.HumanResources.entity;

import com.efemsepci.HumanResources.enums.InventoryStatus;
import com.efemsepci.HumanResources.enums.InventoryType;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="inventory")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Inventory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name="inventory_type")
    @Enumerated(EnumType.STRING)
    private InventoryType inventoryType;

    @Column(name="entering_date")
    private String enteringDate;

    @Column(name="brand")
    private String brand;

    @Column(name="model")
    private String model;

    @Column(name ="serial_no")
    private String serialNo;

    @Column(name="inventory_status")
    @Enumerated(EnumType.STRING)
    private InventoryStatus inventoryStatus;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "assign_id", referencedColumnName = "id")
    private Personnel personnel;
}
