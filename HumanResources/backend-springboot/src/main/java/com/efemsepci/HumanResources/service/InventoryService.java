package com.efemsepci.HumanResources.service;

import com.efemsepci.HumanResources.entity.Inventory;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

public interface InventoryService {
    public Inventory addInventory(Inventory inventory);
    public List<Inventory> getAllInventory();
    public ResponseEntity<Inventory> getInventoryById(Long id);
    public ResponseEntity<Map<String,Boolean>> deleteInventoryById(Long id);
    public Inventory giveInventoryToPersonnel(Long personnelId, Long inventoryId);
    public ResponseEntity<Inventory> updateInventoryById(Long id, Inventory inventory);
}
