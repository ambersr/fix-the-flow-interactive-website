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

document.querySelector('.prev').addEventListener('click', () => {   // selecteer de knop 'vorige' en voer dan een click uit met een functie.
  if (currentslide > 0) {  // wanneer je niet op de eerste slide bent
    currentslide--;  // verlaag de waarde van de slide met 1
    updateCarousel();  // voer dan de functie updateCarousel uit
  }
});

document.querySelector('.next').addEventListener('click', () => {   // selecteer de knop 'volgende' en voer dan een click uit met een functie.
  if (currentslide < slides.length - 1) {  // wanneer de huidige slide kleiner is dan de totale slides - 1
    currentslide++; // verhoog de waarde van de slide met 1
    updateCarousel();  // voer dan de functie updateCarousel uit
  }
});

dots.forEach((dot, index) => {  // link elk puntje in de lijst aan de index
  dot.addEventListener('click', () => {  // wanneer je op het puntje klikt voer dan een functie uit
    currentslide = index;  // link de huidige slide aan de juiste index (Zoals slide 2 = index 1)
    updateCarousel(); // voer daarna de functie updatecarousel uit (hiermee update je slide)
  });
});