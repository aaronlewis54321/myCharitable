package com.application.mycharitable.dbmgmt;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class User {

    private String email;
    private String password;
    private String phoneNumber;
    private String ebtNumber;

    public User() {

    }

    public User(String email, String password, String phoneNumber, String ebtNumber) {
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.ebtNumber = ebtNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEbtNumber() {
        return ebtNumber;
    }

    public void setEbtNumber(String ebtNumber) {
        this.ebtNumber = ebtNumber;
    }


}
