// const prevGalBtn = document.querySelector(".gal-carousel-control-prev");
// const nextGalBtn = document.querySelector(".gal-carousel-control-next");
// const galInner = document.querySelector(".gal-carousel-inner");
// const galItems = document.querySelectorAll(".gal-carousel-item");
// let currentGalIndex = 0;

// // Set the width of the inner carousel dynamically based on the number of items
// galInner.style.width = `${galItems.length * 100}%`;

// const updateGalCarousel = () => {
//     // Calculate the translation based on the current index and the number of items
//     galInner.style.transform = `translateX(-${currentGalIndex * (100 / galItems.length)}%)`;
// };

// // Next button functionality
// nextGalBtn.addEventListener("click", () => {
//     currentGalIndex = (currentGalIndex + 1) % galItems.length;
//     updateGalCarousel();
// });

// // Previous button functionality
// prevGalBtn.addEventListener("click", () => {
//     currentGalIndex = (currentGalIndex - 1 + galItems.length) % galItems.length;
//     updateGalCarousel();
// });

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function updateSlider() {
    const offset = -currentSlide * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

function changeSlide(step) {
    currentSlide += step;

    if (currentSlide < 0) {
        currentSlide = 0;
    } else if (currentSlide >= totalSlides) {
        currentSlide = totalSlides - 1;
    }

    updateSlider();
}

// Initialize slider position
updateSlider();

