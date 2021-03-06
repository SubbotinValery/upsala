import Splide from "../vendor/splide.min";

let splide;
let prev, next;

document.addEventListener("DOMContentLoaded", function () {
  prev = document.querySelector("#chtoVRezultateSlider .previous-button");
  next = document.querySelector("#chtoVRezultateSlider .next-button");

  splide = new Splide("#chtoVRezultateSlider .splide", {
    gap: "3rem",
    arrows: false,
    perPage: 2,
    type: "loop",
    pagination: true,
    keyboard: false,
    slideFocus: false,
  }).mount();

  splide.on("move", function () {
    var slides = document.querySelectorAll(
      "#chtoVRezultateSlider .splide .splide__slide"
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
