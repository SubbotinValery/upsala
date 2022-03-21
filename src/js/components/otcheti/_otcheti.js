let otchetiSplide;
let otchetiPrev, otchetiNext;

const otchetiSlider = document.querySelector("#otchetiSlider");

if (otchetiSlider !== null) {
  document.addEventListener("DOMContentLoaded", function () {
    otchetiPrev = document.querySelector("#otchetiSlider .previous-button");
    otchetiNext = document.querySelector("#otchetiSlider .next-button");

    otchetiSplide = new Splide("#otchetiSlider .splide", {
      gap: "3rem",
      arrows: false,
      perPage: 1,
      type: "loop",
      pagination: true,
      keyboard: false,
      slideFocus: false,
    }).mount();

    otchetiSplide.on("move", function () {
      var slides = document.querySelectorAll(
        "#otchetiSlider .splide .splide__slide"
      );

      slides.forEach(function (slide) {
        slide.classList.add("is-visible");
      });
    });

    otchetiPrev.addEventListener("click", function (e) {
      otchetiSplide.go("<");
    });

    otchetiNext.addEventListener("click", function (e) {
      otchetiSplide.go(">");
    });
  });
}

const otchetiNav = document.querySelectorAll(".otcheti__nav .nav__item");
const otchetiTypes = document.querySelectorAll(
  ".otcheti__block .otcheti__type"
);

if (otchetiNav !== null && otchetiTypes !== null) {
  const getCurrentId = () => {
    let currentId = null;
    for (let i = 0; i < otchetiNav.length; i++) {
      if (otchetiNav[i].className.match(/\bis-active\b/)) {
        currentId = i;
      }
    }
    return currentId;
  };

  const getScrollTarget = (currentId) => {
    let scrollTarget = null;
    if (otchetiNav[currentId].innerHTML.toLowerCase() === "все") {
      scrollTarget = otchetiTypes[0];
    } else {
      scrollTarget = otchetiTypes[currentId - 1];
    }
    return scrollTarget;
  };

  for (let i = 0; i < otchetiNav.length; i++) {
    otchetiNav[i].addEventListener("click", function () {
      const current = otchetiNav[getCurrentId()];
      const next = otchetiNav[i];

      current.classList.remove("is-active");
      next.classList.add("is-active");
      getScrollTarget(i).scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    });
  }
}
