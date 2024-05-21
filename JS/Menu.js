// Function to change the profile photo
function changeProfilePhoto() {
    const photo = document.getElementById('profilePhoto');
    // Ensure the path is correct and accessible
    photo.src = photo.src.includes('Foto/Profil.png') ? 'Foto/Alternative.png' : 'Foto/Profil.png';
}

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const moonIcon = document.getElementById('moonIcon');
    // Ensure the path is correct and accessible
    moonIcon.src = moonIcon.src.includes('Assets/moon1.png') ? 'Assets/moon.png' : 'Assets/moon1.png';
}

// Function to display a greeting based on the time of day
function displayGreeting() {
    const greetingElement = document.getElementById('greeting');
    const hour = new Date().getHours();
    const greeting = hour < 12 ? 'Good Morning, enjoy your day' : hour < 18 ? 'Good Afternoon, hope you have a good time' : 'Good Evening, dont forget to rest';
    greetingElement.textContent = `${greeting} My guest!`;
}

// Adding event listeners
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('profilePhoto').addEventListener('click', changeProfilePhoto);
    document.getElementById('toggleDarkMode').addEventListener('click', toggleDarkMode);
    displayGreeting();
});
