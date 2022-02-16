let photoSplide;

document.addEventListener("DOMContentLoaded", function () {
  splide = new Splide("#afishaPhotoSlider .splide", {
    arrows: false,
    perPage: 2,
    pagination: true,
    keyboard: false,
    slideFocus: false,
    breakpoints: {
      1024: {
        perPage: 1,
      },
    },
  }).mount();

  photoSplide.on("move", function () {
    var slides = document.querySelectorAll(
      "#afishaPhotoSlider .splide .splide__slide"
    );

    slides.forEach(function (slide) {
      slide.classList.add("is-visible");
    });
  });
});
