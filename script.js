let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'flex'; // Menampilkan slide menggunakan Flexbox
            setTimeout(() => slide.style.opacity = 1, 50); // Fade in animasi
        } else {
            slide.style.display = 'none';
            slide.style.opacity = 0;
        }
    });
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0; // Reset ke slide pertama setelah selesai
    }
    showSlide(currentSlide);
}

function restartPresentation() {
    currentSlide = 0;
    showSlide(currentSlide);
}

// Tampilkan slide pertama saat pertama kali dibuka
window.onload = () => {
    showSlide(currentSlide);
};
