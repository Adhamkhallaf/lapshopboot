// script.js
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    // Load the saved theme from localStorage or default to light
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.classList.add(`${currentTheme}-theme`);
    themeIcon.classList.add(currentTheme === 'light' ? 'fa-sun' : 'fa-moon');

    themeToggleButton.addEventListener('click', () => {
        const isLightTheme = body.classList.contains('light-theme');

        if (isLightTheme) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'light');
        }
    });
});
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-card');
    const card = document.getElementById('card');

    toggleButton.addEventListener('click', () => {
        if (card.style.display === 'none') {
            card.style.display = 'block';
            toggleButton.textContent = 'Hide Card';
        } else {
            card.style.display = 'none';
            toggleButton.textContent = 'Show Card';
        }
    });
});

