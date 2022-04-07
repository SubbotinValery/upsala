document.addEventListener("DOMContentLoaded", function () {
  let komandaSplide;
  let komandaPrev, komandaNext;

  const licaCirkaSlider = document.querySelector("#licaCirkaSlider");
  if (licaCirkaSlider != null) {
    komandaPrev = document.querySelector("#licaCirkaSlider .previous-button");
    komandaNext = document.querySelector("#licaCirkaSlider .next-button");

    komandaSplide = new Splide("#licaCirkaSlider .splide", {
      gap: "3rem",
      arrows: false,
      perPage: 1,
      type: "loop",
      pagination: true,
      keyboard: false,
      slideFocus: false,
    }).mount();

    komandaSplide.on("move", function () {
      var slides = document.querySelectorAll(
        "#licaCirkaSlider .splide .splide__slide"
      );

      slides.forEach(function (slide) {
        slide.classList.add("is-visible");
      });
    });

    komandaPrev.addEventListener("click", function (e) {
      komandaSplide.go("<");
    });

    komandaNext.addEventListener("click", function (e) {
      komandaSplide.go(">");
    });
  }
});
