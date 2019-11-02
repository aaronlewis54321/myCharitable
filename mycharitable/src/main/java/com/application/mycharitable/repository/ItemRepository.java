package com.application.mycharitable.repository;


import com.application.mycharitable.dbmgmt.User;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface ItemRepository extends MongoRepository<User, String> {

}