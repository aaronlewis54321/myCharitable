package com.application.mycharitable.dbmgmt;

public class Item {
    private String name;
    private String description;
    private String itemCategoryName;
    private String barcode;
    private String sku;
    private String plu;
    private boolean isAvailable;
    private int quantity;

    public Item(String name, String description, String itemCategoryName, String barcode, String sku, String plu, boolean isAvailable, int quantity) {
        this.name = name;
        this.description = description;
        this.itemCategoryName = itemCategoryName;
        this.barcode = barcode;
        this.sku = sku;
        this.plu = plu;
        this.isAvailable = isAvailable;
        this.quantity = quantity;
    }

    public Item() {

    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getItemCategoryName() {
        return itemCategoryName;
    }

    public void setItemCategoryName(String itemCategoryName) {
        this.itemCategoryName = itemCategoryName;
    }

    public String getBarcode() {
        return barcode;
    }

    public void setBarcode(String barcode) {
        this.barcode = barcode;
    }

    public String getSku() {
        return sku;
    }

    public void setSku(String sku) {
        this.sku = sku;
    }

    public String getPlu() {
        return plu;
    }

    public void setPlu(String plu) {
        this.plu = plu;
    }

    public boolean isAvailable() {
        return isAvailable;
    }

    public void setAvailable(boolean available) {
        isAvailable = available;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
