// Carousel reviewkaartjes

const slides = document.querySelectorAll('.slide'); // link de aangemaakte variabele slides aan de class .slide
const dots = document.querySelectorAll('.dot');  // link de aangemaakte variabele dots aan de class dot
let currentslide = 0; // De variabele currentslide geeft aan dat de slide die op actief staat op 0 (1) begint.

// Sliden van de carousels
function updateCarousel() {
  document.querySelector('.slides').style.transform = `translateX(-${currentslide * 100}%)`; // Als bijvoorbeeld de currentslide 1 is, wordt de container 100% naar links verschoven zodat de tweede slide zichtbaar wordt.

  // Indicatoren
  dots.forEach((dot, index) => { // link elk puntje in de lijst aan de index
    dot.classList.toggle('active', index === currentslide); // voeg een active toe als deze nog niet op de slide staat en link het huidige puntje aan de actieve slide.
  });

  // Pijltjes
  const prevButton = document.querySelector('.prev'); // de variabele prevButton verwijst naar de class .prev
  const nextButton = document.querySelector('.next');  // de variabele nextButton verwijst naar de class .next
  prevButton.disabled = currentslide === 0;  // De knop 'vorige' wordt uitgeschakeld als de currentslide 0 is, oftewel de eerste slide.
  nextButton.disabled = currentslide === slides.length - 1;  // De knop 'volgende' wordt uitgeschakeld als als de currentslide (slide) gelijk is aan de totaal aantal slides -1.
}
