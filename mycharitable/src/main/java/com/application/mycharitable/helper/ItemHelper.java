package com.application.mycharitable.helper;

import com.application.mycharitable.dbmgmt.Item;
import com.application.mycharitable.dbmgmt.ItemList;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;


public class ItemHelper {

    public static String getApiKey()
    {
        try {

            URL url = new URL("https://api-reg-apigee.ncrsilverlab.com/v2/oauth2/token");
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Accept", "application/json");
            //conn.setRequestProperty("Authorization", "Bearer " + apiKey);
            conn.setRequestProperty("client_id", "gsu_552502");
            conn.setRequestProperty("client_secret", "B7DD01CE-8888-4A49-A5C4-90C329D158B5");

            if (conn.getResponseCode() != 200) {
                throw new RuntimeException("Failed : HTTP error code : "
                        + conn.getResponseCode());
            }

            BufferedReader br = new BufferedReader(new InputStreamReader(
                    (conn.getInputStream())));

            String output;
            String result = "";
            while ((output = br.readLine()) != null) {
                result += output;
            }

            conn.disconnect();

            int count = 26;
            for (int i = count; result.charAt(i) != '\"'; i++)
            {
                count++;
            }
            String key = result.substring(26, count);

            return key;

        } catch (MalformedURLException e) {

            e.printStackTrace();

        } catch (IOException e) {

            e.printStackTrace();

        }
        return null;
    }


    public static ItemList getItems(String apiKey) {
        try {

            URL url = new URL("https://api-reg-apigee.ncrsilverlab.com/v2/inventory/items?limit=1000");
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Accept", "application/json");
            conn.setRequestProperty("Authorization", "Bearer " + apiKey);

            if (conn.getResponseCode() != 200) {
                throw new RuntimeException("Failed : HTTP error code : "
                        + conn.getResponseCode());
            }

            BufferedReader br = new BufferedReader(new InputStreamReader(
                    (conn.getInputStream())));

            String output;
            String result = "";
            while ((output = br.readLine()) != null) {
                result += output;
            }

            conn.disconnect();

            ArrayList<Item> items = new ArrayList<Item>();
            ItemList itemList = new ItemList();
            for (int i = 0; i < result.length()-12; i++)
            {
                if (result.substring(i, i+9).equals("Donations"))
                {
                    System.out.println("Test");
                    int lower;
                    for(lower = i; lower > 0; lower--)
                    {
                        if(result.substring(lower, lower+12).equals("ItemMasterId"))
                        {
                            break;
                        }
                    }
                    int upper;
                    for (upper = i; upper < result.length(); upper++)
                    {
                        if(result.substring(upper, upper+10).equals("Commission"))
                        {
                            break;
                        }
                    }
                    items.add(newItem(result.substring(lower, upper)));
                    itemList.setItems(items);
                    i = upper;
                }
            }
            return itemList;

        } catch (MalformedURLException e) {

            e.printStackTrace();

        } catch (IOException e) {

            e.printStackTrace();

        }
        return null;
    }

    private static Item newItem(String input)
    {
        return new Item(getAttr(input, "Name"), getAttr(input, "Description"), getAttr(input, "ItemCategoryName"), getAttr(input, "Barcode"), getAttr(input, "SKU"), getAttr(input, "PLU"),  toBool(getAttr(input, "IsAvailable")), 5);
    }

    private static String getAttr(String input, String target)
    {
        for(int i = 0; i < input.length(); i++)
        {
            if(input.substring(i, i+target.length()).equals(target))
            {
                String result = "";
                for(int j = i+target.length()+3; input.charAt(j) != '\"'; j++)
                {
                    result += input.charAt(j);
                }
                System.out.println(result);
                if (result.equals("ull,"))
                {
                    return null;
                }
                if (result.equals("rue,"))
                {
                    return "true";
                }
                return result;
            }
        }
        return null;
    }
    private static boolean toBool(String b)
    {
        if (b.equals("true"))
        {
            return true;
        }
        else return false;
    }
}