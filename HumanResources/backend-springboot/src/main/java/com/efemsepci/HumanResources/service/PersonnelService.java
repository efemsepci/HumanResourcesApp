package com.efemsepci.HumanResources.service;

import com.efemsepci.HumanResources.entity.Personnel;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

public interface PersonnelService {
    public Personnel addPersonnel(Personnel personnel);
    public List<Personnel> getAllPersonnel();
    public ResponseEntity<Personnel> getPersonnelById(Long id);
    public ResponseEntity<Map<String,Boolean>> deletePersonnelById(Long id);
    public ResponseEntity<Personnel> updatePersonnelById(Long id,Personnel personnel);





}
