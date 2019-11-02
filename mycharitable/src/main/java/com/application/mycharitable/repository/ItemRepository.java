package com.application.mycharitable.repository;


import com.application.mycharitable.dbmgmt.Item;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface ItemRepository extends MongoRepository<Item, String> {

}