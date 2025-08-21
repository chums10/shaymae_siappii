const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const body = document.body;

sunIcon.addEventListener('click', () => {
    body.classList.add('dark-mode');
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'inline';
});

moonIcon.addEventListener('click', () => {
    body.classList.remove('dark-mode');
    sunIcon.style.display = 'inline';
    moonIcon.style.display = 'none';
});

function showSection(sectionId) {
    const cards = document.querySelectorAll('.section-card');
    cards.forEach(card => {
        card.style.display = 'none';
    });
    const section = document.getElementById(sectionId);
    if (section) section.style.display = 'block';
}
