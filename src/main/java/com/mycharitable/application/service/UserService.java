package com.mycharitable.application.service;

import com.mycharitable.application.dbmgmt.User;
import com.mycharitable.application.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    //Create User
    public User createUser(String email, String password, String phoneNumber, String etbNumber) {
        return userRepository.insert(new User(email, password, phoneNumber, etbNumber));
    }

    //Retrieve User
    public User getUser(String email) {
        User u;

        try {
            u = userRepository.findById(email).get();
        } catch (NoSuchElementException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "", e);
        }

        return u;
    }




}
