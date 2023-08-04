package com.efemsepci.HumanResources.entity;

import com.efemsepci.HumanResources.enums.Role;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//user classının personnelden farkı rol sahibi olacak ve
//rollerine göre yapacakları işlemler ayarlanacak.
//sadece admin rolü yeni user oluşturabilecek.


@Entity
@Table(name="users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name="username")
    private String username;

    @Column(name="password")
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(name="role")
    private Role role;


}
