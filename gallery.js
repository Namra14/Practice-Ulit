const prevGalBtn = document.querySelector(".gal-carousel-control-prev");
const nextGalBtn = document.querySelector(".gal-carousel-control-next");
const galInner = document.querySelector(".gal-carousel-inner");
const galItems = document.querySelectorAll(".gal-carousel-item");
let currentGalIndex = 0;

const updateGalCarousel = () => {
    const totalItems = galItems.length;
    galInner.style.transform = `translateX(-${currentGalIndex * 100}%)`;
};

// Next button functionality
nextGalBtn.addEventListener("click", () => {
    currentGalIndex = (currentGalIndex + 1) % galItems.length;
    updateGalCarousel();
});

// Previous button functionality
prevGalBtn.addEventListener("click", () => {
    currentGalIndex = (currentGalIndex - 1 + galItems.length) % galItems.length;
    updateGalCarousel();
});

