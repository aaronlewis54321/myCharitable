package com.application.mycharitable.service;

import com.application.mycharitable.dbmgmt.Item;
import com.application.mycharitable.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ItemService {

    @Autowired
    ItemRepository itemRepository;

    public List<Item> retrieveFromInventory() {
        ArrayList<Item> items = new ArrayList<>();
        //pull complete data
        //loop and put donation data into item list
        //fill in parsing algorithm
        return items;
    }

}
