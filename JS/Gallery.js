let slideIndex = 1;
document.addEventListener("DOMContentLoaded", function() {
  showSlides(slideIndex);
});

// Next/previous controls
function moveSlide(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("photo-container")[0].getElementsByTagName("img");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        slides[i].style.opacity = 0; // Ensure all images are transparent before showing the next one
    }
    slides[slideIndex-1].style.display = "block";  
    setTimeout(() => { // Add a slight delay before starting the fade-in effect to ensure the image is loaded
      slides[slideIndex-1].style.opacity = 1;
    }, 5);
  }

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