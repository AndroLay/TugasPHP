function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const moonIcon = document.getElementById('moonIcon');
    // Toggle the moon icon based on the dark mode status
    moonIcon.src = document.body.classList.contains('dark-mode') ? 'Assets/moon.png' : 'Assets/moon1.png';
}

document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('toggleDarkMode');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
});