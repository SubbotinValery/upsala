import anime from "../../vendor/anime.min";

const section = document.querySelector(".about-section");

const jugglerWrapper = section.querySelector(".juggler__wrapper");

const starWrapper = section.querySelector(".star__wrapper");

const jumpers = document.querySelectorAll(".jumper__wrapper");
const jumper1 = jumpers[0];
const jumper2 = jumpers[1];

const aboutContent1 = section.querySelector(".about-content-1");
const aboutContent2 = section.querySelector(".about-content-2");
const aboutContent3 = section.querySelector(".about-content-3");

const aboutTimeline = anime
  .timeline({ autoplay: false })
  .add({
    delay: 2500,
    targets: jugglerWrapper,
    bottom: ["-50%", "40%"],
    left: ["25%", "25%"],
    translateX: ["-50%", "-50%"],
    translateY: ["50%", "50%"],
    scale: [0.8, 0.8],
    duration: 500,
    easing: "linear",
  })
  .add(
    {
      targets: aboutContent1,
      opacity: [0, 1],
      translateX: ["100%", "0%"],
      duration: 100,
      easing: "linear",
    },
    "-=300"
  )
  .add(
    {
      targets: aboutContent2,
      opacity: [0, 1],
      translateX: ["100%", "0%"],
      duration: 100,
      easing: "linear",
    },
    "+=500"
  )
  .add(
    {
      targets: jugglerWrapper,
      bottom: "-50%",
      duration: 500,
      easing: "linear",
    },
    4100
  )
  .add(
    {
      targets: jumper1,
      opacity: {
        value: [0, 1],
        duration: 100,
      },
      bottom: ["50%", "-50%"],
      right: ["60%", "60%"],
      translateX: ["50%", "50%"],
      translateY: ["50%", "50%"],
      scale: [0.15, 0.15],
      duration: 600,
      easing: "linear",
    },
    5400
  );

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", () => {
    aboutTimeline.seek(window.pageYOffset);
  });
});
