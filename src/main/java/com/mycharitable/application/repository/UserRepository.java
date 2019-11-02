package com.mycharitable.application.repository;


import com.mycharitable.application.dbmgmt.User;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface UserRepository extends MongoRepository<User, String> {

}
