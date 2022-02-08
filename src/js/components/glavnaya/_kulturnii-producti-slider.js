let splide;
let prev, next;

document.addEventListener("DOMContentLoaded", function () {
  prev = document.querySelector("#kulturniiProductiSlider .previous-button");
  next = document.querySelector("#kulturniiProductiSlider .next-button");

  splide = new Splide("#kulturniiProductiSlider .splide", {
    gap: "3rem",
    arrows: false,
    perPage: 1,
    type: "loop",
    pagination: true,
    keyboard: false,
    slideFocus: false,
  }).mount();

  splide.on("move", function () {
    var slides = document.querySelectorAll(
      "#kulturniiProductiSlider .splide .splide__slide"
    );

    slides.forEach(function (slide) {
      slide.classList.add("is-visible");
    });
  });

  prev.addEventListener("click", function (e) {
    splide.go("<");
  });

  next.addEventListener("click", function (e) {
    splide.go(">");
  });
});
