package com.application.mycharitable.dbmgmt;

import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "itemList")
public class ItemList {

    @Id
    private String name;
    private List<Item> items;

    public ItemList(List<Item> items) {
        this.items = items;
    }

    public ItemList() {
        name = "Nameish";
    }

    public List<Item> getItems() {
        return items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }


}
