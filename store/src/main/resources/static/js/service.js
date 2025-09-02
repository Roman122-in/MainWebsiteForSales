const translations = {
    "de": {
        "page_title": "Impressum & Datenschutz",
        "home_button": "Startseite",
        "main_title": "Impressum & Datenschutz",
        "impressum_title": "Impressum",
        "impressum_s1_title": "Angaben zum Projekt",
        "impressum_s1_text": "Jtutor (Projekt im Aufbau)<br>Projektinhaber: Vasyl Cavcavadze",
        "impressum_s2_title": "Kontakt",
        "impressum_s2_text": "<strong>Hinweis:</strong> Dieses Webprojekt befindet sich derzeit in der Gründungsphase. Ein vollständiges Impressum mit Geschäftsanschrift und Steuernummer wird nach der offiziellen Gewerbeanmeldung umgehend nachgetragen.",
        "privacy_title": "Datenschutzerklärung",
        "privacy_s1_text": "Der Schutz Ihrer persönlichen Daten ist uns wichtig. Nachfolgend informieren wir Sie über die Verarbeitung personenbezogener Daten im Rahmen der Nutzung unserer Webseite.",
        "privacy_s2_text": "<strong>Verantwortliche Stelle:</strong> Der für die Verarbeitung von personenbezogenen Daten Verantwortliche ist der oben genannte Projektinhaber.",
        "privacy_s3_text": "<strong>Server-Log-Dateien:</strong> Bei jedem Aufruf unserer Webseite erfasst unser System automatisiert Daten vom Computersystem des aufrufenden Rechners (z.B. IP-Adresse, Datum, Uhrzeit). Diese Daten sind technisch erforderlich und werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO verarbeitet.",
        "privacy_s4_text": "<strong>Kontaktaufnahme per E-Mail:</strong> Wenn Sie uns per E-Mail kontaktieren, werden die von Ihnen übermittelten Daten zur Bearbeitung Ihrer Anfrage gespeichert. Grundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO.",
        "privacy_s5_text": "<strong>Ihre Rechte:</strong> Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten."
    },
    "en": {
        "page_title": "Legal Notice & Privacy Policy",
        "home_button": "Home",
        "main_title": "Legal Notice & Privacy Policy",
        "impressum_title": "Legal Notice (Impressum)",
        "impressum_s1_title": "Project Information",
        "impressum_s1_text": "Jtutor (Project in foundation phase)<br>Project Owner: Vasyl Cavcavadze",
        "impressum_s2_title": "Contact",
        "impressum_s2_text": "<strong>Note:</strong> This web project is currently in the founding phase. A complete legal notice with a business address and tax number will be added immediately following official business registration.",
        "privacy_title": "Privacy Policy",
        "privacy_s1_text": "The protection of your personal data is important to us. Below, we inform you about the processing of personal data within the scope of using our website.",
        "privacy_s2_text": "<strong>Responsible Body:</strong> The person responsible for the processing of personal data is the project owner mentioned above.",
        "privacy_s3_text": "<strong>Server Log Files:</strong> Each time our website is accessed, our system automatically collects data from the computer system of the accessing computer (e.g., IP address, date, time). This data is technically necessary and is processed on the basis of Art. 6 (1) (f) GDPR.",
        "privacy_s4_text": "<strong>Contact via E-Mail:</strong> If you contact us by e-mail, the data you provide will be stored to process your request. The basis for this processing is Art. 6 (1) (b) GDPR.",
        "privacy_s5_text": "<strong>Your Rights:</strong> You have the right to information, correction, deletion, and restriction of the processing of your personal data at any time."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('.lang-switcher a');
    const translatableElements = document.querySelectorAll('[data-translate-key]');

    const translatePage = (lang) => {
        // Устанавливаем язык для всего документа
        document.documentElement.lang = lang;

        translatableElements.forEach(el => {
            const key = el.getAttribute('data-translate-key');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });
    };

    langButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = e.target.getAttribute('data-lang');
            translatePage(lang);
        });
    });

    // Инициализация страницы на немецком языке (по умолчанию)
    translatePage('de');
});