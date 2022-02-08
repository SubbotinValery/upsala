let splide;

document.addEventListener("DOMContentLoaded", function () {
  splide = new Splide("#nashaIstoriaSlider .splide", {
    arrows: false,
    perPage: 1,
    type: "false",
    pagination: true,
    keyboard: false,
    slideFocus: false,
  }).mount();

  splide.on("move", function () {
    var slides = document.querySelectorAll(
      "#nashaIstoriaSlider .splide .splide__slide"
    );

    slides.forEach(function (slide) {
      slide.classList.add("is-visible");
    });
  });
});
