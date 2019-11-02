package com.application.mycharitable.service;

import com.application.mycharitable.dbmgmt.ItemList;
import com.application.mycharitable.helper.ItemHelper;
import com.application.mycharitable.repository.ItemListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ItemListService {

    @Autowired
    ItemListRepository itemListRepository;

    public Optional<ItemList> getLocalInventory() {
       return itemListRepository.findById("Nameish");
    }

    public ItemList retrieveFromInventory() {
        ItemHelper helper = new ItemHelper();
        String apiKey = helper.getApiKey();
        ItemList itemList = helper.getItems(apiKey);
        return itemList;
    }

    public ItemList saveInventoryLocally(ItemList itemList) {
        itemListRepository.save(itemList);
        return itemList;
    }
}
