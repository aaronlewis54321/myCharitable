package com.application.mycharitable.repository;
import com.application.mycharitable.dbmgmt.ItemList;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ItemListRepository extends MongoRepository<ItemList, String> {

}
