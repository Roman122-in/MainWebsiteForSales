
document.addEventListener('DOMContentLoaded', () => {
    const animatedItems = document.querySelectorAll('.tarife-visual-section .animated-item');
    if (animatedItems.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 }); // Запуск, когда видно 10%

        animatedItems.forEach(item => {
            observer.observe(item);
        });
    }

    // Отдельно для "слоганов" в том же блоке
    const visualTariffSection = document.querySelector('.tarife-visual-section');
    if (visualTariffSection) {
        const animatedSlogans = visualTariffSection.querySelectorAll('.animated-slogan');
        const sloganObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.2 }); // Старт при 20% видимости
        animatedSlogans.forEach(slogan => sloganObserver.observe(slogan));
    }

    /* ==============================
       2. Swiper-слайдер на главном блоке
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

