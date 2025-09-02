document.addEventListener('DOMContentLoaded', function() {
    // --- СЛОВАРЬ (добавлен ключ success.message) ---
    const translations = {
        de: {
            "plan120.title": "Fragebogen: Website",
            "plan120.main.header": "Fragebogen für Ihre Website (600 €)",
            "plan120.main.subtitle": "Bitte füllen Sie die folgenden Felder aus.",
            "form.label.about": "Erzählen Sie uns von sich:",
            "form.placeholder.about": "Wer Sie sind, was Sie tun...",
            "form.label.email": "Ihre Kontakt-E-Mail:",
            "form.placeholder.email": "ihre.email@example.com",
            "form.label.audience": "Wer ist Ihre Zielgruppe?",
            "form.placeholder.audience": "Familien, Studenten, Unternehmen...",
            "form.label.goal": "Was ist das Hauptziel Ihrer Website?",
            "form.placeholder.goal": "Neue Kunden gewinnen, Portfolio zeigen...",
            "form.label.features": "Benötigte Funktionen:",
            "form.feature.contact": "Kontaktformular",
            "form.feature.gallery": "Bildergalerie",
            "form.feature.blog": "Blog / Neuigkeiten",
            "form.header.template": "Wählen Sie eine Designvorlage:",
            "template.minimalism": "Minimalistisch",
            "template.corporate": "Professionell",
            "template.creative": "Kreativ",
            "preview.header": "Live-Vorschau",
            "preview.label.title": "Titel in der Vorschau:",
            "preview.placeholder.title": "Ihr Seitentitel",
            "preview.label.bgColor": "Hintergrundfarbe:",
            "preview.label.textColor": "Textfarbe:",
            "form.button.submit": "Fragebogen absenden",
            "preview.button.expand": "Vollbild",
            "preview.button.close": "Schließen",
            "success.message": "Erfolg!",
            "disclaimer.text": "Bitte beachten Sie: Dies ist eine vorläufige Visualisierung, um Ihnen eine allgemeine Vorstellung von Stil und Funktion zu geben. Das endgültige Design und alle Details werden wir persönlich mit Ihnen besprechen, um sicherzustellen, dass die Website genau Ihren Wünschen entspricht."
        },
        en: {
            "plan120.title": "Questionnaire: Website",
            "plan120.main.header": "Questionnaire for Your Website (€600)",
            "plan120.main.subtitle": "Please fill out the fields below.",
            "form.label.about": "Tell us about yourself:",
            "form.placeholder.about": "Who you are, what you do...",
            "form.label.email": "Your Contact E-mail:",
            "form.placeholder.email": "your.email@example.com",
            "form.label.audience": "Who is your target audience?",
            "form.placeholder.audience": "Families, students, businesses...",
            "form.label.goal": "What is the main goal of your website?",
            "form.placeholder.goal": "Get new clients, show portfolio...",
            "form.label.features": "Required Features:",
            "form.feature.contact": "Contact Form",
            "form.feature.gallery": "Image Gallery",
            "form.feature.blog": "Blog / News",
            "form.header.template": "Choose a Design Template:",
            "template.minimalism": "Minimalist",
            "template.corporate": "Corporate",
            "template.creative": "Creative",
            "preview.header": "Live Preview",
            "preview.label.title": "Title in Preview:",
            "preview.placeholder.title": "Your Page Title",
            "preview.label.bgColor": "Background Color:",
            "preview.label.textColor": "Text Color:",
            "form.button.submit": "Submit Questionnaire",
            "preview.button.expand": "Expand",
            "preview.button.close": "Close",
            "success.message": "Success!",
            "disclaimer.text": "Please note: This is a preliminary visualization to give you a general idea of style and function. The final design and all details will be discussed with you personally to ensure the website matches your exact vision."
        }
    };



    const templateFileMap = {
        minimalism: 'minimum240.html',
        corporate: 'corporativ240.html',
        creative: 'creativ240.html'
    };



    // --- Получение элементов (добавлено модальное окно) ---
    const form = document.getElementById('websiteForm');
    const successModal = document.getElementById('success-modal');
    const templateOptions = document.querySelectorAll('.template-option');
    const selectedTemplateInput = document.getElementById('selectedTemplate');
    const previewSection = document.getElementById('preview-section');
    const websitePreview = document.getElementById('websitePreview');
    const previewTitleInput = document.getElementById('previewTitle');
    const backgroundColorInput = document.getElementById('backgroundColor');
    const textColorInput = document.getElementById('textColor');
    const expandPreviewBtn = document.getElementById('expand-preview-btn');
    const closeFullscreenBtn = document.getElementById('close-fullscreen-btn');

    function translatePage(lang) { /* ...код без изменений... */ }
    document.querySelectorAll('.lang-switcher a').forEach(el => { /* ...код без изменений... */ });
    function applyCustomizations() { /* ...код без изменений... */ }
    function loadTemplateIntoIframe(templateKey) { /* ...код без изменений... */ }
    function rgbToHex(rgb) { /* ...код без изменений... */ }
    templateOptions.forEach(option => { /* ...код без изменений... */ });
    previewTitleInput.addEventListener('input', applyCustomizations);
    backgroundColorInput.addEventListener('input', applyCustomizations);
    textColorInput.addEventListener('input', applyCustomizations);
    expandPreviewBtn.addEventListener('click', function() { /* ...код без изменений... */ });
    closeFullscreenBtn.addEventListener('click', function() { /* ...код без изменений... */ });

    // --- Копируем сюда все функции без изменений ---
    function translatePage(e){document.documentElement.lang=e;document.title=translations[e]["plan240.title"];document.querySelectorAll("[data-translate-key]").forEach(t=>t.innerText=translations[e][t.getAttribute("data-translate-key")]);document.querySelectorAll("[data-translate-key-placeholder]").forEach(t=>t.placeholder=translations[e][t.getAttribute("data-translate-key-placeholder")])}document.querySelectorAll(".lang-switcher a").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();translatePage(e.getAttribute("data-lang"))})});function applyCustomizations(){const e=websitePreview.contentDocument;if(e&&e.body){e.body.style.backgroundColor=backgroundColorInput.value;e.querySelectorAll("h1, h2, p, a, strong, li").forEach(t=>{t.style.color=textColorInput.value});const t=e.getElementById("previewTitle");t&&(t.innerText=previewTitleInput.value)}}function loadTemplateIntoIframe(e){const t=templateFileMap[e];if(!t)return void console.error("Не найдено имя файла для ключа:",e);websitePreview.src=`/templates/${t}`,previewSection.style.display="block",websitePreview.onload=()=>{const e=websitePreview.contentDocument,t=e.getElementById("previewTitle"),o=window.getComputedStyle(e.body),n=e.querySelector("p, h1, h2"),l=n?window.getComputedStyle(n):o;previewTitleInput.value=t?t.innerText:"",backgroundColorInput.value=rgbToHex(o.backgroundColor),textColorInput.value=rgbToHex(l.color)}}function rgbToHex(e){if(!e)return"#000000";let t=e.indexOf(",")>-1?",":" ";e=e.substr(4).split(")")[0].split(t);let o=(+e[0]).toString(16),n=(+e[1]).toString(16),l=(+e[2]).toString(16);return 1==o.length&&(o="0"+o),1==n.length&&(n="0"+n),1==l.length&&(l="0"+l),"#"+o+n+l}
    templateOptions.forEach(e=>{e.addEventListener("click",()=>{templateOptions.forEach(e=>e.classList.remove("selected")),e.classList.add("selected"),selectedTemplateInput.value=e.dataset.template,loadTemplateIntoIframe(e.dataset.template)})});previewTitleInput.addEventListener("input",applyCustomizations);backgroundColorInput.addEventListener("input",applyCustomizations);textColorInput.addEventListener("input",applyCustomizations);expandPreviewBtn.addEventListener("click",function(){websitePreview.classList.add("fullscreen-mode"),closeFullscreenBtn.style.display="block",document.body.style.overflow="hidden"});closeFullscreenBtn.addEventListener("click",function(){websitePreview.classList.remove("fullscreen-mode"),closeFullscreenBtn.style.display="none",document.body.style.overflow="auto"});

    // --- ОБНОВЛЕННЫЙ ОБРАБОТЧИК ОТПРАВКИ ФОРМЫ ---
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (!selectedTemplateInput.value) {
            alert('Bitte wählen Sie eine Vorlage.');
            return;
        }
        const formData = new FormData(form);
        formData.append('previewTitle', previewTitleInput.value);
        formData.append('backgroundColor', backgroundColorInput.value);
        formData.append('textColor', textColorInput.value);

        fetch('/submit-plan240', { method: 'POST', body: formData })
            .then(response => response.json())
            .then(data => {
                console.log('Antwort vom Server:', data);

                // Показываем окно успеха
                successModal.style.display = 'flex';
                setTimeout(() => successModal.classList.add('visible'), 10);

                // Ждем 2 секунды, а затем перенаправляем на главную
                setTimeout(() => {
                    window.location.href = '/index';
                }, 2000); // 2000 миллисекунд = 2 секунды
            })
            .catch(error => {
                console.error('Fehler:', error);
                alert('Ein Fehler ist aufgetreten.');
            });
    });

    translatePage('de');
});