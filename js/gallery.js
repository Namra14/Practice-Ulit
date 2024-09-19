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



// For image clickable and zoommable
//Modal for Zoom in and Out
document.addEventListener("DOMContentLoaded", function() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close");
    let scale = 1;
  
    galleryItems.forEach(item => { 
      item.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        scale = 1;
        modalImg.style.transform = `scale(${scale})`;
      });
    });
  
    closeBtn.addEventListener('click', function() {
      modal.style.display = "none";
    });
  
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  
    modal.addEventListener('wheel', function(event) {
      event.preventDefault();
      if (event.deltaY < 0) {
        scale += 0.1;
      } else {
        scale -= 0.1;
      }
      modalImg.style.transform = `scale(${scale})`;
    });
  
    //Hold and Drag Image Effect
    modalImg.addEventListener('mousedown', function(event) {
      isDragging = true;
      startX = event.pageX - modal.offsetLeft;
      startY = event.pageY - modal.offsetTop;
      scrollLeft = modal.scrollLeft;
      scrollTop = modal.scrollTop;
  });
  
  modalImg.addEventListener('mouseup', function() {
      isDragging = false;
  });
  
  modalImg.addEventListener('mouseleave', function() {
      isDragging = false;
  });
  
  modalImg.addEventListener('mousemove', function(event) {
      if (!isDragging) return;
      event.preventDefault();
      const x = event.pageX - modal.offsetLeft;
      const y = event.pageY - modal.offsetTop;
      const walkX = x - startX;
      const walkY = y - startY;
      modal.scrollLeft = scrollLeft - walkX;
      modal.scrollTop = scrollTop - walkY;
  });

  // const text = document.querySelector("#gallery .text");
  // text.style.fontSize = "100px";
  });