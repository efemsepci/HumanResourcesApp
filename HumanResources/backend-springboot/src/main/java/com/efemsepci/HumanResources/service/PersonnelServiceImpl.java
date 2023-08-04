package com.efemsepci.HumanResources.service;

import com.efemsepci.HumanResources.entity.Personnel;
import com.efemsepci.HumanResources.exception.ResourceNotFoundException;
import com.efemsepci.HumanResources.repository.PersonnelRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@AllArgsConstructor
public class PersonnelServiceImpl implements PersonnelService{

    @Autowired
    private PersonnelRepository personnelRepository;


    @Override
    public Personnel addPersonnel(Personnel personnel) {
        return personnelRepository.save(personnel);
    }

    @Override
    public List<Personnel> getAllPersonnel() {
        return personnelRepository.findAll();
    }

    @Override
    public ResponseEntity<Personnel> getPersonnelById(Long id) {
        Personnel personnel = personnelRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Personnel not exist with id: " + id));
        return ResponseEntity.ok(personnel);
    }

    @Override
    public ResponseEntity<Map<String,Boolean>> deletePersonnelById(Long id) {
        Personnel personnel = personnelRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Personnel not exist with id: " + id));
        personnelRepository.delete(personnel);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Personnel> updatePersonnelById(Long id,Personnel personnel) {
        Personnel tempPersonnel = personnelRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Personnel not exist with id: " + id));
        tempPersonnel.setFirstName(personnel.getFirstName());
        tempPersonnel.setLastName(personnel.getLastName());
        tempPersonnel.setGender(personnel.getGender());
        tempPersonnel.setDepartment(personnel.getDepartment());
        tempPersonnel.setJob(personnel.getJob());
        tempPersonnel.setBirthDate(personnel.getBirthDate());
        tempPersonnel.setTcNo(personnel.getTcNo());
        tempPersonnel.setIsWorking(personnel.getIsWorking());
        tempPersonnel.setMaritalStatus(personnel.getMaritalStatus());
        tempPersonnel.setGraduationStatus(personnel.getGraduationStatus());

        Personnel updatedPersonnel = personnelRepository.save(tempPersonnel);
        return ResponseEntity.ok(updatedPersonnel);
    }
}
