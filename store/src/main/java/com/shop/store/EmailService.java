package com.shop.store;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class EmailService {

    private final JavaMailSender mailSender;

    @Autowired
    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    // --- Метод для отправки письма с контактной формы ---
    public void sendContactEmail(String name, String contactPreference, String contactInfo, String message) {
        StringBuilder emailText = new StringBuilder();
        emailText.append("====== NEUE KONTAKTANFRAGE VON DER WEBSITE ======\n\n");
        emailText.append("VON: ").append(name).append("\n");
        emailText.append("BEVORZUGTE KONTAKTMETHODE: ").append(contactPreference).append("\n");
        emailText.append("KONTAKTINFORMATION: ").append(contactInfo).append("\n\n");
        emailText.append("NACHRICHT:\n").append(message).append("\n");

        try {
            SimpleMailMessage mail = new SimpleMailMessage();
            mail.setTo("cavcavadzevasilij@gmail.com"); // Ваша почта
            mail.setSubject("Neue Kontaktanfrage von " + name);
            mail.setText(emailText.toString());
            mailSender.send(mail);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void sendPlanEmail(String planName, String about, String email, String targetAudience, String websiteGoal,
                              List<String> features, String template, String previewTitle, String backgroundColor,
                              String textColor, List<String> extraOptions, String planner) {

        StringBuilder emailText = new StringBuilder();
        emailText.append("====== NEUE ANFRAGE FÜR WEBSITE (PLAN ").append(planName).append(") ======\n\n");
        // ... остальной код для формирования письма по планам ...
        emailText.append("ÜBER DEN KUNDEN:\n").append(about).append("\n\n");
        emailText.append("KONTAKT-E-MAIL: ").append(email).append("\n\n");
        // и т.д.

        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo("cavcavadzevasilij@gmail.com");
            message.setSubject("Neue Anfrage für Website (Plan " + planName + ")");
            message.setText(emailText.toString());
            mailSender.send(message);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}