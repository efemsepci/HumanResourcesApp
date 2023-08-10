package com.efemsepci.HumanResources.service;

import com.efemsepci.HumanResources.entity.User;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

public interface UserService {
    public User saveUser(User user);
    public List<User> getAllUsers();
    public ResponseEntity<User> getUserById(Long id);
    public ResponseEntity<Map<String,Boolean>> deleteUserById(Long id);
}
