package com.application.mycharitable.controller;

import com.application.mycharitable.dbmgmt.Item;
import com.application.mycharitable.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/items/")
public class ItemController {

    @Autowired
    private ItemService itemService;

    //retrieveFromInventory
    @RequestMapping("retrieveFromInventory")
    public List<Item> retrieveFromInventory() {
        return itemService.retrieveFromInventory();
    }

}
