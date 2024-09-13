// NAVBAR SCROLL COLOR
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('whole-nav');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#7ACAD2'; // Change color when scrolled
    } else {
        navbar.style.backgroundColor = 'transparent'; // Transparent when at top
    }
});

// ABOUT SLIDER
const $next = document.querySelector(".next");
const $prev = document.querySelector(".prev");

$next.addEventListener("click", () => {
        const items = document.querySelectorAll(".item");
        document.querySelector(".slide").appendChild(items[0]);
    });

$prev.addEventListener("click", () => {
        const items = document.querySelectorAll(".item");
        document.querySelector(".slide").prepend(items[items.length - 1]);
    });




// NAVBAR RESPONSIVE ICON
const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector(".nav");

menuIcon.addEventListener("click", () => {
    nav.classList.toggle("active");
});


// MUSIC SLIDER
const musikaNext = document.querySelector(".musika-next");
const musikaPrev = document.querySelector(".musika-prev");

musikaNext.addEventListener("click", () => {
    const items = document.querySelectorAll(".musika-item");
    document.querySelector(".musika-slider").appendChild(items[0]);
});

musikaPrev.addEventListener("click", () => {
    const items = document.querySelectorAll(".musika-item");
    document.querySelector(".musika-slider").prepend(items[items.length - 1]);
});

// Hover effect on music slider
function updateMiddleItem() {
    let items = document.querySelectorAll(".musika-item");
    let slider = document.querySelector(".musika-slider");
    let middleIndex = Math.floor(items.length / 2); // Index of the middle item

    items.forEach((item, index) => {
        // Check if this item is the middle one
        if (index === middleIndex) {
            item.classList.add("middle-item");
        } else {
            item.classList.remove("middle-item");
        }
    });
}

document.querySelectorAll(".musika-item").forEach(item => {
    let overlay = item.querySelector(".overlay");

    item.addEventListener("mouseover", function() {
        if (item.classList.contains("middle-item")) {
            overlay.style.background = "rgba(0, 0, 0, 0.5)"; // Semi-transparent black
            overlay.style.opacity = "1"; // Show overlay
        }
    });

    item.addEventListener("mouseout", function() {
        if (item.classList.contains("middle-item")) {
            overlay.style.background = "rgba(0, 0, 0, 0)"; // Transparent
            overlay.style.opacity = "0"; // Hide overlay
        }
    });
});

// Call updateMiddleItem to initialize
updateMiddleItem();

// Example function to update middle item if slider changes, such as on navigation
function updateSlider() {
    // Your existing code to update the slider, then call:
    updateMiddleItem();
}

// Add event listeners for your slider controls
document.querySelector(".musika-next").addEventListener("click", function() {
    // Your code to move the slider, then:
    updateSlider();
});

document.querySelector(".musika-prev").addEventListener("click", function() {
    // Your code to move the slider, then:
    updateSlider();
});


// VIDEO SLIDER
const prevButton = document.querySelector('.carousel-control-prev');
const nextButton = document.querySelector('.carousel-control-next');
const carouselInner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

const updateCarousel = () => {
    const totalItems = items.length;
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
};

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
});


// GALLERY SLIDER
const prevGalBtn = document.querySelector(".gal-carousel-control-prev");
const nextGalBtn = document.querySelector(".gal-carousel-control-next");
const galInner = document.querySelector(".gal-carousel-inner");
const galItems = document.querySelectorAll(".gal-carousel-item");
let currentGalIndex = 0;

const updateGalCarousel = () => {
    const totalGalItems = galItems.length;
    galInner.style.transform = `translateX(-${currentGalIndex * 100}%)`;
};

nextGalBtn.addEventListener("click", () =>{
    currentGalIndex = (currentGalIndex + 1) % galItems.length;
    updateGalCarousel();
});

prevGalBtn.addEventListener("click", () => {
    currentGalIndex = (currentGalIndex - 1 + galItems.length) % galItems.length;
    updateGalCarousel();
});




