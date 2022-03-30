// import anime from "../../vendor/anime.min";

// const section = document.querySelector(".kulturnii-producti-section");

// const titleRegular = section.querySelector(
//   ".kulturnii-producti__title > *:not(.italic)"
// );
// const titleOutline = section.querySelector(
//   ".kulturnii-producti__title  > .italic"
// );

// const kulturniiProductiTimeline = anime
//   .timeline({ autoplay: false })
//   .add(
//     {
//       targets: titleRegular,
//       translateX: [0, "-100vw"],
//       duration: 400,
//       easing: "linear",
//     },
//     21000
//   )
//   .add(
//     {
//       targets: titleOutline,
//       translateX: [0, "100vw"],
//       duration: 400,
//       easing: "linear",
//     },
//     21000
//   );

// document.addEventListener("DOMContentLoaded", function () {
//   window.addEventListener("scroll", () => {
//     kulturniiProductiTimeline.seek(window.pageYOffset);
//   });
// });

let splide;
let prev, next;

document.addEventListener("DOMContentLoaded", function () {
  prev = document.querySelector("#section9__slider .previous-button");
  next = document.querySelector("#section9__slider .next-button");

  splide = new Splide("#section9__slider .splide", {
    arrows: false,
    gap: "3rem",
    perPage: 1,
    type: "loop",
    pagination: true,
    keyboard: false,
    slideFocus: false,
  }).mount();

  splide.on("move", function () {
    var slides = document.querySelectorAll(
      "#section9__slider .splide .splide__slide"
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
