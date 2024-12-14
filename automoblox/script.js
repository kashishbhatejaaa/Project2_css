// Carousel functionality
const prevButton = document.querySelector('.carousel .prev');
const nextButton = document.querySelector('.carousel .next');
const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel-image');

let currentIndex = 0;

function changeSlide(direction) {
    
    currentIndex = (currentIndex + direction + images.length) % images.length;

    
    images.forEach((img, index) => {
        img.classList.toggle('active', index === currentIndex); 
    });
    track.style.transform = `translateX(-${currentIndex * 100}%)`; 
}

// Event listeners for the previous and next buttons
prevButton.addEventListener('click', () => changeSlide(-1));
nextButton.addEventListener('click', () => changeSlide(1));

// Accordion functionality
function toggleAccordion(button) {
    const content = button.nextElementSibling;
    const arrow = button.querySelector('.arrow');
    
    // Toggle content visibility and arrow direction
    const isExpanded = content.style.display === "block";
    content.style.display = isExpanded ? "none" : "block";
    arrow.innerHTML = isExpanded ? '&#9660;' : '&#9650;'; 
}
