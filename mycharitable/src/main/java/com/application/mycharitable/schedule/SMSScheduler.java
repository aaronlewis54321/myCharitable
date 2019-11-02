package com.application.mycharitable.schedule;

import com.application.mycharitable.dbmgmt.User;
import com.application.mycharitable.repository.UserRepository;
import com.application.mycharitable.sms.SMSOut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class SMSScheduler {

    @Autowired
    UserRepository userRepository;
    @Service
    ItemService itemService;
    @Scheduled(fixedRate = 10000)
    public void sendSMSIfChange() {
        SMSOut smsout = new SMSOut();
        ItemList
        List<User> users = userRepository.findAll();
        for(User u : users) {
            smsout.sendUpdate();
        }
    }
}
