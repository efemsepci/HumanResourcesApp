package com.efemsepci.HumanResources.service;

import com.efemsepci.HumanResources.entity.User;

import java.util.List;

public interface UserService {
    public User saveUser(User user);
    public List<User> getAllUsers();
    public User getUserById(Long id);
    public void deleteUserById(Long id);
}
