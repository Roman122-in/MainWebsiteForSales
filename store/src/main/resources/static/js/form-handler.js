document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const submitButton = this.querySelector('.btn-submit');
            const originalButtonText = submitButton.textContent;
            submitButton.textContent = 'Senden...';
            submitButton.disabled = true;

            const formData = new FormData(this);

            fetch(this.action, {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    submitButton.textContent = '✓ Gesendet!';
                    this.reset();
                } else {
                    submitButton.textContent = 'Fehler!';
                }
            })
            .catch(error => {
                console.error('Error:', error);
                submitButton.textContent = 'Fehler!';
            })
            .finally(() => {
                setTimeout(() => {
                    submitButton.textContent = originalButtonText;
                    submitButton.disabled = false;
                }, 3000);
            });
        });
    }
});