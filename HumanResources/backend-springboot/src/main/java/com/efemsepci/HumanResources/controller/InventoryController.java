package com.efemsepci.HumanResources.controller;

import com.efemsepci.HumanResources.entity.Inventory;
import com.efemsepci.HumanResources.service.InventoryService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/im")
@AllArgsConstructor
public class InventoryController {

    private InventoryService inventoryService;

    @GetMapping("/inventory")
    public List<Inventory> getAllInventory(){
        return inventoryService.getAllInventory();
    }

    @PostMapping("/inventory")
    public Inventory addInventory(@RequestBody Inventory inventory){
        return inventoryService.addInventory(inventory);
    }

    @GetMapping("/inventory/{id}")
    public ResponseEntity<Inventory> getInventory(@PathVariable Long id){
        return inventoryService.getInventoryById(id);
    }

    @DeleteMapping("/inventory/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteInventory(@PathVariable Long id){
        return inventoryService.deleteInventoryById(id);
    }

    @PutMapping("/inventory/{personnelId}/{inventoryId}")
    public ResponseEntity<Inventory> giveInventory(@PathVariable Long personnelId, @PathVariable Long inventoryId){
        Inventory inventory = inventoryService.giveInventoryToPersonnel(personnelId,inventoryId);
        return ResponseEntity.ok(inventory);
    }

    @PutMapping("/inventory/{id}")
    public ResponseEntity<Inventory> updateInventory(@PathVariable Long id, @RequestBody Inventory inventory){
        return inventoryService.updateInventoryById(id,inventory);
    }
}
