// let splide;

// document.addEventListener("DOMContentLoaded", function () {
//   splide = new Splide("#section12__slider .splide", {
//     arrows: false,
//     gap: "5rem",
//     perPage: 1,
//     type: "false",
//     pagination: true,
//     keyboard: false,
//     slideFocus: false,
//   }).mount();

//   splide.on("move", function () {
//     var slides = document.querySelectorAll(
//       "#section12__slider .splide .splide__slide"
//     );

//     slides.forEach(function (slide) {
//       slide.classList.add("is-visible");
//     });
//   });
// });

let splide;
let prev, next;

document.addEventListener("DOMContentLoaded", function () {
  prev = document.querySelector("#section12__slider .previous-button");
  next = document.querySelector("#section12__slider .next-button");

  splide = new Splide("#section12__slider .splide", {
    arrows: false,
    gap: "3rem",
    perPage: 1,
    type: "false",
    pagination: true,
    keyboard: false,
    slideFocus: false,
  }).mount();

  splide.on("move", function () {
    var slides = document.querySelectorAll(
      "#section12__slider .splide .splide__slide"
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
