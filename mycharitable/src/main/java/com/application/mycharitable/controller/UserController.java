package com.application.mycharitable.controller;

import com.application.mycharitable.dbmgmt.User;
import com.application.mycharitable.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/getUser")
    public User getUser(@RequestParam String email) {
        return userService.getUser(email);
    }

    @RequestMapping("/createUser")
    public User createUser(@RequestParam String email, @RequestParam String password, @RequestParam String fName, @RequestParam String lName, @RequestParam String phoneNumber, @RequestParam String ebtNumber) {
        return userService.createUser(email, password, fName, lName, phoneNumber, ebtNumber);
    }

}
