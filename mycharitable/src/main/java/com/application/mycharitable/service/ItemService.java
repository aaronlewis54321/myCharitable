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
        ItemHelper helper = new ItemHelper();
        String apiKey = helper.getApiKey();
        ArrayList<Item> items = helper.getItems(apiKey);
        return items;
    }

}
