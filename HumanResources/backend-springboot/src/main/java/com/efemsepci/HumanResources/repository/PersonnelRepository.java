package com.efemsepci.HumanResources.repository;

import com.efemsepci.HumanResources.entity.Personnel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonnelRepository extends JpaRepository<Personnel,Long> {

}
