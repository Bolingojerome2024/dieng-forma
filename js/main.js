
  let currentIndex = 0;
  const slides = document.getElementById("slides");
  const totalImages = slides.children.length;

  function updateSlide() {
    slides.style.transform = `translateX(-${currentIndex * 500}px)`;
  }

  function next() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateSlide();
  }

  function prev() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateSlide();
  }

  // Optionnel : défilement automatique toutes les 3 secondes
  setInterval(next, 3000);

  // animation 3D 

  AOS.init();

// You can also pass an optional settings object
// below listed default settings

AOS.init({
  
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
