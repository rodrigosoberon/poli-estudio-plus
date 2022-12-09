let slideIndex = 0;

showSlides();

// * Función para slideShow
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slideshow__slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); //? Ajustar tiempo de slideShow
}