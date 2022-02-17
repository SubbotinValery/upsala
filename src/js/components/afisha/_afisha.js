let actorSplide;
let actorPrev, actorNext;

document.addEventListener("DOMContentLoaded", function () {
  actorPrev = document.querySelector("#afishaActorSlider .previous-button");
  actorNext = document.querySelector("#afishaActorSlider .next-button");

  actorSplide = new Splide("#afishaActorSlider .splide", {
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

  actorSplide.on("move", function () {
    var slides = document.querySelectorAll(
      "#afishaActorSlider .splide .splide__slide"
    );

    slides.forEach(function (slide) {
      slide.classList.add("is-visible");
    });
  });

  actorPrev.addEventListener("click", function (e) {
    actorSplide.go("<");
  });

  actorNext.addEventListener("click", function (e) {
    actorSplide.go(">");
  });

  const visibles = document.querySelectorAll(
    "#afishaActorSlider .splide .splide__slide.is-visible"
  );
});

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
