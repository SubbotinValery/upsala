let partnerSplide;
let partnerPrev, partnerNext;

const partnerSlider = document.querySelector("#partnerSlider");

if (partnerSlider !== null) {
  document.addEventListener("DOMContentLoaded", function () {
    partnerPrev = document.querySelector("#partnerSlider .previous-button");
    partnerNext = document.querySelector("#partnerSlider .next-button");

    partnerSplide = new Splide("#partnerSlider .splide", {
      gap: "3rem",
      arrows: false,
      perPage: 1,
      type: "loop",
      pagination: true,
      keyboard: false,
      slideFocus: false,
    }).mount();

    partnerSplide.on("move", function () {
      var slides = document.querySelectorAll(
        "#partnerSlider .splide .splide__slide"
      );

      slides.forEach(function (slide) {
        slide.classList.add("is-visible");
      });
    });

    partnerPrev.addEventListener("click", function (e) {
      partnerSplide.go("<");
    });

    partnerNext.addEventListener("click", function (e) {
      partnerSplide.go(">");
    });
  });
}
