let splide;
let prev, next;

document.addEventListener("DOMContentLoaded", function () {
  prev = document.querySelector("#chtoProishoditSlider .previous-button");
  next = document.querySelector("#chtoProishoditSlider .next-button");

  splide = new Splide("#chtoProishoditSlider .splide", {
    gap: "2rem",
    arrows: false,
    perPage: 3,
    type: "loop",
    pagination: true,
    keyboard: false,
    slideFocus: false,
  }).mount();

  splide.on("move", function () {
    var slides = document.querySelectorAll(
      "#chtoProishoditSlider .splide .splide__slide"
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
