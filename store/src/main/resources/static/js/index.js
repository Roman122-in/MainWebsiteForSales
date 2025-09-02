document.addEventListener('DOMContentLoaded', () => {

    // --- СЛОВАРЬ С ПЕРЕВОДАМИ ---
    const translations = {
        'de': {
            'page_title': 'Jtutor - Webseiten für Nachhilfelehrer ohne Provision',
            'nav_about': 'Über uns',
            'nav_packages': 'Pakete',
            'nav_features': 'Service',
            'nav_portfolio': 'Arbeiten',
            'nav_process': 'Prozess',
            'lang_btn': 'EN',
            'hero_title': 'Werden Sie ein unabhängiger Nachhilfelehrer',
            'hero_subtitle': 'Erstellen Sie Ihre eigene Webseite, um Schüler direkt zu gewinnen<br>und 100% des Einkommens ohne Zwischenhändler zu erhalten.',
            'step1': 'Paket wählen',
            'step2': 'Formular ausfüllen',
            'step3': 'Webseite erhalten',
            'section_title_solutions': 'Fertige Lösungen für Ihre Praxis',
            'start_tagline': 'Ihr schneller Start in die Online-Welt',
            'start_timeline': 'Lieferzeit: 3 Tage',
            'pro_tagline': 'Mehr Schüler und Automatisierung',
            'pro_timeline': 'Lieferzeit: 6 Tage',
            'expert_tagline': 'Volle Kontrolle über Ihr Geschäft',
            'expert_timeline': 'Lieferzeit: 9 Tage',
            'btn_choose': 'Paket wählen',
            'section_title_features': 'Was in jedem Paket enthalten ist',
            'portfolio_title': 'Beispiele unserer Arbeit',
            'portfolio1_title': 'Webseite für Mathe-Nachhilfe',
            'portfolio1_desc': 'Paket "Start". Eine prägnante Web-Visitenkarte mit den wichtigsten Informationen.',
            'portfolio2_title': 'Webseite für eine Sprachschule',
            'portfolio2_desc': 'Paket "Profi". Mehrseitige Webseite mit Blog und Online-Buchungssystem.',
            'portfolio3_title': 'Plattform für einen Online-Coach',
            'portfolio3_desc': 'Paket "Experte". Individuelle Lösung mit persönlichem Dashboard.',
            'desc_title': 'Ihr direkter Weg zu mehr Schülern – ohne Provisionen',
            'desc_p1': 'In der heutigen digitalen Welt sind Online-Plattformen und Agenturen für viele Nachhilfelehrer der erste Schritt, um Schüler zu finden. Doch dieser Komfort hat seinen Preis: hohe Provisionen, die einen erheblichen Teil Ihres hart verdienten Einkommens aufzehren, mangelnde Kontrolle über Ihren eigenen Auftritt und keine Möglichkeit, eine persönliche Marke aufzubauen. Sie sind nur ein Profil unter vielen, abhängig von den Regeln und Algorithmen Dritter.',
            'desc_p2': 'Jtutor wurde aus der Überzeugung gegründet, dass es einen besseren Weg geben muss. Unsere Mission ist es, qualifizierten Nachhilfelehrern wie Ihnen die Werkzeuge an die Hand zu geben, um volle Unabhängigkeit zu erlangen. Wir glauben, dass Sie 100% Ihres Einkommens verdienen und die Freiheit haben sollten, Ihr Geschäft nach Ihren eigenen Vorstellungen zu gestalten. Anstatt monatlich Gebühren an Plattformen zu zahlen, investieren Sie einmalig in Ihren eigenen, professionellen Web-Auftritt – ein digitales Zuhause, das Ihnen gehört.',
            'desc_p3': 'Wir bieten Ihnen keine komplizierten Baukästen oder technischen Herausforderungen. Unsere Pakete sind "Rundum-Sorglos-Lösungen". Von der einfachen, aber eleganten Web-Visitenkarte ("Start"-Paket) bis hin zur voll ausgestatteten Business-Plattform mit Online-Buchung und persönlichem Dashboard ("Experte"-Paket) – wir kümmern uns um alles. Domain, Hosting, Design, technische Wartung und Support für ein ganzes Jahr sind immer inklusive. So können Sie sich auf das konzentrieren, was Sie am besten können: unterrichten.',
            'faq_title': 'Häufig gestellte Fragen',
            'faq1_q': 'Wie erfolgt die Zahlung?',
            'faq1_a': 'Die Zahlung erfolgt sicher per Banküberweisung auf unser Geschäftskonto. Nach unserer Erstberatung und der Klärung aller Details erhalten Sie von uns eine offizielle Rechnung. Die Arbeit an Ihrem Projekt beginnt unmittelbar nach Eingang der Zahlung. Dieser Prozess gewährleistet volle Transparenz und Sicherheit für beide Seiten.',
            'faq2_q': 'Was ist in der jährlichen Unterstützung enthalten?',
            'faq2_a': 'Unsere jährliche Unterstützung ist ein "Rundum-Sorglos-Paket". Es deckt alle technischen Notwendigkeiten ab: die Kosten für Domain und Hosting, die Behebung technischer Fehler, regelmäßige Sicherheitsupdates und die Gewährleistung der Systemkompatibilität. Zusätzlich sind kleinere inhaltliche Änderungen (bis zu 15 Minuten Arbeitsaufwand, z.B. das Ändern einer Telefonnummer oder das Austauschen eines Fotos) ebenfalls enthalten.',
            'faq3_q': 'Kann ich meine Webseite später erweitern?',
            'faq3_a': 'Ja, absolut. Ihre Webseite wird mit Blick auf zukünftiges Wachstum erstellt. Ein Upgrade von einem kleineren auf ein größeres Paket ist jederzeit problemlos möglich. Darüber hinaus können wir auch völlig neue, individuelle Funktionen nach Ihren Wünschen hinzufügen, wie z.B. die Integration eines Zahlungssystems oder einen geschützten Mitgliederbereich. Kontaktieren Sie uns einfach für eine Beratung.',
            'process_title': 'Unser Arbeitsprozess',
            'process1_title': 'Anfrage & Beratung',
            'process1_desc': 'Sie wählen ein Paket und senden eine Anfrage. Wir kontaktieren Sie, um Ihre Ziele, Zielgruppe und Designwünsche im Detail zu besprechen.',
            'process2_title': 'Design & Entwicklung',
            'process2_desc': 'Wir erstellen ein Designkonzept und beginnen nach Ihrer Fregabe mit der technischen Umsetzung Ihrer Webseite.',
            'process3_title': 'Übergabe & Launch',
            'process3_desc': 'Wir präsentieren Ihnen die fertige Webseite, nehmen letzte Anpassungen vor und stellen sie nach Ihrer endgültigen Zustimmung online.',
            'footer_copyright': 'Alle Rechte vorbehalten.',
        },
        'en': {
            'page_title': 'Jtutor - Websites for Tutors without Commission',
            'nav_about': 'About Us',
            'nav_packages': 'Packages',
            'nav_features': 'Service',
            'nav_portfolio': 'Work',
            'nav_process': 'Process',
            'lang_btn': 'DE',
            'hero_title': 'Become an Independent Tutor',
            'hero_subtitle': 'Create your own website to attract students directly<br>and receive 100% of the income without intermediaries.',
            'step1': 'Choose Package',
            'step2': 'Fill Out Form',
            'step3': 'Get Website',
            'section_title_solutions': 'Ready-made Solutions for Your Practice',
            'start_tagline': 'Your quick start into the online world',
            'start_timeline': 'Delivery: 3 days',
            'pro_tagline': 'More students and automation',
            'pro_timeline': 'Delivery: 6 days',
            'expert_tagline': 'Full control over your business',
            'expert_timeline': 'Delivery: 9 days',
            'btn_choose': 'Choose Package',
            'section_title_features': 'What is included in each package',
            'portfolio_title': 'Examples of Our Work',
            'portfolio1_title': 'Website for a Math Tutor',
            'portfolio1_desc': '"Start" Package. A concise web business card with the most important information.',
            'portfolio2_title': 'Website for a Language School',
            'portfolio2_desc': '"Profi" Package. A multi-page resource with a blog and online booking.',
            'portfolio3_title': 'Platform for an Online Coach',
            'portfolio3_desc': '"Expert" Package. A custom solution with a personal dashboard.',
            'desc_title': 'Your Direct Path to More Students – Commission-Free',
            'desc_p1': 'In today’s digital world, online platforms and agencies are the first step for many tutors to find students. But this convenience comes at a price: high commissions that consume a significant portion of your hard-earned income, a lack of control over your own presentation, and no opportunity to build a personal brand. You are just one profile among many, dependent on the rules and algorithms of third parties.',
            'desc_p2': 'Jtutor was founded on the belief that there has to be a better way. Our mission is to give qualified tutors like you the tools to achieve full independence. We believe you deserve 100% of your income and should have the freedom to shape your business according to your own vision. Instead of paying monthly fees to platforms, you make a one-time investment in your own professional web presence – a digital home that belongs to you.',
            'desc_p3': 'We don’t offer complicated website builders or technical challenges. Our packages are "all-inclusive solutions." From a simple yet elegant web business card (the "Start" package) to a fully-equipped business platform with online booking and a personal dashboard (the "Expert" package), we take care of everything. Domain, hosting, design, technical maintenance, and support for a full year are always included. This allows you to focus on what you do best: teaching. Build your own brand, communicate directly with your students, and create a sustainable future for your tutoring business.',
            'faq_title': 'Frequently Asked Questions',
            'faq1_q': 'How is payment made?',
            'faq1_a': 'Payment is made securely via bank transfer to our company account. After our initial consultation and clarification of all details, you will receive an official invoice from us. Work on your project begins immediately after payment is received. This process ensures full transparency and security for both parties.',
            'faq2_q': 'What is included in the annual support?',
            'faq2_a': 'Our annual support is an all-inclusive package. It covers all technical necessities: the costs for the domain and hosting, fixing technical errors, regular security updates, and ensuring system compatibility. Additionally, minor content changes (up to 15 minutes of work, e.g., changing a phone number or swapping a photo) are also included.',
            'faq3_q': 'Can I expand my website later?',
            'faq3_a': 'Yes, absolutely. Your website is built with future growth in mind. Upgrading from a smaller to a larger package is possible at any time without issues. Furthermore, we can add completely new, custom features according to your wishes, such as integrating a payment system or a protected members-only area. Just contact us for a consultation.',
            'process_title': 'Our Work Process',
            'process1_title': 'Inquiry & Consultation',
            'process1_desc': 'You select a package and send an inquiry. We then contact you to discuss your goals, target audience, and design preferences in detail.',
            'process2_title': 'Design & Development',
            'process2_desc': 'We create a design concept and, after your approval, begin the technical implementation of your website.',
            'process3_title': 'Handover & Launch',
            'process3_desc': 'We present the finished website to you, make final adjustments, and put it online after your final approval.',
            'footer_copyright': 'All rights reserved.',
        }
    };

    // --- ЛОГИКА ПЕРЕКЛЮЧЕНИЯ ЯЗЫКА ---
    const langBtn = document.querySelector('.lang-btn');
    if (langBtn) {
        const setLanguage = (lang) => {
            document.documentElement.lang = lang;
            const elementsToTranslate = document.querySelectorAll('[data-translate-key]');
            elementsToTranslate.forEach(element => {
                const key = element.getAttribute('data-translate-key');
                if (translations[lang] && translations[lang][key]) {
                    element.innerHTML = translations[lang][key];
                }
            });
            if (translations[lang] && translations[lang]['page_title']) {
                document.title = translations[lang]['page_title'];
            }
        };

        langBtn.addEventListener('click', () => {
            const currentLang = document.documentElement.lang || 'de';
            const newLang = currentLang === 'de' ? 'en' : 'de';
            setLanguage(newLang);
        });

        // Устанавливаем язык по умолчанию при загрузке
        setLanguage(document.documentElement.lang || 'de');
    }

    // --- ЛОГИКА МОБИЛЬНОГО МЕНЮ (НОВАЯ ВЕРСИЯ) ---
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileNavPanel = document.getElementById('mobile-nav');
    const overlay = document.getElementById('overlay');
    const body = document.body;

    const openMenu = () => {
        mobileNavPanel.classList.add('is-open');
        overlay.classList.add('is-visible');
        body.classList.add('no-scroll');
    };

    const closeMenu = () => {
        mobileNavPanel.classList.remove('is-open');
        overlay.classList.remove('is-visible');
        body.classList.remove('no-scroll');
    };

    if (menuToggle && mobileNavPanel && closeMenuBtn && overlay) {
        menuToggle.addEventListener('click', openMenu);
        closeMenuBtn.addEventListener('click', closeMenu);
        overlay.addEventListener('click', closeMenu);

        // Закрытие меню по клику на любую из ссылок
        mobileNavPanel.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }
});