package com.application.mycharitable.service;

import com.application.mycharitable.dbmgmt.User;
import com.application.mycharitable.repository.UserRepository;
import com.application.mycharitable.dbmgmt.User;
import com.application.mycharitable.repository.UserRepository;
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
    public User createUser(String email, String password, String phoneNumber, String ebtNumber) {
        return userRepository.insert(new User(email, password, phoneNumber, ebtNumber));
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