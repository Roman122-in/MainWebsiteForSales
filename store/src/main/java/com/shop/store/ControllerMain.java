package com.shop.store;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import java.util.List;


import com.shop.store.EmailService;

@Controller
public class ControllerMain {

    private final EmailService emailService; // ✅ 2. Создаем поле для сервиса

    @Autowired
    public ControllerMain(EmailService emailService) { // ✅ 3. Внедряем сервис через конструктор
        this.emailService = emailService;
    }

    // --- Методы для отображения страниц (остаются без изменений) ---
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

        // ✅ 4. Вызываем метод из EmailService
        emailService.sendPlanEmail("120€", about, email, targetAudience, websiteGoal, features, template,
                previewTitle, backgroundColor, textColor, null, null);

        return "{\"status\": \"success\"}";
    }

    // --- Метод для ПЛАНА 240 ---
    @PostMapping("/submit-plan240")
    @ResponseBody
    public String handlePlan240Submission(
            // ... параметры ...
            @RequestParam("about") String about, @RequestParam("email") String email,
            @RequestParam("targetAudience") String targetAudience, @RequestParam("websiteGoal") String websiteGoal,
            @RequestParam(name = "features", required = false) List<String> features,
            @RequestParam("template") String template, @RequestParam("previewTitle") String previewTitle,
            @RequestParam("backgroundColor") String backgroundColor, @RequestParam("textColor") String textColor,
            @RequestParam(name = "extraOptions", required = false) List<String> extraOptions) {

        // ✅ 4. Вызываем метод из EmailService
        emailService.sendPlanEmail("240€", about, email, targetAudience, websiteGoal, features, template,
                previewTitle, backgroundColor, textColor, extraOptions, null);

        return "{\"status\": \"success\"}";
    }

    // --- Метод для ПЛАНА 360 ---
    @PostMapping("/submit-plan360")
    @ResponseBody
    public String handlePlan360Submission(
            // ... параметры ...
            @RequestParam("about") String about, @RequestParam("email") String email,
            @RequestParam("targetAudience") String targetAudience, @RequestParam("websiteGoal") String websiteGoal,
            @RequestParam(name = "features", required = false) List<String> features,
            @RequestParam("template") String template, @RequestParam("previewTitle") String previewTitle,
            @RequestParam("backgroundColor") String backgroundColor, @RequestParam("textColor") String textColor,
            @RequestParam(name = "extraOptions", required = false) List<String> extraOptions,
            @RequestParam(name = "planner", required = false) String planner) {

        // ✅ 4. Вызываем метод из EmailService
        emailService.sendPlanEmail("360€", about, email, targetAudience, websiteGoal, features, template,
                previewTitle, backgroundColor, textColor, extraOptions, planner);

        return "{\"status\": \"success\"}";
    }

    // ❌ 5. Приватный метод sendPlanEmail и поле mailSender отсюда ПОЛНОСТЬЮ УДАЛЕНЫ
}