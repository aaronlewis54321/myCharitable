package com.application.mycharitable.sms;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

public class SMSOut {

    public void sendUpdate(String firstname, String phoneNumber) {
        Twilio.init("ACfcefce64e882c9d0366b8ccc4bebe753", "634c5634a2ba761f0bad219257741683");

        Message message = Message
                .creator(new PhoneNumber(phoneNumber), // to
                        new PhoneNumber("+12018905613"), // from
                        "Hey " + firstname + "! \nThere has been an update to the inventory of items around you! Check it out by logging in here-\n " +
                                "http://mycharitable.eastus.cloudapp.azure.com:8080/#/login")
                .create();

        System.out.println(message.getSid());
    }

    public void sendConfirmation(String firstname, String phoneNumber, String confirm) {
        Twilio.init("ACfcefce64e882c9d0366b8ccc4bebe753", "634c5634a2ba761f0bad219257741683");

        Message message = Message
                .creator(new PhoneNumber(phoneNumber), // to
                        new PhoneNumber("+12018905613"), // from
                        "Hey " + firstname + "! \nThank you for placing your order. Here is a confirmation of what you have ordered - \n" + confirm)
                .create();

        System.out.println(message.getSid());
    }

}
