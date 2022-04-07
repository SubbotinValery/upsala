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

document.addEventListener("DOMContentLoaded", function () {
  let splide;
  let prev, next;
  const section9Slider = document.querySelector("#section9__slider");

  const section = document.querySelector(".section-9");
  const nextSection = document.querySelector(".section-10");
  const starWrapper = document.querySelector("#indexPage > .star__wrapper");

  if (section9Slider != null) {
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
  }

  if (section != null) {
    const section9Timeline = anime.timeline({ autoplay: false }).add({
      delay: window.pageYOffset + nextSection.getBoundingClientRect().top - 500,
      targets: starWrapper,
      opacity: 0,
      duration: 300,
      easing: "linear",
    });

    window.addEventListener("scroll", () => {
      section9Timeline.seek(window.pageYOffset);
    });
  }
});
