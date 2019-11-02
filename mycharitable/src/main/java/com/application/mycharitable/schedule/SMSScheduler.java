package com.application.mycharitable.schedule;

import com.application.mycharitable.dbmgmt.ItemList;
import com.application.mycharitable.dbmgmt.User;
import com.application.mycharitable.helper.ItemHelper;
import com.application.mycharitable.repository.ItemListRepository;
import com.application.mycharitable.repository.UserRepository;
import com.application.mycharitable.service.ItemListService;
import com.application.mycharitable.sms.SMSOut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Component
public class SMSScheduler {

    @Autowired
    UserRepository userRepository;
    @Autowired
    ItemListRepository itemListRepository;
    @Autowired
    ItemListService itemListService;



    @Scheduled(fixedRate = 10000)
    public void sendSMSIfChange() {
        SMSOut smsout = new SMSOut();
        ItemHelper helper = new ItemHelper();
        ItemList prev;

        try {
            prev = itemListRepository.findById("Nameish").get();
        } catch (NoSuchElementException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "", e);
        }

        ItemList newList = itemListService.retrieveFromInventory();

        if(prev.getItems().size() < newList.getItems().size()) {
            List<User> users = userRepository.findAll();
            for(User u : users) {
                smsout.sendUpdate(u.getPhoneNumber());
            }
        }

        itemListRepository.save(newList);
    }
}
