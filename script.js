
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;


if (themeToggleButton) {
    themeToggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        themeToggleButton.textContent = body.classList.contains('dark-theme') ? 'Tema Claro' : 'Tema Escuro';
    });
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Mensagem enviada!'); 
        contactForm.reset(); 
    });
}
