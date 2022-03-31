// import anime from "../../vendor/anime.min";

// const section = document.querySelector(".chto-proishodit-section");

// const titleRegular = section.querySelector(
//   ".chto-proishodit__title > *:not(.italic)"
// );
// const titleOutline = section.querySelector(
//   ".chto-proishodit__title  > .italic"
// );

// const titleRegularSecondary = section.querySelector(
//   ".chto-proishodit-secondary__title > *:not(.italic)"
// );
// const titleOutlineSecondary = section.querySelector(
//   ".chto-proishodit-secondary__title  > .italic"
// );

// const chtoProishoditTimeline = anime
//   .timeline({ autoplay: false })
//   .add(
//     {
//       targets: titleRegular,
//       translateX: [0, "-100vw"],
//       duration: 400,
//       easing: "linear",
//     },
//     24700
//   )
//   .add(
//     {
//       targets: titleOutline,
//       translateX: [0, "100vw"],
//       duration: 400,
//       easing: "linear",
//     },
//     24700
//   )
//   .add(
//     {
//       targets: titleRegularSecondary,
//       translateX: [0, "-100vw"],
//       duration: 400,
//       easing: "linear",
//     },
//     25300
//   )
//   .add(
//     {
//       targets: titleOutlineSecondary,
//       translateX: [0, "100vw"],
//       duration: 400,
//       easing: "linear",
//     },
//     25300
//   );

// document.addEventListener("DOMContentLoaded", function () {
//   window.addEventListener("scroll", () => {
//     chtoProishoditTimeline.seek(window.pageYOffset);
//   });
// });

let splide;
let prev, next;

document.addEventListener("DOMContentLoaded", function () {
  prev = document.querySelector("#section11__slider .previous-button");
  next = document.querySelector("#section11__slider .next-button");

  splide = new Splide("#section11__slider .splide", {
    gap: "2rem",
    arrows: false,
    perPage: 3,
    type: "loop",
    pagination: true,
    keyboard: false,
    slideFocus: false,
    breakpoints: {
      1170: {
        perPage: 2,
        gap: "2rem",
      },
      790: {
        perPage: 1,
        gap: "0",
      },
    },
  }).mount();

  splide.on("move", function () {
    var slides = document.querySelectorAll(
      "#section11__slider .splide .splide__slide"
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
