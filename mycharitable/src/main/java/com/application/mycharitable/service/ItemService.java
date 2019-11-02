package com.application.mycharitable.service;

import com.application.mycharitable.dbmgmt.Item;
import com.application.mycharitable.dbmgmt.ItemList;
import com.application.mycharitable.helper.ItemHelper;
import com.application.mycharitable.repository.ItemListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ItemService {

    @Autowired
    ItemListRepository itemListRepository;

    public ItemList retrieveFromInventory() {
        ItemHelper helper = new ItemHelper();
        String apiKey = helper.getApiKey();
        ItemList itemList = helper.getItems(apiKey);
        itemListRepository.save(itemList);
        return itemList;
    }

}
