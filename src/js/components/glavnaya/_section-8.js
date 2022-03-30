// import anime from "../../vendor/anime.min";

// const section = document.querySelector(".chto-v-rezultate-section");

// const titleRegular = section.querySelector(".chto-v-rezultate__title");
// const bottomImg = section.querySelector(".chto-v-rezultate__img");

// const chtoVRezultateTimeline = anime
//   .timeline({ autoplay: false })
//   .add(
//     {
//       targets: titleRegular,
//       translateX: [0, "-100vw"],
//       duration: 400,
//       easing: "linear",
//     },
//     19000
//   )
//   .add(
//     {
//       targets: bottomImg,
//       bottom: ["-70%", "-20%"],
//       left: ["100%", "70%"],
//       duration: 200,
//       easing: "linear",
//     },
//     19200
//   );

// document.addEventListener("DOMContentLoaded", function () {
//   window.addEventListener("scroll", () => {
//     console.log(window.pageYOffset);
//     chtoVRezultateTimeline.seek(window.pageYOffset);
//   });
// });

let splide;
let prev, next;

document.addEventListener("DOMContentLoaded", function () {
  prev = document.querySelector("#section8__slider .previous-button");
  next = document.querySelector("#section8__slider .next-button");

  splide = new Splide("#section8__slider .splide", {
    arrows: false,
    gap: "5rem",
    perPage: 2,
    type: "loop",
    pagination: true,
    keyboard: false,
    slideFocus: false,
    breakpoints: {
      768: {
        perPage: 1,
        gap: "0rem",
      },
    },
  }).mount();

  splide.on("move", function () {
    var slides = document.querySelectorAll(
      "#section8__slider .splide .splide__slide"
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
