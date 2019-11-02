package com.application.mycharitable.sms;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

public class SMSOut {

    public void sendUpdate() {
        Twilio.init(System.getenv("twilio_sid"), System.getenv("twilio_auth"));

        Message message = Message
                .creator(new PhoneNumber("+16787071728"), // to
                        new PhoneNumber(System.getenv("twilio_number")), // from
                        "There has been an update to the inventory of items around you! \n Check it out by logging here: {}")
                .create();

        System.out.println(message.getSid());
    }

}
