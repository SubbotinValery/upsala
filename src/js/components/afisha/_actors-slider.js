let splide;
let prev, next;

document.addEventListener("DOMContentLoaded", function () {
  prev = document.querySelector("#afishaActorSlider .previous-button");
  next = document.querySelector("#afishaActorSlider .next-button");

  splide = new Splide("#afishaActorSlider .splide", {
    arrows: false,
    perPage: 2,
    type: "loop",
    pagination: true,
    keyboard: false,
    slideFocus: false,
    breakpoints: {
      1024: {
        perPage: 1,
      },
    },
  }).mount();

  splide.on("move", function () {
    var slides = document.querySelectorAll(
      "#afishaActorSlider .splide .splide__slide"
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

  const visibles = document.querySelectorAll(
    "#afishaActorSlider .splide .splide__slide.is-visible"
  );
});
