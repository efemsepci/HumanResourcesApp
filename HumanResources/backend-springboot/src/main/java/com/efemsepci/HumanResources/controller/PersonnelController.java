package com.efemsepci.HumanResources.controller;


import com.efemsepci.HumanResources.entity.Personnel;
import com.efemsepci.HumanResources.service.PersonnelService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/hr")
@AllArgsConstructor
public class PersonnelController {

    private PersonnelService personnelService;

    @GetMapping("/personnel")
    public List<Personnel> getAllPersonnel(){
        return personnelService.getAllPersonnel();
    }

    @PostMapping("/personnel")
    public Personnel addPersonnel(@RequestBody Personnel personnel){
        return personnelService.addPersonnel(personnel);
    }

    @GetMapping("/personnel/{id}")
    public ResponseEntity<Personnel> getPersonnel(@PathVariable Long id){
        return personnelService.getPersonnelById(id);
    }

    @PutMapping("/personnel/{id}")
    public ResponseEntity<Personnel> updatePersonnel(@PathVariable Long id, @RequestBody Personnel personnel){
        return personnelService.updatePersonnelById(id,personnel);
    }

    @DeleteMapping("/personnel/{id}")
    public ResponseEntity<Map<String,Boolean>> deletePersonnel(@PathVariable Long id){
        return personnelService.deletePersonnelById(id);
    }



}
