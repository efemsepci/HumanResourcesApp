package com.efemsepci.HumanResources.entity;

import com.efemsepci.HumanResources.enums.Department;
import com.efemsepci.HumanResources.enums.GraduationStatus;
import com.efemsepci.HumanResources.enums.Job;
import com.efemsepci.HumanResources.enums.Role;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@Entity
@Table(name="personnel")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Personnel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "name")
    private String firstName;

    @Column(name = "surname")
    private String lastName;

    @Column(name = "gender")
    private char gender; //M,F

    @Column(name = "birth_date")
    private String birthDate;

    @Column(name = "marital_status")
    private String maritalStatus;

    @Column(name = "tckn")
    private String tcNo;

    @Column(name = "graduation_status")
    @Enumerated(EnumType.STRING)
    private GraduationStatus graduationStatus;

    @Column(name = "department")
    @Enumerated(EnumType.STRING)
    private Department department;

    @Column(name = "job")
    @Enumerated(EnumType.STRING)
    private Job job;

    @Column(name = "is_working")
    private String isWorking;

}
