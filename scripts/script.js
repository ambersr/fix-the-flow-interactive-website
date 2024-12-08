// Code voor openklappen hamburger menu in nav
const menuButton = document.querySelector("#menuButton"); // Selecteert de knop met het id 'menuButton'

const hetMenu = document.querySelector("#menu"); // Selecteert het menu-element met het id 'menu'

menuButton.addEventListener("click", toggleMenu); // Als je het menu openklikt dan roept hij 'toggleMenu' aan

function toggleMenu() { // Voegt of verwijdert de class 'open' van het menu-element 'hetMenu'
    hetMenu.classList.toggle("open"); // Dit zorgt ervoor dat het menu zichtbaar wordt of verbergt bij elke klik
}



// Carousel reviewkaartjes
const slides = document.querySelectorAll('.slide'); // link de aangemaakte variabele slides aan de class .slide
const dots = document.querySelectorAll('.dot');  // link de aangemaakte variabele dots aan de class dot
let currentSlide = 0; // De variabele currentSlide geeft aan dat de slide die op actief staat op 0 (1) begint.

const slidesContainer = document.querySelector('.slides');

// Sliden van de carousels
function updateCarousel() {
  slidesContainer.classList.remove('slide-0', 'slide-1', 'slide-2'); // Voeg hier meer klassen toe als je meer slides hebt

  slidesContainer.classList.add(`slide-${currentSlide}`);  // Voeg de klasse toe die overeenkomt met de huidige slide

  // Indicatoren
  dots.forEach((dot, index) => { // link elk puntje in de lijst aan de index
    dot.classList.toggle('active', index === currentSlide); // voeg een active toe als deze nog niet op de slide staat en link het huidige puntje aan de actieve slide.
  });

  // Pijltjes
  const prevButton = document.querySelector('.prev'); // de variabele prevButton verwijst naar de class .prev
  const nextButton = document.querySelector('.next');  // de variabele nextButton verwijst naar de class .next
  prevButton.disabled = currentSlide === 0;  // De knop 'vorige' wordt uitgeschakeld als de currentSlide 0 is, oftewel de eerste slide.
  nextButton.disabled = currentSlide === slides.length - 1;  // De knop 'volgende' wordt uitgeschakeld als als de currentSlide (slide) gelijk is aan de totaal aantal slides -1.
}

document.querySelector('.prev').addEventListener('click', () => {   // selecteer de knop 'vorige' en voer dan een click uit met een functie.
  if (currentSlide > 0) {  // wanneer je niet op de eerste slide bent
    currentSlide--;  // verlaag de waarde van de slide met 1
    updateCarousel();  // voer dan de functie updateCarousel uit
  }
});

document.querySelector('.next').addEventListener('click', () => {   // selecteer de knop 'volgende' en voer dan een click uit met een functie.
  if (currentSlide < slides.length - 1) {  // wanneer de huidige slide kleiner is dan de totale slides - 1
    currentSlide++; // verhoog de waarde van de slide met 1
    updateCarousel();  // voer dan de functie updateCarousel uit
  }
});

dots.forEach((dot, index) => {  // link elk puntje in de lijst aan de index
  dot.addEventListener('click', () => {  // wanneer je op het puntje klikt voer dan een functie uit
    currentSlide = index;  // link de huidige slide aan de juiste index (Zoals slide 2 = index 1)
    updateCarousel(); // voer daarna de functie updatecarousel uit (hiermee update je slide)
  });
});


document.addEventListener("DOMContentLoaded", () => {
  updateCarousel(); // Initial update wanneer DOM klaar is
})