let splide;

document.addEventListener("DOMContentLoaded", function () {
  splide = new Splide("#afishaPhotoSlider .splide", {
    arrows: false,
    perPage: 2,
    type: "loop",
    pagination: true,
    keyboard: false,
    slideFocus: false,
  }).mount();

  splide.on("move", function () {
    var slides = document.querySelectorAll(
      "#afishaPhotoSlider .splide .splide__slide"
    );

    slides.forEach(function (slide) {
      slide.classList.add("is-visible");
    });
  });
});
