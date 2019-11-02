package com.application.mycharitable.controller;

import com.application.mycharitable.dbmgmt.ItemList;
import com.application.mycharitable.service.ItemListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/itemlist/")
public class ItemListController {

    @Autowired
    ItemListService itemListService;

    //getUpdatedInventory
    @RequestMapping("/getInventory")
    public ItemList getInventory() {
        return itemListService.retrieveFromInventory();
    }
}
