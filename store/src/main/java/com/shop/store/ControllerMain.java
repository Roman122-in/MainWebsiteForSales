package com.shop.store;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import java.util.List;

@Controller
public class ControllerMain {

    @Autowired
    private JavaMailSender mailSender;

    // --- Методы для отображения страниц ---
    @GetMapping({"/", "/index"})
    public String indexpage(){
        return "index";
    }

    @GetMapping("/plan120")
    public String plan120(){
        return "plan120";
    }

    @GetMapping("/plan240")
    public String plan240(){
        return "plan240";
    }

    @GetMapping("/plan360")
    public String plan360(){
        return "plan360";
    }
    @GetMapping("/demo-with-bar120")
    public String demo120Page() {

        return "demo-with-bar120";
    }
    @GetMapping("/profi-demo240")
    public String profidemo(){
        return "profi-demo240";
    }
    @GetMapping("/expert-demo360")
    public String exoertdemo(){
        return "expert-demo360";
    }
    @GetMapping("/aboutcompany")
    public String aboutcompany(){
        return "aboutcompany";
    }
    @GetMapping("/tarifs")
    public String tarifs(){
        return "tarifs";
    }

    @GetMapping("/service")
    public String service(){
        return "service";
    }



    // --- Метод для ПЛАНА 120 ---
    @PostMapping("/submit-plan120")
    @ResponseBody
    public String handlePlan120Submission(
            @RequestParam("about") String about, @RequestParam("email") String email,
            @RequestParam("targetAudience") String targetAudience, @RequestParam("websiteGoal") String websiteGoal,
            @RequestParam(name = "features", required = false) List<String> features,
            @RequestParam("template") String template, @RequestParam("previewTitle") String previewTitle,
            @RequestParam("backgroundColor") String backgroundColor, @RequestParam("textColor") String textColor) {

        sendPlanEmail("120€", about, email, targetAudience, websiteGoal, features, template,
                previewTitle, backgroundColor, textColor, null, null);

        return "{\"status\": \"success\"}";
    }

    // --- Метод для ПЛАНА 240 ---
    @PostMapping("/submit-plan240")
    @ResponseBody
    public String handlePlan240Submission(
            @RequestParam("about") String about, @RequestParam("email") String email,
            @RequestParam("targetAudience") String targetAudience, @RequestParam("websiteGoal") String websiteGoal,
            @RequestParam(name = "features", required = false) List<String> features,
            @RequestParam("template") String template, @RequestParam("previewTitle") String previewTitle,
            @RequestParam("backgroundColor") String backgroundColor, @RequestParam("textColor") String textColor,
            // Уникальные поля для плана 240
            @RequestParam(name = "extraOptions", required = false) List<String> extraOptions) {

        sendPlanEmail("240€", about, email, targetAudience, websiteGoal, features, template,
                previewTitle, backgroundColor, textColor, extraOptions, null);

        return "{\"status\": \"success\"}";
    }

    // --- Метод для ПЛАНА 360 ---
    @PostMapping("/submit-plan360")
    @ResponseBody
    public String handlePlan360Submission(
            @RequestParam("about") String about, @RequestParam("email") String email,
            @RequestParam("targetAudience") String targetAudience, @RequestParam("websiteGoal") String websiteGoal,
            @RequestParam(name = "features", required = false) List<String> features,
            @RequestParam("template") String template, @RequestParam("previewTitle") String previewTitle,
            @RequestParam("backgroundColor") String backgroundColor, @RequestParam("textColor") String textColor,
            // Уникальные поля для плана 360
            @RequestParam(name = "extraOptions", required = false) List<String> extraOptions,
            @RequestParam(name = "planner", required = false) String planner) {

        sendPlanEmail("360€", about, email, targetAudience, websiteGoal, features, template,
                previewTitle, backgroundColor, textColor, extraOptions, planner);

        return "{\"status\": \"success\"}";
    }

    // --- ОБЩИЙ "УМНЫЙ" ПОМОЩНИК ДЛЯ ОТПРАВКИ ПИСЕМ ---
    private void sendPlanEmail(String planName, String about, String email, String targetAudience, String websiteGoal,
                               List<String> features, String template, String previewTitle, String backgroundColor,
                               String textColor, List<String> extraOptions, String planner) {

        StringBuilder emailText = new StringBuilder();
        emailText.append("====== NEUE ANFRAGE FÜR WEBSITE (PLAN ").append(planName).append(") ======\n\n");
        emailText.append("ÜBER DEN KUNDEN:\n").append(about).append("\n\n");
        emailText.append("KONTAKT-E-MAIL: ").append(email).append("\n\n");
        emailText.append("--- PROJEKTDETAILS ---\n");
        emailText.append("ZIELGRUPPE: ").append(targetAudience).append("\n");
        emailText.append("HAUPTZIEL DER WEBSITE: ").append(websiteGoal).append("\n");

        if (features != null && !features.isEmpty()) {
            emailText.append("BASIS-FUNKTIONEN: ").append(String.join(", ", features)).append("\n");
        }

        if (extraOptions != null && !extraOptions.isEmpty()) {
            emailText.append("ZUSÄTZLICHE OPTIONEN: ").append(String.join(", ", extraOptions)).append("\n");
        }

        if (planner != null && !planner.isEmpty()) {
            emailText.append("PERSÖNLICHER PLANER: ").append(planner).append("\n");
        }

        emailText.append("\n--- DESIGN-DETAILS ---\n");
        emailText.append("GEWÄHLTE VORLAGE: ").append(template).append("\n");
        emailText.append("TITEL IN DER VORSCHAU: ").append(previewTitle).append("\n");
        emailText.append("HINTERGRUNDFARBE: ").append(backgroundColor).append("\n");
        emailText.append("TEXTFARBE: ").append(textColor).append("\n");

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