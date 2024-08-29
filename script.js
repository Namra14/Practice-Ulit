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


// MUSIKA SLIDER
const musikaContainer = document.querySelector(".musika-container");
const musikaControlsContainer = document.querySelector(".musika-controls");
const musikaControls = ["previous", "next"];
const musikaItems = document.querySelector(".musika-item");

class Carousel{
    constructor(container, items, controls){
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items]; 
    }
    updateMusika(){
        this.carouselArray.forEach(el => {
            el.classList.remove("musika-item1");
            el.classList.remove("musika-item2");
            el.classList.remove("musika-item3");
            el.classList.remove("musika-item4");
            el.classList.remove("musika-item5");
            el.classList.remove("musika-item6");
            el.classList.remove("musika-item7");
            el.classList.remove("musika-item8");
        });

        this.carouselArray.slice(0, 8).forEach((el, i) => {
            el.classList.add(`musika-item-${i+1}`);
        });
    }

    setCurrentState(direction){
        if (direction.className == "musika-controls-previous"){
            this.carouselArray.unshift(this.carouselArray.pop());
        }else{
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateMusika();
    }

    setControls(){
        this.carouselControls.forEach(control => {
            musikaControlsContainer.appendChild(document.createElement("button")).className = `musika-controls-${control}`;
            document.querySelector(`.musika-controls-${control}`).innerText = control;
        });
    }

    useControls(){
        const triggers = [...musikaControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener("click", e => {
                e.preventDefault();
                this.setCurrentState(control);
            });
            
        });
    }
}

const exampleCarousel = new Carousel(musikaContainer, musikaItems, musikaControls);

exampleCarousel.setControls();
exampleCarousel.useControls();
// document.addEventListener("DOMContentLoaded", () =>{
//     const logo = document.querySelector(".logo");

//     logo.addEventListener("mouseover", () => {
//         if(event.target === logo){
//             logo.style.backgroundColor = "black";    
//         }
//     });

//     logo.addEventListener("mouseout", () => {
//             logo.style.backgroundColor = "transparent"; 
//     });

// });

