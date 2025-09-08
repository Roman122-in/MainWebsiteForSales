document.addEventListener('DOMContentLoaded', () => {

    const translations = {
           "de": {
               "page_title": "Jtutor",
               "nav_about": "Über uns",
               "nav_packages": "Pakete",
               "nav_service": "Service",
               "nav_work": "Arbeiten",
               "nav_process": "Prozess",
               "slide1_title": "Sind Sie Lehrer? Wir finden, diese harte Arbeit verdient eine <span class=\"highlight\">faire Belohnung</span>",
               "slide1_overlay": "Werde ein unabhängiger Tutor",
               "slide2_title": "Plattformen verdienen Millionen – durch Ihr Geld und Ihre Arbeit <span class=\"highlight\">Beenden Sie es jetzt sofort!</span>",
               "slide2_overlay": "Machen Sie Schluss damit!",
               "slide3_title": "Stoppen Sie das Teilen Ihrer Einnahmen. Mit Ihrer eigenen Webseite behalten Sie <span class=\"highlight\">wirklich 100% Ihrer Einnahmen</span>",
               "slide3_overlay_top": "Ihre eigene Webseite!",
               "slide3_overlay_bottom": "Zahlen Sie nie wieder Provision!",
               "plans_title": "Fertige Lösungen für Ihre Praxis",
               "plan1_title": "Paket \"Start\"",
               "plan1_tagline": "Ihr schneller Start in die Online-Welt",
               "plan1_timeline": "Lieferzeit: 3 Tage",
               "view_demo": "View demo",
               "popular": "Beliebt",
               "plan2_title": "Paket \"Profi\"",
               "plan2_tagline": "Mehr Schüler und Automatisierung",
               "plan2_timeline": "Lieferzeit: 6 Tage",
               "plan3_title": "Paket \"Experte\"",
               "plan3_tagline": "Volle Kontrolle über Ihr Geschäft",
               "plan3_timeline": "Lieferzeit: 9 Tage",
               "visual1_title": "Andere verkaufen und vergessen?",
               "visual1_p": "Wir bleiben an Ihrer Seite. Wir garantieren professionellen 12/6 Support für alle Ihre Anliegen",
               "visual2_title": "Die Kraft und Stabilität von Java",
               "visual2_p": "Wir nutzen Java – eine bewährte Technologie, die maximale Reaktionsfähigkeit und Zuverlässigkeit für Ihre Website gewährleistet",
               "visual3_title": "Gebaut für heute, bereit für morgen",
               "visual3_p": "Ihr Unternehmen wächst, und Ihre Website wächst mit. Wir schaffen skalierbare Lösungen für Ihre Zukunft",
               "visual_cta_title": "Bereit für den nächsten Schritt?",
               "visual_cta_btn": "Jetzt Projekt starten",
               "visual4_title": "Unsicher über das Endergebnis?",
               "visual4_p": "Kein Problem. Unsere einjährige Garantie umfasst kostenlose Designanpassungen und die Erweiterung von Funktionen",
               "visual5_title": "Ein Prozess ohne Komplikationen",
               "visual5_p": "Domain und Datenbank für ein Jahr geschenkt. Sie bestellen einfach und erhalten ein fertiges Produkt, ohne sich um Zahlungen oder technische Details zu kümmern",
               "visual6_title": "Ihr Fokus: Ihr Business",
               "visual6_p": "Unser Fokus: Ihre Website. Konzentrieren Sie sich auf das, was zählt – wir kümmern uns um die Technik",
               "tech_title": "Eine solide Basis für Ihren Erfolg",
               "tech_intro": "Die Wahl der richtigen Technologie ist das Fundament für eine erfolgreiche Website. Wir setzen auf eine Kombination, die von den größten Unternehmen der Welt verwendet wird, um Ihnen maximale Leistung, Sicherheit und Zukunftssicherheit zu garantieren.",
               "tech1_title": "Warum ist Java besser als PHP & Co.?",
               "tech1_p": "Stellen Sie sich vor, Sie bauen ein Haus. PHP ist wie ein bewährtes Holzhaus – gut für viele Projekte. Java ist wie ein Fundament aus Stahlbeton, das von Anfang an auf maximale Stabilität und enormes Wachstum ausgelegt ist. Deshalb sind Websites auf Java-Basis nicht nur schneller, sondern auch deutlich sicherer gegen Angriffe.",
               "tech1_quote": "Ihre Website läuft auf der gleichen Technologie, die von Institutionen wie der <strong>NASA, Google und dem Pentagon</strong> für ihre kritischsten Systeme verwendet wird.",
               "tech2_title": "Was bedeutet \"Spring Framework\" für Sie?",
               "tech2_p": "Wenn Java der Stahlbeton ist, dann ist Spring der professionelle Baukasten mit vorgefertigten Premium-Modulen. Anstatt jedes Rad neu zu erfinden, verwenden wir industrieerprobte Komponenten für Sicherheit und Datenbankzugriffe. Für Sie bedeutet das: <strong>schnellere Entwicklung, weniger Fehler und eine spürbar höhere Qualität</strong> des Endprodukts.",
               "tech3_title": "Ihr Vorteil: Eine Investition in die Zukunft",
               "tech3_p": "Eine Website auf Java & Spring ist keine kurzfristige Lösung, sondern ein stabiles Geschäfts-Asset. Sie ist eine Investition, die sich auszahlt, indem sie über Jahre hinweg zuverlässig funktioniert und problemlos mit Ihren Ambitionen mitwächst, ohne dass eine teure Neuentwicklung nötig wird.",
               "portfolio_title": "Beispiele unserer Arbeit",
               "portfolio1_title": "Webseite für einen Coach",
               "portfolio1_p": "Branding & Buchungssystem",
               "portfolio2_title": "Online-Shop für Handwerk",
               "portfolio2_p": "E-Commerce",
               "portfolio3_title": "Firmenwebsite",
               "portfolio3_p": "Corporate Design",
               "portfolio4_title": "Landingpage für Event",
               "portfolio4_p": "Marketing & Design",
               "portfolio5_title": "Tutor-Dashboard",
               "portfolio5_p": "Web-Anwendung",
               "portfolio6_title": "Mobilität App",
               "portfolio6_p": "UX/UI Design",
               "testimonials_title": "Was unsere Kunden sagen",
               "testimonial1_text": "Das Team hat meine Vision perfekt umgesetzt. Der gesamte Prozess war transparent und professionell. Meine neue Webseite hat mir geholfen, meine Schülerzahl innerhalb von zwei Monaten zu verdoppeln!",
               "testimonial1_name": "Markus Schmidt",
               "testimonial1_role": "Online-Coach für Mathematik",
               "testimonial2_text": "Die fertige Webseite ist wirklich top und funktioniert einwandfrei. Anfangs gab es eine kleine Verzögerung bei der Antwort auf meine Mails, was mich etwas beunruhigt hat. Aber nachdem wir uns abgestimmt hatten, wurde mein Problem sehr schnell und kompetent gelöst.",
               "testimonial2_name": "Anna Bauer",
               "testimonial2_role": "Sprachlehrerin",
               "testimonial3_text": "Absolut empfehlenswert! Die neue Seite sieht nicht nur modern aus, sondern ist auch unglaublich schnell. Ich erhalte viel mehr Anfragen als früher. Ein großes Dankeschön für die tolle Arbeit!",
               "testimonial3_name": "Lena Richter",
               "testimonial3_role": "Inhaberin, Kreativstudio",
               "contact_title": "Lassen Sie uns über Ihr Projekt sprechen",
               "form_name": "Ihr Name",
               "form_name_placeholder": "Wie heißen Sie?",
               "form_preference": "Wie sollen wir Sie kontaktieren?",
               "form_contact_info": "Ihre E-Mail oder Telefonnummer / Nickname",
               "form_contact_info_placeholder": "Ihre Kontaktinformation",
               "form_message": "Ihre Nachricht",
               "form_message_placeholder": "Erzählen Sie uns kurz von Ihrem Projekt...",
               "form_submit": "Anfrage senden",
               "payment_title": "Sichere Zahlungsmethoden"
           },
           "en": {
               "page_title": "Jtutor",
               "nav_about": "About Us",
               "nav_packages": "Packages",
               "nav_service": "Service",
               "nav_work": "Work",
               "nav_process": "Process",
               "slide1_title": "Are you a teacher? We think this hard work deserves a <span class=\"highlight\">fair reward</span>",
               "slide1_overlay": "Become an independent tutor",
               "slide2_title": "Platforms earn millions – through your money and your work. <span class=\"highlight\">End it right now!</span>",
               "slide2_overlay": "Put an end to it!",
               "slide3_title": "Stop sharing your earnings. With your own website, you keep <span class=\"highlight\">truly 100% of your income</span>",
               "slide3_overlay_top": "Your own website!",
               "slide3_overlay_bottom": "Never pay a commission again!",
               "plans_title": "Ready-made Solutions for Your Practice",
               "plan1_title": "Package \"Start\"",
               "plan1_tagline": "Your quick start into the online world",
               "plan1_timeline": "Delivery time: 3 days",
               "view_demo": "View demo",
               "popular": "Popular",
               "plan2_title": "Package \"Pro\"",
               "plan2_tagline": "More students and automation",
               "plan2_timeline": "Delivery time: 6 days",
               "plan3_title": "Package \"Expert\"",
               "plan3_tagline": "Full control over your business",
               "plan3_timeline": "Delivery time: 9 days",
               "visual1_title": "Others sell and forget?",
               "visual1_p": "We stay by your side. We guarantee professional 12/6 support for all your concerns.",
               "visual2_title": "The Power and Stability of Java",
               "visual2_p": "We use Java – a proven technology that ensures maximum responsiveness and reliability for your website.",
               "visual3_title": "Built for today, ready for tomorrow",
               "visual3_p": "Your business grows, and your website grows with it. We create scalable solutions for your future.",
               "visual_cta_title": "Ready for the next step?",
               "visual_cta_btn": "Start Project Now",
               "visual4_title": "Unsure about the final result?",
               "visual4_p": "No problem. Our one-year guarantee includes free design adjustments and feature extensions.",
               "visual5_title": "A process without complications",
               "visual5_p": "Domain and database for one year included. You simply order and receive a finished product without worrying about payments or technical details.",
               "visual6_title": "Your Focus: Your Business",
               "visual6_p": "Our Focus: Your Website. You concentrate on what matters – we take care of the technology.",
               "tech_title": "A Solid Foundation for Your Success",
               "tech_intro": "Choosing the right technology is the foundation for a successful website. We rely on a combination used by the world's largest companies to guarantee you maximum performance, security, and future-proofing.",
               "tech1_title": "Why is Java better than PHP & Co.?",
               "tech1_p": "Imagine building a house. PHP is like a proven wooden house – good for many projects. Java is like a foundation of reinforced concrete, designed from the start for maximum stability and enormous growth. Websites based on Java are not only faster but also significantly more secure against attacks.",
               "tech1_quote": "Your website runs on the same technology used by institutions like <strong>NASA, Google, and the Pentagon</strong> for their most critical systems.",
               "tech2_title": "What does \"Spring Framework\" mean for you?",
               "tech2_p": "If Java is the reinforced concrete, then Spring is the professional toolkit with pre-made premium modules. Instead of reinventing every wheel, we use industry-proven components for security and database access. For you, this means: <strong>faster development, fewer errors, and a noticeably higher quality</strong> of the final product.",
               "tech3_title": "Your Advantage: An Investment in the Future",
               "tech3_p": "A website on Java & Spring is not a short-term solution, but a stable business asset. It's an investment that pays off by functioning reliably for years and growing effortlessly with your ambitions, without the need for an expensive complete rebuild.",
               "portfolio_title": "Examples of Our Work",
               "portfolio1_title": "Website for a Coach",
               "portfolio1_p": "Branding & Booking System",
               "portfolio2_title": "Online Shop for Crafts",
               "portfolio2_p": "E-Commerce",
               "portfolio3_title": "Corporate Website",
               "portfolio3_p": "Corporate Design",
               "portfolio4_title": "Landing Page for Event",
               "portfolio4_p": "Marketing & Design",
               "portfolio5_title": "Tutor Dashboard",
               "portfolio5_p": "Web Application",
               "portfolio6_title": "Mobility App",
               "portfolio6_p": "UX/UI Design",
               "testimonials_title": "What Our Customers Say",
               "testimonial1_text": "The team implemented my vision perfectly. The entire process was transparent and professional. My new website helped me double my student numbers within two months!",
               "testimonial1_name": "Markus Schmidt",
               "testimonial1_role": "Online Coach for Mathematics",
               "testimonial2_text": "The finished website is really top-notch and works perfectly. Initially, there was a slight delay in responding to my emails, which worried me a bit. But after we coordinated, my problem was solved very quickly and competently.",
               "testimonial2_name": "Anna Bauer",
               "testimonial2_role": "Language Teacher",
               "testimonial3_text": "Absolutely recommended! The new site not only looks modern but is also incredibly fast. I'm receiving many more inquiries than before. A big thank you for the great work!",
               "testimonial3_name": "Lena Richter",
               "testimonial3_role": "Owner, Creative Studio",
               "contact_title": "Let's Talk About Your Project",
               "form_name": "Your Name",
               "form_name_placeholder": "What is your name?",
               "form_preference": "How should we contact you?",
               "form_contact_info": "Your Email or Phone Number / Username",
               "form_contact_info_placeholder": "Your contact information",
               "form_message": "Your Message",
               "form_message_placeholder": "Tell us briefly about your project...",
               "form_submit": "Send Request",
               "payment_title": "Secure Payment Methods"
           }
       };


    let currentLang = 'de'; // Язык по умолчанию
    const langButton = document.querySelector('.lang-btn');
    const translatableElements = document.querySelectorAll('[data-translate-key]');

    const translatePage = (lang) => {
        translatableElements.forEach(el => {
            const key = el.getAttribute('data-translate-key');
            if (translations[lang] && translations[lang][key]) {
                // Проверяем, является ли элемент input или textarea, чтобы изменить placeholder
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    if (el.placeholder) {
                        el.placeholder = translations[lang][key];
                    }
                } else {
                     el.innerHTML = translations[lang][key];
                }
            }
        });
        document.documentElement.lang = lang; // Обновляем язык страницы
    };

    if (langButton) {
        langButton.addEventListener('click', () => {
            // Переключаем язык
            currentLang = currentLang === 'de' ? 'en' : 'de';

            // Вызываем функцию перевода
            translatePage(currentLang);

            // Обновляем текст на самой кнопке
            langButton.textContent = currentLang === 'de' ? 'EN' : 'DE';
        });
    }

    const animatedItems = document.querySelectorAll('.tarife-visual-section .animated-item');
    if (animatedItems.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 });

        animatedItems.forEach(item => {
            observer.observe(item);
        });
    }

    const visualTariffSection = document.querySelector('.tarife-visual-section');
    if (visualTariffSection) {
        const animatedSlogans = visualTariffSection.querySelectorAll('.animated-slogan');
        const sloganObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.2 });
        animatedSlogans.forEach(slogan => sloganObserver.observe(slogan));
    }

    /* ==============================
       3. Swiper-слайдер на главном блоке
    ============================== */
    const swiper = new Swiper('.hero-slideshow', {
        loop: true,
        autoplay: { delay: 4000, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        on: {
            init: function () {
                animateSlideText(this.slides[this.activeIndex]);
            },
            slideChangeTransitionEnd: function () {
                animateSlideText(this.slides[this.activeIndex]);
            },
            slideChangeTransitionStart: function () {
                const activeSlide = this.slides[this.activeIndex];
                if (activeSlide) {
                    const animatedTexts = activeSlide.querySelectorAll('.animated-text');
                    animatedTexts.forEach(el => el.classList.remove('is-visible'));
                }
            }
        }
    });

    function animateSlideText(slideElement) {
        if (!slideElement) return;
        const animatedTexts = slideElement.querySelectorAll('.animated-text');
        setTimeout(() => {
            animatedTexts.forEach(el => el.classList.add('is-visible'));
        }, 50);
    }
});