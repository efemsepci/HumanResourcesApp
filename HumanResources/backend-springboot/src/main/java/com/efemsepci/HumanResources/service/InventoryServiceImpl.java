package com.efemsepci.HumanResources.service;

import com.efemsepci.HumanResources.entity.Inventory;
import com.efemsepci.HumanResources.entity.Personnel;
import com.efemsepci.HumanResources.enums.InventoryStatus;
import com.efemsepci.HumanResources.exception.ResourceNotFoundException;
import com.efemsepci.HumanResources.repository.InventoryRepository;
import com.efemsepci.HumanResources.repository.PersonnelRepository;
import lombok.AllArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@AllArgsConstructor
public class InventoryServiceImpl implements InventoryService {

    @Autowired
    private InventoryRepository inventoryRepository;

    @Autowired
    private PersonnelRepository personnelRepository;

    @Override
    public Inventory addInventory(Inventory inventory){
        return inventoryRepository.save(inventory);
    }

    @Override
    public List<Inventory> getAllInventory() {
        return inventoryRepository.findAll();
    }

    @Override
    public ResponseEntity<Inventory> getInventoryById(Long id) {
        Inventory inventory = inventoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Inventory not exist with id: " + id));
        return ResponseEntity.ok(inventory);
    }

    @Override
    public ResponseEntity<Map<String, Boolean>> deleteInventoryById(Long id) {
        Inventory inventory = inventoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Inventory not exist with id: " + id));
        inventoryRepository.delete(inventory);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @Override
    public Inventory giveInventoryToPersonnel(Long personnelId,Long inventoryId) {
        Inventory inventory = inventoryRepository.findById(inventoryId)
                .orElseThrow(() -> new ResourceNotFoundException("Inventory not found with id:" + inventoryId));
        Personnel personnel = personnelRepository.findById(personnelId)
                .orElseThrow(() -> new ResourceNotFoundException("Personnel not found with id: " + personnelId));
        inventory.setPersonnel(personnel);
        inventory.setInventoryStatus(InventoryStatus.IN_STAFF);

        return inventoryRepository.save(inventory);
    }


    @Override
    public ResponseEntity<Inventory> updateInventoryById(Long id, Inventory inventory) {
        Inventory tempInventory = inventoryRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Inventory not exist with id: " + id));
        tempInventory.setInventoryStatus(inventory.getInventoryStatus());
        tempInventory.setInventoryType(inventory.getInventoryType());
        tempInventory.setBrand(inventory.getBrand());
        tempInventory.setModel(inventory.getModel());
        tempInventory.setEnteringDate(inventory.getEnteringDate());
        tempInventory.setSerialNo(inventory.getSerialNo());

        if(tempInventory.getInventoryStatus().equals(InventoryStatus.IN_STORAGE) || tempInventory.getInventoryStatus().equals(InventoryStatus.IN_THE_OFFICE)){
            tempInventory.setPersonnel(null);
        }
        else{
            tempInventory.setPersonnel(inventory.getPersonnel());
        }

        Inventory updatedInventory = inventoryRepository.save(tempInventory);
        return ResponseEntity.ok(updatedInventory);
    }
}
