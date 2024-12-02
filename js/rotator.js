let currentIndex = 0;
const images = ['images/banner-1.jpg', 'images/banner-4.jpeg', 'images/banner-7.jpg']; // Add your image paths here
const rotator = document.getElementById('rotating-banner');

function rotateBanner() {
    currentIndex = (currentIndex + 1) % images.length;
    rotator.src = images[currentIndex];
}

setInterval(rotateBanner, 3000); // Change image every 3 seconds
