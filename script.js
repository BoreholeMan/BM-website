// script.js

document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const description = card.querySelector('.service-description');
            // Toggle visibility of the description
            description.classList.toggle('visible');
        });
    });
});