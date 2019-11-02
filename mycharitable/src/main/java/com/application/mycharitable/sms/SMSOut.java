package com.application.mycharitable.sms;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

public class SMSOut {

    public void sendUpdate(String phoneNumber) {
        Twilio.init("ACfcefce64e882c9d0366b8ccc4bebe753", "634c5634a2ba761f0bad219257741683");

        Message message = Message
                .creator(new PhoneNumber(phoneNumber), // to
                        new PhoneNumber(System.getenv("+12018905613")), // from
                        "There has been an update to the inventory of items around you! \n Check it out by logging here: {}")
                .create();

        System.out.println(message.getSid());
    }

}
