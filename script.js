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

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('whole-nav');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#7ACAD2'; // Change color when scrolled
    } else {
        navbar.style.backgroundColor = 'transparent'; // Transparent when at top
    }
});

