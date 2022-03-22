let actorSplide;
let actorPrev, actorNext;

const afishaActorSlider = document.querySelector("#afishaActorSlider");

if (afishaActorSlider !== null) {
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
}

let photoSplide;

const afishaPhotoSlider = document.querySelector("#afishaPhotoSlider ");

if (afishaPhotoSlider !== null) {
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
  });
}

const afishaFilter = document.querySelectorAll(
  ".afisha-list__filter .filter__selection"
);

if (afishaFilter !== null) {
  const getCurrentId = () => {
    let currentId = null;
    for (let i = 0; i < afishaFilter.length; i++) {
      if (afishaFilter[i].className.match(/\bis-active\b/)) {
        currentId = i;
      }
    }
    return currentId;
  };

  for (let i = 0; i < afishaFilter.length; i++) {
    afishaFilter[i].addEventListener("click", function () {
      const current = afishaFilter[getCurrentId()];
      const next = afishaFilter[i];

      current.classList.remove("is-active");
      next.classList.add("is-active");
    });
  }
}
