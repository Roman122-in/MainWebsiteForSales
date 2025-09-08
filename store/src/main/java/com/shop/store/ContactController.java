package com.shop.store;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


import com.shop.store.EmailService;

@Controller
public class ContactController {

    private final EmailService emailService;

    @Autowired
    public ContactController(EmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping("/submit-contact-form")
    @ResponseBody
    public String handleContactForm(
            @RequestParam("name") String name,
            @RequestParam("contact_preference") String contactPreference,
            @RequestParam("contact_info") String contactInfo,
            @RequestParam(name = "message", required = false) String message) {


        emailService.sendContactEmail(name, contactPreference, contactInfo, message);

        return "{\"status\": \"success\"}";
    }
}